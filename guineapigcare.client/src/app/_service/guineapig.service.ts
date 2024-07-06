import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../_environments/environment_dev';
import { GuineaPigInformationDto } from '../_models/guinea-pig-information-dto';
import { Observable } from 'rxjs';
import { ProductDto } from '../_models/product-dto';

@Injectable({
  providedIn: 'root',
})
export class GuineapigService {

  information: GuineaPigInformationDto | null = null;

  constructor(private http: HttpClient) {

  }

  GetInformationGuineaPigs(): Observable<GuineaPigInformationDto> {
    return this.http.get<GuineaPigInformationDto>(environment.apiUrl + 'guineapig/info');
  };
  GetBadProducts(): Observable<ProductDto>{
    return this.http.get<ProductDto>(environment.apiUrl + "guineapig/bad-products");
  };
}