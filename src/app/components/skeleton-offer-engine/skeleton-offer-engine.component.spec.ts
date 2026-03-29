import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonOfferEngineComponent } from './skeleton-offer-engine.component';

describe('SkeletonOfferEngineComponent', () => {
  let component: SkeletonOfferEngineComponent;
  let fixture: ComponentFixture<SkeletonOfferEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonOfferEngineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonOfferEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
