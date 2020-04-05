import { Component, OnInit } from '@angular/core';
import { CovidDataService } from '../covid-data.service';
import {map,filter} from 'rxjs/operators';
@Component({
  selector: 'app-overall-data',
  templateUrl: './overall-data.component.html',
  styleUrls: ['./overall-data.component.scss']
})
export class OverallDataComponent implements OnInit {
  isLoading=false;
covidStat=[];
  constructor(private covidData :CovidDataService) {}

  ngOnInit(): void {
    this.isLoading=true;
    this.covidData.getCovidData()
    .subscribe(response=>{
      this.covidStat =response['response'].filter(x=>x.country=='World');
       this.isLoading=false;
    })}

}
