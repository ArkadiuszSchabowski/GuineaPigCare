import { Component, OnInit } from '@angular/core';
import { GuineapigService } from '../_service/guineapig.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit{
  
  text: string = "Cześć! Zaprzyjaźnimy się?"

  constructor(private guineaPigService: GuineapigService){

  }
  ngOnInit(): void {
    this.setCloudText();
  }
  setCloudText(){
    this.guineaPigService.setCloudText(this.text);
  }
}
