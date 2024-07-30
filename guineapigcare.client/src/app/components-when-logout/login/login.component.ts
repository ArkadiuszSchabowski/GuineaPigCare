import { ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { LoginUserDto } from '../../_models/login-user-dto';
import { AccountService } from '../../_service/account.service';
import { Router } from '@angular/router';
import { GuineaPigService } from 'src/app/_service/guinea-pig.service';
import { BaseComponent } from 'src/app/_shared/base.component';
import { ThemeHelper } from 'src/app/_service/themeHelper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent extends BaseComponent implements OnInit{

  //TODO - change type property to button on form, change name click event or remove this method.

  hidePassword = true;
  override cloudText: string = "Hej, na co czekasz? Zaloguj się! Chrum chrum!"
  model: LoginUserDto = new LoginUserDto();

  constructor(guineaPigService: GuineaPigService, private accountService: AccountService, private router: Router, public themeHelper: ThemeHelper){
    super(guineaPigService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.themeHelper.setTheme();
  }

  clickEvent(event: MouseEvent) {
    this.hidePassword =!this.hidePassword
    event.stopPropagation();
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
