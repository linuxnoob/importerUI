import { Component, OnInit } from '@angular/core';
import { Cities } from './models/cities.model';
import { CitiesService } from './services/cities.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.router.events.subscribe(value => {
      this.getCities();
    });
  }
  title = 'importerUI-client';
  cities! : Cities[];

  constructor(private router: Router, private citiesServices : CitiesService){

  }

  getCities(){
    this.citiesServices.getAll().subscribe(data => {this.cities = data;});
  }

  addCities(): void{
    this.router.navigate(['addCities']).then((e)=>{
      if(e){
        console.log("Navigation success ");
      }else{
        console.log("Navigation is failed");
      }
    });
  };

}
