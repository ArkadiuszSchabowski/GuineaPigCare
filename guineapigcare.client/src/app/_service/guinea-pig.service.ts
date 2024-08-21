import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../_environments/environment_dev';
import { GuineaPigInformationDto } from '../_models/guinea-pig-information-dto';
import { BehaviorSubject, Observable } from 'rxjs';
import { PaginationDto } from '../_models/pagination-dto';
import { ProductResult } from '../_models/product-result';
import { AddGuineaPigDto } from '../_models/add-guinea-pig-dto';

@Injectable({
  providedIn: 'root',
})
export class GuineaPigService {

  textSubject = new BehaviorSubject<string>("");
  isTextSubject$ = this.textSubject.asObservable();

  constructor(private http: HttpClient) {

    }
    setCloudText(text: string){
      this.textSubject.next(text);
    }

  getInformationGuineaPigs(): Observable<GuineaPigInformationDto> {
    return this.http.get<GuineaPigInformationDto>(environment.apiUrl + 'guineapig/info', );
  };

  getBadProducts(paginationDto: PaginationDto): Observable<ProductResult>{
    let params = new HttpParams()
    .set('PageNumber', paginationDto.PageNumber.toString())
    .set('PageSize', paginationDto.PageSize.toString());
    return this.http.get<ProductResult>(environment.apiUrl + "guineapig/bad-products", {params})
  };

  getGoodProducts(paginationDto: PaginationDto): Observable<ProductResult>{
    let params = new HttpParams()
    .set('PageNumber', paginationDto.PageNumber.toString())
    .set('PageSize', paginationDto.PageSize.toString());
    return this.http.get<ProductResult>(environment.apiUrl + "guineapig/good-products", {params})
  };
  addGuineaPig(email: string, guineaPigDto: AddGuineaPigDto){

    let params = new HttpParams().set('email', email);

    return this.http.post(environment.apiUrl + "guineapig/add", guineaPigDto, {params})
  }
  updateWeightGuineaPig(){
    //TO DO
  }
  removeGuineaPig(email: string, guineaPigId: number){

    let params = new HttpParams().set('email', email);

    return this.http.delete(environment.apiUrl + guineaPigId + {params})
  }
}