import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    CoreModule,
    MaterialModule,
  ]
})
export class ProductsModule { }
