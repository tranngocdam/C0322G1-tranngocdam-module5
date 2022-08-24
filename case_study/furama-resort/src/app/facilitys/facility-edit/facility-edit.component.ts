import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RentType} from '../RentType';
import {FacilityType} from '../FacilityType';
import {FacilityService} from '../facility.service';
import {RentTypeService} from '../rent-type.service';
import {FacilityTypeService} from '../facility-type.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {CustomerType} from '../../customers/customerType';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
    facilityForm: FormGroup;
    rentTypes: RentType[] = [];
    facilityTypes: FacilityType[] = [];

  constructor(private facilityService: FacilityService,
              private rentTypeService: RentTypeService,
              private facilityTypeService: FacilityTypeService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.id);
    const facility = this.facilityService.findById(id);
    this.facilityTypes = this.facilityTypeService.getAll();
    this.rentTypes = this.rentTypeService.getAll();
    this.facilityForm = new FormGroup({
      // id: new FormControl(facility.id),
      name: new FormControl(facility.name, [Validators.required]),
      area: new FormControl(facility.area, [Validators.required, Validators.pattern('^[0-9]{2,}$')]),
      cost: new FormControl(facility.cost, [Validators.required, Validators.pattern('^[0-9]{2,}$')]),
      maxPeople: new FormControl(facility.maxPeople, [Validators.required, Validators.pattern('^[0-9]{1,}$')]),
      rentTypeId: new FormControl(facility.rentTypeId, [Validators.required]),
      facilityTypeId: new FormControl(facility.facilityTypeId, [Validators.required]),
      standardRoom: new FormControl(facility.standardRoom, [Validators.required]),
      descriptionOtherConvenience: new FormControl(facility.descriptionOtherConvenience, [Validators.required]),
      poolArea: new FormControl(facility.poolArea, [Validators.required]),
      numberOfFloods: new FormControl(facility.numberOfFloods, [Validators.required]),
      facilityFree: new FormControl(facility.facilityFree, [Validators.required]),
      img: new FormControl(facility.img, [Validators.required])
    });
  }

    onSubmit(): void {
      this.facilityService.updateFacility(this.facilityForm.value);
      this.router.navigateByUrl('facilitys/facility-list');
      this.toastr.success('successfully!', 'Edit facility!');
    }

  compareRentType(r1: RentType, r2: RentType) {
    if ((r1 && r2) !== undefined) {
      return r1.id === r2.id;
    }
  }

  compareFacilityType(f1: FacilityType, f2: FacilityType) {
    if ((f1 && f2) !== undefined) {
      return f1.id === f2.id;
    }
  }
}
