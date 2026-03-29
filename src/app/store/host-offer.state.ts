// host-offer.state.ts
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { inject, Injectable } from '@angular/core';
import { IHostOffer } from './../interfaces/host';
import { AcceptOffer, FetchOffers } from './host-offer.actions';
import { HostOfferService } from '../services/host-offer.service';
import { tap } from 'rxjs';

export interface HostOfferStateModel {
  listOffers: IHostOffer[];
}

@State<HostOfferStateModel>({
  name: 'hostOffers',
  defaults: {
    listOffers: []
  }
})
@Injectable()
export class HostOfferState {
  // Injetamos o serviço que criamos para buscar os dados do JSON Server
  private readonly offerService = inject(HostOfferService);

  // Seletor: Retorna a lista completa (ou vazia)
  @Selector()
  static getListOffers(state: HostOfferStateModel) {
    return state.listOffers;
  }

  // Poderia usar esse selector para filtrar apenas as ofertas com showAlert true,
  // mas resolvi usar uma Pipe no Html
  // @Selector()
  // static getAvailableOffers(state: HostOfferStateModel) {
  //   // Se a lista estiver vazia, retorna array vazio
  //   if (!state.listOffers) return [];

  //   // Filtra a lista mantendo apenas objetos onde showAlert é estritamente true
  //   return state.listOffers.filter(offer => offer.showAlert === true);
  // }

  // Ação para buscar dados do JSON Server
  @Action(FetchOffers)
  fetchOffers(ctx: StateContext<HostOfferStateModel>) {
    return this.offerService.getOffers().pipe(
      tap((offers) => { // Pega todas as ofertas do Json Server e trata as true no @Selector
        // SÓ COLOCAMOS NO ESTADO O QUE FOR SHOWALERT TRUE
        //const validOffers = offers.filter(o => o.showAlert === true);
        ctx.patchState({ listOffers: offers });
        console.log(':::::: Dados carregados do JSON Server:', offers);
      })
    );
  }

  // Ação para remover(shift) a oferta aceita na lista
  @Action(AcceptOffer)
  acceptOffer(ctx: StateContext<HostOfferStateModel>) {
    const state = ctx.getState();
    const currentList = [...state.listOffers];

    // 1. Encontramos o índice da oferta que estava SENDO EXIBIDA (a primeira com showAlert true)
    const indexToRemove = currentList.findIndex(o => o.showAlert === true);

    if (indexToRemove !== -1) {
      const removed = currentList[indexToRemove];

      // 2. Removemos exatamente essa oferta da lista
      currentList.splice(indexToRemove, 1);

      // 3. Para o LOG: Quem é o próximo que o usuário REALMENTE vai ver?
      // Procuramos na lista atualizada o primeiro que tenha showAlert: true
      // const nextVisible = currentList.find(o => o.showAlert === true);

      // console.group(':: Fluxo de Ofertas');
      // console.log(':: Você aceitou e eu removi:', removed.title);
      // console.log(':: Próxima que aparecerá na tela:', nextVisible ? nextVisible.title : 'Fim das ofertas');
      // console.groupEnd();

      ctx.patchState({ listOffers: currentList });
    }
  }
}
