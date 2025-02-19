import { TestBed } from '@angular/core/testing';

import { RodamientosService } from './rodamientos.service';

describe('RodamientosService', () => {
  let service: RodamientosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RodamientosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
