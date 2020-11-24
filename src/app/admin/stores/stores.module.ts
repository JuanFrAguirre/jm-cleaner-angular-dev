import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoresRoutingModule } from './stores-routing.module';
import { StoreComponent } from './store/store.component';
import { StoreListComponent } from './store-list/store-list.component';
import { StoresComponent } from './stores.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [StoreComponent, StoreListComponent, StoresComponent],
  imports: [
    CommonModule,
    StoresRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class StoresModule { }
