import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUserDto } from '../_models/register-user-dto';
import { environment } from '../_environments/environment_prod';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { LoginUserDto } from '../_models/login-user-dto';
import { ChangePasswordDto } from '../_models/change-password-dto';

@Injectable({
  providedIn: 'root',
})
export class AccountService {

  baseUrl = environment.apiUrl;

  currentUserSource = new BehaviorSubject<string | null>(null);
  currentUser$ = this.currentUserSource.asObservable();
  token: string | null= "";

  firstStepSource = new BehaviorSubject<boolean>(false);
  firstStep$ = this.firstStepSource.asObservable();

  secondStepSource = new BehaviorSubject<boolean>(false);
  secondStep$ = this.secondStepSource.asObservable();

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
    return this.http.post<RegisterUserDto>(this.baseUrl + 'account/register',registerUserDto);
  }
  
  login(loginUserDto: LoginUserDto){
    return this.http.post<any>(this.baseUrl + 'account/login', loginUserDto).pipe(
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
  changePassword(changePasswordDto: ChangePasswordDto){
    return this.http.post<ChangePasswordDto>(this.baseUrl + "account/change-password", changePasswordDto)
  }
}
