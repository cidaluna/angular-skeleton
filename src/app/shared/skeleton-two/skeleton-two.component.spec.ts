import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonTwoComponent } from './skeleton-two.component';

describe('SkeletonTwoComponent', () => {
  let component: SkeletonTwoComponent;
  let fixture: ComponentFixture<SkeletonTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
