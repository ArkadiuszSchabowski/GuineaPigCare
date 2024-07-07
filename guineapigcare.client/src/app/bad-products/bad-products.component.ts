import { Component, OnInit } from '@angular/core';
import { GuineapigService } from '../_service/guineapig.service';
import { ProductDto } from '../_models/product-dto';

@Component({
  selector: 'app-bad-products',
  templateUrl: './bad-products.component.html',
  styleUrls: ['./bad-products.component.scss']
})
export class BadProductsComponent implements OnInit{

  products: ProductDto= new ProductDto;
  cloudText: string = "Proszę pamiętaj, by nigdy nie dawać mi tych produktów! Niektóre z nich są nawet śmiertelnie szkodliwe!"

  constructor(private service: GuineapigService){
    
  }
  ngOnInit(): void {
    this.getBadProductsInformation();
    this.setCloudText();
  }

  setCloudText(){
    this.service.setCloudText(this.cloudText)
  }

  getBadProductsInformation(){
    this.service.getBadProducts().subscribe({
      next: response => {
        this.products = response,
        console.log(this.products)
      },
      error: error => console.log(error)
    })
  };
}
