import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoresRoutingModule } from './stores-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { StoresComponent } from './components/stores/stores.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
  StoresComponent],
  imports: [
    CommonModule,
    StoresRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class StoresModule { }
