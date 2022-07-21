import {Car} from "./moduls/car";
import {Observable, tap} from "rxjs";

export class CarsApi{
  public static cars: Observable<Car[]> = new Observable<Array<Car>>();

  static get_cars(){
    return this.cars;
  }

  static api_clear() {
    CarsApi.cars = new Observable<Array<Car>>();
  }

  static api_add(car: Car) {
    CarsApi.cars.pipe(tap(usersList => {
      usersList.push(car);
    }));
  }
  static api_length() {
    return CarsApi.cars.pipe(tap(usersList => {
      usersList.toString();
    }));
  }
}
(window as any).api_clear = CarsApi.api_clear;
(window as any).api_add = CarsApi.api_add;
(window as any).api_length = CarsApi.api_length;

