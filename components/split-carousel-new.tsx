"use client";

import { useState } from "react";

const steps = [
  {
    number: "1",
    title: "Sign Up",
    description: "Enter your email and create your HyperBlog account in seconds—no credit card required.",
  },
  {
    number: "2",
    title: "Migrate Your Existing Blog (Optional)",
    description: "Have a blog on WordPress, Ghost, or Notion? Easily import all your posts with one click—fast, secure, and hassle-free.",
  },
  {
    number: "3",
    title: "Set Up Your Domain (Optional)",
    description: "Connect your custom domain or use a free HyperBlog subdomain. Either way, your blog is live and secure with built-in SSL.",
  },
];

export default function SplitCarousel() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#101828] mb-4">5-Minute Setup Section</h2>
          <p className="text-lg text-[#475467] max-w-3xl mx-auto">
            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-[#EAECF0]">
              <div 
                className="w-full bg-[#D87D4A] transition-all duration-300 ease-in-out"
                style={{ height: `${((activeStep + 1) / steps.length) * 100}%` }}
              />
            </div>

            {/* Steps List */}
            <div className="relative space-y-8">
              {steps.map((step, index) => (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(index)}
                  className="w-full text-left flex gap-6 group focus:outline-none"
                >
                  {/* Number Circle */}
                  <div 
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-semibold shrink-0
                      ${index <= activeStep ? 'bg-[#FFE7D6] text-[#D87D4A]' : 'bg-[#F9FAFB] text-[#475467]'}
                      transition-colors duration-300`}
                  >
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="pt-3">
                    <h3 
                      className={`text-xl font-semibold mb-2 transition-colors duration-300
                        ${index <= activeStep ? 'text-[#101828]' : 'text-[#475467]'}`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[#475467] text-lg">{step.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
