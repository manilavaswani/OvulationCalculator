import { TestBed } from '@angular/core/testing';

import { MenstrualCycleService } from './menstrual-cycle.service';

describe('MenstrualCycleService', () => {
  let service: MenstrualCycleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenstrualCycleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
