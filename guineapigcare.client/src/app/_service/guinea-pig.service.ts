import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../_environments/environment_dev';
import { GuineaPigInformationDto } from '../_models/guinea-pig-information-dto';
import { BehaviorSubject, Observable } from 'rxjs';
import { PaginationDto } from '../_models/pagination-dto';
import { ProductResult } from '../_models/product-result';
import { AddGuineaPigDto } from '../_models/add-guinea-pig-dto';
import { GuineaPigDto } from '../_models/guinea-pig-dto';
import { RemoveGuineaPigDto } from '../_models/remove-guinea-pig-dto';

@Injectable({
  providedIn: 'root',
})
export class GuineaPigService {
  textSubject = new BehaviorSubject<string>('');
  isTextSubject$ = this.textSubject.asObservable();

  constructor(private http: HttpClient) {}
  setCloudText(text: string) {
    this.textSubject.next(text);
  }

  getInformationGuineaPigs(): Observable<GuineaPigInformationDto> {
    return this.http.get<GuineaPigInformationDto>(
      environment.apiUrl + 'guineapig/info'
    );
  }

  getBadProducts(paginationDto: PaginationDto): Observable<ProductResult> {
    let params = new HttpParams()
      .set('PageNumber', paginationDto.PageNumber.toString())
      .set('PageSize', paginationDto.PageSize.toString());
    return this.http.get<ProductResult>(
      environment.apiUrl + 'guineapig/bad-products',
      { params }
    );
  }

  getGoodProducts(paginationDto: PaginationDto): Observable<ProductResult> {
    let params = new HttpParams()
      .set('PageNumber', paginationDto.PageNumber.toString())
      .set('PageSize', paginationDto.PageSize.toString());
    return this.http.get<ProductResult>(
      environment.apiUrl + 'guineapig/good-products',
      { params }
    );
  }
  addGuineaPig(email: string, guineaPigDto: AddGuineaPigDto) {
    let params = new HttpParams().set('email', email);

    return this.http.post(environment.apiUrl + 'guineapig', guineaPigDto, {
      params,
    });
  }
  updateWeightGuineaPig(email: string, guineaPig: GuineaPigDto) {
    console.log('Update', email, guineaPig);
    let params = new HttpParams().set('email', email);

    return this.http.patch(
      environment.apiUrl + 'guineapig/update-weight',
      guineaPig,
      { params }
    );
  }
  getGuineaPigs(email: string) {
    let params = new HttpParams().set('email', email);

    return this.http.get<GuineaPigDto[]>(
      environment.apiUrl + 'guineapig/guinea-pigs',
      { params }
    );
  }
  removeGuineaPig(guineaPig: RemoveGuineaPigDto) {
    let params = new HttpParams()
      .set('email', guineaPig.email)
      .set('name', guineaPig.name);

    return this.http.delete(environment.apiUrl + 'guineapig', {
      params,
    });
  }
}
