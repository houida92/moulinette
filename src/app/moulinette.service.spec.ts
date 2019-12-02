import { TestBed } from '@angular/core/testing';

import { MoulinetteService } from './moulinette.service';

describe('MoulinetteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoulinetteService = TestBed.get(MoulinetteService);
    expect(service).toBeTruthy();
  });
});
