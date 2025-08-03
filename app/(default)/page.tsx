export const metadata = {
  title: "HyperBlog – AI Blog CMS That Creates, Optimizes & Generate Leads Automatically",
  description: "HyperBlog is the world’s first AI-powered blog CMS that automates content creation, SEO, user engagement, and lead generation. Create banners, polls, infographics, and personalized lead magnets—without lifting a finger.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Testimonials from "@/components/testimonials";
import FAQSection from "@/components/faqs";
import Features from "@/components/features";
import Pricing from "@/components/pricing-home";
import SplitCarousel from "@/components/split-carousel";
import Middlehome1 from "@/components/middle1-home";
import Middlehome2 from "@/components/middle2-home";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Middlehome1 />
      <Middlehome2 />
      <SplitCarousel />
      <Features />
      <Testimonials />
      <FAQSection />
      <Cta />
    </>
  );
}
