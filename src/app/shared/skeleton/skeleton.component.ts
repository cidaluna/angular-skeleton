import { Component, Input, input, signal } from '@angular/core';
import { SkeletonType } from './skeleton.types';
import { timer } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skeleton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skeleton.component.html',
  styleUrl: './skeleton.component.scss'
})
export class SkeletonComponent {
  @Input() type: SkeletonType = 'text';
  @Input() width!: string;
  @Input() height!: string;

  // animação RXJS para pulsar
  pulse = signal(1);

  constructor() {
    timer(0, 1000).subscribe(() => {
      this.pulse.update((v) => (v === 1 ? 0.6 : 1));
    });
  }

  get normalizedWidth() {
    return this.width || '100%';
  }

  get normalizedHeight() {
    return this.height || '1rem';
  }
}
