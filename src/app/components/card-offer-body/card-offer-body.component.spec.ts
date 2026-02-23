import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOfferBodyComponent } from './card-offer-body.component';

describe('CardOfferBodyComponent', () => {
  let component: CardOfferBodyComponent;
  let fixture: ComponentFixture<CardOfferBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardOfferBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardOfferBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
