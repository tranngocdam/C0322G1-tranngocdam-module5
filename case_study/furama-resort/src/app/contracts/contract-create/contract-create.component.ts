import { Component, OnInit } from '@angular/core';
import {Customer} from '../../model/Customer';
import {Facility} from '../../model/Facility';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  // contractFrom = new FormGroup({
  //   code: new FormControl('', [Validators.required]),
  //   customerId: new FormControl('', [Validators.required]),
  //   facilityId: new FormControl('', [Validators.required]),
  //   startDate: new FormControl('', [Validators.required]),
  //   endDate: new FormControl('', [Validators.required]),
  //   deposit: new FormControl('', [Validators.required])
  // });

  constructor() { }

  ngOnInit(): void {
  }

}
