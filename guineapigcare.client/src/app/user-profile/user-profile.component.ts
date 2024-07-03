import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../_service/theme.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit{

  currentValue: any;

  constructor(public theme: ThemeService){
  }
  ngOnInit(): void {
      this.theme.isLightTheme$.subscribe({
        next: response => {
          this.currentValue = response
        },
        error: error => console.log(error)
      });
    }
  }
