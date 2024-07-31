import { Component, OnInit } from '@angular/core';
import {jwtDecode} from 'jwt-decode';
import { UserDto } from 'src/app/_models/user-dto';
import { GuineaPigService } from 'src/app/_service/guinea-pig.service';
import { ThemeService } from 'src/app/_service/theme.service';
import { UserService } from 'src/app/_service/user.service';
import { BaseComponent } from 'src/app/_shared/base.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent extends BaseComponent implements OnInit {

  override backgroundUrl: string = "assets/images/user/profile.jpg"
  override cloudText: string = "Witaj na swoim profilu!"

  email: string = '';
  model: UserDto | undefined= undefined;
  currentTheme: boolean | undefined = undefined;

  constructor(public userService: UserService, private theme: ThemeService, guineaPigService: GuineaPigService) {
    super(guineaPigService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
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
