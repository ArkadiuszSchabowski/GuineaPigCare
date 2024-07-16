import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ThemeService } from '../../_service/theme.service';
import { GuineapigService } from '../../_service/guineapig.service';
import { AccountService } from '../../_service/account.service';
import { RegisterUserDto } from '../../_models/register-user-dto';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  hide: boolean = true;
  hide2: boolean = true;
  currentTheme: boolean | undefined = undefined;
  cloudText: string = 'Stwórz konto i odblokuj wszystkie funkcje!';
  model: RegisterUserDto = new RegisterUserDto();

  @ViewChild('ngForm') ngForm!: NgForm;

  constructor(
    public theme: ThemeService,
    private cd: ChangeDetectorRef,
    private guineaPigService: GuineapigService,
    public accountService: AccountService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.setTheme();
    this.setCloudText();
  }
  setCloudText() {
    this.guineaPigService.setCloudText(this.cloudText);
  }

  setTheme() {
    this.theme.isLightTheme$.subscribe({
      next: (response) => {
        this.currentTheme = response;
        this.cd.markForCheck();
      },
      error: (error) => console.log(error),
    });
  }

  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }
  clickEvent2(event: MouseEvent) {
    this.hide2 = !this.hide2;
    event.stopPropagation();
  }
  registerUser() {
    this.accountService.registerUser(this.model).subscribe({
      next: (response) => {
        console.log(response);
        this.resetForm();
        this.router.navigateByUrl("/login");
      },
      error: (error) => {
        console.log(error);
        this.resetForm();
      }
    });
  }
  resetForm() {
    this.model = new RegisterUserDto();
    if (this.ngForm) {
      this.ngForm.resetForm();
    }
  }
}
