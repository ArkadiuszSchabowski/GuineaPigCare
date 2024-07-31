import { Component, OnInit } from '@angular/core';
import { GuineaPigService } from 'src/app/_service/guinea-pig.service';
import { ThemeService } from 'src/app/_service/theme.service';
import { BaseComponent } from 'src/app/_shared/base.component';

@Component({
  selector: 'app-guinea-pig-manager',
  templateUrl: './guinea-pig-manager.component.html',
  styleUrls: ['./guinea-pig-manager.component.scss'],
})
export class GuineaPigManager extends BaseComponent implements OnInit {
  
  override cloudText: string = 'Komponent pomocniczy';
  override backgroundUrl: string = 'assets/images/guineaPigBackground.jpg';

  currentTheme: boolean | undefined = undefined;

  constructor(private theme: ThemeService, guineaPigService: GuineaPigService) {
    super(guineaPigService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
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
}
