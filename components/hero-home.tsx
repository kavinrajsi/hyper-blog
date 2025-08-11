'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    ml?: (...args: any[]) => void;
  }
}

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

  const handleShowForm = () => {
    if (window.ml) {
      window.ml('show', 'V4ZUYq', true); // Replace with your MailerLite form ID
    } else {
      console.error('MailerLite script not loaded yet.');
    }
  };

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* MailerLite Universal Script */}
        <Script id="mailerlite-universal" strategy="afterInteractive">
          {`
            (function(w,d,e,u,f,l,n){
              w[f]=w[f]||function(){
                (w[f].q=w[f].q||[]).push(arguments);
              };
              l=d.createElement(e),l.async=1,l.src=u;
              n=d.getElementsByTagName(e)[0];
              n.parentNode.insertBefore(l,n);
            })(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
            ml('account', '1726603');
          `}
        </Script>

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
            </span>{' '}
            , Auto Optimizes & Converts
          </h1>

          <p className="mb-8 text-xl text-black">
            Create stunning blog visuals, lead magnets, polls, and FAQs—without relying on extra tools or plugins.
            HyperBlog handles the heavy lifting of SEO, speed, and structure automatically.
          </p>

          <div className="mx-auto max-w-xs sm:max-w-md flex flex-col sm:flex-row sm:justify-center sm:gap-4">
            <div className="w-full sm:w-1/2">
              {/* MailerLite popup trigger */}
              <button
                className="btn group mb-4 w-full bg-[#E57A00] text-white hover:brightness-110 font-bold text-[15px]"
                onClick={handleShowForm}
              >
                Click here to show form
              </button>
            </div>
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
