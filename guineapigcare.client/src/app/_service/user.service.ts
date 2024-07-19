import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../_environments/environment_prod';
import { Observable } from 'rxjs';
import { UserDto } from '../_models/user-dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = environment.apiUrl;
  
  constructor(private http: HttpClient) { 

  }
  getUserInformation(email: string) : Observable<UserDto>{
    return this.http.post<UserDto>(this.baseUrl + "user", {email})
  }
}
