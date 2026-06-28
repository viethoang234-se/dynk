import { motion } from "framer-motion";
import { Lens } from "@/components/Lens/Lens";
import { fadeUp } from "@/animations/variants";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      className="group flex flex-col"
    >
      <Lens
        image={product.image}
        alt={`${product.name}, ${product.material}`}
        className="transition-transform duration-500 ease-silk group-hover:-translate-y-1.5"
      />

      <div className="mt-5 flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[0.7rem] tracking-widest2 text-ash">
            {product.code}
          </p>
          <h3 className="mt-1.5 font-display text-lg text-bone">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-bone/55">{product.material}</p>
        </div>
        <p className="whitespace-nowrap font-mono text-sm text-champagne">
          {product.price}
        </p>
      </div>
    </motion.article>
  );
}
