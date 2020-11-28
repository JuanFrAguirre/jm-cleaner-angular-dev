import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, SpinnerComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    NgbModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MaterialModule,
    FlexLayoutModule,
    NgbModule,
    FormsModule,
    SpinnerComponent
  ]
})
export class SharedModule { }
