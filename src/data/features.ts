import { Images } from "@/constants/images";

export interface Feature {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  align: "left" | "right";
}

export const features: Feature[] = [
  {
    id: "f1",
    eyebrow: "Chất liệu",
    title: "Titan implant-grade cho lỗ xỏ mới",
    body: "Đây là vật liệu an toàn thường dùng trong đinh vít y khoa, khớp nhân tạo, cấy ghép y tế. Siêu nhẹ, Không gỉ, hầu như không dị ứng, phù hợp vết thương mới. Nếu có điều kiện, hãy chọn Titanium ASTM F136.",
    image: Images.features.f1,
    align: "left",
  },
  {
    id: "f2",
    eyebrow: "Chất liệu",
    title: "Thép y tế 316L",
    body: "Rẻ và bền hơn so với đa số chất liệu. Tuy nhiên, thép có thể chứa lượng nhỏ niken, không phù hợp với da nhạy cảm, dễ kích ứng",
    image: Images.features.f2,
    align: "right",
  },
  {
    id: "f3",
    eyebrow: "Form dáng",
    title: "Thiết kế riêng cho từng vị trí xỏ",
    body: "Một khuyên helix cần độ cong khác một khuyên lobe. Dynk thiết kế riêng form cho từng vị trí trên tai, thay vì dùng một dáng chốt chung rồi thu nhỏ lại.",
    image: Images.features.f3,
    align: "left",
  },
];
