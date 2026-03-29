import { Component, Input } from '@angular/core';
import { SkeletonBody } from '../../interfaces/host';
import { SkeletonComponent } from '../../shared/skeleton/skeleton.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skeleton-offer-engine',
  standalone: true,
  imports: [CommonModule, SkeletonComponent],
  templateUrl: './skeleton-offer-engine.component.html',
  styleUrl: './skeleton-offer-engine.component.scss'
})
export class SkeletonOfferEngineComponent {
  @Input({required: true}) type!: string;
  @Input() config?: SkeletonBody;

}
