import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/Common/Container";
import { Images } from "@/constants/images";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yRange = reducedMotion ? ["0%", "0%"] : ["-8%", "8%"];
  const scaleRange = reducedMotion ? [1, 1, 1] : [1.08, 1, 1.08];

  const y = useTransform(scrollYProgress, [0, 1], yRange);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], scaleRange);

  return (
    <section
      ref={ref}
      className="relative h-[85vh] overflow-hidden"
      aria-label="Hình ảnh trưng bày bộ sưu tập Dynk"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={Images.showcase.banner}
          alt="Bàn tay đang đeo khuyên tai Dynk, ánh sáng studio"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />

      <Container className="relative z-10 flex h-full items-end pb-16">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display max-w-lg text-2xl leading-snug text-bone md:text-3xl"
        >
          Mỗi chiếc khuyên rời atelier khi đã qua tay người kiểm cuối cùng —
          không phải máy quét.
        </motion.p>
      </Container>
    </section>
  );
}
