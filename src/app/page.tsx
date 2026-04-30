import { FeaturedPropertiesSection } from "@/components/FeaturedPropertieSection";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { HomeSections, SiteFooter,  } from "@/components/site";
import { SiteHeader } from "@/components/SiteHeader";

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <HomeSections />
      <SiteFooter />
    </main>
  );
}
