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

  isFirstStepCompleted: boolean = false;
  isSecondStepCompleted: boolean = false;
  isThirdStepCompleted: boolean = false;

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

    this.accountService.firstStep$.subscribe({
      next: response => this.isFirstStepCompleted = response
    });

    this.accountService.secondStep$.subscribe({
      next: response => this.isSecondStepCompleted = response
    });
    
  }

  firstStepCompleted(stepper: MatStepper){
    this.accountService.firstStepSource.next(true);
    console.log(this.model);
    this.cdr.detectChanges();
    stepper.next();

  }
  secondStepCompleted(stepper: MatStepper){
    this.accountService.secondStepSource.next(true);
    console.log(this.model);
    this.cdr.detectChanges();
    stepper.next();
  }
  registerUser(){
this.isThirdStepCompleted = true;
console.log(this.model);
  }

  hidePassword() {
    this.hide = !this.hide;
  }
  hideRepeatPassword() {
    this.hide2 = !this.hide2;
  }
}
