import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync
} from '@angular/core/testing';

import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of, from } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

import { SeriesService } from '../series.service';
import { SeriesModule } from '../series.module';
import { CalculatorComponent } from './calculator.component';
import { Serie } from 'src/app/core/models/serie';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  const serie: Serie = {
    id: '1',
    imdbId: 'tt0944947',
    title: 'Game of Thrones',
    numberOfSeasons: 8,
    releaseDate: '2011-05-08'
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        SeriesService,
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: { id: '1' },
            snapshot: { data: serie }
          }
        }
      ],
      imports: [SeriesModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;    
    fixture.detectChanges();
  });

  xit('should create', fakeAsync(() => {
    tick();
    expect(component).toBeTruthy();
  }));
});
