import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesFormComponent } from './components/sales-form/sales-form.component';

const routes: Routes = [
  {
    path: '',
    component: SalesFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
