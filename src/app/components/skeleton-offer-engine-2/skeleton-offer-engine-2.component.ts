import { Component, Input } from '@angular/core';
import { SkeletonComponent } from '../../shared/skeleton/skeleton.component';
import { CommonModule } from '@angular/common';
import { SkeletonBody } from '../../interfaces/host';

@Component({
  selector: 'app-skeleton-offer-engine-2',
  standalone: true,
  imports: [CommonModule, SkeletonComponent],
  templateUrl: './skeleton-offer-engine-2.component.html',
  styleUrl: './skeleton-offer-engine-2.component.scss'
})
export class SkeletonOfferEngine2Component {
  @Input({required: true}) type!: string;
  @Input() config?: SkeletonBody;
}
