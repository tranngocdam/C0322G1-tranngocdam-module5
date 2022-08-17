import { Injectable } from '@angular/core';
import {Facility} from '../../model/facility/Facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facility: Facility[] = [{
    id : 1,
    name : 'House',
    area : 56,
    cost : '563$',
    maxPeople : 5,
    rentTypeid : {id : 2, name : 'month'},
    facilityTypeId : {id : 2, name: 'house'},
    standardRoom : 'vip',
    descriptionOtherConvenience : 'có hồ bơi',
    poolArea : 32,
    numberOfFloods : 3 ,
    facilityFree : 'coca'
  }, {
    id : 2,
    name : 'Villa',
    area : 87,
    cost : '869$',
    maxPeople : 13,
    rentTypeid : {id : 3, name : 'day'},
    facilityTypeId : {id : 3, name: 'villa'},
    standardRoom : 'normal',
    descriptionOtherConvenience : 'có lò nướng',
    poolArea : 41,
    numberOfFloods : 4 ,
    facilityFree : 'tiger beer'
  }];
  constructor() { }
  getAll() {
    return this.facility;
  }
}
