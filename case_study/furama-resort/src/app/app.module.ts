import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerComponent } from './customer/customer.component';
import { ContractComponent } from './contract/contract.component';
import { FacilityComponent } from './facility/facility.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { FacilityListComponent } from './facility/facility-list/facility-list.component';
import { FacilityCreateComponent } from './facility/facility-create/facility-create.component';
import { FacilityEditComponent } from './facility/facility-edit/facility-edit.component';
import { ContractListComponent } from './contract/contract-list/contract-list.component';
import { ContractEditComponent } from './contract/contract-edit/contract-edit.component';
import { ContractCreateComponent } from './contract/contract-create/contract-create.component';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CustomerComponent,
    ContractComponent,
    FacilityComponent,
    CustomerEditComponent,
    CustomerCreateComponent,
    FacilityListComponent,
    FacilityCreateComponent,
    FacilityEditComponent,
    ContractListComponent,
    ContractEditComponent,
    ContractCreateComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
