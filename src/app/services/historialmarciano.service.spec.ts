import { TestBed } from '@angular/core/testing';

import { HistorialmarcianoService } from './historialmarciano.service';

describe('HistorialmarcianoService', () => {
  let service: HistorialmarcianoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistorialmarcianoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
