import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ThemeService } from '../_service/theme.service';
import { GuineapigService } from '../_service/guineapig.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  hide: boolean = true;
  hide2: boolean = true;
  currentTheme: boolean | undefined = undefined;
  cloudText: string = "Stwórz konto i odblokuj wszystkie funkcje!"

  constructor(public theme: ThemeService, private cd: ChangeDetectorRef, private guineaPigService: GuineapigService){

  }
  ngOnInit(): void {

    this.setTheme();
    this.setCloudText();

  }
  setCloudText() {
    this.guineaPigService.setCloudText(this.cloudText);
  }

  setTheme() {
    this.theme.isLightTheme$.subscribe({
      next: response => {
        this.currentTheme = response;
        this.cd.markForCheck();
      },
      error: error => console.log(error)
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
}
