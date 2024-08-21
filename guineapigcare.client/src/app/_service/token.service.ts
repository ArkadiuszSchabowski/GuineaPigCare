import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  
  getEmailFromToken(): string {

    var token: any = localStorage.getItem('token');
  
      var decodedToken: any = jwtDecode(token);

      var email: string

        email = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
        return email;
  }
}
