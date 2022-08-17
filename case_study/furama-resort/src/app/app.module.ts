import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {FacilityListComponent} from './facilitys/facility-list/facility-list.component';
import {FacilityCreateComponent} from './facilitys/facility-create/facility-create.component';
import {FacilityEditComponent} from './facilitys/facility-edit/facility-edit.component';
import {CustomerListComponent} from './customers/customer-list/customer-list.component';
import {CustomerCreateComponent} from './customers/customer-create/customer-create.component';
import {CustomerEditComponent} from './customers/customer-edit/customer-edit.component';
import {ContractListComponent} from './contracts/contract-list/contract-list.component';
import {ContractCreateComponent} from './contracts/contract-create/contract-create.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FacilityListComponent,
    FacilityCreateComponent,
    FacilityEditComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    ContractListComponent,
    ContractCreateComponent
  ],
  imports: [
    BrowserModule,
  AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
