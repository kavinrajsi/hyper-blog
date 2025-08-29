"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export default function Middlehome1() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div>
          {/* Main Heading */}
          <h3 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-2xl md:text-3xl font-semibold text-black text-center mb-10">
            Integrate with Your Existing Website
          </h3>

          {/* Flex container */}
          <div className="flex flex-col items-center justify-between pb-12 md:flex-row md:gap-8 md:pb-6 lg:gap-16">
            
            {/* Left content */}
            <div className="shrink-0 md:w-[500px] [&_>*]:pl-7">
              <div className="relative mb-6 border-l [border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.400/.25),transparent)1] after:absolute after:left-0 after:top-0 after:h-4 after:w-px after:origin-bottom after:-translate-y-full after:animate-shine after:bg-[linear-gradient(180deg,_transparent,_theme(colors.indigo.500/.5)_25%,_theme(colors.indigo.500)_50%,_theme(colors.indigo.500/.5)_75%,_transparent)] after:opacity-0">

                {/* Second Title + Image (stack on mobile, side-by-side on desktop) */}
                <div className="mb-4 flex flex-col items-center gap-4 md:block">
                  <h4 className="bg-[linear-gradient(to_right,theme(colors.black),theme(colors.black),theme(colors.black))] bg-[length:200%_auto] bg-clip-text pb-2 font-nacelle text-xl md:text-2xl font-semibold text-transparent text-center md:text-left">
                    Easily Integrate HyperBlog with Your Existing Website
                  </h4>
                  {/* Image next to title in mobile view */}
                  <img
                    src="/images/integrate_image.webp"
                    className="inline-flex max-w-[250px] md:hidden"
                    alt="integrate_site"
                  />
                  <p className="text-[#0F0805]">
                    No need to rebuild or migrate your whole site—just plug HyperBlog into your existing setup and start growing.
                  </p>
                </div>

                {/* Feature List */}
                <div>
                  {[
                    {
                      title: "Flexible Integration Options",
                      desc: "Use it as a subfolder (e.g. /blog), subdomain (e.g. blog.yoursite.com), or your main domain.",
                    },
                    {
                      title: "Works with Any Platform",
                      desc: "WordPress, Webflow, custom code—anything goes.",
                    },
                    {
                      title: "No Code or Plugins Needed",
                      desc: "Simple setup, no tech headaches.",
                    },
                    {
                      title: "Your Site Stays Untouched",
                      desc: "Keep your current design and structure as is.",
                    },
                    {
                      title: "All the HyperBlog Power",
                      desc: "AI visuals, SEO automation, lead magnets & blazing speed.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start mt-3 mb-1">
                      <FaCheck className="text-[#e57a00] text-md mr-2 mt-[2px] min-w-[20px]" />
                      <div>
                        <h2 className="text-md font-semibold text-gray-900">{item.title}</h2>
                        <p className="mb-2 text-gray-900">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right content (desktop only image) */}
            <div className="relative hidden md:flex">
              <img
                src="/images/integrate_image.webp"
                className="inline-flex mt-auto p-3"
                alt="integrate_site"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
