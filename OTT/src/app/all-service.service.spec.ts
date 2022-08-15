import { TestBed } from '@angular/core/testing';

import { AllServiceService } from './all-service.service';

describe('AllServiceService', () => {
  let service: AllServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
