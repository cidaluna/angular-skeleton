import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticMiniCardComponent } from './static-mini-card.component';

describe('StaticMiniCardComponent', () => {
  let component: StaticMiniCardComponent;
  let fixture: ComponentFixture<StaticMiniCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticMiniCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticMiniCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
