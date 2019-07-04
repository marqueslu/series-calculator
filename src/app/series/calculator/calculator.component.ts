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
  private idSerie: string;
  serie: Serie;

  constructor(private seriesService: SeriesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.idSerie = paramMap.get('id');
      this.seriesService.getSerie(this.idSerie).subscribe(serieData => {
        this.serie = serieData;
        console.log(this.serie);
      })
      
    });
  }


}
