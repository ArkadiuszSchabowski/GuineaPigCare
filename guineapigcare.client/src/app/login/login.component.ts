import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { ThemeService } from '../_service/theme.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit{

  currentValue: boolean = true;

  constructor(public theme: ThemeService, private cd: ChangeDetectorRef){

  }

  ngOnInit(): void {

this.theme.isLightTheme$.subscribe({
  next: response => {
    this.currentValue = response,
    this.cd.markForCheck(),
    console.log("login " + this.currentValue)
  },
  error: error => console.log(error)
});

  }
  hide = true;
  clickEvent(event: MouseEvent) {
    this.hide =!this.hide
    event.stopPropagation();
  }
}
