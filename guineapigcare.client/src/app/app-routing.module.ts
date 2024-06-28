import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: "", component: MainPageComponent},
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "good-products", component: MainPageComponent},
  {path: "bad-products", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "**", component: MainPageComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
