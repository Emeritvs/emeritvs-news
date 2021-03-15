import { TestBed } from '@angular/core/testing';

import { AlertProviderService } from './alert-provider.service';

describe('AlertProviderService', () => {
  let service: AlertProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
