import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { TwoWayAssignmentComponent } from './two-way-assignment/two-way-assignment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiconnectionComponent } from './uiconnection/uiconnection.component';
import { DirectiveComponent } from './directive/directive.component';
import { ProductComponent } from './product/product.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { DemoComponent } from './demo/demo.component';
import { ValidationFormComponent } from './validation-form/validation-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { MensComponent } from './mens/mens.component';
import { WomensComponent } from './womens/womens.component';
import { KidsComponent } from './kids/kids.component';
import { DefaultComponent } from './default/default.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsRouComponent } from './products-rou/products-rou.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    TwoWayAssignmentComponent,
    UiconnectionComponent,
    DirectiveComponent,
    ProductComponent,
    ProductFilterComponent,
    DemoComponent,
    ValidationFormComponent,
    ReactiveFormsComponent,
    NavbarComponent,
    HomeNavComponent,
    MensComponent,
    WomensComponent,
    KidsComponent,
    DefaultComponent,
    CategoriesComponent,
    ProductsRouComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [NavbarComponent]
})
export class AppModule { }
