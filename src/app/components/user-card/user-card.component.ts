import { Component, signal } from '@angular/core';
import { timer } from 'rxjs';
import { SkeletonComponent } from '../../shared/skeleton/skeleton.component';
import { SkeletonTwoComponent } from '../../shared/skeleton-two/skeleton-two.component';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [SkeletonComponent, SkeletonTwoComponent],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  loading = signal(true);
  user = signal<{ name: string; job: string; avatar: string } | null>(null);
  error = signal<string | null>(null);

  constructor() {
    this.loadUser();
  }

  loadUser() {
    this.loading.set(true);
    this.error.set(null);

    // Simulação de chamada à API usando timer
    timer(2500).subscribe({
      next: () => {
        // SIMULE ERRO AQUI — descomente se quiser testar
        // this.error.set('Erro ao carregar usuário.');
        // this.loading.set(false);
        // return;

        // Sucesso
        this.user.set({
          name: 'Maria Silva',
          job: 'Frontend Developer',
          avatar: 'https://i.pravatar.cc/150?img=47',
        });
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Falha ao carregar os dados.');
        this.loading.set(false);
      },
    });
  }
}
