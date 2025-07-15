'use client';
import { About } from "./ui/components/about";
import { FullScreenSlider } from "./ui/components/fullScreenSlider";
import { Header } from "./ui/components/header";
import { Hero } from "./ui/components/hero";
import { useScrollAnimation } from "./ui/hooks/useScrollAnimation";

export default function Home() {
  useScrollAnimation();
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FullScreenSlider />
      <About />
    </div>
  );
}
