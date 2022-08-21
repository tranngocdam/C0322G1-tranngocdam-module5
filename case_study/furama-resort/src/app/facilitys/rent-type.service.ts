import { Injectable } from '@angular/core';
import {RentType} from './RentType';

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {
  rentTypes: RentType[] = [{
    id: 1 , name: 'year'
  }, {
    id: 2 , name: 'month'
  }, {
    id: 3, name: 'day'
  }, {
    id: 4, name: 'hour'
  }];
  getAll() {
    return this.rentTypes;
  }
  constructor() { }
}
