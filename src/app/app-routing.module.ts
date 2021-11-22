import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractComponent } from './contract/contract.component';
import { FinalComponent } from './final/final.component';
import { FoodisfoodComponent } from './foodisfood/foodisfood.component';
import { HomeComponent } from './home/home.component';
import { TeamstimeComponent } from './teamstime/teamstime.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'rules',component:ContractComponent},
  {path:'teams',component:TeamstimeComponent},
  {path:'hidden',component:FoodisfoodComponent},
  {path:'final',component:FinalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
