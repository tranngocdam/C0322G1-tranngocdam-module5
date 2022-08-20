import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RentType} from '../../model/facility/RentType';
import {FacilityType} from '../../model/facility/FacilityType';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  // serviceForm = new FormGroup({
  //   name: new FormControl('', [Validators.required]),
  //   area: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{2,}$')]),
  //   cost: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{2,}$')]),
  //   maxPeople: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{1,}$')]),
  //   rentTypeId: new FormControl('', Validators.required),
  //   facilityTypeId: new FormControl('', Validators.required),
  //   standardRoom: new FormControl('', Validators.required),
  //   descriptionOtherConvenience: new FormControl('', Validators.required),
  //   poolArea: new FormControl('', Validators.required),
  //   numberOfFloods: new FormControl('', Validators.required),
  //   facilityFree: new FormControl('', Validators.required)
  // });
  constructor() { }

  ngOnInit(): void {
  }

}
