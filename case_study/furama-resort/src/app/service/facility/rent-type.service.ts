import { Injectable } from '@angular/core';
import {CustomerType} from '../../model/customer/CustomerType';
import {RentType} from '../../model/facility/RentType';

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
  constructor() { }
}
