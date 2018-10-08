import { Injectable } from '@angular/core';
import {Food} from "./Food";
import {FOODS} from "./mock-food";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  getHeroes(): Observable<Food[]>{
    //TODO: send the message _after_ fetching the heroes
    this.messageService.add("HeroService: fetched heroes");
    return of(FOODS);
  }

  constructor(private messageService: MessageService) { }
}
