import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RentType} from '../RentType';
import {FacilityType} from '../FacilityType';
import {FacilityService} from '../facility.service';
import {RentTypeService} from '../rent-type.service';
import {FacilityTypeService} from '../facility-type.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  facilityForm: FormGroup;
  rentTypes: RentType[] = [];
  facilityTypes: FacilityType[] = [];

  constructor(private facilityService: FacilityService,
              private rentTypeService: RentTypeService,
              private facilityTypeService: FacilityTypeService,
              private router: Router,
              private toastr: ToastrService) {
  }
  ngOnInit(): void {
    this.rentTypes = this.rentTypeService.getAll();
    this.facilityTypes = this.facilityTypeService.getAll();
    this.facilityForm = new FormGroup({
        id: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required, Validators.pattern('^[A-Z]{1,}$')]),
        area: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{2,}$')]),
        cost: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{2,}$')]),
        maxPeople: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{1,}$')]),
        rentTypeId: new FormControl('', [Validators.required]),
        facilityTypeId: new FormControl('', [Validators.required]),
        standardRoom: new FormControl('', [Validators.required]),
        descriptionOtherConvenience: new FormControl('', [Validators.required]),
        poolArea: new FormControl('', [Validators.required]),
        numberOfFloods: new FormControl('', [Validators.required]),
        facilityFree: new FormControl('', [Validators.required]),
        img : new FormControl('', [Validators.required])
    });
  }
  submit() {
    const facility = this.facilityForm.value;
    this.facilityService.saveFacility(facility);
    this.facilityForm.reset();
    this.router.navigateByUrl('facilitys/facility-list');
    this.toastr.success('successfully!', 'Create facility!');
  }
}
