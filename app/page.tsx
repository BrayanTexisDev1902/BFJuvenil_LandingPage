"use client";
import { About } from "./ui/components/about";
import { CardCarousel } from "./ui/components/cardCarousel";
import { Footer } from "./ui/components/footer";
import { FullScreenSlider } from "./ui/components/fullScreenSlider";
import { Gallery } from "./ui/components/gallery";
import { Header } from "./ui/components/header";
import { Hero } from "./ui/components/hero";
import { InfiniteCarousel } from "./ui/components/infiniteCarousel";
import { Services } from "./ui/components/services";
import { Testimonials } from "./ui/components/testimonials";
import { useScrollAnimation } from "./ui/hooks/useScrollAnimation";

export default function Home() {
  useScrollAnimation();
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FullScreenSlider />
      <About />
      <CardCarousel />
      <Services />
      <InfiniteCarousel />
      <Gallery />
      <Testimonials />
      <Footer />
    </div>
  );
}
