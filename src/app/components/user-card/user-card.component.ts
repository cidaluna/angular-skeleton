import { Component, OnInit, signal } from '@angular/core';
import { catchError, EMPTY, timer } from 'rxjs';
import { SkeletonComponent } from '../../shared/skeleton/skeleton.component';
import { SkeletonTwoComponent } from '../../shared/skeleton-two/skeleton-two.component';
import { BannerComponent } from '../../shared/banner/banner.component';
import { Banner, BannerService } from '../../services/banner.service';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [SkeletonComponent, SkeletonTwoComponent, BannerComponent],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent implements OnInit {
  loading = signal(true);
  user = signal<{ name: string; job: string; avatar: string } | null>(null);
  error = signal<string | null>(null);
  showSkeletonTwo = signal(false);
  // controle simples para evitar cliques múltiplos
  isProcessing = signal(false);

  offerBanner: Banner | null = null;
  showOfferBanner = false;
  showCta = false;

  constructor(private bannerService: BannerService) {
    this.loadUser();
  }

   ngOnInit(): void {
    this.bannerService.getOfferBanner().pipe(
      catchError(() => {
        this.showOfferBanner = false;
        return EMPTY;
      })
    ).subscribe(banner => {
      this.offerBanner = banner;
      this.showOfferBanner = true;
    });
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

  handleOfferClick(): void {
    if (!this.offerBanner?.imageUrl) return;

    // navegação, tracking ou ação
    alert('Banner clicado!');
  }

  onBannerImageLoaded(): void {
    this.showCta = true;
  }

  hideOfferBanner(): void {
    this.showOfferBanner = false;
    this.showCta = false;
  }
}
