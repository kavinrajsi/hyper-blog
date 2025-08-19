"use client";

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

type TabKey = "start" | "existing";

const tabContent: Record<
  TabKey,
  { title: string; description: string; image: string; btnName: string; btnLink: string; content: number }
> = {
  start: {
    title: "Starting Fresh?",
    description:
      "Launching a new website or blog? Hyperblog plugs into any platform—WordPress, Webflow, custom code, or anything in between. No plugins, no technical setup.",
    image: "/images/fresh.gif",
    btnName: "Join Waitlist",
    btnLink: "/#",
    content: 1,
  },
  existing: {
    title: "Already Have a Blog?",
    description:
      "Moving to a new platform doesn’t have to mean starting over. Hyperblog makes migration fast, safe, and effortless—no matter what your site is built on.",
    image: "/images/already.gif",
    btnName: "Join Waitlist",
    btnLink: "/#",
    content: 2,
  },
};

export default function Middlehome2() {
  const [activeTab, setActiveTab] = useState<TabKey>("start");

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-10">
          {/* Toggle Tab Menu */}
          <div className="flex justify-center mt-8 mb-10">
            <div className="flex bg-gray-200 rounded-full overflow-x-auto scrollbar-hide space-x-2 sm:space-x-4 p-1">
              {(["start", "existing"] as TabKey[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 sm:px-6 py-2 text-[14px] sm:text-[18px] md:text-[22px] lg:text-[25px] font-semibold rounded-full whitespace-nowrap transition
                    ${
                      activeTab === tab
                        ? "bg-[#e57a00] text-white"
                        : "text-gray-800 hover:bg-[#f4a352]"
                    }`}
                >
                  {tab === "start" ? "Starting Fresh?" : "Already Have a Blog?"}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="flex flex-col md:flex-row items-center justify-between md:gap-8 lg:gap-16">
            {/* Left Text */}
            <div className="md:w-[500px] order-1">
              <div className="relative mb-6">
                <h3 className="text-2xl sm:text-3xl font-semibold text-black mb-4">
                  {tabContent[activeTab].title}
                </h3>
                <p className="text-[#0F0805]">{tabContent[activeTab].description}</p>

                {/* GIF below description ONLY on mobile */}
                <div className="block md:hidden mt-4">
                  <img
                    src={tabContent[activeTab].image}
                    className="max-w-xs sm:max-w-sm mx-auto"
                    alt="Tab Visual Mobile"
                  />
                </div>

                {/* Starting Fresh Features */}
                {tabContent[activeTab].content == 1 && (
                  <div>
                    <div className="flex items-start mt-3 mb-1">
                      <FaArrowRight className="text-[#e57a00] text-lg mr-2 mt-[2px]" />
                      <div>
                        <h2 className="text-md font-semibold text-gray-900">Zero-Code Setup</h2>
                        <p className="mb-2 text-gray-900">Go live in minutes, even without a dev team.</p>
                      </div>
                    </div>

                    <div className="flex items-start mt-3 mb-1">
                      <FaArrowRight className="text-[#e57a00] text-lg mr-2 mt-[2px]" />
                      <div>
                        <h2 className=" text-md font-semibold text-gray-900">SEO-Ready from Day One</h2>
                        <p className="mb-2 text-gray-900">Built-in auto-optimization for search</p>
                      </div>
                    </div>

                    <div className="flex items-start mt-3 mb-1">
                      <FaArrowRight className="text-[#e57a00] text-lg mr-2 mt-[2px]" />
                      <div>
                        <h2 className="text-md font-semibold text-gray-900">AI Visuals & Lead Magnets</h2>
                        <p className="mb-2 text-gray-900">Instantly generate banners, infographics, and CTAs</p>
                      </div>
                    </div>

                    <div className="flex items-start mt-3 mb-1">
                      <FaArrowRight className="text-[#e57a00] text-lg mr-2 mt-[2px]" />
                      <div>
                        <h2 className="mb-1 text-md font-semibold text-gray-900">No Separate Hosting Needed</h2>
                        <p className="mb-2 text-gray-900">We handle performance, speed, and security</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Already Have a Blog Features */}
                {tabContent[activeTab].content == 2 && (
                  <div>
                    <div className="flex items-start mt-3 mb-1">
                      <FaArrowRight className="text-[#e57a00] text-lg mr-2 mt-[2px]" />
                      <div>
                        <h2 className="text-md font-semibold text-gray-900">Seamless Migration</h2>
                        <p className="mb-2 text-gray-900">
                          Bring over 10 or 10,000+ blog posts in minutes—with zero data loss.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start mt-3 mb-1">
                      <FaArrowRight className="text-[#e57a00] text-lg mr-2 mt-[2px]" />
                      <div>
                        <h2 className=" text-md font-semibold text-gray-900">Retain Your SEO Power</h2>
                        <p className="mb-2 text-gray-900">
                          Preserve your rankings, meta tags, URL structure, and backlinks—without lifting a finger.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start mt-3 mb-1">
                      <FaArrowRight className="text-[#e57a00] text-lg mr-2 mt-[2px]" />
                      <div>
                        <h2 className="text-md font-semibold text-gray-900">Full Design Control</h2>
                        <p className="mb-2 text-gray-900">
                          Customize the look and feel of your new blog to match your brand perfectly.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start mt-3 mb-1">
                      <FaArrowRight className="text-[#e57a00] text-lg mr-2 mt-[2px]" />
                      <div>
                        <h2 className="mb-1 text-md font-semibold text-gray-900">No Downtime, No Worries</h2>
                        <p className="mb-2 text-gray-900">
                          Your content stays live while we handle the heavy lifting in the background.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Button */}
                <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-start mt-3">
                  <div data-aos="fade-up" data-aos-delay={400}>
                    <a
                      className="btn group mb-4 w-full bg-[#E57A00] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:brightness-110 sm:mb-0 sm:w-auto p-2"
                      href={tabContent[activeTab].btnLink}
                    >
                      <span className="relative inline-flex items-center text-white font-bold text-[15px]">
                        {tabContent[activeTab].btnName}
                        <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5"></span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image (hidden on mobile, visible on md+) */}
            <div className="hidden md:flex relative flex-col order-2">
              <img
                src={tabContent[activeTab].image}
                className="inline-flex mt-auto max-w-md lg:max-w-xl"
                alt="Tab Visual Desktop"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
