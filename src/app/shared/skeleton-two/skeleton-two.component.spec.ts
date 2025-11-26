import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonTwoComponent } from './skeleton-two.component';

describe('SkeletonTwoComponent', () => {
  let component: SkeletonTwoComponent;
  let fixture: ComponentFixture<SkeletonTwoComponent>;
  let hostEl: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonTwoComponent);
    component = fixture.componentInstance;
    hostEl = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default type "rectangle"', () => {
    fixture.detectChanges();
    const div = hostEl.querySelector('.skeleton-two') as HTMLElement;
    expect(component.type).toBe('rectangle');
    expect(div.classList.contains('rectangle')).toBeTrue();
  });

  it('should apply valid width and height to ngStyle', () => {
    component.width = '180px';
    component.height = '50px';
    fixture.detectChanges();

    const div = hostEl.querySelector('.skeleton-two') as HTMLElement;
    expect(component['widthSafe']).toBe('180px');
    expect(component['heightSafe']).toBe('50px');
    // style access returns computed inline style values set by ngStyle
    expect(div.style.width).toBe('180px');
    expect(div.style.height).toBe('50px');
  });

  it('should toggle classes when type changes', () => {
    component.type = 'circle';
    fixture.detectChanges();
    const div = hostEl.querySelector('.skeleton-two') as HTMLElement;
    expect(div.classList.contains('circle')).toBeTrue();

    component.type = 'square';
    fixture.detectChanges();
    expect(div.classList.contains('square')).toBeTrue();
  });
});
