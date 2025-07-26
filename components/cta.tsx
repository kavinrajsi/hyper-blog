import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="max-w6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-transparent via-[#f8d260] to-transparent py-12 md:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2
              className="bg-[linear-gradient(to_right,theme(colors.black),theme(colors.black),theme(colors.black),theme(colors.black),theme(colors.black))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-bold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
            Ready to Start Creating Smarter Blogs?
            </h2>
            <p className="text-black">Get instant access to HyperBlog. No setup hassle — just enter your email and start exploring all the features free for 30 days.</p>
            <div className="mx-auto mt-8 max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <div data-aos="fade-up" data-aos-delay={400}>
                <a
                  className="btn group mb-4 w-full bg-gradient-to-t from-[#E57A00] to-[#FB8500] bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                  href="#0"
                >
                  <span className="relative inline-flex items-center">
                    Try Hyperblog for FREE
                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      {/* -&gt; */}
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
