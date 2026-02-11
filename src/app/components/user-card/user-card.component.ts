import { Component, OnInit, signal } from '@angular/core';
import { catchError, EMPTY, map, tap, timer } from 'rxjs';
import { SkeletonComponent } from '../../shared/skeleton/skeleton.component';
import { SkeletonTwoComponent } from '../../shared/skeleton-two/skeleton-two.component';
import { BannerComponent } from '../../shared/banner/banner.component';
import { BannerService } from '../../services/banner.service';
import { IDimensionsBanner, IOfferBanner, IOfferBannerView } from '../../interfaces/banner.interface';
import { StaticMiniCardComponent } from '../static-mini-card/static-mini-card.component';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [SkeletonComponent, SkeletonTwoComponent, BannerComponent, StaticMiniCardComponent],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent implements OnInit {
  loading = signal(true);
  user = signal<{ name: string; job: string; avatar: string } | null>(null);
  error = signal<string | null>(null);
  showSkeletonTwo = signal(false);
  // controle simples para evitar cliques múltiplos
  isProcessing = signal(false);
  totalCards: number = 5;
  staticCards = [
    { title: 'Card 1' },
    { title: 'Card 2' },
    { title: 'Card 3' },
    { title: 'Card 4' },
    { title: 'Card 5' },
  ];


  bannerView: IOfferBannerView | null = null;
  imageLoaded = false;

  constructor(private bannerService: BannerService) {
    this.loadUser();
  }

  ngOnInit(): void {
    this.bannerService
      .getOfferBanner()
      .pipe(
        map((banner) => this.setBannerByViewport(banner)),
        tap(() => {
          this.imageLoaded = false; // imagem nova vai carregar
        }),
        catchError(() => {
          this.bannerView = null;
          this.imageLoaded = false;
          return EMPTY;
        }),
      )
      .subscribe((banner) => {
        this.bannerView = banner;
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
    if (!this.bannerView?.image) return;

    // navegação, tracking ou ação
    alert('Banner clicado!');
  }


  private setBannerByViewport(banner: IOfferBanner): IOfferBannerView | null {
    if (!banner.image) {
      return null;
    }

    const width = window.innerWidth;

    let activeImage: IDimensionsBanner;

    if (width >= 1800) {
      activeImage = banner.image.desktop;
    } else if (width >= 1300) {
      activeImage = banner.image.tablet;
    } else {
      activeImage = banner.image.mobile;
    }

    return {
      ...banner,
      activeImage,
    };
  }

  hideOfferBanner(): void {
    this.bannerView = null;
    this.imageLoaded = false;
  }
}
