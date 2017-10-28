import { TestBed, inject } from '@angular/core/testing';

import { LigaService } from './liga.service';

describe('LigaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LigaService]
    });
  });

  it('should be created', inject([LigaService], (service: LigaService) => {
    expect(service).toBeTruthy();
  }));
});
