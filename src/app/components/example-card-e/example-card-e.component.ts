import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { SkeletonComponent } from '../../shared/skeleton/skeleton.component';

@Component({
  selector: 'app-example-card-e',
  standalone: true,
  imports: [SkeletonComponent],
  templateUrl: './example-card-e.component.html',
  styleUrl: './example-card-e.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleCardEComponent {
  showSkeletonTwo = signal(false);

  // controle simples para evitar cliques múltiplos
  isProcessing = signal(false);
  totalCards: number = 5;

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
