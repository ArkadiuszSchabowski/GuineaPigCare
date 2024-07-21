import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PolishPaginatorIntl } from './_internationalization/polish-paginator-intl';
import { AppComponent } from './app.component';

import { BadProductsComponent } from './components-when-logout/bad-products/bad-products.component';
import { BeforeBuyGuineaPigComponent } from './components-when-logout/before-buy-guinea-pig/before-buy-guinea-pig.component';
import { FooterNavigationComponent } from './components-when-logout/footer-navigation/footer-navigation.component';
import { GoodProductsComponent } from './components-when-logout/good-products/good-products.component';
import { LoginComponent } from './components-when-logout/login/login.component';
import { MainPageComponent } from './components-when-logout/main-page/main-page.component';
import { NavbarComponent } from './components-when-logout/navbar/navbar.component';
import { RegisterComponent } from './components-when-logout/register/register.component';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { GuineaPigLayoutComponent } from './components-when-login/guinea-pig/_guinea-pig-layout/guinea-pig-layout.component';
import { GuineaPigAddProfileComponent } from './components-when-login/guinea-pig/guinea-pig-add-profile/guinea-pig-add-profile.component';
import { GuineaPigCleaningCalendarComponent } from './components-when-login/guinea-pig/guinea-pig-cleaning-calendar/guinea-pig-cleaning-calendar.component';
import { GuineaPigProfileComponent } from './components-when-login/guinea-pig/guinea-pig-profile/guinea-pig-profile.component';
import { GuineaPigRemoveProfileComponent } from './components-when-login/guinea-pig/guinea-pig-remove-profile/guinea-pig-remove-profile.component';
import { GuineaPigUpdateProfileComponent } from './components-when-login/guinea-pig/guinea-pig-update-profile/guinea-pig-update-profile.component';
import { UserLayoutComponent } from './components-when-login/user/_user-layout/user-layout.component';
import { UserChangePasswordComponent } from './components-when-login/user/user-change-password/user-change-password.component';
import { UserEditProfileComponent } from './components-when-login/user/user-edit-profile/user-edit-profile.component';
import { UserProfileComponent } from './components-when-login/user/user-profile/user-profile.component';

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
    FooterNavigationComponent,
    GuineaPigProfileComponent,
    UserProfileComponent,
    UserChangePasswordComponent,
    UserEditProfileComponent,
    GuineaPigAddProfileComponent,
    GuineaPigUpdateProfileComponent,
    GuineaPigRemoveProfileComponent,
    GuineaPigCleaningCalendarComponent,
    UserLayoutComponent,
    GuineaPigLayoutComponent
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
     MatMenuModule,
     MatPaginatorModule,
     MatSelectModule,
  ],
  providers: [
    {provide: MatPaginatorIntl, useClass: PolishPaginatorIntl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
