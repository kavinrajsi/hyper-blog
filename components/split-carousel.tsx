"use client";

import { useState, Fragment } from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import { Transition } from "@headlessui/react";

const steps = [
  {
    number: "1",
    title: "Sign Up",
    description:
      "Use your work email or Gmail to get started. No credit card, no friction.",
    img: "/images/sign_up.webp",
    imgAlt: "Sign Up Image",
  },
  {
    number: "2",
    title: "Name & Write Your Blog",
    description:
      "Give your blog a name (you can change it later), start writing, and let HyperBlog handle everything else—just hit publish.",
    img: "/images/write_blog.webp",
    imgAlt: "Migrate Blog Image",
  },
  {
    number: "3",
    title: "Connect Your Domain",
    description:
      "Easily link HyperBlog to your existing website and migrate old content in minutes. Your blog, your domain, your brand.",
    img: "/images/connect_domain.webp",
    imgAlt: "Domain Setup Image",
  },
];

export default function SplitCarousel() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold text-[#101828] mb-4">
            Launch your Blog in 5 Mins
          </h2>
          <p className="text-[#0F0805] text-[16px] max-w-3xl">
            From sign-up to publish—your blog goes live in minutes, not days.
          </p>
        </div>

        {/* Split Section */}
        <Tab.Group selectedIndex={activeStep} onChange={setActiveStep}>
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Left: Steps List */}
            <div className="relative max-w-xl w-full">
              {activeStep <= 2 && (
                <div className="absolute left-6 top-[24px] h-[250px] w-[3px] bg-[#FFE9E0]">
                  <div
                    className="w-full bg-[#ff7701] transition-all duration-300 ease-in-out rounded-full"
                    style={{
                      height:
                        activeStep === 0
                          ? "0%"
                          : activeStep === 1
                          ? "50%"
                          : "100%",
                    }}
                  />
                </div>
              )}

              <Tab.List className="relative space-y-8">
                {steps.map((step, index) => (
                  <Tab key={index} as={Fragment}>
                    <button className="w-full text-left flex flex-col gap-4 group focus:outline-none">
                      {/* Step Content */}
                      <div className="flex gap-6">
                        {/* Number */}
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-medium shrink-0
                            ${
                              index <= activeStep
                                ? "bg-[#e57a00] text-[#ffffff]"
                                : "bg-[#FFE9E0] text-[#000000]"
                            }
                            transition-colors duration-300`}
                        >
                          {step.number}
                        </div>

                        {/* Title + Description */}
                        <div className="pt-3">
                          <h3
                            className={`text-xl font-semibold mb-2 transition-colors duration-300
                              ${
                                index <= activeStep
                                  ? "text-[#e57a00]"
                                  : "text-[#475467]"
                              }`}
                          >
                            {step.title}
                          </h3>
                          <p className="text-[#0F0805] text-[15px]">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* Image below step (mobile only) */}
                      <div className="md:hidden">
                        <Image
                          width={540}
                          height={320}
                          src={step.img}
                          alt={step.imgAlt}
                          className="rounded-xl mt-3"
                        />
                      </div>
                    </button>
                  </Tab>
                ))}
              </Tab.List>
            </div>

            {/* Right: Image Panel (desktop only) */}
            <div className="relative md:w-[540px] w-full h-[520px] hidden md:block">
              <Tab.Panels className="absolute inset-0">
                {steps.map((tab, index) => (
                  <Transition
                    key={index}
                    show={activeStep === index}
                    enter="transition ease-in-out duration-500"
                    enterFrom="opacity-0 translate-y-4"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-4"
                  >
                    <div className="absolute inset-0">
                      <Tab.Panel static={true} className="h-full">
                        <Image
                          width={540}
                          height={520}
                          src={tab.img}
                          alt={tab.imgAlt}
                          className="rounded-xl"
                          style={{ objectFit: "contain" }}
                        />
                      </Tab.Panel>
                    </div>
                  </Transition>
                ))}
              </Tab.Panels>
            </div>
          </div>
        </Tab.Group>
      </div>
    </section>
  );
}
