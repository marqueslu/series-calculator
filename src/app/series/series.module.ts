import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SeriesListComponent } from './series-list/series-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CalculatorComponent } from './calculator/calculator.component';
import { RouterModule } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [SeriesListComponent, CalculatorComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,    
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
  ],
  exports: [SeriesListComponent]
})
export class SeriesModule { }
