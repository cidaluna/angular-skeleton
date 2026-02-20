import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleCardDComponent } from './example-card-d.component';

describe('ExampleCardDComponent', () => {
  let component: ExampleCardDComponent;
  let fixture: ComponentFixture<ExampleCardDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleCardDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleCardDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
