/**
 * Token màu của Dynk — dùng song song với tailwind.config.js
 * (Tailwind dùng cho class, file này dùng khi cần giá trị màu trong JS,
 * ví dụ truyền vào framer-motion hoặc canvas).
 */
export const colors = {
  ink: "#0A0A0A",
  bone: "#FAFAF8",
  champagne: "#C9C2B4",
  champagneBright: "#E4DCC8",
  ash: "#8A8A86",
  line: "rgba(255,255,255,0.12)",
  lineSoft: "rgba(255,255,255,0.06)",
} as const;
