import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  @Input({ required: true }) imageUrl!: string;
  @Input() showCta = false;
  @Output() ctaClick = new EventEmitter<void>();
  @Output() imageLoaded = new EventEmitter<void>();
  @Output() imageError = new EventEmitter<void>();

  onImageLoad(): void {
    this.imageLoaded.emit();
    this.showCta = true;
  }

  onImageError(): void {
    this.imageError.emit();
    this.showCta = false;
  }

  onCtaClick(): void {
    this.ctaClick.emit();
  }
}
