// import { IHostOffer } from './../interfaces/host';

// // Ação para carregar os dados iniciais do backend
// export class SetOffers {
//   static readonly type = '[HostOffer] Set Offers';
//   constructor(public payload: IHostOffer[]) {}
// }


export class FetchOffers {
  // Responsabilidade: Avisar ao State que precisamos buscar dados no JSON Server
  static readonly type = '[HostOffer] Fetch Offers';
}

export class AcceptOffer {
  // Responsabilidade: Avisar ao State que o usuário clicou em "Incluir"
  static readonly type = '[HostOffer] Accept Offer';
}
