// offer.actions.ts
export class LoadOffers {
  static readonly type = '[Offer] Load';
  constructor(public offers: any[]) {}
}

export class AcceptOffer {
  static readonly type = '[Offer] Accept';
  // Não precisamos passar o ID se a regra for sempre remover o primeiro (índice 0)
}
