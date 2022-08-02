/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JogosService } from './jogos.service';

describe('Service: Jogos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JogosService]
    });
  });

  it('should ...', inject([JogosService], (service: JogosService) => {
    expect(service).toBeTruthy();
  }));
});
