import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { DefaultComponent } from './default/default.component';
import { DetailsComponent } from './details/details.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { KidsComponent } from './kids/kids.component';
import { MensComponent } from './mens/mens.component';
import { ProductsRouComponent } from './products-rou/products-rou.component';
import { WomensComponent } from './womens/womens.component';

const routes: Routes = [
  {path:'home',component:HomeNavComponent},
  {path:'mens',component:MensComponent},
  {path:'womens',component:WomensComponent},
  {path:'kids',component:KidsComponent},
  // {path:'category',component:CategoriesComponent},
   {path:'categories/:cate',component:ProductsRouComponent},
  // {path:"",component:HomeNavComponent},//wildcard
  //{path:"",redirectTo:'home' ,pathMatch:'full'},
  // {path:'**',component:DefaultComponent},
  {path:'details/:productId',component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
