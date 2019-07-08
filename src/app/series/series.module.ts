import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { SeriesListModule } from './series-list/series-list.module';
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
