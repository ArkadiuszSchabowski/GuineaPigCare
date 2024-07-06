import { Component } from '@angular/core';
import { ThemeService } from '../_service/theme.service';
import { GuineapigService } from '../_service/guineapig.service';

@Component({
  selector: 'app-before-buy-guinea-pig',
  templateUrl: './before-buy-guinea-pig.component.html',
  styleUrls: ['./before-buy-guinea-pig.component.scss'],
})
export class BeforeBuyGuineaPigComponent {
  currentValue: any;
  information: any;

  constructor(public theme: ThemeService, private service: GuineapigService) {
    this.GetInformationGuineaPigs();
  }

  ngOnInit(): void {
    this.theme.isLightTheme$.subscribe({
      next: (response) => (this.currentValue = response),
      error: (error) => console.log(error),
    });
  }
  GetInformationGuineaPigs() {
    this.service.GetInformationGuineaPigs().subscribe({
      next: (response) => {
        (this.information = response);
        console.log(this.information);
      },
      error: (error) => console.log(error),
    });
  }
}
