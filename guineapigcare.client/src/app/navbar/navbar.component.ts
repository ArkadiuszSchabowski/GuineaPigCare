import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../_service/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  currentTheme: boolean | undefined = undefined;

  constructor(private theme: ThemeService) {}

  ngOnInit(): void {

    this.setTheme();

  }

  setTheme() {
    this.theme.isLightTheme$.subscribe({
      next: (response) => {
        this.currentTheme = response;
      },
      error: (error) => console.log(error),
    });
  }

  changeTheme(): void {
    this.currentTheme = this.theme.themeSubject.value;
    this.theme.themeSubject.next(!this.currentTheme);
  }
}
