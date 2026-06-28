import { motion } from "framer-motion";
import { Container } from "@/components/Common/Container";
import { SectionHeading } from "@/components/Common/SectionHeading";
import { ProductCard } from "@/components/Card/ProductCard";
import { products } from "@/data/products";
import { staggerContainer, revealViewport } from "@/animations/variants";

export function Product() {
  return (
    <section id="products" className="py-28 lg:py-36">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Bộ sưu tập"
            title="Bốn vị trí, bốn cách xử lý khác nhau"
            description="Mỗi vị trí xỏ trên tai chịu lực và cọ xát khác nhau. Dynk thiết kế riêng cho từng vị trí, không dùng một dáng chốt rồi thu nhỏ."
          />
          <a
            href="#faq"
            className="hidden whitespace-nowrap text-sm text-bone/60 underline-offset-4 hover:text-bone hover:underline sm:inline"
          >
            Cách chọn size tai →
          </a>
        </div>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mt-14 grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
