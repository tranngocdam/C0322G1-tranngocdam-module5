import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../customer.service';
import {CustomerTypeService} from '../customer-type.service';
import {CustomerType} from '../customerType';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerForm: FormGroup;
  customerType: CustomerType[] = [];
  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService) {
  }
  ngOnInit(): void {
    this.customerType = this.customerTypeService.getAll();
    this.customerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
        // Validators.pattern('^([A-Z][a-z]{1,})\\s([A-Z][a-z]{0,})+(\\s([A-Z][a-z]{0,}+))?$')
      customerTypeId: new FormControl('', [Validators.required]),
      dayOfBirth: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{9}$')]),
      phoneNumber: new FormControl('', [Validators.required,
        Validators.pattern('^(090)[0-9]{7}|(091)[0-9]{7}|((84)91)[0-9]{7}|((84)90)[0-9]{7}$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
    });
  }

  submit() {
    const customer = this.customerForm.value;
    this.customerService.saveCustomer(customer);
    this.customerForm.reset();
  }
}
