import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import TestimonialImage from "@/public/images/large-testimonial-01.jpg";
import PricingTable from "@/components/pricing-table";
          import NewPricingTable from '@/components/new-pricing-table';


export default function PricingHome() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="border-t py-12">
          {/* Section header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-[#FF6D33] before:to-[#FF8A5B] after:h-px after:w-8 after:bg-gradient-to-l after:from-[#FF6D33] after:to-[#FF8A5B]">
              <span className="inline-flex bg-gradient-to-r from-[#FF6D33] to-[#FF8A5B] bg-clip-text text-transparent">
                Simple Pricing
              </span>
            </div>
            <h2 className="bg-[linear-gradient(to_right,theme(colors.black),theme(colors.black),theme(colors.black),theme(colors.black),theme(colors.black))] bg-[length:200%_auto] bg-clip-text pb-10 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Pick the right plan for your business
            </h2>
          </div>
          {/* Pricing table */}
          <PricingTable />

<NewPricingTable />
        </div>
      </div>
    </section>
  );
}
