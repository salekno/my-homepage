import { Injectable } from '@angular/core';
import {Food} from "./Food";
import {FOODS} from "./mock-food";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  getFoods(): Observable<Food[]>{
    //TODO: send the message _after_ fetching the heroes
    this.messageService.add("HeroService: fetched heroes");
    return of(FOODS);
  }

  getFood(id: number): Observable<Food>{
    //TODO: send the message _after_ fetching the food
    this.messageService.add("FoodService: fetched food id=${id}");
    return of(FOODS.find(food => food.id === id));
  }

  constructor(private messageService: MessageService) { }
}
