import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CovidDataService {

  constructor(private http: HttpClient) { }

  getCovidData(){
    return this.http.get('https://covid-193.p.rapidapi.com/statistics',{
      headers: new HttpHeaders({
        'X-RapidAPI-Key': environment.apiKey,
      })
    });
  }
}
