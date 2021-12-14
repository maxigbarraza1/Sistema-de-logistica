import { TestBed } from '@angular/core/testing';

import { TravelstatesService } from './travelstates.service';

describe('TravelstatesService', () => {
  let service: TravelstatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelstatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
