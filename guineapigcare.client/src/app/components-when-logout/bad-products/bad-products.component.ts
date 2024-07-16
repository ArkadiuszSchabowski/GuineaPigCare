import { Component, OnInit } from '@angular/core';
import { GuineapigService } from '../../_service/guineapig.service';
import { PaginationDto } from '../../_models/pagination-dto';
import { PageEvent } from '@angular/material/paginator';
import { ProductDto } from '../../_models/product-dto';
import { ThemeService } from '../../_service/theme.service';
import { ProductResult } from '../../_models/product-result';

@Component({
  selector: 'app-bad-products',
  templateUrl: './bad-products.component.html',
  styleUrls: ['./bad-products.component.scss']
})
export class BadProductsComponent implements OnInit{

  currentTheme: boolean | undefined = undefined;
  products: ProductDto[] = [];
  counter: number | undefined = undefined;
  cloudText: string = "Proszę pamiętaj, by nigdy nie dawać mi tych produktów! Niektóre z nich są nawet śmiertelnie szkodliwe!"
  pagination: PaginationDto = new PaginationDto();

  constructor(private guineaPigService: GuineapigService, private themeService: ThemeService){
    
  }
  ngOnInit(): void {
    this.getBadProductsInformation(this.pagination);
    this.setCloudText();
    this.setTheme();
  }

  setCloudText(){
    this.guineaPigService.setCloudText(this.cloudText)
  }

  getBadProductsInformation(paginationDto: PaginationDto){

    this.guineaPigService.getBadProducts(paginationDto).subscribe({
      next: (response: ProductResult) => {
        this.products = response.products;
        this.counter = response.counter;
      },
      error: error => console.log(error)
    })
  };

  changePage(event: PageEvent){
  
    this.pagination.PageSize = event.pageSize;
    this.pagination.PageNumber = event.pageIndex + 1;

    this.guineaPigService.getBadProducts(this.pagination).subscribe({
      next: response => this.products = response.products,
      error: error => error
    })
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
}
