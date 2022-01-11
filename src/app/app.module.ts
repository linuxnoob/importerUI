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
import { AddSupplierComponent } from './components/supplier/add-supplier/add-supplier.component';
import { SupplierDetailsComponent } from './components/supplier/supplier-details/supplier-details.component';
import { SupplierListComponent } from './components/supplier/supplier-list/supplier-list.component';
import { AddVehicleComponent } from './components/vehicle/add-vehicle/add-vehicle.component';
import { VehicleDetailComponent } from './components/vehicle/vehicle-detail/vehicle-detail.component';
import { ListVehicleComponent } from './components/vehicle/list-vehicle/list-vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCitiesComponent,
    CitiesDetailsComponent,
    CitiesListComponent,
    AddCustomersComponent,
    CustDetailsComponent,
    CustomersListComponent,
    AddCustomersComponent,
    AddSupplierComponent,
    SupplierDetailsComponent,
    SupplierListComponent,
    AddVehicleComponent,
    VehicleDetailComponent,
    ListVehicleComponent
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
