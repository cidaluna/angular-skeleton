import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SkeletonComponent } from '../../shared/skeleton/skeleton.component';

@Component({
  selector: 'app-card-offer-body',
  standalone: true,
  imports: [SkeletonComponent],
  templateUrl: './card-offer-body.component.html',
  styleUrl: './card-offer-body.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardOfferBodyComponent {

}
