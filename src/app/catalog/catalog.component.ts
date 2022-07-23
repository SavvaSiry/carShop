import {Component, OnInit} from '@angular/core';

import {Observable, of} from 'rxjs'
import {ApiService} from "../api.service";
import {Car} from "../../moduls/car";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  // cars$: Observable<Car[]> | undefined;
  // declare cars$: Array<Car>;
  private static cars$: Array<Car>;

  cars$ = CatalogComponent.cars$;
  public api: ApiService = new ApiService();

  // constructor(public service: ApiService) {
  // }

  ngOnInit(): void {
  }

  public trackItem (index: number, item: Car) {
    return item.id;
  }

  static addCar() {
    this.cars$ = ApiService.carsArray;
  }

}
