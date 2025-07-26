"use client";
import { useState } from "react";
import Spotlight from "@/components/spotlight";
import Clients from "@/components/clients";
import Feature_section from "@/components/feature_section";
import SupaDemoEmbed from './supa-demo-embed'

const cardData = [
  {
    title: "Personalized Lead magnets",
    desc: "HyperBlog analyzes each blog’s intent and automatically displays personalized lead magnets—maximizing conversions without manual effort.",
    embed: <SupaDemoEmbed/>, 
  },
  {
    title: "Auto Technical SEO",
    desc: "Built with Next.js, Hyperblog automatically boosts your site speed and Core Web Vitals for better SEO without any extra effort.",
    image: "/images/Screen.png",
  },
  {
    title: "Blog to Banner",
    desc: "No banner image for your blog post? No worries! Hyperblog automatically creates a professional banner for your blog to make it look attractive and ready to share.",
    image: "/images/Screen2.png",
  },
  {
    title: "Blog to Infography",
    desc: "Easily convert blogs to informative infographics to increase visual engagement and simplify complex content.",
    image: "/images/Screen3.png",
  }
];

export default function Workflows() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className=" md:pb-10">
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none md:grid-cols-4 mb-14">
            {cardData.map((card, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="group/card relative h-full rounded-2xl p-px text-left"
                >
                  <div
                    className={`
                      relative z-20 h-full rounded-[inherit] border transition-all duration-300
                      ${isActive ? "bg-[#FE7062] border-[#FE7062]" : "bg-white border-[#F6BF1A]"}
                      group-hover/card:border-[#FE7062] group-hover/card:shadow-[0_30px_30px_rgba(254,112,98,0.2)]
                    `}
                  >
                    <div className="p-6 text-left">
                      <div className="mb-3">
                        <span
                          className={`text-[18px] font-semibold transition-colors duration-300 ${
                            isActive
                              ? "text-white"
                              : "text-[#e57a00]"
                          }`}
                        >
                          {card.title}
                        </span>
                      </div>
                      <p
                        className={`text-[15px] transition-colors duration-300 ${
                          isActive ? "text-white" : "text-black"
                        }`}
                      >
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </Spotlight>

          {cardData[activeIndex].image ? 
          <img
            src={cardData[activeIndex].image}
            className="w-full h-auto transition-all duration-500"
            alt="Screen"
          />
          :
          cardData[activeIndex].embed
          }

          

          <Clients />
          <Feature_section />
        </div>
      </div>
    </section>
  );
}
