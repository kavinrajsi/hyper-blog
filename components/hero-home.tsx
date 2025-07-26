'use client';

import { useEffect, useState } from 'react';
import VideoThumb from '@/public/images/hero-image-01.jpg';
// import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  const words = ["Banners", "Infographics", "Lead Magnets",  "Polls", "FAQs" ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let typeSpeed = isDeleting ? 80 : 150;

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-5">
            <h1
              className="text-black pb-5 font-nacelle text-4xl font-semibold md:text-5xl leading-relaxed"
              data-aos="fade-up"
              style={{ lineHeight: '1.4' }}
            >
              The World's First AI Blog CMS That Creates
              <br />{' '}
              <span
                className="text-[#e57a00] inline-block"
                style={{
                  display: 'inline-flex',
                  borderRight: '2px solid #e57a00',
                  alignItems: 'center',
                  paddingRight: '6px',
                  height: '1em',
                  
                }}
              >
                {displayText}
              </span>{' '}
              , Auto Optimizes & Converts - <br/>Automatically
            </h1>
            <div className="mx-auto max-w-4xl">
              <p
                className="mb-8 text-xl text-black"
                data-aos="fade-up"
                data-aos-delay={200}
              >
              Create stunning blog visuals, lead magnets, polls, and FAQs—without relying on extra tools or plugins. HyperBlog handles the heavy lifting of SEO, speed, and structure automatically, so you can focus on strategy and growth. Perfect for anyone who wants a smarter, faster, and lead-focused blog experience.              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-[#E57A00] text-white hover:brightness-110 sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center text-white font-bold text-[15px]">
                      Get Started - Free
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <ModalVideo ... /> */}
        </div>
      </div>

      {/* Inline style tag for cursor blink animation */}
      <style>{`
        @keyframes blink {
          to {
            visibility: hidden;
          }
        }
      `}</style>
    </section>
  );
}
