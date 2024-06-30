import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BeforeBuyGuineaPigComponent } from './before-buy-guinea-pig/before-buy-guinea-pig.component';
import { GoodProductsComponent } from './good-products/good-products.component';
import { BadProductsComponent } from './bad-products/bad-products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { FooterNavigationComponent } from './footer-navigation/footer-navigation.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    RegisterComponent,
    LoginComponent,
    BeforeBuyGuineaPigComponent,
    GoodProductsComponent,
    BadProductsComponent,
    NavbarComponent,
    FooterNavigationComponent
  ],
  imports: [
    BrowserModule,
     HttpClientModule, 
     BrowserAnimationsModule,
     MatToolbarModule,
     AppRoutingModule,
     MatSlideToggleModule,
     FormsModule,
     MatIconModule,
     MatButtonModule,
     MatCardModule,
     MatInputModule,
     MatFormFieldModule,
     MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
