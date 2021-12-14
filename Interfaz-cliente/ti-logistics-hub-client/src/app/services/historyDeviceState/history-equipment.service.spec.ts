import { TestBed } from '@angular/core/testing';

import { HistoryEquipmentService } from './history-equipment.service';

describe('HistoryEquipmentService', () => {
  let service: HistoryEquipmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryEquipmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
