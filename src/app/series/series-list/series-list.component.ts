import { Component, OnInit } from '@angular/core';
import { Serie } from '../../core';
import { SeriesService } from '../series.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.scss']
})
export class SeriesListComponent implements OnInit {
  series: Serie[];
  
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
