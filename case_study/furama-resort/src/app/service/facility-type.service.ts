import { Injectable } from '@angular/core';
import {CustomerType} from '../model/CustomerType';

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {
  customerTypes: CustomerType[] = [{
    id: 1 , name: 'Room'
  }, {
    id: 2 , name: 'House'
  }, {
    id: 3, name: 'Villa'
  }];
  constructor() { }
}
