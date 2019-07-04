import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeriesListComponent } from './series/series-list/series-list.component';

const routes: Routes = [
  {path: '**', component: SeriesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
