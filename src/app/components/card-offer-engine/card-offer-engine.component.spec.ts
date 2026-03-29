import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOfferEngineComponent } from './card-offer-engine.component';

describe('CardOfferEngineComponent', () => {
  let component: CardOfferEngineComponent;
  let fixture: ComponentFixture<CardOfferEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardOfferEngineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardOfferEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
