import { Component, signal } from '@angular/core';
import { StaticMiniCardComponent } from '../static-mini-card/static-mini-card.component';
import { SkeletonComponent } from '../../shared/skeleton/skeleton.component';

@Component({
  selector: 'app-example-card',
  standalone: true,
  imports: [SkeletonComponent, StaticMiniCardComponent],
  templateUrl: './example-card.component.html',
  styleUrl: './example-card.component.scss'
})
export class ExampleCardComponent {
  showSkeletonTwo = signal(false);

  // controle simples para evitar cliques múltiplos
  isProcessing = signal(false);
  totalCards: number = 5;
  staticCards = [
    { title: 'Cheque' },
    { title: 'Protesto' },
    { title: 'Sustação' },
    { title: 'Negativação' },
    { title: 'Endosso' },
    { title: 'Causa' },
    { title: 'Contraordem' },
  ];

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
