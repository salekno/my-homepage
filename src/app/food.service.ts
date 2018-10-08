import { Injectable } from '@angular/core';
import {Food} from "./Food";
import {FOODS} from "./mock-food";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  getHeroes(): Observable<Food[]>{
    return of(FOODS);
  }

  constructor() { }
}
