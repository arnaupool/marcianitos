import { TestBed } from '@angular/core/testing';

import { NavenodrizaService } from './navenodriza.service';

describe('NavenodrizaService', () => {
  let service: NavenodrizaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavenodrizaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
