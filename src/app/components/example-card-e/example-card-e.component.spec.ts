import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleCardEComponent } from './example-card-e.component';

describe('ExampleCardEComponent', () => {
  let component: ExampleCardEComponent;
  let fixture: ComponentFixture<ExampleCardEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleCardEComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleCardEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
