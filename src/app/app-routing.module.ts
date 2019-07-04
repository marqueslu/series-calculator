import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeriesListComponent } from './series/series-list/series-list.component';
import { CalculatorComponent } from './series/calculator/calculator.component';
import { SeriesListResolver } from './series/series-list/series-list.resolver';

const routes: Routes = [
  {path: '', component: SeriesListComponent, resolve: {series: SeriesListResolver}},
  {path: 'serie/:id', component: CalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
