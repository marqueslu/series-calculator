import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SeriesService } from '../series.service';
import { Serie } from '../../core';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html'
})
export class SeriesListComponent implements OnInit {
  series: Serie[];
  filter: string = '';

  constructor(private seriesService: SeriesService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {    
    this.series = this.activatedRoute.snapshot.data.series;
  }

  loadSeries() {
    this.seriesService.listSeries().subscribe(serie => {
      this.series = serie;        
    });
  }
}
