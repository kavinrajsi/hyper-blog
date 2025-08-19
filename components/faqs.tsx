"use client";

import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "1. What is a Blog CMS?",
    answer: "A Blog CMS (Content Management System) is a platform that lets you write, manage, and publish blog content without needing to code. HyperBlog is a next-gen AI-powered Blog CMS — built not just for publishing, but for converting readers into leads.",
  },
  {
    question: "2. Does HyperBlog write blog content for me?",
    answer: "Nope — HyperBlog doesn’t create your blog content. It enhances your existing content by automatically adding visuals (like banners and infographics), SEO tags, polls, lead magnets, and structured data — so your posts get more visibility,  drive better engagement and Leads.",
  },
  {
    question: "3. Who is HyperBlog for?",
    answer: "HyperBlog is for anyone who wants a smarter, more effective blog — without hiring developers, designers, or SEO specialists. Whether you're a creator, startup, media brand, or SaaS company, if you care about traffic and leads, it’s built for you.",
  },
  {
    question: "4. Can I connect HyperBlog to my current website?",
    answer: "Yes! HyperBlog works with any website — whether it’s built on WordPress, Webflow, custom code, or anything else. You can connect it as a subfolder (like /blog), subdomain (like blog.yoursite.com), or even host it as your main site.",
  },
  {
    question: "5. Can I use HyperBlog as my full website?",
    answer: "Absolutely. If your primary goal is to publish blog content, articles, or run an online magazine, HyperBlog can serve as your main website — with all the built-in features you need for design, SEO, lead generation, and analytics.",
  },
  {
    question: "6. What if I already have a lot of blogs published elsewhere?",
    answer: "No problem. You can easily migrate your existing blogs to HyperBlog in minutes. Just connect your domain, import your content, and HyperBlog will handle everything — including optimizing your posts for SEO and adding visuals automatically.",
  },
  {
    question: "7. What makes HyperBlog different from other blog platforms?",
    answer: "Unlike traditional CMS tools that just let you publish content, HyperBlog is built to grow your audience and capture leads. It automatically handles SEO, adds banners, infographics, polls, and lead magnets — no designer or plugins needed. Plus, it’s fast to set up and works with any website. HyperBlog doesn’t just manage your blog — it turns it into a growth engine.",
  },
];

export default function FAQSection() {
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
          <a
            href="/#"
            className="bg-[#ff7701] text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
          >
            Join Waitlist
          </a>
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