import { Component, OnInit } from '@angular/core';
import { GuineapigService } from '../_service/guineapig.service';

@Component({
  selector: 'app-good-products',
  templateUrl: './good-products.component.html',
  styleUrls: ['./good-products.component.scss']
})
export class GoodProductsComponent implements OnInit{

  cloudText: string = "Co za pyszności! Pamiętaj o porze karmienia!"
  products: any;

  constructor(private guineaPigService: GuineapigService){
    
  }
  ngOnInit(): void {
    this.getBadProductsInformation();
    this.setCloudText();
  }

  setCloudText(){
    this.guineaPigService.setCloudText(this.cloudText)
  }

  getBadProductsInformation(){
    this.guineaPigService.getGoodProducts().subscribe({
      next: response => {
        this.products = response,
        console.log(this.products)
      },
      error: error => console.log(error)
    })
  };
}
