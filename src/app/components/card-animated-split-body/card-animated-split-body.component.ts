import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SkeletonComponent } from '../../shared/skeleton/skeleton.component';

@Component({
  selector: 'app-card-animated-split-body',
  standalone: true,
  imports: [SkeletonComponent],
  templateUrl: './card-animated-split-body.component.html',
  styleUrl: './card-animated-split-body.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardAnimatedSplitBodyComponent {

}
