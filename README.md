# Dynk — Landing page khuyên tai cao cấp

Source code React + Vite + TypeScript + TailwindCSS + Framer Motion + Lenis.

> **Lưu ý quan trọng:** project này được viết hoàn toàn bằng tay trong môi
> trường không có kết nối internet, nên `npm install` **chưa được chạy thử
> thật** ở phía tôi. Mọi cú pháp, import và cấu hình đã được rà soát kỹ bằng
> tay (alias path, named/default export, kiểu TypeScript...), nhưng bạn nên
> chạy qua các bước dưới đây trên máy mình và báo lại nếu gặp lỗi cụ thể —
> tôi sẽ sửa ngay.

---

## 1. Cài đặt & chạy thử

```bash
npm install
npm run dev      # mở http://localhost:5173
```

Build production:

```bash
npm run build    # output vào /dist
npm run preview  # xem thử bản build
```

---

## 2. Cấu trúc thư mục đầy đủ

```
dynk/
├── public/
│   ├── favicon.svg
│   └── assets/images/        ← ảnh placeholder .svg đang dùng (xem mục 5)
│
├── src/
│   ├── assets/                ← chỗ trống cho icon/font tự host (hiện dùng Google Fonts CDN)
│   │
│   ├── components/            ← mỗi section/UI-piece một thư mục riêng
│   │   ├── Navbar/             Thanh điều hướng: ẩn/hiện theo hướng cuộn, glass, progress bar
│   │   ├── Hero/                Mở đầu trang — headline reveal theo từng từ
│   │   ├── Brand/               Giới thiệu thương hiệu, layout 2 cột
│   │   ├── Product/             Lưới 4 sản phẩm, dùng Lens để soi chi tiết
│   │   ├── Features/            3 feature, layout trái/phải xen kẽ
│   │   ├── Showcase/            Ảnh lớn full-bleed có parallax khi cuộn
│   │   ├── Customer/            3 câu chuyện khách hàng dạng card
│   │   ├── FAQ/                 Accordion hỏi đáp
│   │   ├── Footer/              Footer nhiều cột + social
│   │   ├── Button/               Nút dùng chung, có hiệu ứng ripple khi click
│   │   ├── Card/                 ProductCard — ghép Lens + thông tin sản phẩm
│   │   ├── Lens/                 ★ Signature element: kính lúp soi chi tiết theo chuột
│   │   └── Common/               Container, SectionHeading, PageLoader — dùng lại nhiều nơi
│   │
│   ├── pages/
│   │   └── Home.tsx            Lắp ráp toàn bộ section theo đúng thứ tự trang
│   │
│   ├── hooks/                  Logic tách riêng khỏi component (xem mục 4)
│   ├── animations/
│   │   └── variants.ts          Mọi animation Framer Motion định nghĩa tập trung ở đây
│   │
│   ├── constants/
│   │   ├── images.ts            ★ Cấu hình ảnh tập trung (xem mục 5)
│   │   └── colors.ts            Token màu dùng trong JS/inline style
│   │
│   ├── data/                   Nội dung thật: products.ts, features.ts, faq.ts, customers.ts
│   ├── utils/
│   │   └── cn.ts                Helper nối className
│   ├── styles/
│   │   └── index.css            Tailwind layers + keyframes + token CSS dùng chung
│   │
│   ├── App.tsx                  Khởi tạo Lenis (smooth scroll) + PageLoader + Home
│   └── main.tsx                 Entry point React
│
├── tailwind.config.js          Toàn bộ token thiết kế: màu, font, easing, max-width
├── vite.config.ts              Alias "@/" → "src/", code-splitting vendor/motion
└── package.json
```

---

## 3. Giải thích từng thư mục/component

