import { Component, OnInit } from '@angular/core';
import { GuineapigService } from '../_service/guineapig.service';
import { PaginationDto } from '../_models/pagination-dto';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-good-products',
  templateUrl: './good-products.component.html',
  styleUrls: ['./good-products.component.scss']
})
export class GoodProductsComponent implements OnInit{

  cloudText: string = "Co za pyszności! Pamiętaj o porze karmienia!"
  products: any;
  pagination: PaginationDto = new PaginationDto();

  constructor(private guineaPigService: GuineapigService){
    
  }
  ngOnInit(): void {
    this.getGoodProductsInformation();
    this.setCloudText();
  }

  setCloudText(){
    this.guineaPigService.setCloudText(this.cloudText)
  }

  getGoodProductsInformation(){

    this.guineaPigService.getGoodProducts(this.pagination).subscribe({
      next: response => {
        this.products = response,
        console.log(this.products)
      },
      error: error => console.log(error)
    })
  };
  changePage(event: PageEvent){
    
    this.pagination.PageNumber = event.pageIndex + 1;
    this.pagination.PageSize = event.pageSize;

    this.guineaPigService.getGoodProducts(this.pagination).subscribe({
      next: response => this.products = response,
      error: error => console.log(error)
    })
  }
}
