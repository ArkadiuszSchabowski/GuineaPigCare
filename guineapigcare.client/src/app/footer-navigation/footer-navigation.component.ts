import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../_service/theme.service';

@Component({
  selector: 'app-footer-navigation',
  templateUrl: './footer-navigation.component.html',
  styleUrls: ['./footer-navigation.component.scss'],
})
export class FooterNavigationComponent implements OnInit{

  currentValue: boolean = false;

  constructor(public theme: ThemeService) {

  }
  ngOnInit(): void {
    this.theme.isLightTheme$.subscribe({
      next: response => {
        this.currentValue = response,
        console.log("navbar response" + response)
      },
      error: error => console.log(error)
    });
  }
  guineaPigSound(){
    var sound = new Audio();
    sound.src = "../assets/sounds/sound.mp3";
    sound.load();
    sound.play();
  }
}
