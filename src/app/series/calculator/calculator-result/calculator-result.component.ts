import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calculator-result',
  templateUrl: './calculator-result.component.html'
})
export class CalculatorResultComponent implements OnInit {
  @Input() startDateToWatch: Date;
  @Input() userIsLateToStart: boolean;
  @Input() finishDate: Date;
  @Input() selectedDate: Date;
  
  constructor() { }

  ngOnInit() {
  }

}
