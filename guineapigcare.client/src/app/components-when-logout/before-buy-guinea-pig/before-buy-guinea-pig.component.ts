import { Component, OnInit } from '@angular/core';
import { GuineaPigService } from '../../_service/guinea-pig.service';
import { BaseComponent } from 'src/app/_shared/base.component';

@Component({
  selector: 'app-before-buy-guinea-pig',
  templateUrl: './before-buy-guinea-pig.component.html',
  styleUrls: ['./before-buy-guinea-pig.component.scss'],
})
export class BeforeBuyGuineaPigComponent extends BaseComponent implements OnInit {
  information: any;
  override cloudText: string = 'Zapewnij mi proszę odpowiednie warunki do rozwoju!';

  constructor(guineaPigService: GuineaPigService) {
    super(guineaPigService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.getInformationGuineaPigs();
  }

  getInformationGuineaPigs() {
    this.guineaPigService.getInformationGuineaPigs().subscribe({
      next: (response) => {
        this.information = response;
        console.log(this.information);
      },
      error: (error) => console.log(error),
    });
  }
}
