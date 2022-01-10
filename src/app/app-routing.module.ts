import { NgModule } from '@angular/core';
import { RouterModule, Routes,  } from '@angular/router';
import { CitiesDetailsComponent } from './components/cities/cities-details/cities-details.component';
import { CitiesListComponent } from './components/cities/cities-list/cities-list.component';
import { AddCitiesComponent } from './components/cities/add-cities/add-cities.component';
import { AddCustomersComponent } from './components/customers/add-customers/add-customers.component';
import { CustDetailsComponent } from './components/customers/cust-details/cust-details.component';
import { CustomersListComponent } from './components/customers/customers-list/customers-list.component';

const routes: Routes = [
  {path:'', redirectTo: 'cities',pathMatch: 'full'},
  {path: 'citieslist', component: CitiesListComponent},
  {path: 'cities/:id', component: CitiesDetailsComponent},
  {path: 'addCities', component : AddCitiesComponent},
  {path:'', redirectTo: 'customers',pathMatch: 'full'},
  {path: 'customerList', component: CustomersListComponent},
  {path: 'customers/:id', component: CustDetailsComponent},
  {path: 'addCustomers', component : AddCustomersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
