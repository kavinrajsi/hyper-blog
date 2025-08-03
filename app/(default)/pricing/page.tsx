export const metadata = {
  title: "Pricing - Hyperblog",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-pricing";
import Faqs from "@/components/faqs";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import PricingTable from "@/components/pricing-table";
import NewPricingTable from "@/components/new-pricing-table";
import FAQPricingSection from "@/components/faqs-pricing";

export default function Pricing() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <PricingTable />
      <NewPricingTable />
      <FAQPricingSection />
      <Testimonials />
      <Cta />
    </>
  );
}
