"use client";

import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Image from "next/image";
import AvatarImg04 from "@/public/images/avatar-04.jpg";

const testimonials = [
  {
    name: "Redin",
    title: "owner",
    company: "ABC Marketing & Design",
    text: "The price can't be beaten and the amazing customer service you get when you experience technical issues. I've used Hootsuite and SocialChamp and they don't come close to touching SocialPilot.",
    image: AvatarImg04,
  },
  {
    name: "John",
    title: "ABC President",
    company: "Red Ball Consultants",
    text: "I highly recommend this cost-effective option! It surpasses Hootsuite by providing valuable analytics for clients. Scheduling content is a breeze, and the suggested times feature is useful.",
    image: AvatarImg04,
  },
  {
    name: "Jacken ",
    title: "Abc Marketing Director",
    company: "The Click Town",
    text: "I highly recommend this platform! Unlike Hootsuite, I can confidently manage multiple accounts without worrying about surprise billing. The impressive stats and analytics make reporting to clients a breeze.",
    image: AvatarImg04,
  },
  {
    name: "Joe Lee",
    title: "Abc Manager",
    company: "Blue Inc.",
    text: "An essential tool in our daily workflow. It's easy to use and offers powerful scheduling features that make content management a breeze.",
    image: AvatarImg04,
  },
  {
    name: "Chris Lewis",
    title: "Don",
    company: "Abc code",
    text: "I can’t believe how much time I’ve saved using this tool. Reporting is now so much faster and more impressive.",
    image: AvatarImg04,
  },
  {
    name: "Yany J.",
    title: "UI Leader",
    company: "Pixie Studio",
    text: "Simple, intuitive, and powerful. A must-have for every social media manager!",
    image: AvatarImg04,
  },
  {
    name: "Musk",
    title: "Dummy",
    company: "Abc Tools",
    text: "I’ve tried many tools, but this one just nails everything I need. Affordable too.",
    image: AvatarImg04,
  },
];

export default function TestimonialCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % (testimonials.length - visibleCount + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setStartIndex(index);
  };

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? testimonials.length - visibleCount : prev - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev === testimonials.length - visibleCount ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full text-white py-8 px-4">
      <div className="max-w-7xl mx-auto text-center relative">
        <h2 className="text-3xl text-[#101828] font-bold mb-2">
          Real stories from users
        </h2>
        <p className="text-[#101828] text-opacity-80 mb-12 pb-6">
          See how HyperBlog is transforming the way they publish, engage, and grow.
        </p>

        {/* Carousel wrapper */}
        <div className="relative overflow-hidden">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white text-[#101828] p-2 rounded-full shadow-md hover:bg-gray-100"
          >
            <IoChevronBack size={24} />
          </button>

          {/* Slides */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${startIndex * (100 / visibleCount)}%)` }}
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="w-full sm:w-1/3 px-4 flex-shrink-0"
              >
                <div className="bg-white text-black rounded-xl shadow-lg px-6 py-6 h-full">
                  <div className="flex justify-center mb-4">
                    <Image
                      src={t.image}
                      alt={t.name}
                      className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
                    />
                  </div>
                  <div className="flex text-[#e57a00] mb-4 justify-center">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <FaStar key={i} />
                      ))}
                  </div>
                  <p className="text-gray-800 text-sm mb-4 text-center">{t.text}</p>
                  <p className="font-bold text-gray-900 text-center">{t.name}</p>
                  <p className="text-sm text-gray-500 text-center">
                    {t.title} | {t.company}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-[#101828] p-2 rounded-full shadow-md hover:bg-gray-100"
          >
            <IoChevronForward size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array(testimonials.length - visibleCount + 1)
            .fill(0)
            .map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`w-3 h-3 rounded-full transition ${
                  i === startIndex ? "bg-[#e57a00]" : "bg-[#e57a00]/50"
                }`}
              ></button>
            ))}
        </div>
      </div>
    </div>
  );
}
