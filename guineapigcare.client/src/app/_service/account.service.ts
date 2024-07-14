import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUserDto } from '../_models/register-user-dto';
import { environment } from '../_environments/environment_prod';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { LoginUserDto } from '../_models/login-user-dto';

@Injectable({
  providedIn: 'root',
})
export class AccountService {

  currentUserSource = new BehaviorSubject<string | null>(null);
  currentUser$ = this.currentUserSource.asObservable();
  token: string | null= "";

  constructor(public http: HttpClient) {
    this.setUser();
  }
  setUser() {
    this.token = localStorage.getItem('token');
    if(this.token != null){
      this.currentUserSource.next(this.token);
    }
  }

  registerUser(registerUserDto: RegisterUserDto): Observable<RegisterUserDto> {
    return this.http.post<RegisterUserDto>(
      environment.apiUrl + 'account/register',
      registerUserDto
    );
  }
  login(loginUserDto: LoginUserDto){
    return this.http.post<any>(environment.apiUrl + 'account/login', loginUserDto).pipe(
      map((response) => {
        if(response.message){
          this.token = response.message;
          console.log(this.token + "token")
        }
        if (this.token) {
          localStorage.setItem('token', this.token);
          this.currentUserSource.next(this.token);
        }
      })
    )
  }
  logout(){
    localStorage.removeItem('token');
    this.currentUserSource.next(null);
  }
}
