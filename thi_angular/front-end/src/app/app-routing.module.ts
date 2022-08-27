import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BenhanListComponent} from './benhAn/benhan-list/benhan-list.component';
import {BenhanCreatComponent} from './benhAn/benhan-creat/benhan-creat.component';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'list'
  },
  {
    path: 'list', component: BenhanListComponent
  }, {
    path: 'create', component: BenhanCreatComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)],
  ]
})
export class AppRoutingModule {
}
