"use client";
import { About } from "./ui/components/about";
import { CardCarousel } from "./ui/components/cardCarousel";
import { Footer } from "./ui/components/footer";
import { FullScreenSlider } from "./ui/components/fullScreenSlider";
import { Gallery } from "./ui/components/gallery";
import { Header } from "./ui/components/header";
import { Hero } from "./ui/components/hero";
import { HeroPage } from "./ui/components/heroPage";
import { InfiniteCarousel } from "./ui/components/infiniteCarousel";
import { InteractiveMenu } from "./ui/components/interactiveMenu";
import { Services } from "./ui/components/services";
import { TeamCards } from "./ui/components/teamCards";
import { Testimonials } from "./ui/components/testimonials";
import { Timeline } from "./ui/components/timeLine";
import { useScrollAnimation } from "./ui/hooks/useScrollAnimation";

export default function Home() {
  useScrollAnimation();
  return (
    <div className="min-h-screen">
      <Header />
      <HeroPage />
      <FullScreenSlider />
      <About />
      <Timeline />
      <TeamCards />
      <Services />
      <InteractiveMenu />
      <Gallery />
      <Footer />
    </div>
  );
}
