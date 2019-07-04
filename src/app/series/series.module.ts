import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesListComponent } from './series-list/series-list.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [SeriesListComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [SeriesListComponent]
})
export class SeriesModule { }
