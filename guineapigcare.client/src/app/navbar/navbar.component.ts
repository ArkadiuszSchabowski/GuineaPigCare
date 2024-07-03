import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../_service/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  currentValue: boolean = true;

  constructor(public theme: ThemeService) {}
  ngOnInit(): void {
    this.theme.isLightTheme$.subscribe({
      next: (response) => {
        this.currentValue = response;
      },
      error: (error) => console.log(error),
    });
  }

  changeTheme(): void {
    this.currentValue = this.theme.themeSubject.value;
    this.theme.themeSubject.next(!this.currentValue);
  }
}
