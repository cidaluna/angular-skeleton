import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleCardBComponent } from './example-card-b.component';

describe('ExampleCardBComponent', () => {
  let component: ExampleCardBComponent;
  let fixture: ComponentFixture<ExampleCardBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleCardBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleCardBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
