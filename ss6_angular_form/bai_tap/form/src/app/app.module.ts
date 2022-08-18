import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormDangKyComponent } from './form-dang-ky/form-dang-ky.component';
import { FormDangNhapComponent } from './form-dang-nhap/form-dang-nhap.component';

@NgModule({
  declarations: [
    AppComponent,
    FormDangKyComponent,
    FormDangNhapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
