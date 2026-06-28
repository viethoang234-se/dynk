import { useRef, useState, type MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LensProps {
  image: string;
  alt: string;
  /** Mức phóng to bên trong kính lúp, 2 = gấp đôi. */
  zoom?: number;
  className?: string;
  aspectClassName?: string;
}

/**
 * Signature element của Dynk: vì sản phẩm là khuyên tai (rất nhỏ), một card
 * hover thông thường không cho thấy được độ tinh xảo của chi tiết. Lens mô
 * phỏng việc soi sản phẩm dưới kính lúp tại đúng điểm con trỏ đang ở.
 *
 * Chỉ hoạt động trên thiết bị có chuột thật (hover-capable); trên touch,
 * ảnh hiển thị bình thường không cần lens.
 */
export function Lens({
  image,
  alt,
  zoom = 2.2,
  className = "",
  aspectClassName = "aspect-[4/5]",
}: LensProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  }

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onMouseMove={handleMove}
      className={`relative overflow-hidden rounded-2xl bg-white/5 ${aspectClassName} ${className}`}
    >
      <img
        src={image}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
        draggable={false}
      />

      <AnimatePresence>
        {active && (
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute z-10 hidden rounded-full md:block"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              width: 168,
              height: 168,
              marginLeft: -84,
              marginTop: -84,
              border: "1px solid rgba(250,250,248,0.55)",
              boxShadow: "0 8px 30px rgba(0,0,0,0.45)",
              backgroundImage: `url(${image})`,
              backgroundSize: `${zoom * 100}%`,
              backgroundPosition: `${pos.x}% ${pos.y}%`,
              backgroundRepeat: "no-repeat",
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
