export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "faq1",
    question: "Khuyên Dynk có dùng được cho lỗ xỏ mới không?",
    answer:
      "Có. Dòng titan implant-grade được thiết kế riêng cho lỗ xỏ mới và da nhạy cảm. Tránh đeo khuyên bạc hoặc vàng thường trong 6 tuần đầu sau khi xỏ.",
  },
  {
    id: "faq2",
    question: "Vàng 14K của Dynk có bị đổi màu không?",
    answer:
      "Không, vì đây là vàng nguyên khối 14K, không phải vàng xi hoặc mạ. Vàng có thể xuống độ bóng nhẹ theo thời gian; lau bằng khăn mềm khô là đủ để phục hồi.",
  },
  {
    id: "faq3",
    question: "Tôi đặt sai kích thước thì đổi được không?",
    answer:
      "Được, trong 14 ngày kể từ ngày nhận hàng, với điều kiện khuyên chưa qua sử dụng và còn nguyên bao bì kín khí. Liên hệ đội Dynk qua trang Đổi trả để được hướng dẫn.",
  },
  {
    id: "faq4",
    question: "Một bộ khuyên giao trong bao lâu?",
    answer:
      "2–4 ngày làm việc trong nội thành, 4–7 ngày với các tỉnh khác. Mỗi đơn có mã theo dõi gửi qua email ngay khi đơn được đóng gói.",
  },
];
