import { TestBed } from '@angular/core/testing';

import { ServicePageService } from './service-page.service';

describe('ServicePageService', () => {
  let service: ServicePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
