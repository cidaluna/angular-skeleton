import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardComponent } from './user-card.component';
import { BannerService } from '../../services/banner.service';
import { provideHttpClient } from '@angular/common/http';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Como o componente é Standalone, ele vai em imports
      imports: [UserCardComponent],
      // Os serviços e o HTTP vão em providers
      providers: [
        BannerService,
        provideHttpClient()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
