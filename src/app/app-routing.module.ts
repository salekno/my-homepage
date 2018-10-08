import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from "@angular/router";
import {FoodComponent} from "./food/food.component";

const routes: Routes = [
  { path: "foods", component: FoodComponent}
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})



export class AppRoutingModule {

}
