import { TestBed } from '@angular/core/testing';

import { MarcianoService } from './marciano.service';

describe('MarcianoService', () => {
  let service: MarcianoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarcianoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
