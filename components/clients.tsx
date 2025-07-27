"use client";

export default function Clients() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 overflow-hidden mt-12">
        <div className="border-t py-12 md:py-20 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1]">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-10">
            <h2 className="text-[#475467] font-nacelle text-3xl font-semibold bg-[length:200%_auto] bg-clip-text md:text-xl">
              Trusted by Leading Companies
            </h2>
          </div>

          {/* Auto-scrolling logo container */}
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-scroll space-x-8 w-max">
              {[
                "logo1.png",
                "logo2.png",
                "logo3.png",
                "logo4.png",
                "logo5.png",
                "logo1.png",
                "logo2.png",
                "logo3.png",
                "logo4.png",
                "logo5.png", // repeated for seamless loop
              ].map((logo, index) => (
                <div
                  key={index}
                  className="flex h-24 w-44 items-center justify-center p-2"
                >
                  <img
                    src={`/images/${logo}`}
                    className="max-h-16 w-auto object-contain"
                    alt={`logo${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind animation keyframes */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 8s linear infinite;
        }
      `}</style>
    </section>
  );
}
