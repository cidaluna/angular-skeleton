import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleCardFComponent } from './example-card-f.component';

describe('ExampleCardFComponent', () => {
  let component: ExampleCardFComponent;
  let fixture: ComponentFixture<ExampleCardFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleCardFComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleCardFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
