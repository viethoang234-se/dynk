import { motion } from "framer-motion";
import { Container } from "@/components/Common/Container";
import { SectionHeading } from "@/components/Common/SectionHeading";
import { customerStories } from "@/data/customers";
import { staggerContainer, fadeUp, revealViewport } from "@/animations/variants";

export function Customer() {
  return (
    <section className="py-28 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="Người đang đeo"
          title="Không phải ai cũng có lỗ tai giống nhau"
          align="center"
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-3"
        >
          {customerStories.map((story) => (
            <motion.figure
              key={story.id}
              variants={fadeUp}
              className="flex flex-col rounded-[24px] surface-glass p-6"
            >
              <div className="mb-5 aspect-[4/5] w-full overflow-hidden rounded-2xl">
                <img
                  src={story.image}
                  alt={story.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-silk hover:scale-105"
                />
              </div>
              <blockquote className="flex-1 text-[0.95rem] leading-relaxed text-bone/80">
                “{story.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-line pt-4">
                <p className="text-sm font-medium text-bone">{story.name}</p>
                <p className="mt-0.5 text-xs text-ash">{story.detail}</p>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
