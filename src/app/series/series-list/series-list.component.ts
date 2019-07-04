import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/serie';
import { SeriesService } from '../series.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.scss']
})
export class SeriesListComponent implements OnInit {
  series: Serie[];
  
  constructor(private seriesService: SeriesService) {}

  ngOnInit() {
    this.loadSeries();    
  }

  loadSeries() {
    this.seriesService.listSeries().subscribe(serie => {
      this.series = serie;        
    });
  }
}
