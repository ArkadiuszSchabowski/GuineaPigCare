import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../_service/theme.service';

@Component({
  selector: 'app-good-products',
  templateUrl: './good-products.component.html',
  styleUrls: ['./good-products.component.css']
})
export class GoodProductsComponent implements OnInit{

  constructor(public theme: ThemeService){

  }
  ngOnInit(): void {
  }

}
