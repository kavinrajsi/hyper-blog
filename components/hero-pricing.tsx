import Image from "next/image";
import SecondaryIllustration from "@/public/images/secondary-illustration.svg";
import AvatarImg01 from "@/public/images/avatar-01.jpg";
import AvatarImg02 from "@/public/images/avatar-02.jpg";
import AvatarImg03 from "@/public/images/avatar-03.jpg";
import AvatarImg04 from "@/public/images/avatar-04.jpg";

export default function HeroPricing() {
  return (
    <>
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="border-t pt-12">
            {/* Section header */}
            <div className="mx-auto max-w-6xl pt-3 text-center">
              <h2
                className="text-black pb-5 font-nacelle text-3xl font-semibold md:text-4xl leading-relaxed"
                data-aos="fade-up"
                style={{ lineHeight: "1.4" }}
              >
                The Only AI-Powered Blog CMS That Replaces{" "}
                <span className="text-[#e57a00] whitespace-nowrap">
                  5+ Tools, Plugins&nbsp;—
                </span>{" "}
                Built to Rank and Convert
              </h2>
              <p
                className="mb-8 text-xl text-black"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Why pay for separate tools when HyperBlog does it all? From
                AI-generated banners and infographics to built-in lead magnets
                and lightning-fast hosting—HyperBlog is the only blog CMS built
                to convert, not just rank.
              </p>
            </div>

            {/* ✅ Checklist Section */}
            <div className="mx-auto max-w-6xl flex flex-wrap justify-start sm:justify-center items-start sm:items-center gap-6 sm:gap-10 pb-8 mb-12 text-gray-700">
              {/* Item 1 */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 sm:w-10 sm:h-10 text-[#ff7701]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx="12" cy="12" r="9" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 12.5l3 3 6-6"
                  />
                </svg>
                <span className="text-base sm:text-lg text-black">
                  No Lead Magnet Builders
                </span>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 sm:w-10 sm:h-10 text-[#ff7701]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx="12" cy="12" r="9" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 12.5l3 3 6-6"
                  />
                </svg>
                <span className="text-base sm:text-lg text-black">
                  No SEO Plugins or Checklists
                </span>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 sm:w-10 sm:h-10 text-[#ff7701]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx="12" cy="12" r="9" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 12.5l3 3 6-6"
                  />
                </svg>
                <span className="text-base sm:text-lg text-black">
                  No Hosting Headaches
                </span>
              </div>
            </div>

            {/* Pricing table (to be added) */}
          </div>
        </div>
      </section>
    </>
  );
}
