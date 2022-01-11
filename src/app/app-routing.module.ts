import { NgModule } from '@angular/core';
import { RouterModule, Routes,  } from '@angular/router';
import { CitiesDetailsComponent } from './components/cities/cities-details/cities-details.component';
import { CitiesListComponent } from './components/cities/cities-list/cities-list.component';
import { AddCitiesComponent } from './components/cities/add-cities/add-cities.component';

const routes: Routes = [
  {path:'', redirectTo: 'cities',pathMatch: 'full'},
  {path: 'citieslist', component: CitiesListComponent},
  {path: 'cities/:id', component: CitiesDetailsComponent},
  {path: 'addCities', component : AddCitiesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
