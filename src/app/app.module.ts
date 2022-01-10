import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCitiesComponent } from './components/cities/add-cities/add-cities.component';
import { CitiesDetailsComponent } from './components/cities/cities-details/cities-details.component';
import { CitiesListComponent } from './components/cities/cities-list/cities-list.component';
import { AddCustomersComponent } from './components/customers/add-customers/add-customers.component';
import { CustDetailsComponent } from './components/customers/cust-details/cust-details.component';
import { CustomersListComponent } from './components/customers/customers-list/customers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCitiesComponent,
    CitiesDetailsComponent,
    CitiesListComponent,
    AddCustomersComponent,
    CustDetailsComponent,
    CustomersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
