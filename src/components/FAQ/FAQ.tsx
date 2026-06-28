import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlinePlus } from "react-icons/hi";
import { Container } from "@/components/Common/Container";
import { SectionHeading } from "@/components/Common/SectionHeading";
import { faqItems } from "@/data/faq";
import { fadeUp, revealViewport } from "@/animations/variants";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  return (
    <section id="faq" className="py-28 lg:py-36">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="Hỏi đáp" title="Những câu hỏi mua trước khi xỏ" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mt-12 divide-y divide-line border-y border-line"
        >
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id}>
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-base text-bone md:text-[1.05rem]">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="shrink-0 text-champagne"
                  >
                    <HiOutlinePlus size={20} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-10 text-sm leading-relaxed text-bone/65 md:text-[0.95rem]">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
