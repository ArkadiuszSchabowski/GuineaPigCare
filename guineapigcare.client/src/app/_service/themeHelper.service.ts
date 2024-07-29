import { Injectable, OnInit } from '@angular/core';
import { ThemeService } from '../_service/theme.service';


@Injectable({
    providedIn: 'root',
  })

export class ThemeHelper{

  currentTheme: boolean | undefined = undefined;

  constructor(public theme: ThemeService) {}


  setTheme() : void{
    this.theme.isLightTheme$.subscribe({
      next: (response) => {
        this.currentTheme = response
        console.log(this.currentTheme)
      },
      error: (error) => console.log(error),
    });
  }
}
