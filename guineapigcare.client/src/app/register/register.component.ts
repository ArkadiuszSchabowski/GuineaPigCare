import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ThemeService } from '../_service/theme.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  hide: boolean = true;
  hide2: boolean = true;
  currentValue: boolean = false;

  constructor(public theme: ThemeService, private cd: ChangeDetectorRef){

  }
  ngOnInit(): void {
    this.theme.isLightTheme$.subscribe({
      next: response => {
        this.currentValue = response
        this.cd.markForCheck()
      },
      error: error => console.log(error)
    })
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
