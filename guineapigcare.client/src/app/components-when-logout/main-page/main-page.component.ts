import { Component, OnInit } from '@angular/core';
import { GuineaPigService } from '../../_service/guinea-pig.service';
import { ThemeService } from '../../_service/theme.service';
import { BaseComponent } from 'src/app/_shared/base.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent extends BaseComponent implements OnInit{

  override backgroundUrl: string ="assets/images/backgrounds/no-login/mainPage.jpg"
  override cloudText: string = "Cześć! Zaprzyjaźnimy się?"
  currentTheme: boolean | undefined = undefined;

  constructor(guineaPigService: GuineaPigService, private theme: ThemeService){
    super(guineaPigService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }
}
