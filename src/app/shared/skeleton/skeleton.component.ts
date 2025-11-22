import { Component, Input, input, signal } from '@angular/core';
import { SkeletonType } from './skeleton.types';
import { timer } from 'rxjs';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-skeleton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skeleton.component.html',
  styleUrl: './skeleton.component.scss',
})
export class SkeletonComponent {
  private defaultSizeByType: Record<SkeletonType, { width: string; height: string }> = {
    title: { width: '50%', height: '1.4rem' },
    text: { width: '90%', height: '1.2rem' },
    avatar: { width: '48px', height: '48px' },
    image: { width: '200px', height: '100px' },
    circle: { width: '40px', height: '40px' },
    button: { width: '6rem', height: '2.4rem' },
    card: { width: '100%', height: '150px' },
  };

  private _customType: SkeletonType = 'text';

  @Input() set customType(value: SkeletonType) {
    if (!this.defaultSizeByType[value]) {
      throw new Error(`Skeleton type inválido: ${value}`);
    }

    this._customType = value;

    // Se width ou height não foram definidos pelo usuário
    if (!this.width) {
      this.width = this.defaultSizeByType[value].width;
    }

    if (!this.height) {
      this.height = this.defaultSizeByType[value].height;
    }
  }

  get customType() {
    return this._customType;
  }

  @Input() width: string | null = null;
  @Input() height: string | null = null;

  // animação RXJS para pulsar
  pulse = signal(1);

  constructor() {
    // primeiro disparo 0 e os próximos disparos a cada 1 segundo
    // opacidade do efeito visual do skeleton alterna entre 1 e 0.6
    timer(0, 1000)
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        this.pulse.update(v => v === 1 ? 0.6 : 1);
      });
  }
}
