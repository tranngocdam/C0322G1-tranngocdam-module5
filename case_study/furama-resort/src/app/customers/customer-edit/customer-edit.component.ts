import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  contractFrom = new FormGroup({
    code: new FormControl('', [Validators.required]),
    customer: new FormControl('', [Validators.required]),
    facilityId: new FormControl('', [Validators.required]),
    employee: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    deposit: new FormControl('', [Validators.required])
  });
  constructor() { }

  ngOnInit(): void {
  }

}
