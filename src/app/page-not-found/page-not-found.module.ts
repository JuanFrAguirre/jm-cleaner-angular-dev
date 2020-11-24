import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    PageNotFoundRoutingModule,
    MaterialModule
  ]
})
export class PageNotFoundModule { }
