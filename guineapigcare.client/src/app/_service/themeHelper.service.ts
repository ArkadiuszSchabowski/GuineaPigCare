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
      },
      error: (error) => console.log(error),
    });
  }
  setBackground(url: string){
    document.body.style.backgroundImage = `url(${url})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.width ="100%";
    document.body.style.height = "auto";
    document.body.style.display="flex";
    document.body.style.position = "center";
  }
}
