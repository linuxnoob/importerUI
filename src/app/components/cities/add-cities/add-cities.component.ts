import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators,AbstractControl, FormControl,ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-addCities',
  templateUrl: './add-cities.component.html',
  styleUrls: ['./add-cities.component.css']
})
export class AddCitiesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private citiesService: CitiesService) {
  }

  addForm: FormGroup = new FormGroup({
    cityId : new FormControl('cityId'),
    cityName: new FormControl('cityName'),
    stateProvinceId: new FormControl('stateProvinceId'),
    location: new FormControl(''),
    latestRecordedPopulation: new FormControl('latestRecordedPopulation'),
    lastEditedBy: new FormControl('lastEditedBy'),
    validFrom :new FormControl('validFrom'),
    validTo :new FormControl('validTo')
  });
  submitted = false;


  ngOnInit() {
    this.addForm = this.formBuilder.group({
      cityId: [],
      cityName: ['', Validators.required],
      stateProvinceId: [],
      location : [],
      latestRecordedPopulation:[],
      lastEditedBy :[],
      validFrom :[],
      validTo :[]
    });

  }

  onSubmit() {
    this.citiesService.create(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['addCities']);
      });
  }
}