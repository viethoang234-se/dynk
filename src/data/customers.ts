import { Images } from "@/constants/images";

export interface CustomerStory {
  id: string;
  name: string;
  detail: string;
  quote: string;
  image: string;
}

export const customerStories: CustomerStory[] = [
  {
    id: "c1",
    name: "Thanh, 27 tuổi",
    detail: "Đang đeo: Khuyên Tragus Đá Tròn",
    quote:
      "Lỗ tragus của mình từng viêm hai lần với khuyên bạc thường. Đổi sang titan của Dynk ba tháng nay, chưa có vấn đề gì.",
    image: Images.customer.c1,
  },
  {
    id: "c2",
    name: "Vy, 24 tuổi",
    detail: "Đang đeo: Khuyên Helix Mảnh",
    quote:
      "Form khuyên helix ôm sát vành tai hơn mình tưởng. Đeo ngủ nghiêng cả đêm không bị cọ.",
    image: Images.customer.c2,
  },
  {
    id: "c3",
    name: "Trâm, 18 tuổi",
    detail: "Đang đeo: Khuyên Conch Bản To",
    quote:
      "Mua online nên ngại về size, nhưng bảng đo trên web khá chuẩn. Khuyên vừa khít ngay lần đầu.",
    image: Images.customer.c3,
  },
];