| Thư mục | Vai trò |
|---|---|
| `components/Navbar` | Navbar cố định trên cùng, glass blur, tự ẩn khi cuộn xuống/hiện lại khi cuộn lên (`useNavbarVisibility`), thanh tiến trình cuộn mỏng phía dưới (`useScrollProgress`). |
| `components/Hero` | Section đầu trang. Headline tách từng từ và reveal lệch thời gian (stagger) bằng `heroTextReveal` variant. Ảnh bên phải có hiệu ứng `blurIn` lúc tải + `anim-float` (bồng bềnh nhẹ liên tục). |
| `components/Lens` | **Signature element của site.** Vì sản phẩm là khuyên tai — rất nhỏ — một card hover thường không đủ để thấy độ tinh xảo. Lens tạo một vòng tròn "kính lúp" theo đúng vị trí con trỏ, phóng to ảnh tại điểm đó. Chỉ hiện trên màn hình có chuột (`hidden md:block`) — trên di động ảnh hiển thị bình thường. |
| `components/Product` | Lưới 4 sản phẩm (`ProductCard` bọc `Lens`), entrance theo kiểu stagger khi cuộn tới. |
| `components/Features` | 3 khối feature, ảnh và text đổi vị trí trái/phải xen kẽ qua field `align` trong `data/features.ts`. |
| `components/Showcase` | Ảnh lớn full-bleed, dịch chuyển nhẹ (parallax) theo % cuộn qua `useScroll` + `useTransform` của Framer Motion. Tự tắt parallax nếu người dùng bật "giảm hiệu ứng chuyển động". |
| `components/Customer` | 3 card khách hàng thật (tên + sản phẩm đang đeo + trích dẫn ngắn) — không dùng testimonial chung chung. |
| `components/FAQ` | Accordion: chỉ một câu hỏi mở tại một thời điểm, animate chiều cao bằng Framer Motion (không dùng `<details>` thuần để kiểm soát animation). |
| `components/Footer` | 3 cột link (Bộ sưu tập / Hỗ trợ / Dynk) + thông tin thương hiệu + social. |
| `hooks/useLenis.ts` | Khởi tạo smooth-scroll toàn site, tự tắt nếu `prefers-reduced-motion`. |
| `hooks/useNavbarVisibility.ts` | So sánh vị trí cuộn hiện tại với lần trước để quyết định ẩn/hiện navbar. |
| `hooks/useScrollProgress.ts` | % đã cuộn của toàn trang — dùng cho thanh progress. |
| `hooks/usePrefersReducedMotion.ts` | Theo dõi media query `prefers-reduced-motion`, dùng trong Showcase để tắt parallax. |

---

## 4. Kiến trúc animation

Toàn bộ animation Framer Motion định nghĩa **một lần** trong
`src/animations/variants.ts`, các component chỉ import và dùng — tránh lặp
config easing/duration rải rác.

| Variant | Hiệu ứng | Dùng ở đâu |
|---|---|---|
| `fadeUp` | Mờ dần + trượt lên 32px | SectionHeading, FAQ, ProductCard |
| `blurIn` | Mờ nét (blur) → rõ nét + scale nhẹ | Ảnh Hero |
| `scaleIn` | Phóng to nhẹ từ 0.92 → 1 | (sẵn để dùng thêm) |
| `slideFromLeft` / `slideFromRight` | Trượt ngang vào khung hình | Brand, Features (layout xen kẽ) |
| `heroTextReveal` | Reveal từng từ headline, có `delay` theo index | Hero |
| `staggerContainer(delay)` | Bọc ngoài để các con trễ nhau theo `delay` | Product grid, Customer grid |

Animation thuần CSS (định nghĩa trong `src/styles/index.css`):
- `dynk-float` — bồng bềnh nhẹ liên tục cho ảnh hero (`.anim-float`)
- `dynk-ripple` — vòng ripple lan ra từ điểm click, dùng trong `Button`
- `prefers-reduced-motion: reduce` — tắt toàn bộ animation/transition trên toàn site nếu người dùng bật cờ này ở hệ điều hành

Navbar hide/show, scroll progress, và parallax trong Showcase chạy qua
`requestAnimationFrame`/scroll listener thật (không phải animation cố định),
nên luôn khớp đúng vị trí cuộn thực tế.

---

## 5. Hướng dẫn thay ảnh (quan trọng nhất)

**Không sửa bất kỳ component nào.** Mọi đường dẫn ảnh nằm trong một file duy nhất:

```
src/constants/images.ts
```

Mở file đó, bạn sẽ thấy:

```ts
export const Images = {
  hero: {
    main: "/assets/images/hero.svg",       // ← đổi thành "/assets/images/hero.jpg"
    detail: "/assets/images/hero-detail.svg",
  },
  products: {
    p1: "/assets/images/product-01.svg",
    // ...
  },
  // ...
};
```

