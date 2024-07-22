import { Component, OnInit } from '@angular/core';
import { ChangePasswordDto } from 'src/app/_models/change-password-dto';
import { AccountService } from 'src/app/_service/account.service';
import { jwtDecode } from 'jwt-decode';
import { ThemeService } from 'src/app/_service/theme.service';

@Component({
  selector: 'app-user-change-password',
  templateUrl: './user-change-password.component.html',
  styleUrls: ['./user-change-password.component.css'],
})
export class UserChangePasswordComponent implements OnInit{
  model: ChangePasswordDto = new ChangePasswordDto();
  token: any;
  email: string = "";
  currentTheme: boolean | undefined = undefined;

  constructor(private accountService: AccountService, private theme: ThemeService) {}
  ngOnInit(): void {
    this.getToken();
    this.setTheme();
  }
  setTheme(){
    this.theme.isLightTheme$.subscribe({
      next: response => {
        this.currentTheme = response,
        console.log("login " + this.currentTheme)
      },
      error: error => console.log(error)
    });
  }
  getToken() {
    this.token = localStorage.getItem('token');

    var decodedToken: any = jwtDecode(this.token);
    console.log(decodedToken);

    this.email = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
    console.log(this.email)
  }

  changePassword(model: ChangePasswordDto) {

    model.email = this.email;
    console.log(model);
    this.accountService.changePassword(this.model).subscribe({
      next: response => {
        console.log(response)
      },
      error: error => console.log(error)
    });
  }
}
