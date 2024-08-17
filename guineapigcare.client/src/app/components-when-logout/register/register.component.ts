import { ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { GuineaPigService } from '../../_service/guinea-pig.service';
import { AccountService } from '../../_service/account.service';
import { RegisterUserDto } from '../../_models/register-user-dto';
import { BaseComponent } from 'src/app/_shared/base.component';
import { ThemeHelper } from 'src/app/_service/themeHelper.service';
import { ValidateService } from 'src/app/_service/validate.service';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent extends BaseComponent implements OnInit {
  backgroundUrl: string = 'assets/images/backgrounds/no-login/register.jpg';
  override cloudText: string = 'Stwórz konto i odblokuj wszystkie funkcje!';

  hide: boolean = true;
  hide2: boolean = true;
  model: RegisterUserDto = new RegisterUserDto();

  isFirstStepCompleted: boolean = false;
  isSecondStepCompleted: boolean = false;

  isCorrectEmail: boolean = false;
  isCorrectPassword: boolean = false;
  isPersonalInformation: boolean = false;

  constructor(
    guineaPigService: GuineaPigService,
    public themeHelper: ThemeHelper,
    public accountService: AccountService,
    private cdr: ChangeDetectorRef,
    private validateService: ValidateService
  ) {
    super(guineaPigService);
  }
  override ngOnInit(): void {
    super.ngOnInit();
    this.themeHelper.setTheme();
    this.themeHelper.setBackground(this.backgroundUrl);
  }

  checkEmailAndPassword(stepper: MatStepper) {
    
    this.isCorrectEmail = this.validateService.validateEmail(this.model.email);
    
    if(this.isCorrectEmail){
      this.isCorrectPassword = this.validateService.validatePasswordRegister(this.model);
    }
    
    if(!this.isCorrectEmail){
      this.model = new RegisterUserDto();
    }
    if(!this.isCorrectPassword){
      this.model.password = "";
      this.model.repeatPassword = "";
    }
    
    if (this.isCorrectEmail && this.isCorrectPassword) {
      this.isFirstStepCompleted = true;
      this.cdr.detectChanges();
      stepper.next();
    }
  }

  checkPersonalInformation(stepper: MatStepper) {

    this.isPersonalInformation = this.validateService.validatePersonalInformationRegister(this.model)

    if(this.isPersonalInformation){
      this.isSecondStepCompleted = true;
      this.cdr.detectChanges();
      stepper.next();
    }
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