import { motion } from "framer-motion";
import { fadeUp, revealViewport } from "@/animations/variants";
import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow && <p className="label-eyebrow mb-4">{eyebrow}</p>}
      <h2
        className={cn(
          "font-display text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.12] tracking-tight",
          light ? "text-ink" : "text-bone",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base md:text-[1.05rem] leading-relaxed",
            light ? "text-ink/70" : "text-bone/65",
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
