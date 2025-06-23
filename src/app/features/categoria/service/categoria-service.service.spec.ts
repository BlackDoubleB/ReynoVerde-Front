import { TestBed } from '@angular/core/testing';

import { CategoriaServiceService } from './categoria-service.service';

describe('CategoriaServiceService', () => {
  let service: CategoriaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
