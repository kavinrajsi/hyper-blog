"use client";

import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "1. Is there a free plan available?",
    answer: "Yes! We offer a Free Forever plan — perfect for individuals just getting started. However, features like custom domains and advanced AI tools are only available in paid plans."
    },
  {
    question: "2. Can I connect my custom domain on the free plan?",
    answer: "Custom domain connection is only available in our Launch, Grow, and Scale plans. Free plan users can publish using a HyperBlog subdomain.",
  },
  {
    question: "3. Are my payments secure?",
    answer: "Absolutely. All transactions are encrypted and securely processed through trusted global payment gateways.",
  },
  {
    question: "4. Do you offer refunds?",
    answer: "Yes — we have a clear refund policy in place. Please refer to our Refund Policy for details.",
  },
  {
    question: "5. Can I upgrade or downgrade my plan anytime?",
    answer: "Yes, you're in control. You can upgrade, downgrade, or cancel your subscription at any time from your account dashboard.",
  },
  {
    question: "6. What happens if I hit my monthly usage limits?",
    answer: "If you exceed your plan limits (posts, AI credits, leads, etc.), you'll receive a notification with the option to upgrade or purchase add-ons — no automatic charges.",
  },
];

export default function FAQPricingSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 mb-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-[300px,1fr] items-center justify-center gap-12 items-start">
        {/* Left Column - Question Mark Card */}
        <div className="bg-[#FFF8F6] rounded-2xl p-8 text-center">
          <div className="mb-6">
            <img 
              src="/images/FAQ.png" 
              alt="FAQ Icon" 
              className="w-24 h-24 mx-auto"
            />
          </div>
          <h2 className="text-2xl font-bold text-[#101828] mb-4">
            You have Different Questions?
          </h2>
          <p className="text-[#475467] mb-6">
            We will answer all your questions. We ensure your response.
          </p>
          <button className="bg-[#ff7701] text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
            Talk to us
          </button>
        </div>

        {/* Right Column - FAQs */}
        <div className="space-y-4 bg-white rounded-xl p-6">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FAQItem({
  faq,
  isOpen,
  onClick,
}: {
  faq: FAQ;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-[#EAECF0] last:border-b-0">
      <button
        className="w-full py-2 flex justify-between items-center text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className="text-[#101828] text-[16px] font-medium pr-4">{faq.question}</span>
        <span className="ml-4 flex-shrink-0">
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
              isOpen
                ? "bg-[#D87D4A]"
                : "bg-[#F9FAFB] border border-[#EAECF0] group-hover:border-[#D87D4A]"
            }`}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className={`transform transition-transform duration-200 ${
                isOpen ? "rotate-45" : ""
              }`}
            >
              <path
                d="M6 1v10M1 6h10"
                stroke={isOpen ? "#FFFFFF" : "#667085"}
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? "max-h-48" : "max-h-0"
        }`}
      >
        <div className="pb-4 text-[#475467]">{faq.answer}</div>
      </div>
    </div>
  );
}