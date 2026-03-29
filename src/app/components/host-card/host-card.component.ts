import { Component, DoCheck, OnChanges, ChangeDetectionStrategy, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngxs/store';
import { AcceptOffer, FetchOffers } from '../../store/host-offer.actions';
import { IsFirstVisiblePipe } from '../../shared/pipes/is-first-visible.pipe';
import { CardOfferEngineComponent } from '../card-offer-engine/card-offer-engine.component';
import { Observable, tap } from 'rxjs';
import { IHostOffer } from '../../interfaces/host';

@Component({
  selector: 'app-host-card',
  standalone: true,
  imports: [AsyncPipe, CardOfferEngineComponent, IsFirstVisiblePipe],
  templateUrl: './host-card.component.html',
  styleUrl: './host-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HostCardComponent implements OnChanges, DoCheck {

  private readonly store = inject(Store);

  // 1. Ação de selecionar os dados do State
  // Você pode usar o seletor direto se ele estiver definido no HostOfferState state.name.
  readonly listOffers$: Observable<IHostOffer[]> = this.store.select(state => state.hostOffers.listOffers);

  //readonly listOffers$ = this.store.select(state => state.hostOffers.listOffers).pipe(tap(d => console.log('::Dados no Componente:', d)));

  constructor() {
    // 2. Disparamos a ação para buscar os dados
    // Não atribuímos o dispatch ao listOffers$
    this.store.dispatch(new FetchOffers());
  }



  ngOnChanges() {
    console.log(':: Chamou o onChanges');
  }

  private checkCount = 0;

  ngDoCheck() {
    this.checkCount++;
    // Isso vai printar toda vez que o Angular "olhar" para esse componente
    console.log(`[Performance] Check nº ${this.checkCount} no HostCard`);
  }

  // Método chamado no clique do botão Incluir em cada card de oferta
  onHandleOfferAccepted() {
    // Dispara uma ordem para o State remover o item 0 e o @for atualizará sozinho!
    this.store.dispatch(new AcceptOffer());
  }
}
