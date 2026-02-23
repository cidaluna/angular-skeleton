import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAnimatedSplitBodyComponent } from './card-animated-split-body.component';

describe('CardAnimatedSplitBodyComponent', () => {
  let component: CardAnimatedSplitBodyComponent;
  let fixture: ComponentFixture<CardAnimatedSplitBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAnimatedSplitBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAnimatedSplitBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
