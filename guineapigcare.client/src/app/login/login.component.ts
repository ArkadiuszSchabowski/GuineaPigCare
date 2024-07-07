import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { ThemeService } from '../_service/theme.service';
import { GuineapigService } from '../_service/guineapig.service';

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

  constructor(private theme: ThemeService, private guineaPigService: GuineapigService, private cd: ChangeDetectorRef){

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
}
