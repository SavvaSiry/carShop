import { Component, OnInit } from '@angular/core';
import {CarsApi} from '../../api';
import {Car} from "../../moduls/car";
import { Observable, of } from 'rxjs'

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  cars = CarsApi.cars
  constructor() {}

  ngOnInit(): void {
  }
}
