import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { ThemeService } from '../../_service/theme.service';
import { LoginUserDto } from '../../_models/login-user-dto';
import { AccountService } from '../../_service/account.service';
import { Router } from '@angular/router';
import { GuineaPigService } from 'src/app/_service/guinea-pig.service';
import { BaseComponent } from 'src/app/_shared/base.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent extends BaseComponent implements OnInit{

  //TODO - change type property to button on form, change name click event or remove this method.

  currentTheme: boolean | undefined = undefined;
  hidePassword = true;
  override cloudText: string = "Hej, na co czekasz? Zaloguj się! Chrum chrum!"
  model: LoginUserDto = new LoginUserDto();

  constructor(private theme: ThemeService, guineaPigService: GuineaPigService, private cd: ChangeDetectorRef, private accountService: AccountService, private router: Router){
    super(guineaPigService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.setTheme();
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
