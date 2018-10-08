import { Component, OnInit } from '@angular/core';
import {Food} from "../Food";
import {FoodService} from "../food.service";

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  foods: Food[];

  getFoods(): void{
    this.foodService.getFoods()
      .subscribe(foods => this.foods = foods);
  }

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.getFoods();
  }

}
