import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Container } from "@/components/Common/Container";
import { useNavbarVisibility } from "@/hooks/useNavbarVisibility";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { Images } from "@/constants/images";

const NAV_LINKS = [
  { label: "Bộ sưu tập", href: "#products" },
  { label: "Chất liệu", href: "#features" },
  { label: "Câu chuyện", href: "#brand" },
  { label: "Hỏi đáp", href: "#faq" },
];

export function Navbar() {
  const visible = useNavbarVisibility();
  const progress = useScrollProgress();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      animate={{ y: visible ? 0 : -96 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="surface-glass border-b border-line">
        <Container className="flex h-[72px] items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <img src={Images.logo.mark} alt="" className="h-7 w-7" />
            <span className="font-display text-lg tracking-wide text-bone">
              Dynk
            </span>
          </a>

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-bone/75 transition-colors duration-200 hover:text-bone"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#products"
              className="rounded-full bg-bone px-5 py-2.5 text-sm font-medium text-ink transition-transform duration-300 ease-silk hover:-translate-y-0.5 hover:bg-champagne-bright"
            >
              Xem bộ sưu tập
            </a>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
            onClick={() => setMobileOpen((v) => !v)}
            className="text-bone lg:hidden"
          >
            {mobileOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
          </button>
        </Container>
      </div>

      <div className="h-[2px] w-full bg-white/5">
        <div
          className="h-full bg-champagne transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="surface-glass border-b border-line lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-2 py-3 text-base text-bone/85 hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
