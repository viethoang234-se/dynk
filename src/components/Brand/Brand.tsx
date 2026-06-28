import { motion } from "framer-motion";
import { Container } from "@/components/Common/Container";
import { SectionHeading } from "@/components/Common/SectionHeading";
import { Images } from "@/constants/images";
import { slideFromLeft, slideFromRight, revealViewport } from "@/animations/variants";

export function Brand() {
  return (
    <section id="brand" className="py-28 lg:py-36">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <motion.div
          variants={slideFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="order-2 lg:order-1"
        >
          <SectionHeading
            eyebrow="Câu chuyện"
            title="Bắt đầu từ một chiếc khuyên xỏ bị kích ứng"
          />
          <div className="mt-6 space-y-5 text-base leading-relaxed text-bone/70 md:text-[1.05rem]">
            <p>
              Dynk ra đời sau khi người sáng lập thử qua bảy bộ khuyên helix
              khác nhau, và vẫn bị kích ứng ở chiếc thứ tám. Vấn đề không phải
              ở cơ thể — mà ở việc gần như không nơi nào ghi rõ hợp kim thật
              trong khuyên đang bán.
            </p>
            <p>
              Từ đó, mọi sản phẩm của Dynk đều ghi rõ chất liệu, mã lô, và
              được kiểm dưới kính lúp trước khi đóng gói. Không phải vì đó là
              tiêu chuẩn ngành, mà vì đó là điều một người từng bị kích ứng
              tai sẽ muốn biết trước khi mua.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={slideFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="order-1 aspect-[4/5] overflow-hidden rounded-[28px] lg:order-2"
        >
          <img
            src={Images.brand.portrait}
            alt="Góc làm việc tại atelier Dynk, dụng cụ chế tác khuyên tai"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </Container>
    </section>
  );
}
