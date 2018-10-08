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

  selectedFood: Food;

  onSelect(food: Food): void{
    this.selectedFood = food;
  }

  getFoods(): void{
    this.foodService.getHeroes()
      .subscribe(foods => this.foods = foods);
  }

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.getFoods();
  }

}
