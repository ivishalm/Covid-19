import { Component, OnInit } from '@angular/core';
import { CovidDataService } from './covid-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'COVID-19 Tracker';
  constructor(){}
  ngOnInit(){}

}
