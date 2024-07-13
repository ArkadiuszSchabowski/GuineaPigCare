import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from './_service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  currentTheme: boolean | undefined = undefined;

  constructor(private http: HttpClient, private theme: ThemeService) {}

  ngOnInit() {
    this.setTheme();
  }
  setTheme() {
    this.theme.isLightTheme$.subscribe({
      next: response => {
        this.currentTheme = response;
      },
      error: error => error
    })
    }
  }
