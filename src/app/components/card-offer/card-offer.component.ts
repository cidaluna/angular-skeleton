import { Component, Input, signal, ChangeDetectionStrategy, Output, EventEmitter, Type } from '@angular/core';
import { IHostOffer } from '../../interfaces/host';
import { ExampleCardAComponent } from '../example-card-a/example-card-a.component';
import { ExampleCardBComponent } from '../example-card-b/example-card-b.component';
import { ExampleCardCComponent } from '../example-card-c/example-card-c.component';
import { ExampleCardDComponent } from '../example-card-d/example-card-d.component';
import { ExampleCardEComponent } from '../example-card-e/example-card-e.component';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-card-offer',
  standalone: true,
  imports: [NgComponentOutlet],
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

  // Mapeamento centralizado: fácil de adicionar N tipos de corpo de oferta e seus componentes correspondentes
  private readonly offerCardMap: Record<string, Type<unknown>> = {
    'card_animated_compact': ExampleCardAComponent,
    'card_animated_summary': ExampleCardBComponent,
    'card_animated_detail':  ExampleCardCComponent,
    'card_animated_split':   ExampleCardDComponent,
    'card_offer':            ExampleCardEComponent,
  };

  // Getter para o template específico do card, baseado no campo type da oferta
  get currentCardComponent(): Type<any> | null {
    const component = this.offerCardMap[this.offer.type];
    if (!component) return null; // ou um componente de fallback
    return component;
  }

  onAcceptClick(): void {
    if (this.isProcessing()) return;

    this.isProcessing.set(true);
    this.showSkeletonTwo.set(true);
    this.offerAccepted.emit();
  }

  // Função para transformar "Promoção Especial!" em "promocao-especial"
  formatDataCy(title: string): string {
    return title
      .toLowerCase()                                  // Minúsculas
      .normalize('NFD')                               // Decompõe caracteres acentuados
      .replace(/[\u0300-\u036f]/g, '')                // Remove os acentos
      .replace(/[^a-z0-9]/g, '-')                     // Substitui tudo que não é letra/número por hífen
      .replace(/-+/g, '-')                            // Remove hífens duplicados
      .replace(/^-+|-+$/g, '');                       // Remove hífens no início ou fim
  }

}
