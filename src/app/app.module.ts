import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeService } from './employee.service';
import { GoogleEmployeesListComponent } from './google-employees-list/google-employees-list.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    GoogleEmployeesListComponent,
    ProductsListComponent,
    HomeComponent,
    ContactusComponent,
    PagenotfoundComponent,
    EmployeeComponent,
    ProductComponent,
  ],
  imports: [BrowserModule,HttpClientModule,RouterModule.forRoot([
    {path:'home',component:HomeComponent},
    {path:'employees',component:EmployeesListComponent},
    {path:'employees/:empno',component:EmployeeComponent},
    {path:'googleemployees',component:GoogleEmployeesListComponent},
    { path: 'products', component: ProductsListComponent, children: [{ path: ':productno', component: ProductComponent }]},
    {path:'contactus',component:ContactusComponent},
    {path:'',redirectTo: '/home', pathMatch: 'full' },
    {path:'**',component:PagenotfoundComponent},
  ])],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
