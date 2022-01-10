import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Cities} from '../models/cities.model';

const baseUrl = 'http://localhost:7979/cities';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Cities[]>{
    return this.http.get<Cities[]>(`${baseUrl}/getAllCities`);

  }

  get(cityId: number): Observable<Cities>{
    return this.http.get(`${baseUrl}/${cityId}`);

  }

  create(data: any): Observable<any>{
    return this.http.post(`${baseUrl}/addCities`, data);
  }

  update(cityId: number, data: any): Observable<any>{
    return this.http.post(`${baseUrl}/${cityId}`, data);
  }

  delete(cityId: number): Observable<any>{
    return this.http.delete(`${baseUrl}/${cityId}`);
  }

  deleteAll(): Observable<any>{
    return this.http.delete(baseUrl);
  }

  findByName(cityName: string): Observable<Cities[]>{
    return this.http.get<Cities[]>(`${baseUrl}/getCitiesByName?cityName=${cityName}`);
  }
   
}
