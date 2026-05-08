import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Sectors from "@/components/Sectors";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Material from "@/components/Material";
import Works from "@/components/Works";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";
import JsonLd from "@/components/JsonLd";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <>
      <JsonLd />
      <SmoothScroll />
      <Header />
      <main className="relative z-10 bg-paper mb-[100svh] md:mb-[820px]">
        <Hero />
        <Statement />
        <Sectors />
        <About />
        <Process />
        <Services />
        <Material />
        <Works />
        <Faq />
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
