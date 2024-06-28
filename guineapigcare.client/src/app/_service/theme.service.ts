import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  themeSubject = new BehaviorSubject<boolean>(true);
  isLightTheme$ = this.themeSubject.asObservable();
  
  constructor() { }

}
