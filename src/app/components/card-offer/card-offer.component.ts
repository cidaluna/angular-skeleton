import { Component, Input, signal, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { IHostOffer } from '../../interfaces/host';
import { ExampleCardAComponent } from '../example-card-a/example-card-a.component';
import { ExampleCardBComponent } from '../example-card-b/example-card-b.component';
import { ExampleCardCComponent } from '../example-card-c/example-card-c.component';
import { ExampleCardDComponent } from '../example-card-d/example-card-d.component';
import { ExampleCardEComponent } from '../example-card-e/example-card-e.component';

@Component({
  selector: 'app-card-offer',
  standalone: true,
  imports: [ExampleCardAComponent, ExampleCardBComponent, ExampleCardCComponent, ExampleCardDComponent, ExampleCardEComponent,],
  templateUrl: './card-offer.component.html',
  styleUrl: './card-offer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardOfferComponent {
  // Recebe a oferta atual da fila
  @Input({ required: true }) offer!: IHostOffer;

  // Emite um evento para o Host avisando que deve processar o aceite
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
    // setTimeout(() => {
    //   this.showSkeletonTwo.set(false);
    //   this.isProcessing.set(false);
    // }, 4000);
  }

}
