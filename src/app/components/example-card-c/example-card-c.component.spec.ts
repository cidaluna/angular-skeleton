import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleCardCComponent } from './example-card-c.component';

describe('ExampleCardCComponent', () => {
  let component: ExampleCardCComponent;
  let fixture: ComponentFixture<ExampleCardCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleCardCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleCardCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
