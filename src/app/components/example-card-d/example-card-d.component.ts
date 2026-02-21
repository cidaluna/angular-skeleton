import { Component, signal } from '@angular/core';
import { StaticMiniCardComponent } from '../static-mini-card/static-mini-card.component';
import { SkeletonComponent } from '../../shared/skeleton/skeleton.component';

@Component({
  selector: 'app-example-card-d',
  standalone: true,
  imports: [SkeletonComponent, StaticMiniCardComponent],
  templateUrl: './example-card-d.component.html',
  styleUrl: './example-card-d.component.scss'
})
export class ExampleCardDComponent {
  showSkeletonTwo = signal(false);
   readonly LABELS = {
    NOT_CALC: 'Não calculado',
    SPLIT_D: 'Split D',
  };

  // controle simples para evitar cliques múltiplos
  isProcessing = signal(false);
  totalCards: number = 5;
  staticCards = [
    { title: this.LABELS.NOT_CALC },
    { title: this.LABELS.SPLIT_D },
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
