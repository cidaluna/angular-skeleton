import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { IHostOffer } from '../../interfaces/host';
import { SkeletonOfferEngineComponent } from "../skeleton-offer-engine/skeleton-offer-engine.component";
import { SkeletonOfferEngine2Component } from '../skeleton-offer-engine-2/skeleton-offer-engine-2.component';

@Component({
  selector: 'app-card-offer-engine',
  standalone: true,
  imports: [SkeletonOfferEngineComponent, SkeletonOfferEngine2Component],
  templateUrl: './card-offer-engine.component.html',
  styleUrl: './card-offer-engine.component.scss'
})
export class CardOfferEngineComponent {
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
  }

  // Função para transformar "Promoção Especial!" em "promocao-especial"
  formatDataCy(title: string): string {
    return title
      .toLowerCase()                                  // Minúsculas
      .normalize('NFD')                               // Decompõe caracteres acentuados
      .replaceAll(/[\u0300-\u036f]/g, '')                // Remove os acentos
      .replaceAll(/[^a-z0-9]/g, '-')                     // Substitui tudo que não é letra/número por hífen
      .replaceAll(/-+/g, '-')                            // Remove hífens duplicados
      .replaceAll(/^-+|-+$/g, '');                       // Remove hífens no início ou fim
  }
}
