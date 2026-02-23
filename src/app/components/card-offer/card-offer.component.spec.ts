import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOfferComponent } from './card-offer.component';

describe('CardOfferComponent', () => {
  let component: CardOfferComponent;
  let fixture: ComponentFixture<CardOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardOfferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
