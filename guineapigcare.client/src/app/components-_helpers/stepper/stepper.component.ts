import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { RegisterUserDto } from 'src/app/_models/register-user-dto';
import { AccountService } from 'src/app/_service/account.service';
import { GuineaPigService } from 'src/app/_service/guinea-pig.service';
import { ThemeHelper } from 'src/app/_service/themeHelper.service';
import { BaseComponent } from 'src/app/_shared/base.component';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent extends BaseComponent implements OnInit {
  backgroundUrl: string = 'assets/images/backgrounds/no-login/register.jpg';
  override cloudText: string = 'Stwórz konto i odblokuj wszystkie funkcje!';

  hide: boolean = true;
  hide2: boolean = true;
  model: RegisterUserDto = new RegisterUserDto();

  isCorrectEmail: boolean = false;
  isCorrectPassword: boolean = false;
  isFirstStepCompleted: boolean = false;
  isSecondStepCompleted: boolean = false;

  constructor(
    guineaPigService: GuineaPigService,
    public themeHelper: ThemeHelper,
    public accountService: AccountService,
    private cdr: ChangeDetectorRef
  ) {
    super(guineaPigService);
  }
  override ngOnInit(): void {
    super.ngOnInit();
    this.themeHelper.setTheme();
    this.themeHelper.setBackground(this.backgroundUrl);
  }

  checkEmailAndPassword(stepper: MatStepper) {

    this.isFirstStepCompleted = true;

    this.isCorrectEmail = this.validateEmail();
    this.isCorrectPassword = this.validatePassword();

    if(!this.isCorrectEmail || !this.isCorrectPassword){
      this.model = new RegisterUserDto();
    }

    if (this.isCorrectEmail && this.isCorrectPassword) {
      this.cdr.detectChanges();
      stepper.next();
    }
  }

  validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.model.email)) {
      console.log('Podaj poprawny adres e-mail');
      return false;
    }
    return true;
  }

  validatePassword() {
    if (this.model.password !== this.model.repeatPassword) {
      console.log('Podane hasła muszą być jednakowe');
      return false;
    }
    if (this.model.password.length < 5) {
      console.log('Hasło musi składać się z conajmniej 5 znaków');
      return false;
    }

    return true;
  }

  checkPersonalInformation(stepper: MatStepper) {
    this.isSecondStepCompleted = true;
    this.cdr.detectChanges();
    stepper.next();
  }
  registerUser() {
    console.log(this.model);
  }

  hidePassword() {
    this.hide = !this.hide;
  }
  hideRepeatPassword() {
    this.hide2 = !this.hide2;
  }
}
