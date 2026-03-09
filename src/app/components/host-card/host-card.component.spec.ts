import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostCardComponent } from './host-card.component';
import { provideStore } from '@ngxs/store';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { HostOfferState } from '../../store/host-offer.state';

describe('HostCardComponent', () => {
  let component: HostCardComponent;
  let fixture: ComponentFixture<HostCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostCardComponent],
      providers: [
        // 1. Fornece o Store com os seus States necessários para o teste
        provideStore([HostOfferState]),

        // 2. Como seu State provavelmente usa o HostOfferService,
        // precisamos do HttpClient aqui também
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
