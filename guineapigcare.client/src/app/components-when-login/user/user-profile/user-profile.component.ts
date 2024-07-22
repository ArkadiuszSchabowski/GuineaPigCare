import { Component, OnInit } from '@angular/core';
import {jwtDecode} from 'jwt-decode';
import { UserDto } from 'src/app/_models/user-dto';
import { ThemeService } from 'src/app/_service/theme.service';
import { UserService } from 'src/app/_service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  email: string = '';
  model: UserDto | undefined= undefined;
  currentTheme: boolean | undefined = undefined;

  constructor(public userService: UserService, private theme: ThemeService) {}

  ngOnInit(): void {
    this.getEmailFromToken();
    this.setTheme();
  }
  setTheme() {
    this.theme.isLightTheme$.subscribe({
      next: response => this.currentTheme = response,
      error: error => console.log(error)
    })
  }

  getEmailFromToken() {
      var token: any = localStorage.getItem('token');
  
      var decodedToken: any = jwtDecode(token);
  

        this.email = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
  
        this.getUserInformation(this.email);
    } 
  
  getUserInformation(email: string) {
    this.userService.getUserInformation(email).subscribe({
      next: response => {
        this.model = response;
      },
      error: error => console.log(error)
    })
  }
}
