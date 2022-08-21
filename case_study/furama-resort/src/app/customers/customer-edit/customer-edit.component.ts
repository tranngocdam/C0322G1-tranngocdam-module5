import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../customer.service';
import {CustomerType} from '../customerType';
import {CustomerTypeService} from '../customer-type.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm: FormGroup;
  customerType: CustomerType[] = [];
  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.id);
    const customer = this.customerService.findById(id);
    this.customerType = this.customerTypeService.getAll();
    this.customerForm = new FormGroup({
      id: new FormControl(customer.id),
      customerTypeId: new FormControl(customer.customerTypeId),
      name: new FormControl(customer.name),
      dayOfBirth: new FormControl(customer.dayOfBirth),
      gender: new FormControl(customer.gender),
      idCard: new FormControl(customer.idCard),
      phoneNumber: new FormControl(customer.phoneNumber),
      email: new FormControl(customer.email),
      address: new FormControl(customer.address),
    });
  }

  onSubmit() {
    this.customerService.updateCustomer(this.customerForm.value);
    this.router.navigateByUrl('customers/customer-list');
  }
}
