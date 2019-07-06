import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesListComponent } from './series-list.component';
import { SeriesService } from '../series.service';
import { SeriesModule } from '../series.module';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SeriesListResolver } from './series-list.resolver';
import { of } from 'rxjs';
import { Serie } from 'src/app/core/models/serie';

describe('SeriesListComponent', () => {
  let component: SeriesListComponent;
  let fixture: ComponentFixture<SeriesListComponent>;
  const routes: Routes = [
    {path: '', component: SeriesListComponent, resolve: {series: SeriesListResolver}}    
  ];

  const series: Serie[] = [{"id":"1","imdbId":"tt0944947","title":"Game of Thrones","numberOfSeasons":8,"releaseDate":"2011-05-08"}];

  beforeEach(async(() => {
    TestBed.configureTestingModule({         
      imports: [SeriesModule, RouterTestingModule],
      providers: [SeriesService, {
        provide: ActivatedRoute, useValue: {
          snapshot: {data: series}
        }
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
