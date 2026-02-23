import { Component, Input, signal, ChangeDetectionStrategy } from '@angular/core';

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

  showSkeletonTwo = signal(false);

  // controle simples para evitar cliques múltiplos
  isProcessing = signal(false);

  callSkeletonTwo() {
      //this.showSkeletonTwo.update(v => !v);
      //se já estiver processando, ignora o clique
      if (this.isProcessing()) return;

      this.isProcessing.set(true);
      this.showSkeletonTwo.set(true);

      // mostra por 4s e depois oculta
      setTimeout(() => {
        this.showSkeletonTwo.set(false);
        this.isProcessing.set(false);
      }, 4000);
    }
}
