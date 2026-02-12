import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IOfferBanner } from '../../interfaces/banner.interface';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  @Input() banner!: IOfferBanner;

  @Output() ctaClick = new EventEmitter<void>();
  @Output() imageLoaded = new EventEmitter<void>();
  @Output() imageError = new EventEmitter<void>();

  onImageLoad(): void {
    this.imageLoaded.emit();
    console.log('Imagem do banner carregada.');
  }

  onImageError(): void {
    this.imageError.emit();
    console.log('Erro ao carregar a imagem do banner.');
  }

  onCtaClick(): void {
    this.ctaClick.emit();
    console.log('CTA do banner clicado.');
  }
}