**3 bước để thay ảnh thật:**

1. Copy file ảnh thật (`.jpg`, `.png`, `.webp`) vào `public/assets/images/`.
2. Mở `src/constants/images.ts`, đổi giá trị string tương ứng sang tên file mới.
3. Lưu lại — Vite tự reload, không cần sửa gì khác.

Hiện tại mọi key đang trỏ tới một ảnh placeholder `.svg` màu đen có khung
tròn + đường thẳng (gợi hình khuyên tai) và label cho biết vị trí đó là gì
(`HERO`, `PRODUCT 01`...), để bạn xem trước layout trước khi có ảnh thật.

---

## 6. Cách deploy

Project là static site thuần (không có backend), nên deploy được lên bất kỳ static host:

**Vercel / Netlify (khuyên dùng — kéo thả):**
```bash
npm run build
```
Trỏ build command = `npm run build`, output directory = `dist`.

**Deploy thủ công lên bất kỳ hosting tĩnh (Nginx, S3, GitHub Pages...):**
```bash
npm run build
# upload toàn bộ nội dung trong /dist lên host
```

---

## 7. Cách thêm section mới

1. Tạo thư mục mới trong `src/components/TenSection/`.
2. Tạo file `TenSection.tsx` theo mẫu các section hiện có — luôn bọc nội dung trong `<Container>` để giữ max-width và padding nhất quán.
3. Nếu section cần animation khi cuộn tới, dùng variant có sẵn trong `src/animations/variants.ts` (ví dụ `fadeUp`) kết hợp `whileInView` + `viewport={revealViewport}`.
4. Mở `src/pages/Home.tsx`, import section mới và chèn vào đúng vị trí trong JSX.
5. Nếu section dùng ảnh: thêm key mới vào `src/constants/images.ts`, không hardcode path trong component. Nếu dùng nội dung dạng danh sách: thêm file mới trong `src/data/`.

---

## 8. Cách đổi màu thương hiệu

Toàn bộ token màu nằm ở **2 nơi cần đổi đồng bộ**:

1. `tailwind.config.js` → `theme.extend.colors` (dùng cho mọi class Tailwind như `text-champagne`, `bg-ink`)
2. `src/constants/colors.ts` (dùng khi cần giá trị màu thuần trong code JS, ví dụ truyền vào style inline)

Đổi giá trị hex ở cả 2 file theo đúng key tương ứng — không cần sửa component nào khác vì component luôn gọi qua tên token (`text-champagne`), không hardcode hex.

---

## 9. Cách thêm trang mới (multi-page)

Project hiện là single-page (`pages/Home.tsx`). Để thêm trang thứ hai:

1. Cài thêm router: `npm install react-router-dom`
2. Tạo file mới trong `src/pages/`, ví dụ `src/pages/SanPham.tsx`, theo cấu trúc tương tự `Home.tsx`.
3. Bọc `<App />` bằng `<BrowserRouter>` trong `src/main.tsx`, khai báo `<Routes>` với từng `<Route path="..." element={<TenTrang />} />`.
4. Cập nhật link trong `Navbar` (`NAV_LINKS`) và `Footer` (`FOOTER_LINKS`) để trỏ sang route mới bằng `<Link>` của react-router thay vì `<a href="#...">`.

---

## 10. Ghi chú thật lòng về giới hạn

- Tôi viết toàn bộ code này **không có internet** trong sandbox, nên chưa
  chạy được `npm install` / `npm run dev` / `npm run build` thật để xác nhận
  zero lỗi. Tôi đã rà thủ công: mọi import, path alias, kiểu TypeScript,
  tên class Tailwind custom — nhưng một dependency version conflict hiếm gặp
  vẫn có thể xảy ra trên máy bạn.
- Nếu `npm install` báo lỗi version, thử xoá `package-lock.json` (nếu npm tự
  tạo) và chạy lại, hoặc cho tôi biết thông báo lỗi cụ thể để sửa.
- Toàn bộ ảnh hiện là placeholder SVG, không phải hình thật của trang
  earlegant.vn — đúng như yêu cầu "không copy nội dung/branding gốc".
