import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonOfferEngine2Component } from './skeleton-offer-engine-2.component';

describe('SkeletonOfferEngine2Component', () => {
  let component: SkeletonOfferEngine2Component;
  let fixture: ComponentFixture<SkeletonOfferEngine2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonOfferEngine2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonOfferEngine2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
