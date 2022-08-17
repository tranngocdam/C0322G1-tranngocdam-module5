import { Injectable } from '@angular/core';
import {CustomerType} from '../../model/customer/CustomerType';

@Injectable({
  providedIn: 'root'
})
export class CustomertypeService {
  customerTypes: CustomerType[] = [{
    id: 1 , name: 'Diamond'
  }, {
    id: 2 , name: 'Platinium'
  }, {
    id: 3, name: 'Gold'
  }, {
    id: 4, name: 'Silver'
  }, {
    id: 5, name: 'Member'
  }];
  constructor() { }
}
