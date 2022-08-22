import {Component, OnInit} from '@angular/core';
import {Facility} from '../Facility';
import {FacilityService} from '../facility.service';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facility: Facility[] = [];
  idModal: number;
  nameModal: string;
  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.facility = this.facilityService.getAll();
  }
  getModal(id: number, name: string) {
    this.idModal = id;
    this.nameModal = name ;
  }
}
