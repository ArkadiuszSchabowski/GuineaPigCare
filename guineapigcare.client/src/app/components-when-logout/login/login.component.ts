import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { ThemeService } from '../../_service/theme.service';
import { GuineapigService } from '../../_service/guineapig.service';
import { LoginUserDto } from '../../_models/login-user-dto';
import { AccountService } from '../../_service/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit{

  currentTheme: boolean | undefined = undefined;
  hidePassword = true;
  cloudText: string = "Hej, na co czekasz? Zaloguj się! Chrum chrum!"
  model: LoginUserDto = new LoginUserDto();

  constructor(private theme: ThemeService, private guineaPigService: GuineapigService, private cd: ChangeDetectorRef, private accountService: AccountService, private router: Router){

  }

  ngOnInit(): void {

    this.setTheme();
    this.setCloudText();

  }
  setCloudText() {
    this.guineaPigService.setCloudText(this.cloudText);
  }

  clickEvent(event: MouseEvent) {
    this.hidePassword =!this.hidePassword
    event.stopPropagation();
  }

  setTheme(){
    this.theme.isLightTheme$.subscribe({
      next: response => {
        this.currentTheme = response,
        this.cd.markForCheck(),
        console.log("login " + this.currentTheme)
      },
      error: error => console.log(error)
    });
  }
  login(){
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response)
        this.router.navigateByUrl("/");
      },
      error: error => console.log(error)  
    })
  }
}
