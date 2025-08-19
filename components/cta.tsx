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
            <p className="text-black">Get instant access to HyperBlog. No setup hassle — just enter your email and start exploring all the features.</p>
            <div className="mx-auto mt-8 max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    href="/#"
                    className="relative inline-flex items-center bg-[#ff7701] text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors group"
                  >
                    Join Waitlist
                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      →
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
