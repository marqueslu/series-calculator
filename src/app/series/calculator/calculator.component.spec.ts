import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { SeriesService } from '../series.service';
import { of, from } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { SeriesModule } from '../series.module';
import { Serie } from 'src/app/models/serie';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  const serie: Serie = {"id":"1","imdbId":"tt0944947","title":"Game of Thrones","numberOfSeasons":8,"releaseDate":"2011-05-08"};
  beforeEach(async(() => {
    TestBed.configureTestingModule({      
      providers: [SeriesService, {
        provide: ActivatedRoute,
        
        useValue: {
          snapshot: {data: serie},        
          // paramMap: of(convertToParamMap({id: 2}))
          // paramMap: of({id: "1"})
        }
      }
      ],
      imports: [SeriesModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', fakeAsync(() => {
    tick();
    expect(component).toBeTruthy();
  }));

});
