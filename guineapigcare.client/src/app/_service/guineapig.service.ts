import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../_environments/environment_dev';
import { GuineaPigInformationDto } from '../_models/guinea-pig-information-dto';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductDto } from '../_models/product-dto';

@Injectable({
  providedIn: 'root',
})
export class GuineapigService {

  textSubject = new BehaviorSubject<string>("");
  isTextSubject$ = this.textSubject.asObservable();

  constructor(private http: HttpClient) {

    }
    setCloudText(text: string){
      this.textSubject.next(text);
    }

  getInformationGuineaPigs(): Observable<GuineaPigInformationDto> {
    return this.http.get<GuineaPigInformationDto>(environment.apiUrl + 'guineapig/info');
  };
  getBadProducts(): Observable<ProductDto>{
    return this.http.get<ProductDto>(environment.apiUrl + "guineapig/bad-products");
  };
}