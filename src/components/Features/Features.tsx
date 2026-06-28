import { motion } from "framer-motion";
import { Container } from "@/components/Common/Container";
import { features } from "@/data/features";
import { slideFromLeft, slideFromRight, revealViewport } from "@/animations/variants";

export function Features() {
  return (
    <section id="features" className="py-28 lg:py-36">
      <Container className="flex flex-col gap-28 lg:gap-36">
        {features.map((feature) => {
          const imageFromLeft = feature.align === "right";
          return (
            <div
              key={feature.id}
              className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
            >
              <motion.div
                variants={imageFromLeft ? slideFromRight : slideFromLeft}
                initial="hidden"
                whileInView="visible"
                viewport={revealViewport}
                className={
                  feature.align === "right" ? "lg:order-2" : "lg:order-1"
                }
              >
                <p className="label-eyebrow mb-4">{feature.eyebrow}</p>
                <h3 className="font-display text-2xl leading-snug text-bone md:text-3xl">
                  {feature.title}
                </h3>
                <p className="mt-5 max-w-md text-base leading-relaxed text-bone/65">
                  {feature.body}
                </p>
              </motion.div>

              <motion.div
                variants={imageFromLeft ? slideFromLeft : slideFromRight}
                initial="hidden"
                whileInView="visible"
                viewport={revealViewport}
                className={
                  "aspect-[7/5] overflow-hidden rounded-[28px] " +
                  (feature.align === "right" ? "lg:order-1" : "lg:order-2")
                }
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
