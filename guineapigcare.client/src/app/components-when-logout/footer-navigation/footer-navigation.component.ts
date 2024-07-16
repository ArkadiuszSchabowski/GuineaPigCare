import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../_service/theme.service';
import { GuineapigService } from '../../_service/guineapig.service';

@Component({
  selector: 'app-footer-navigation',
  templateUrl: './footer-navigation.component.html',
  styleUrls: ['./footer-navigation.component.scss'],
})
export class FooterNavigationComponent implements OnInit{

  currentTheme: boolean | undefined = undefined;
  componentText: string ="";

  constructor(private theme: ThemeService, private guineaPigService: GuineapigService) {

  }
  ngOnInit(): void {

    this.setTheme();
    this.setComponentCloudText();

  }

  setComponentCloudText() {
    this.guineaPigService.isTextSubject$.subscribe({
      next: response => this.componentText = response,
      error: error => console.log(error)
    });
  }

  setTheme() {
    this.theme.isLightTheme$.subscribe({
      next: response => {
        this.currentTheme = response
      },
      error: error => console.log(error)
    });
  }
  
  playGuineaPigSound(){
    var sound = new Audio();
    sound.src = "../assets/sounds/sound.mp3";
    sound.load();
    sound.play();
  }
}
