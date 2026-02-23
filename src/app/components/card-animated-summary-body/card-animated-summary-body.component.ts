import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SkeletonComponent } from '../../shared/skeleton/skeleton.component';

@Component({
  selector: 'app-card-animated-summary-body',
  standalone: true,
  imports: [SkeletonComponent],
  templateUrl: './card-animated-summary-body.component.html',
  styleUrl: './card-animated-summary-body.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardAnimatedSummaryBodyComponent {

}
