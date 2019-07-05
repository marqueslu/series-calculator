import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SeriesService } from '../series.service';
import { Serie } from 'src/app/models/serie';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  idSerie: string;
  serie: Serie;

  constructor(private seriesService: SeriesService, private route: ActivatedRoute) { }

  ngOnInit() {        
    this.serie = this.route.snapshot.data["serie"];    
  }
}
