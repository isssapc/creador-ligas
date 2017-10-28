import { TestBed, inject } from '@angular/core/testing';

import { TemporadaService } from './temporada.service';

describe('TemporadaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemporadaService]
    });
  });

  it('should be created', inject([TemporadaService], (service: TemporadaService) => {
    expect(service).toBeTruthy();
  }));
});
