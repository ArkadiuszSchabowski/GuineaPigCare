import { Component, OnInit } from '@angular/core';
import { PaginationDto } from '../../_models/pagination-dto';
import { PageEvent } from '@angular/material/paginator';
import { ThemeService } from '../../_service/theme.service';
import { ProductDto } from '../../_models/product-dto';
import { GuineaPigService } from 'src/app/_service/guinea-pig.service';
import { BaseComponent } from 'src/app/_shared/base.component';

@Component({
  selector: 'app-good-products',
  templateUrl: './good-products.component.html',
  styleUrls: ['./good-products.component.scss']
})
export class GoodProductsComponent extends BaseComponent implements OnInit{

  currentTheme: boolean | undefined = undefined;
  override cloudText: string = "Co za pyszności! Pamiętaj o porze karmienia!"
  products: ProductDto[] = [];
  counter: number | undefined= undefined;
  pagination: PaginationDto = new PaginationDto();

  constructor(guineaPigService: GuineaPigService, private themeService: ThemeService){
    super(guineaPigService);
  }


  override ngOnInit(): void {
    super.ngOnInit();
    this.getGoodProductsInformation();
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
