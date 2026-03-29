export interface IHostOffer {
  id: number;
  showAlert: boolean;
  type: string;
  title: string;
  description: string;
  skeletonBody?: SkeletonBody;
}

export interface SkeletonBody {
  bodyTitle?: string;
  bodySubtitle?: string;
  showBrokenBar?: boolean;
  boxes: SkeletonBox[];
}

export interface SkeletonBox {
  title: string;
  text1?: string;
  text2?: string;
  showSkeleton?: boolean;
}
