"use client";

import { useState, Fragment } from "react";
import Image from "next/image";
import { TabGroup, Tab, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Transition } from "@headlessui/react";
// import CarouselImg01 from "@/public/images/carousel-01.png";
// import CarouselImg02 from "@/public/images/carousel-02.png";
// import CarouselImg03 from "@/public/images/carousel-03.png";
// import SmallTestimonialImg from "@/public/images/small-testimonial.jpg";

const tabs = [
  {
    title: "Sign Up",
    description:
      "Use your work email or Gmail to get started. No credit card, no friction.",
    img: "/images/carousel-01.png",
    imgAlt: "Carousel image 01",
  },
  {
    title: "Name & Write Your Blog",
    description:
      "Give your blog a name (you can change it later), start writing, and let HyperBlog handle everything else—just hit publish.",
    img: "/images/carousel-02.png",
    imgAlt: "Carousel image 02",
  },
  {
    title: "Connect Your Domain",
    description:
      "Easily link HyperBlog to your existing website and migrate old content in minutes. Your blog, your domain, your brand.",
    img: "/images/carousel-03.png",
    imgAlt: "Carousel image 03",
  },
];

export default function SplitCarousel() {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <section>
      <TabGroup selectedIndex={selectedTab} onChange={setSelectedTab} vertical>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
            <div className="flex flex-col items-center justify-between pb-12 md:flex-row md:gap-8 md:pb-20 lg:gap-16">
              {/* Left content */}
              <div className="shrink-0 md:w-[500px] [&_>*]:pl-7">
                <div className="relative mb-6 border-l [border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.700/.25),transparent)1] after:absolute after:left-0 after:top-0 after:h-4 after:w-px after:origin-bottom after:-translate-y-full after:animate-shine after:opacity-0">
                  <div className="mb-4">
                    <h2 className="bg-[linear-gradient(to_right,theme(colors.black),theme(colors.black),theme(colors.black),theme(colors.black),theme(colors.black))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-3xl">
                      Launch your Blog in 5 Mins
                    </h2>
                    <p className="text-[#475467]">
                      From sign-up to publish—your blog goes live in minutes, not days.
                    </p>
                  </div>
                  {/* <h5 className="bg-[linear-gradient(to_right,theme(colors.black),theme(colors.black),theme(colors.black),theme(colors.black),theme(colors.black))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-xl">
                    Sign Up
                    </h5> */}

                  {/* Buttons */}
                  <TabList className="space-y-2">
                    {tabs.map((tab, index) => (
                      <Tab key={index} as={Fragment}>
                        <button
                          className={`-mx-2 flex gap-2 p-2 text-left  focus-visible:outline-none ui-focus-visible:outline-none`}
                        >
                          <svg
                            className={`shrink-0 ${selectedTab !== index ? "fill-[#FE8800]" : "fill-[#EC451E]"}`}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                          >
                            <path d="m14.092 5.207-8.207 8.207-3.592-3.591 1.414-1.415 2.178 2.178 6.793-6.793 1.414 1.414Z" />
                          </svg>
                          <span>
                            <span className="font-medium text-[#0F0805]">
                              {tab.title}
                            </span>
                            <span className="text-[#475467]"> - </span>
                            <span className="text-[#475467]">
                              {tab.description}
                            </span>
                          </span>
                        </button>
                      </Tab>
                    ))}
                  </TabList>
                </div>
              </div>

              {/* Right content */}
              <TabPanels className="shrink-0 md:w-[540px]" data-aos="fade-up">
                <div className="relative flex flex-col">
                  {tabs.map((tab, index) => (
                    <Transition
                      key={index}
                      as="div"
                      show={selectedTab === index}
                      className={`transform transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] data-[closed]:absolute data-[enter]:data-[closed]:-translate-y-6 data-[leave]:data-[closed]:translate-y-12 data-[closed]:opacity-0 data-[enter]:duration-500 data-[leave]:duration-300`}
                      unmount={false}
                      appear={true}
                    >
                      <TabPanel as={Fragment} static={true}>
                        <Image
                          width={540}
                          height={520}
                          src={tab.img}
                          alt={tab.imgAlt}
                        />
                      </TabPanel>
                    </Transition>
                  ))}
                </div>
              </TabPanels>
            </div>
          </div>
        </div>
      </TabGroup>
    </section>
  );
}
