import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { StaticMiniCardComponent } from '../static-mini-card/static-mini-card.component';
import { SkeletonComponent } from '../../shared/skeleton/skeleton.component';
import { MINI_CARD_TITLES } from '../../shared/constants/mini-card-titles.constants';

@Component({
  selector: 'app-example-card-b',
  standalone: true,
  imports: [SkeletonComponent, StaticMiniCardComponent],
  templateUrl: './example-card-b.component.html',
  styleUrl: './example-card-b.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleCardBComponent {
  showSkeletonTwo = signal(false);

  // controle simples para evitar cliques múltiplos
  isProcessing = signal(false);

  staticCards: { title: string; uiKey: string } [] = [];

  constructor() {
    this.staticCards = MINI_CARD_TITLES.map((title: string) => ({
      title,
      uiKey: `id-mini-card-title-${this.slugify(title)}`
    }));
  }

  private slugify(value: string): string {
    return value
    .normalize('NFD') // separa acentos
    .replace(/[\u0300-\u036f]/g, '') // remove acentos
    .trim() // remove espaços nas extremidades
    .toLowerCase() // converte para minúsculas
    .replace(/\s+/g, '-'); // substitui espaços por hífens
  }

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
