import { Navbar } from "@/components/Navbar/Navbar";
import { Hero } from "@/components/Hero/Hero";
import { Brand } from "@/components/Brand/Brand";
import { Product } from "@/components/Product/Product";
import { Features } from "@/components/Features/Features";
import { Showcase } from "@/components/Showcase/Showcase";
import { Customer } from "@/components/Customer/Customer";
import { FAQ } from "@/components/FAQ/FAQ";
import { Footer } from "@/components/Footer/Footer";

export function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Brand />
        <Product />
        <Features />
        <Showcase />
        <Customer />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
