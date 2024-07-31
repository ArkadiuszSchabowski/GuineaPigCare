import { Component, OnInit } from '@angular/core';
import { GuineaPigService } from 'src/app/_service/guinea-pig.service';
import { ThemeService } from 'src/app/_service/theme.service';
import { BaseComponent } from 'src/app/_shared/base.component';

@Component({
  selector: 'app-guinea-pig-add-profile',
  templateUrl: './guinea-pig-add-profile.component.html',
  styleUrls: ['./guinea-pig-add-profile.component.css']
})
export class GuineaPigAddProfileComponent extends BaseComponent implements OnInit {

  override backgroundUrl: string = "assets/images/guinea-pig/addProfile.jpg"
  override cloudText: string = "Dodajesz nową przyjaciela? Super!";
  
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
      next: (response) => (this.currentTheme = response),
      error: (error) => console.log(error),
    });
  }
}
