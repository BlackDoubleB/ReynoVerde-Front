import { TestBed } from '@angular/core/testing';

import { ProductoServiceService } from './producto-service.service';

describe('ProductoServiceService', () => {
  let service: ProductoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
