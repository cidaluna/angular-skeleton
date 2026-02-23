import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAnimatedSummaryBodyComponent } from './card-animated-summary-body.component';

describe('CardAnimatedSummaryBodyComponent', () => {
  let component: CardAnimatedSummaryBodyComponent;
  let fixture: ComponentFixture<CardAnimatedSummaryBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAnimatedSummaryBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAnimatedSummaryBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
