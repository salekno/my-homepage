import { Component, OnInit, Input } from '@angular/core';
import {Food} from '../food';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {FoodService} from "../food.service";

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {

  @Input() food: Food;

  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getFood();
  }

  getFood(): void{
    const id = +this.route.snapshot.paramMap.get("id");
    this.foodService.getFood(id)
      .subscribe(food => this.food = food);
  }

}
