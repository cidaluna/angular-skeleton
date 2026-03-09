import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerComponent } from './banner.component';
import { IOfferBanner } from '../../interfaces/banner.interface';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  // 1. Crie um mock do banner para o teste
  const mockBanner: IOfferBanner = {
    image: {
      desktop: {
        url: 'https://example.com/desktop.jpg',
        width: 1920,
        height: 1080
      },
      tablet: {
        url: 'https://example.com/tablet.jpg',
        width: 1280,
        height: 720
      },
      mobile: {
        url: 'https://example.com/mobile.jpg',
        width: 640,
        height: 360
      }
    },
    id: '123',
    status: 'active',
    type: 'promo'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;

    // 2. IMPORTANTE: Passe o mock para o componente ANTES do detectChanges
    component.banner = mockBanner;

    fixture.detectChanges(); // Agora o template terá os dados e não dará erro
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
