import { Images } from "@/constants/images";

export interface Product {
  id: string;
  code: string;
  name: string;
  material: string;
  price: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "p1",
    code: "DK-014",
    name: "Khuyên Helix",
    material: "Titanium",
    price: "88.000đ",
    image: Images.products.p1,
  },
  {
    id: "p2",
    code: "DK-027",
    name: "Khuyên Tragus",
    material: "Thép không gỉ",
    price: "99.000đ",
    image: Images.products.p2,
  },
  {
    id: "p3",
    code: "DK-031",
    name: "Khuyên Conch",
    material: "Titanium",
    price: "70.000đ",
    image: Images.products.p3,
  },
  {
    id: "p4",
    code: "DK-045",
    name: "Khuyên Lobe",
    material: "Thép không gỉ",
    price: "100.000đ",
    image: Images.products.p4,
  },
];
