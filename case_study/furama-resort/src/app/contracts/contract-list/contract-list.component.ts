import { Component, OnInit } from '@angular/core';
import {Contract} from '../../model/contract/Contract';
import {ContractService} from '../../service/contract/contract.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contracts: Contract[] = [];
  constructor(private ContractService: ContractService) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.contracts = this.ContractService.getAll();
  }
}
