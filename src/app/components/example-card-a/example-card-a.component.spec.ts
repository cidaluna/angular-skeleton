import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleCardAComponent } from './example-card-a.component';

describe('ExampleCardComponent', () => {
  let component: ExampleCardAComponent;
  let fixture: ComponentFixture<ExampleCardAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleCardAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleCardAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
