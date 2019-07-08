import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { CalculatorComponent } from './calculator/calculator.component';
import { SeriesListModule } from './series-list/series-list.module';

@NgModule({
  declarations: [CalculatorComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,    
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    SeriesListModule
  ]
})
export class SeriesModule { }
