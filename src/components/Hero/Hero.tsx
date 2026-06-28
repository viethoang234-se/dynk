import { motion } from "framer-motion";
import { Container } from "@/components/Common/Container";
import { Button } from "@/components/Button/Button";
import { Images } from "@/constants/images";
import { heroTextReveal, blurIn } from "@/animations/variants";

const headlineWords = ["Mỗi", "chi", "tiết", "là", "một", "quyết", "định."];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* Glow ambient phía sau — rất mờ, không phải accent rực */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-[480px] w-[480px] rounded-full bg-champagne/10 blur-[120px]"
      />

      <Container className="relative z-10 grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="label-eyebrow mb-7"
          >
            Khuyên tai &amp; khuyên xỏ — chế tác tại Việt Nam
          </motion.p>

          <h1 className="font-display text-[2.6rem] leading-[1.08] tracking-tight text-bone sm:text-5xl lg:text-[3.6rem]">
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={heroTextReveal}
                initial="hidden"
                animate="visible"
                className="mr-3 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-7 max-w-md text-base leading-relaxed text-bone/65 md:text-[1.05rem]"
          >
            Vàng 14K, bạc 925, titan implant-grade. Mỗi chiếc khuyên được soi
            dưới kính lúp 10x trước khi rời khỏi atelier — để chiếc khuyên
            chạm vào tai bạn không có một cạnh thừa nào.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button variant="primary" className="px-8 py-4">
              Xem bộ sưu tập
            </Button>
            <Button variant="ghost" className="px-8 py-4">
              Đo size tai của bạn
            </Button>
          </motion.div>
        </div>

        <motion.div
          variants={blurIn}
          initial="hidden"
          animate="visible"
          className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[28px] surface-glass"
        >
          <img
            src={Images.hero.main}
            alt="Khuyên tai Dynk, cận cảnh chất liệu vàng 14K"
            className="anim-float h-full w-full object-cover"
            loading="eager"
          />
        </motion.div>
      </Container>
    </section>
  );
}
