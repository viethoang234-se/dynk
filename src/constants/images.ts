export const Images = {
  hero: {
    main: "assets/images/hero.jpg",
    detail: "assets/images/hero-detail.svg",
  },
  brand: {
    portrait: "assets/images/brand-atelier.jpg",
  },
  products: {
    p1: "assets/images/helix.webp",
    p2: "assets/images/tragus.webp",
    p3: "assets/images/conch.webp",
    p4: "assets/images/lobe.webp",
  },
  features: {
    f1: "assets/images/titanium.jpg",
    f2: "assets/images/thep-ye-te.jpg",
    f3: "assets/images/vi-tri-xo.jpg",
  },
  showcase: {
    banner: "assets/images/banner.jpg",
    bannerDetail: "assets/images/banner-detail.svg",
  },
  customer: {
    c1: "assets/images/khach1.jpg",
    c2: "assets/images/khach2.jpg",
    c3: "assets/images/khach3.jpg",
  },
  logo: {
    mark: "assets/images/logo.svg",
  },
} as const;

export type ImageKey = keyof typeof Images;
