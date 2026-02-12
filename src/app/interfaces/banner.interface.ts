export interface IOfferBanner {
  id: string;
  status?: 'active' | 'inactive';
  type?: string;
  image: {
    desktop: IDimensionsBanner;
    tablet: IDimensionsBanner;
    mobile: IDimensionsBanner;
  };
}

export interface IDimensionsBanner {
  url: string;
  width: number;
  height: number;
}

export interface IOfferBannerView extends IOfferBanner {
  activeImage: IDimensionsBanner;
}
