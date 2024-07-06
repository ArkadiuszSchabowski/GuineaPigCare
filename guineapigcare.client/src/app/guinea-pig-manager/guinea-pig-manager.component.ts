import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../_service/theme.service';

@Component({
  selector: 'app-guinea-pig-manager',
  templateUrl: './guinea-pig-manager.component.html',
  styleUrls: ['./guinea-pig-manager.component.scss'],
})
export class GuineaPigManagerComponent implements OnInit {
  
  currentValue: any;

  constructor(public theme: ThemeService) {}

  ngOnInit(): void {
    this.theme.isLightTheme$.subscribe({
      next: (response) => (this.currentValue = response),
      error: (error) => console.log(error),
    });
  }
}
