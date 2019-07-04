import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesListComponent } from './series-list/series-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CalculatorComponent } from './calculator/calculator.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [SeriesListComponent, CalculatorComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [SeriesListComponent]
})
export class SeriesModule { }
