import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { CalculatorComponent } from './calculator.component';
import { CalculatorResultComponent } from './calculator-result/calculator-result.component';

@NgModule({
  declarations: [CalculatorComponent, CalculatorResultComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule
  ]
})
export class CalculatorModule { }
