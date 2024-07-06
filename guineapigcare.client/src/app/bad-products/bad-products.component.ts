import { Component } from '@angular/core';
import { GuineapigService } from '../_service/guineapig.service';

@Component({
  selector: 'app-bad-products',
  templateUrl: './bad-products.component.html',
  styleUrls: ['./bad-products.component.scss']
})
export class BadProductsComponent {

  products: any;

  constructor(private service: GuineapigService){
    this.GetBadProducts();
  }

  GetBadProducts(){
    this.service.GetBadProducts().subscribe({
      next: response => {
        this.products = response,
        console.log(this.products)
      },
      error: error => console.log(error)
    })
  };
}
