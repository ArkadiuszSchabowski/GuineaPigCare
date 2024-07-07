import { Component, OnInit } from '@angular/core';
import { GuineapigService } from '../_service/guineapig.service';

@Component({
  selector: 'app-good-products',
  templateUrl: './good-products.component.html',
  styleUrls: ['./good-products.component.scss']
})
export class GoodProductsComponent implements OnInit{

  cloudText: string = "Co za pyszności! Pamiętaj o porze karmienia!"

  constructor(private guineaPigService: GuineapigService){

  }
  ngOnInit(): void {

    this.setCloudText();

  }
  
  setCloudText() {
    this.guineaPigService.setCloudText(this.cloudText);
  }

}
