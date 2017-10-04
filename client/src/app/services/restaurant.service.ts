import { Injectable } from '@angular/core';

@Injectable()
export class RestaurantService {

  constructor() {}

  getRestaurants(){
    return [
      { name: 'El Paraiso'},
      { name: 'El paraiso'},
      { name: 'O portinho'},
      { name: 'La cocinona'}
    ]
  }
}
