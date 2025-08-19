"use client";
import { useState } from "react";
import Spotlight from "@/components/spotlight";
import Clients from "@/components/clients";
import Feature_section from "@/components/feature_section";
import SupaDemoEmbed from './supa-demo-embed';

const cardData = [
  {
    title: "Lead magnets",
    desc: "HyperBlog analyzes each blog’s intent and automatically displays personalized  lead magnets—maximizing conversions without manual effort.",
    embed: <SupaDemoEmbed />,
  },
  {
    title: "Auto Technical SEO",
    desc: "Built with Next.js, Hyperblog automatically boosts your site speed and Core Web Vitals for better SEO without any extra effort.",
    image: "/images/Screen.png",
  },
  {
    title: "Blog to Banner",
    desc: "No banner image for your blog post? No worries! Hyperblog automatically creates a professional banner for your blog to make it look attractive and ready to share.",
    image: "/images/blog-banner.gif",
  },
  {
    title: "Blog to Infography",
    desc: "Easily convert blogs to informative infographics to increase visual engagement and simplify complex content.",
    image: "/images/blog-infographic.gif",
  }
];

export default function Workflows() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="mt-6">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
       <h3
  className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-12 md:pb-12 font-nacelle text-xl md:text-3xl text-center font-semibold text-black leading-[1.8] md:leading-snug"
>
  <span className="block text-lg md:text-3xl text-gray-500">
    Most CMSs = Publish
  </span>
  <span className="block text-lg md:text-3xl leading-[1.8] md:leading-[2]">
    <span className="text-[#e57a00]">Hyperblog</span> = Publish + Engage + Convert
  </span>
</h3>


        <div className="grid md:grid-cols-12 gap-10 min-h-[500px] items-center">
          {/* Left Column */}
          <div className="md:col-span-3 flex items-center h-full">
            <div className="w-full space-y-9">
              {cardData.map((card, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={index}
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                      isActive ? "border-[#e57a00]" : "border-[#F6BF1A]"
                    }`}
                  >
                    <button
                      className="w-full text-left px-6 py-4 flex justify-between items-center"
                      onClick={() => setActiveIndex(index)}
                    >
                      <span
                        className={`text-[18px] font-semibold ${
                          isActive ? "text-[#e57a00]" : "text-[#e57a00]"
                        }`}
                      >
                        {card.title}
                      </span>
                      <span
                        className={`ml-4 flex items-center justify-center w-8 h-8 rounded-full transition-transform duration-300 ${
                          isActive ? "rotate-180 bg-[#e57a00]" : "bg-[#F6BF1A]"
                        }`}
                      >
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={3}
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>

                    {/* Description always rendered for active item */}
                    {isActive && (
                      <div className="px-6 pb-4 text-[15px] text-black animate-fade-in">
                        {card.desc}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column */}
<div className="md:col-span-9 flex items-center justify-center rounded-xl overflow-hidden transition-all duration-500">
  {cardData[activeIndex].image ? (
    <img
      src={cardData[activeIndex].image}
      alt="Selected Feature"
      className="w-auto h-[500px] object-contain rounded-xl"
    />
  ) : (
    cardData[activeIndex].embed
  )}
</div>
        </div>

        <div className="mt-20">
          <Clients />
          <Feature_section />
        </div>
      </div>

      {/* Optional animation class */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
