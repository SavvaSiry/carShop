import {Car} from "../moduls/car";

export class ApiService {

  public static carsArray: Array<Car> = new Array<Car>({id: 1, name: 'Hello', price: 'word!'});

  static get_cars() {
    return ApiService.carsArray;
  }

  static api_clear() {
    ApiService.carsArray = [];
  }

  static api_add(car: Car) {
    ApiService.carsArray.push(car);
  }

  static api_length() {
    return ApiService.carsArray.length;
  }

}

(window as any).api_clear = ApiService.api_clear;
(window as any).api_add = ApiService.api_add;
(window as any).api_length = ApiService.api_length;
