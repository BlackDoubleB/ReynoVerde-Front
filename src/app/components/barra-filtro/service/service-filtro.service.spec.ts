import { TestBed } from '@angular/core/testing';

import { ServiceFiltroService } from './service-filtro.service';

describe('ServiceFiltroService', () => {
  let service: ServiceFiltroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceFiltroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
