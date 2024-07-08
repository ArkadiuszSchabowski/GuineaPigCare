import { Component, OnInit } from '@angular/core';
import { GuineapigService } from '../_service/guineapig.service';
import { ThemeService } from '../_service/theme.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit{
  
  text: string = "Cześć! Zaprzyjaźnimy się?"
  currentTheme: boolean | undefined = undefined;

  constructor(private guineaPigService: GuineapigService, private theme: ThemeService){

  }

  ngOnInit(): void {
    this.setCloudText();
    this.setBackground();
  }
  setBackground() {
    this.theme.isLightTheme$.subscribe({
      next: response => this.currentTheme = response,
      error: error => console.log(error)
    })
  }
  setCloudText(){
    this.guineaPigService.setCloudText(this.text);
  }
}
