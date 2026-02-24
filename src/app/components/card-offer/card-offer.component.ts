import { Component, Input, signal, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-offer',
  standalone: true,
  imports: [],
  templateUrl: './card-offer.component.html',
  styleUrl: './card-offer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardOfferComponent {
  @Input({ required: true }) mainTitle!: string;
  @Input({ required: true }) mainDescription!: string;
  @Output() offerAccepted = new EventEmitter<void>();

  showSkeletonTwo = signal(false);

  // controle simples para evitar cliques múltiplos
  isProcessing = signal(false);

  onAcceptClick(): void {
    if (this.isProcessing()) return;

    this.isProcessing.set(true);
    this.showSkeletonTwo.set(true);
    this.offerAccepted.emit();

    // mostra por 4s e depois oculta — mesma lógica do componente original
    setTimeout(() => {
      this.showSkeletonTwo.set(false);
      this.isProcessing.set(false);
    }, 4000);
  }
}
