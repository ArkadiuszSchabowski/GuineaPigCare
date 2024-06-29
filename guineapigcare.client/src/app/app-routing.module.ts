import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BeforeBuyGuineaPigComponent } from './before-buy-guinea-pig/before-buy-guinea-pig.component';
import { GoodProductsComponent } from './good-products/good-products.component';
import { BadProductsComponent } from './bad-products/bad-products.component';


const routes: Routes = [
  {path: "", component: MainPageComponent},
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "good-products", component: GoodProductsComponent},
  {path: "bad-products", component: BadProductsComponent},
  {path: "info", component: BeforeBuyGuineaPigComponent},
  {path: "**", component: MainPageComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
