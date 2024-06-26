import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../_service/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  currentValue: any;

  constructor(public theme: ThemeService){
    
  }

  changeTheme(): void {
    this.currentValue = this.theme.themeSubject.value;
    this.theme.themeSubject.next(!this.currentValue);
  }
}
