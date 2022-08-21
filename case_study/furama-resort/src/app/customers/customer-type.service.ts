import {Injectable} from '@angular/core';
import {CustomerType} from './customerType';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  customerType: CustomerType[] = [{
    id: 1,
    name: 'Diamond'
  }, {
    id: 2,
    name: 'Platinium'
  }, {
    id: 3,
    name: 'Gold'
  }, {
    id: 4,
    name: 'Sliver'
  }, {
    id: 5,
    name: 'Member'
  }];

  getAll() {
    return this.customerType;
  }
  constructor() {}
}
