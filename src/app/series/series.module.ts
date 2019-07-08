import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { CalculatorComponent } from './calculator/calculator.component';
import { SeriesListModule } from './series-list/series-list.module';
import { CalculatorResultComponent } from './calculator/calculator-result/calculator-result.component';
import { CalculatorModule } from './calculator/calculator.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,        
    SeriesListModule,
    CalculatorModule
  ]
})
export class SeriesModule { }
