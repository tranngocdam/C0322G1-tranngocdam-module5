import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/customer/CustomerType';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  // cusomterValilator = new FormGroup({
  //   name: new FormControl('', [Validators.required, Validators.pattern('([A-Z][a-z]{1,})\\s([A-Z][a-z]{0,})+(\\s([A-Z][a-z]{0,}+))?')]),
  //   dayOfBirth: new FormControl('', [Validators.required]),
  //   gender: new FormControl('', [Validators.required]),
  //   idCard: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{9}$')]),
  //   phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^(090)[0-9]{7}|(091)[0-9]{7}|((84)91)[0-9]{7}|((84)90)[0-9]{7}$')]),
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   address: new FormControl('', [Validators.required])
  // });
  constructor() {
  }

  ngOnInit(): void {
  }
}
