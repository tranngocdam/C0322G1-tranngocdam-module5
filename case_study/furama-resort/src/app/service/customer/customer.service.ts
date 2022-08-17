import {Injectable} from '@angular/core';
import {Customer} from '../../model/customer/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = [{
    id: 1,
    name: 'Bảo Bình',
    dayOfBirth: '2010-10-21',
    gender: true,
    customerTypeId: {id: 2, name: ''},
    idCard: '3434343444',
    email: 'baobinh23@gmail.com',
    phoneNumber: '090212212',
    address: '34 Nam Cao'
  }, {
    id: 2,
    name: 'Lam Linh',
    dayOfBirth: '1990-03-22',
    gender: false,
    customerTypeId: {id: 4, name: ''},
    idCard: '2321579900',
    email: 'linh90@gmail.com',
    phoneNumber: '0912323122',
    address: '120 Âu Cơ'
  }, {
    id: 3,
    name: 'Chấn Hiệp',
    dayOfBirth: '1998-01-12',
    gender: true,
    customerTypeId: {id: 5, name: ''},
    idCard: '2324449900',
    email: 'hiep98@gmail.com',
    phoneNumber: '0912000122',
    address: '11 Phạm Như Xương'
  }];

  constructor() {
  }

  getAll() {
    return this.customers;
  }
}


