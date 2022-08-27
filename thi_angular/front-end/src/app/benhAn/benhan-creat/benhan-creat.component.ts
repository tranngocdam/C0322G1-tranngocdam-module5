import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BenhNhan} from '../../model/benh-nhan';
import {BenhAnService} from '../../service/benh-an.service';
import {BenhNhanService} from '../../service/benh-nhan.service';
import {Router, Routes} from '@angular/router';

@Component({
  selector: 'app-benhan-creat',
  templateUrl: './benhan-creat.component.html',
  styleUrls: ['./benhan-creat.component.css']
})
export class BenhanCreatComponent implements OnInit {
  benhanForm: FormGroup = new FormGroup({
    maBenhAn: new FormControl(''),
    benhNhan: new FormControl(''),
    ngayNhapVien: new FormControl(''),
    ngayRaVien: new FormControl(''),
    liDo: new FormControl(''),
    phuongPhap: new FormControl(''),
    bacSi: new FormControl('')
  });
  benhNhan: BenhNhan[] = [];

  constructor(private benhAnService: BenhAnService,
              private benhNhanService: BenhNhanService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getBenhNhan();
  }

  submit() {
    const benhan = this.benhanForm.value;
    this.benhNhanService.findById(benhan.benhNhan).subscribe(benhNhan => {
      benhan.benhNhan = {
        tenBenhNhan: benhNhan.tenBenhNhan,
        maBenhNhan: benhNhan.maBenhNhan
      };
      this.benhAnService.saveBenhAn(benhan).subscribe(() => {
        alert('Thêm mới thành công');
        this.benhanForm.reset();
        this.router.navigateByUrl('list');
      }, e => console.log(e));
    });
  }

  getBenhNhan() {
    this.benhNhanService.getAll().subscribe(benhNhan => {
      this.benhNhan = benhNhan;
    });
  }
}
