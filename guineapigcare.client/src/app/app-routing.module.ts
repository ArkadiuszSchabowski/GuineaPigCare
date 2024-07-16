import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './components-when-logout/main-page/main-page.component';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components-when-logout/register/register.component';
import { LoginComponent } from './components-when-logout/login/login.component';
import { GoodProductsComponent } from './components-when-logout/good-products/good-products.component';
import { BadProductsComponent } from './components-when-logout/bad-products/bad-products.component';
import { UserProfileComponent } from './components-when-login/user-profile/user-profile.component';
import { BeforeBuyGuineaPigComponent } from './components-when-logout/before-buy-guinea-pig/before-buy-guinea-pig.component';
import { GuineaPigProfileComponent } from './components-when-login/guinea-pig-profile/guinea-pig-profile.component';
import { GuineaPigAddProfileComponent } from './components-when-login/guinea-pig-add-profile/guinea-pig-add-profile.component';
import { GuineaPigUpdateProfileComponent } from './components-when-login/guinea-pig-update-profile/guinea-pig-update-profile.component';
import { GuineaPigRemoveProfileComponent } from './components-when-login/guinea-pig-remove-profile/guinea-pig-remove-profile.component';
import { GuineaPigCleaningCalendarComponent } from './components-when-login/guinea-pig-cleaning-calendar/guinea-pig-cleaning-calendar.component';
import { UserEditProfileComponent } from './components-when-login/user-edit-profile/user-edit-profile.component';
import { UserRemoveProfileComponent } from './components-when-login/user-remove-profile/user-remove-profile.component';
import { UserChangePasswordComponent } from './components-when-login/user-change-password/user-change-password.component';

const routes: Routes = [
  {path: "", component: MainPageComponent},
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "good-products", component: GoodProductsComponent},
  {path: "bad-products", component: BadProductsComponent},
  {path: "info", component: BeforeBuyGuineaPigComponent},
  {path: "profile/user-profile", component: UserProfileComponent},
  {path: "profile/edit-profile", component: UserEditProfileComponent},
  {path: "profile/remove-profile", component: UserRemoveProfileComponent},
  {path: "profile/user-change-password", component: UserChangePasswordComponent},
  {path: "profile/guinea-pig-profile", component: GuineaPigProfileComponent},
  {path: "profile/guinea-pig-add-profile", component: GuineaPigAddProfileComponent},
  {path: "profile/guinea-pig-update-profile", component: GuineaPigUpdateProfileComponent},
  {path: "profile/guinea-pig-remove-profile", component: GuineaPigRemoveProfileComponent},
  {path: "profile/guinea-pig-cleaning-calendar", component: GuineaPigCleaningCalendarComponent},
  {path: "**", component: MainPageComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
