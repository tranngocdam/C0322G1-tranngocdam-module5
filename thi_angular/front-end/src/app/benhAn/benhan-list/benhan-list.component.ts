import {Component, OnInit} from '@angular/core';
import {BenhNhan} from '../../model/benh-nhan';
import {BenhAn} from '../../model/benh-an';
import {BenhAnService} from '../../service/benh-an.service';
import {BenhNhanService} from '../../service/benh-nhan.service';

@Component({
  selector: 'app-benhan-list',
  templateUrl: './benhan-list.component.html',
  styleUrls: ['./benhan-list.component.css']
})
export class BenhanListComponent implements OnInit {
  benhnhans: BenhNhan[] = [];
  benhans: BenhAn [] = [];

  constructor(private benhAnService: BenhAnService,
              private benhNhanService: BenhNhanService) {
  }
  idModal: string;
  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.benhAnService.getAll().subscribe(benhAn => {
      this.benhans = benhAn;
    });
    this.benhNhanService.getAll().subscribe(benhnhan => {
      this.benhnhans = benhnhan;
    });
  }
  deleteCustomer(id: string) {
    this.benhAnService.deleteCustomer(id).subscribe(() => {
      this.getAll();
    }, e => {
      console.log(e);
    });
  }
  getDataForModal(c: BenhAn) {
    this.idModal = c.maBenhAn;
  }
}
