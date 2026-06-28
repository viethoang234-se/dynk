import { FiInstagram, FiFacebook } from "react-icons/fi";
import { Container } from "@/components/Common/Container";
import { Images } from "@/constants/images";

const FOOTER_LINKS = {
  "Bộ sưu tập": ["Khuyên Lobe", "Khuyên Helix", "Khuyên Tragus", "Khuyên Conch"],
  "Hỗ trợ": ["Đo size tai", "Hướng dẫn chăm sóc", "Đổi trả", "Vận chuyển"],
  "Dynk": ["Câu chuyện", "Atelier", "Tuyển dụng", "Liên hệ"],
};

export function Footer() {
  return (
    <footer className="border-t border-line pb-10 pt-20">
      <Container>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2 md:col-span-2">
            <a href="#top" className="flex items-center gap-2.5">
              <img src={Images.logo.mark} alt="" className="h-7 w-7" />
              <span className="font-display text-lg text-bone">Dynk</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-bone/55">
              Khuyên tai và khuyên xỏ chế tác từ vàng 14K, bạc 925 và titan
              implant-grade. Soi từng chi tiết trước khi chạm vào tai bạn.
            </p>
            <div className="mt-6 flex gap-4 text-bone/60">
              <a href="https://www.instagram.com/dynkearrings.ins?igsh=cmI0eTRtenAxdGVn" aria-label="Instagram của Dynk" className="hover:text-bone">
                <FiInstagram size={18} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61582696056326&locale=vi_VN" aria-label="Facebook của Dynk" className="hover:text-bone">
                <FiFacebook size={18} />
              </a>
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <p className="label-eyebrow mb-4">{heading}</p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-bone/55 transition-colors hover:text-bone"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-line pt-7 text-xs text-ash sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Dynk. Mọi quyền được bảo lưu.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-bone/80">Chính sách bảo mật</a>
            <a href="#" className="hover:text-bone/80">Điều khoản</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
