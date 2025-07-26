import Image from "next/image";
import SecondaryIllustration from "@/public/images/secondary-illustration.svg";
import AvatarImg01 from "@/public/images/avatar-01.jpg";
import AvatarImg02 from "@/public/images/avatar-02.jpg";
import AvatarImg03 from "@/public/images/avatar-03.jpg";
import AvatarImg04 from "@/public/images/avatar-04.jpg";
import PricingTable from "@/components/pricing-table";
import NewPricingTable from "./new-pricing-table";

export default function HeroPricing() {
  return (
<>
     <section className="relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="border-t py-12">
              {/* Section header */}
              <div className="mx-auto max-w-6xl pt-3 text-center">
                <h2
              className="text-black pb-5 font-nacelle text-3xl font-semibold md:text-4xl leading-relaxed"
              data-aos="fade-up"
              style={{ lineHeight: '1.4' }}
            >
              The Only AI-Powered Blog CMS That Replaces 5+ Tools, Plugins — Built to Rank and Convert 
            </h2>
                 <p
                className="mb-8 text-xl text-black"
                data-aos="fade-up"
                data-aos-delay={200}
              >
             Why pay for separate tools when HyperBlog does it all? From AI-generated banners and infographics to built-in lead magnets and lightning-fast hosting—HyperBlog is the only blog CMS built to convert, not just rank.</p>
             
              </div>
              {/* Pricing table */}
              <PricingTable />
              <NewPricingTable />
            </div>
          </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="border-t py-12">
          
          <div className="relative">
            {/* Team CTA */}
            <div className="mx-auto mt-8 max-w-2xl xl:max-w-none">
              <a
                className="group flex items-center justify-between gap-3 rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 bg-[length:100%_100%] bg-[center] px-4 py-3 backdrop-blur-sm transition-all duration-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:400%_100%]"
                href="#0"
              >
                <span className="text-indigo-200/65">
                  <span className="font-medium text-gray-200">Large team?</span>{" "}
                  Schedule a Business demo with a member of our team.
                </span>
                <span
                  className="flex shrink-0 items-center gap-3"
                  aria-hidden="true"
                >
                  {/* Avatars */}
                  <span className="-ml-0.5 flex -space-x-3">
                    <Image
                      className="box-content rounded-full border-2 border-gray-900"
                      src={AvatarImg01}
                      width={24}
                      height={24}
                      alt="Avatar 01"
                    />
                    <Image
                      className="box-content rounded-full border-2 border-gray-900"
                      src={AvatarImg02}
                      width={24}
                      height={24}
                      alt="Avatar 02"
                    />
                    <Image
                      className="box-content rounded-full border-2 border-gray-900"
                      src={AvatarImg03}
                      width={24}
                      height={24}
                      alt="Avatar 03"
                    />
                    <Image
                      className="box-content rounded-full border-2 border-gray-900"
                      src={AvatarImg04}
                      width={24}
                      height={24}
                      alt="Avatar 04"
                    />
                  </span>
                  {/* Arrow */}
                  <span className="tracking-normal text-indigo-500 transition-transform group-hover:translate-x-0.5">
                    {/* -&gt; */}
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
