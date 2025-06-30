import { TestBed } from '@angular/core/testing';

import { ClimaServiceService } from './clima-service.service';

describe('ClimaServiceService', () => {
  let service: ClimaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClimaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
