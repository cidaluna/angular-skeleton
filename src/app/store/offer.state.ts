// offer.state.ts
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { LoadOffers, AcceptOffer } from './offer.actions';

export interface OfferStateModel {
  offers: any[];
  showAlert: boolean;
}

@State<OfferStateModel>({
  name: 'offersState',
  defaults: {
    offers: [],
    showAlert: false
  }
})
@Injectable()
export class OfferState {

  // Seletor para pegar apenas a lista atualizada
  @Selector()
  static getOffers(state: OfferStateModel) {
    return state.offers;
  }

  // Seletor para o booleano de visibilidade
  @Selector()
  static getShowAlert(state: OfferStateModel) {
    return state.showAlert;
  }

  @Action(LoadOffers)
  load({ patchState }: StateContext<OfferStateModel>, { offers }: LoadOffers) {
    patchState({
      offers: offers,
      showAlert: offers.length > 0 // Mostra o alerta se houver ofertas
    });
  }

  @Action(AcceptOffer)
  acceptOffer({ getState, patchState }: StateContext<OfferStateModel>) {
    const state = getState();
    // Criamos uma nova lista removendo o primeiro elemento (índice 0)
    const newOffers = [...state.offers];
    newOffers.shift();

    patchState({
      offers: newOffers,
      // Se a lista ficou vazia, desligamos o alerta permanentemente
      showAlert: newOffers.length > 0
    });
  }
}
