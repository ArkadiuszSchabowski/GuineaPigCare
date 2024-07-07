import { Component, OnInit } from '@angular/core';
import { GuineapigService } from '../_service/guineapig.service';
import { GuineaPigInformationDto } from '../_models/guinea-pig-information-dto';

@Component({
  selector: 'app-before-buy-guinea-pig',
  templateUrl: './before-buy-guinea-pig.component.html',
  styleUrls: ['./before-buy-guinea-pig.component.scss'],
})

export class BeforeBuyGuineaPigComponent implements OnInit{

  information: GuineaPigInformationDto =  new GuineaPigInformationDto();
  cloudText: string = "Zapewnij mi proszę odpowiednie warunki do rozwoju!"

  constructor(private service: GuineapigService) {
  }
  
  ngOnInit(): void {
    
    this.setCloudText();
    this.getInformationGuineaPigs();
  }

  setCloudText() {
    this.service.setCloudText(this.cloudText);
  }

  getInformationGuineaPigs() {
    this.service.getInformationGuineaPigs().subscribe({
      next: (response) => {
        (this.information = response);
        console.log(this.information);
      },
      error: (error) => console.log(error),
    });
  }
}
