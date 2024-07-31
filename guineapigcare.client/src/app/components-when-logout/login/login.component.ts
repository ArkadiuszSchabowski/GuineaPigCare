import { Component, OnInit} from '@angular/core';
import { GuineaPigService } from '../../_service/guinea-pig.service';
import { AccountService } from '../../_service/account.service';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/_shared/base.component';
import { ThemeHelper } from 'src/app/_service/themeHelper.service';
import { LoginUserDto } from 'src/app/_models/login-user-dto';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends BaseComponent implements OnInit {

  override backgroundUrl: string = "assets/images/backgrounds/no-login/login.jpg"
  override cloudText: string = 'Stwórz konto i odblokuj wszystkie funkcje!';

  hide: boolean = true;
  model: LoginUserDto = new LoginUserDto();

  constructor(
    guineaPigService: GuineaPigService,
    public themeHelper: ThemeHelper,
    public accountService: AccountService,
    private router: Router
  ) {
    super(guineaPigService);
  }
  override ngOnInit(): void {
    super.ngOnInit();
    this.themeHelper.setTheme();
  }

  login(){
    this.accountService.login(this.model)
    .pipe(
      finalize(() => {
        this.model = new LoginUserDto();
      })
    )
    .subscribe({
      next: response => {
        this.router.navigateByUrl("/");
      },
      error: error => console.log(error)
    })
  };

  hidePassword() {
    this.hide = !this.hide;
  };
}