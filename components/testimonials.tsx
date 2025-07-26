"use client";

import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import Image from "next/image";
import AvatarImg04 from "@/public/images/avatar-04.jpg";


const testimonials = [
  {
    name: "John Doe",
    title: "Blogger",
    company: "Web Design Agency",
    image: AvatarImg04,
  },
  {
    name: "Jane Smith",
    title: "Content Marketer",
    company: "Web Design Agency",
    image: AvatarImg04,
  },
  {
    name: "Mike Lee",
    title: "Agency Owner",
    company: "Web Design Agency",
    image: AvatarImg04,
  },
  {
    name: "Emily Johnson",
    title: "Designer",
    company: "Web Design Agency",
    image: AvatarImg04,
  },
  {
    name: "Chris Evans",
    title: "Developer",
    company: "Web Design Agency",
    image: AvatarImg04,
  },
  {
    name: "Sarah Parker",
    title: "Project Manager",
    company: "Web Design Agency",
    image: AvatarImg04,
  },
];



export default function TestimonialCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    return Array.from({ length: visibleCount }).map(
      (_, i) => testimonials[(startIndex + i) % testimonials.length]
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2 text-black">What Our Customers Say</h2>
        <p className="text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.        </p>
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${(100 / visibleCount) * startIndex}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name + index}
                className={`flex-shrink-0 w-1/3 px-2 transform transition-all duration-700 ease-in-out ${
                  index === startIndex ? "scale-105 opacity-100" : "scale-95 opacity-60"
                }`}
              >
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white/30 backdrop-blur-sm p-4 text-white">
                    <div className="flex items-center mb-2">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <span key={i} className="text-white">★</span>
                        ))}
                    </div>
                    <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-white">{testimonial.title}</p>
                    <p className="text-sm text-white">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute left-0 bottom-0 z-50 flex space-x-2 ml-4 -mb-2" style={{ bottom: '-40px' }}>
          <button
            onClick={handlePrev}
            className="p-2 rounded-full border border-black text-black bg-white hover:bg-black hover:text-white transition"
          >
            <FaArrowLeft size={16} />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full border border-black text-black bg-white hover:bg-black hover:text-white transition"
          >
            <FaArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
