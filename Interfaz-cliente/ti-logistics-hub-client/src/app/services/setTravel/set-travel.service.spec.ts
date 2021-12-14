import { TestBed } from '@angular/core/testing';

import { SetTravelService } from './set-travel.service';

describe('SetTravelService', () => {
  let service: SetTravelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetTravelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
