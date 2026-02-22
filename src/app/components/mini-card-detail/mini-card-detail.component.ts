import { Component, Input } from '@angular/core';
import { SkeletonComponent } from '../../shared/skeleton/skeleton.component';

@Component({
  selector: 'app-mini-card-detail',
  standalone: true,
  imports: [SkeletonComponent],
  templateUrl: './mini-card-detail.component.html',
  styleUrl: './mini-card-detail.component.scss'
})
export class MiniCardDetailComponent {
  @Input({ required: true }) title!: string;
  @Input() showSkeleton: boolean = true;
  @Input({ required: true }) company!: string;
  @Input({ required: true }) category!: string;

}
