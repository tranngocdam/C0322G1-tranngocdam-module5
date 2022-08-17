import { Component, OnInit } from '@angular/core';
import {Facility} from '../../model/facility/Facility';
import {FacilityService} from '../../service/facility/facility.service';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilitys: Facility[] = [];
  constructor(private FacilityService: FacilityService) {}

  ngOnInit(): void {
    this.getAll();
  }
private getAll() {
    this.facilitys = this.FacilityService.getAll();
}
}
