import { Component, OnInit } from '@angular/core';
import { GuineaPigService } from '../../_service/guinea-pig.service';
import { PaginationDto } from '../../_models/pagination-dto';
import { PageEvent } from '@angular/material/paginator';
import { ProductDto } from '../../_models/product-dto';
import { ThemeService } from '../../_service/theme.service';
import { ProductResult } from '../../_models/product-result';
import { BaseComponent } from 'src/app/_shared/base.component';

@Component({
  selector: 'app-bad-products',
  templateUrl: './bad-products.component.html',
  styleUrls: ['./bad-products.component.scss']
})
export class BadProductsComponent extends BaseComponent implements OnInit{

  currentTheme: boolean | undefined = undefined;
  products: ProductDto[] = [];
  counter: number | undefined = undefined;
  override cloudText: string = "Proszę pamiętaj, by nigdy nie dawać mi tych produktów! Niektóre z nich są nawet śmiertelnie szkodliwe!"
  pagination: PaginationDto = new PaginationDto();

  constructor(guineaPigService: GuineaPigService, private themeService: ThemeService){
    super(guineaPigService);
  }
  override ngOnInit(): void {
    super.ngOnInit();
    this.getBadProductsInformation(this.pagination);
    this.setTheme();
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