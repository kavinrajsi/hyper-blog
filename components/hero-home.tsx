'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function HeroHome() {
  const words = ['Banners', 'Infographics', 'Lead Magnets', 'Polls', 'FAQs'];
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

        {/* Tally Embed Script */}
        <Script
          src="https://tally.so/widgets/embed.js"
          strategy="afterInteractive"
          
        />

        <div className="py-12 mt-4 md:py-20 text-center">
         <h1
          className="text-black pb-5 font-nacelle text-4xl font-semibold md:text-5xl leading-relaxed"
          style={{ lineHeight: '1.4' }}
        >
          The World's First AI Blog CMS That Creates
          <br />
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
          </span>
          {/* Mobile: line break, Desktop: comma + inline */}
          <span className="block md:inline">
            <span className="hidden md:inline"> ,</span> Auto Optimizes & Converts
          </span>
        </h1>
          <p className="mb-8 text-xl text-black">
            Create stunning blog visuals, lead magnets, polls, and FAQs—without relying on extra tools or plugins.
            HyperBlog handles the heavy lifting of SEO, speed, and structure automatically.
          </p>

          {/* Tally Form Embed */}
          <div className="mx-auto max-w-xs sm:max-w-md">
            <iframe
              data-tally-src="https://tally.so/embed/mON208?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&hidePoweredBy=1"
              loading="lazy"
              width="100%"
              height="152"
              frameBorder="0"
              title="Join Waitlist"
            ></iframe>
          </div>

          <div className="mt-4 flex justify-center gap-3 text-sm text-[#475467]">
            <span className="flex items-center gap-2">
              ✅ No credit card required
            </span>
            <span className="flex items-center gap-2">
              ✅ Cancel any time
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
