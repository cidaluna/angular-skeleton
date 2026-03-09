import { TestBed } from '@angular/core/testing';

import { BannerService } from './banner.service';
import { provideHttpClient } from '@angular/common/http';

describe('BannerService', () => {
  let service: BannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BannerService,
        provideHttpClient() // Isso resolve o erro do HttpClient
      ]
    });
    service = TestBed.inject(BannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
