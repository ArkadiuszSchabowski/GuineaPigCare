import { Component, OnInit} from '@angular/core';
import { GuineaPigService } from '../../_service/guinea-pig.service';
import { AccountService } from '../../_service/account.service';
import { RegisterUserDto } from '../../_models/register-user-dto';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/_shared/base.component';
import { ThemeHelper } from 'src/app/_service/themeHelper.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent extends BaseComponent implements OnInit {
  hide: boolean = true;
  hide2: boolean = true;
  override cloudText: string = 'Stwórz konto i odblokuj wszystkie funkcje!';
  model: RegisterUserDto = new RegisterUserDto();

  constructor(
    public themeHelper: ThemeHelper,
    guineaPigService: GuineaPigService,
    public accountService: AccountService,
    private router: Router
  ) {
    super(guineaPigService);
  }
  override ngOnInit(): void {
    super.ngOnInit();
    this.themeHelper.setTheme();
  }

  registerUser() {
    this.accountService.registerUser(this.model).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigateByUrl('/login');
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  hidePassword() {
    this.hide = !this.hide;
  }
  hideRepeatPassword() {
    this.hide2 = !this.hide2;
  }
}
