import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { SeriesListComponent } from './series-list.component';
import { FilterByTitlePipe } from './filter-by-title.pipe';

@NgModule({
  declarations: [SeriesListComponent, SearchComponent, FilterByTitlePipe],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SeriesListComponent]
})
export class SeriesListModule { }
