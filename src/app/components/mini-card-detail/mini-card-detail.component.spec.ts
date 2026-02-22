import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCardDetailComponent } from './mini-card-detail.component';

describe('MiniCardDetailComponent', () => {
  let component: MiniCardDetailComponent;
  let fixture: ComponentFixture<MiniCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniCardDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
