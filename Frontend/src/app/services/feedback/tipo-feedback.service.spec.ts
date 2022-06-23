import { TestBed } from '@angular/core/testing';

import { TipoFeedbackService } from './tipo-feedback.service';

describe('TipoFeedbackService', () => {
  let service: TipoFeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoFeedbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
