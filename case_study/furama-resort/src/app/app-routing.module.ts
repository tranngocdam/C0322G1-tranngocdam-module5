import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FacilityListComponent} from './facilitys/facility-list/facility-list.component';
import {FacilityCreateComponent} from './facilitys/facility-create/facility-create.component';
import {FacilityEditComponent} from './facilitys/facility-edit/facility-edit.component';
import {CustomerListComponent} from './customers/customer-list/customer-list.component';
import {CustomerCreateComponent} from './customers/customer-create/customer-create.component';
import {CustomerEditComponent} from './customers/customer-edit/customer-edit.component';
import {ContractListComponent} from './contracts/contract-list/contract-list.component';
import {ContractCreateComponent} from './contracts/contract-create/contract-create.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'facility-list', component: FacilityListComponent},
  {path: 'facility-create', component: FacilityCreateComponent},
  {path: 'facility-edit', component: FacilityEditComponent},
  {path: 'customer-list', component: CustomerListComponent},
  {path: 'customer-create', component: CustomerCreateComponent},
  {path: 'customer-edit', component: CustomerEditComponent},
  {path: 'contract-list', component: ContractListComponent},
  {path: 'contract-create', component: ContractCreateComponent},
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
