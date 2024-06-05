import { TestBed } from '@angular/core/testing';

import { HosingService } from './housing.service';

describe('HosingService', () => {
  let service: HosingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HosingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
