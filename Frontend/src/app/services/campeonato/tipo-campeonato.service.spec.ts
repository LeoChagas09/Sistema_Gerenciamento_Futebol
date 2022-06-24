import { TestBed } from '@angular/core/testing';

import { TipoCampeonatoService } from './tipo-campeonato.service';

describe('TipoCampeonatoService', () => {
  let service: TipoCampeonatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoCampeonatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
