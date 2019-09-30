import { TestBed } from '@angular/core/testing';

import { TimeDateService } from './time-date.service';

describe('TimeDateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeDateService = TestBed.get(TimeDateService);
    expect(service).toBeTruthy();
  });
});
