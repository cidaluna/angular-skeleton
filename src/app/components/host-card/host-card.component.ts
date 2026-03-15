import { Component, DoCheck, OnChanges, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { CardOfferComponent } from "../card-offer/card-offer.component";
import { Store } from '@ngxs/store';
import { AcceptOffer, FetchOffers } from '../../store/host-offer.actions';
import { HostOfferState } from '../../store/host-offer.state';
import { IsFirstVisiblePipe } from '../../shared/pipes/is-first-visible.pipe';

@Component({
  selector: 'app-host-card',
  standalone: true,
  imports: [AsyncPipe, CardOfferComponent, IsFirstVisiblePipe],
  templateUrl: './host-card.component.html',
  styleUrl: './host-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HostCardComponent implements OnInit, OnChanges, DoCheck {

  private store = inject(Store);

  // Observable vindo do State que contém a lista dinâmica de ofertas
  listOffers$ = this.store.select(HostOfferState.getListOffers);

  ngOnInit() {
    // Dispara uma ordem para buscar dados assim que o componente inicia
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
