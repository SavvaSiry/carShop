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

  cars$: Observable<Car[]> | undefined;

  constructor() {

  }

  ngOnInit(): void {
    this.cars$ = of(ApiService.get_cars());
  }

  public trackItem (index: number, item: Car) {
    return item.id;
  }

}
