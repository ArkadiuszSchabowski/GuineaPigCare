import { Component, OnInit } from '@angular/core';
import { GuineapigService } from '../../_service/guineapig.service';
import { PaginationDto } from '../../_models/pagination-dto';
import { PageEvent } from '@angular/material/paginator';
import { ThemeService } from '../../_service/theme.service';
import { ProductDto } from '../../_models/product-dto';

@Component({
  selector: 'app-good-products',
  templateUrl: './good-products.component.html',
  styleUrls: ['./good-products.component.scss']
})
export class GoodProductsComponent implements OnInit{

  currentTheme: boolean | undefined = undefined;
  cloudText: string = "Co za pyszności! Pamiętaj o porze karmienia!"
  products: ProductDto[] = [];
  counter: number | undefined= undefined;
  pagination: PaginationDto = new PaginationDto();

  constructor(private guineaPigService: GuineapigService, private themeService: ThemeService){
    
  }


  ngOnInit(): void {
    this.getGoodProductsInformation();
    this.setCloudText();
    this.setTheme();
  }

  setTheme() {
    this.themeService.isLightTheme$.subscribe({
      next: response => {
        this.currentTheme = response;
        console.log(response)
      },
      error: error => console.log(error)
    })
  }

  setCloudText(){
    this.guineaPigService.setCloudText(this.cloudText)
  }

  getGoodProductsInformation(){

    this.guineaPigService.getGoodProducts(this.pagination).subscribe({
      next: response => {
        console.log(response);
        this.products = response.products;
        this.counter = response.counter;
      },
      error: error => console.log(error)
    })
  };
  changePage(event: PageEvent){
    
    this.pagination.PageNumber = event.pageIndex + 1;
    this.pagination.PageSize = event.pageSize;

    this.guineaPigService.getGoodProducts(this.pagination).subscribe({
      next: response => {
        this.products = response.products
        this.counter = response.counter
      },

      error: error => console.log(error)
    })
  }
}
