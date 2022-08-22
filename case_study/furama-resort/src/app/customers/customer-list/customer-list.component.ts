import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';
import {CustomerService} from '../customer.service';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];

  idModal: number;
  nameModal: string;
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.getAll();
  }
   getAll() {
    this.customers = this.customerService.getAll();
  }
  getDataForModal(id: number, name: string) {
    this.idModal = id;
    this.nameModal = name;
  }

}
