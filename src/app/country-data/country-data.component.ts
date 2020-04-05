import { Component, OnInit, ViewChild } from "@angular/core";
import { CovidDataService } from "../covid-data.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort, MatSortable } from "@angular/material/sort";

@Component({
  selector: "app-country-data",
  templateUrl: "./country-data.component.html",
  styleUrls: ["./country-data.component.scss"]
})
export class CountryDataComponent implements OnInit {
  displayedColumns: string[] = [
    "country",
    "total_cases",
    "new_cases",
    "total_deaths",
    "new_deaths",
    "total_recovered",
    "active_cases",
    "critical"
  ];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  globalData = [];
  filteredData = [];
  worldData = [];
  countryData=[];
  isLoading = false;
  constructor(private covidData: CovidDataService) {}
  ngOnInit(): void {
    this.sort.sort(({ id: 'total_cases', start: 'desc'}) as MatSortable);
    this.isLoading = true;
    // getting global data
    this.covidData.getCovidData().subscribe(response => {
      this.globalData = response["response"];
      this.setDataToTable();
      this.setWorldData();
      this.getCountryData();
      this.dataSource = new MatTableDataSource(this.countryData);
      this.dataSource.sort = this.sort;
      this.isLoading = false;
    });
  }

  setWorldData() {
    this.worldData = this.filteredData.filter(data => data.country === "World");
  }
  getCountryData(){
    this.countryData=this.filteredData.filter(data => data.country !== "All");
  }
  setDataToTable() {
    this.filteredData = this.globalData.map(data => {
      return {
        country: data.country,
        total_cases: data.cases.total,
        new_cases: data.cases.new,
        total_deaths: data.deaths.total,
        new_deaths: data.deaths.new,
        total_recovered: data.cases.recovered,
        active_cases: data.cases.active,
        critical: data.cases.critical
      };
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
