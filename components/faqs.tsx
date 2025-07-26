"use client";

import { useState, useRef, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "How does HyperBlog help with SEO?",
    answer:
      "HyperBlog helps improve SEO by offering fast load times, optimized metadata, and schema markup support.",
  },
  {
    question: "Is HyperBlog mobile-friendly and fast?",
    answer:
      "Yes, HyperBlog is fully responsive and optimized for fast performance across all devices.",
  },
  {
    question: "Can I personalize content and lead capture forms?",
    answer:
      "Absolutely. HyperBlog allows for easy personalization and integration of lead capture forms.",
  },
  {
    question: "Do I need design skills to use AI images and banners?",
    answer:
      "No design skills needed! HyperBlog provides AI tools to generate beautiful visuals effortlessly.",
  },
  {
    question: "Does HyperBlog support multilingual blogs?",
    answer: "Yes, it includes multilingual support for global audience reach.",
  },
  {
    question: "Can I migrate my existing blog content?",
    answer:
      "You can easily import your existing blog content into HyperBlog using the migration tool.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-10 mb-12 px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl font-bold text-orange-500 mb-4 inline-block border border-dotted border-blue-400 px-3 py-1">
            FAQs
          </h2>
          <p className="text-gray-600 max-w-md">
            Everything you need to know about the product and billing. Can’t
            find the answer you’re looking for? Please{" "}
            <a className="underline text-gray-700" href="#">
              chat to our friendly team
            </a>
            .
          </p>
        </div>

        {/* Right Column */}
        <div className="divide-y divide-gray-300">
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
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className="py-4">
      <button
        onClick={onClick}
        className="w-full text-left flex justify-between items-center text-black font-medium focus:outline-none"
      >
        <span>{faq.question}</span>
        <span className="text-gray-400">{isOpen ? <FaMinus /> : <FaPlus />}</span>
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <p className="text-gray-600 mt-2 text-sm">{faq.answer}</p>
      </div>
    </div>
  );
}
