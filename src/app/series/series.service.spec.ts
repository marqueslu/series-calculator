import { TestBed } from '@angular/core/testing';

import { SeriesService } from './series.service';
import { HttpClientModule } from '@angular/common/http';

describe('SeriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: SeriesService = TestBed.get(SeriesService);
    expect(service).toBeTruthy();
  });
});
