import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  serviceForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    area: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{2,}$')]),
    cost: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{2,}$')]),
    maxPeople: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{1,}$')]),
    rentTypeId: new FormControl('', Validators.required),
    facilityTypeId: new FormControl('', Validators.required),
    standardRoom: new FormControl('', Validators.required),
    descriptionOtherConvenience: new FormControl('', Validators.required),
    poolArea: new FormControl('', Validators.required),
    numberOfFloods: new FormControl('', Validators.required),
    facilityFree: new FormControl('', Validators.required)
  });
  constructor() { }

  ngOnInit(): void {
  }

}
