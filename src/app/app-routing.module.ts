import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverallDataComponent } from './overall-data/overall-data.component';
import { CountryDataComponent } from './country-data/country-data.component';


const routes: Routes = [
  {path:'overall',component:OverallDataComponent},
  {path:'country-wise-data',component:CountryDataComponent},
  {path:'',redirectTo:'/overall',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
