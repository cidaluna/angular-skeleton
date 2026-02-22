import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { SkeletonComponent } from '../../shared/skeleton/skeleton.component';

@Component({
  selector: 'app-static-mini-card',
  standalone: true,
  imports: [SkeletonComponent],
  templateUrl: './static-mini-card.component.html',
  styleUrl: './static-mini-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StaticMiniCardComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) uiKey!: string;
  @Input() subtitle?: string;
  @Input() showSkeleton: boolean = true;

}
