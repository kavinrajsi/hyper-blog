// import Image from "next/image";
// import feature1 from "@/public/images/feature1.png";
// import feature2 from "@/public/images/feature2.png";
// import feature3 from "@/public/images/feature3.png";
// import feature4 from "@/public/images/feature4.png";
// import feature5 from "@/public/images/feature5.png";
// import feature6 from "@/public/images/feature6.png";
import Spotlight from "@/components/spotlight";


export default function Feature_section() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="text-center pb-8">
            <div className="flex w-full items-center gap-3 pb-3 before:flex-1 before:h-px before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:flex-1 after:h-px after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
                <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-[#E57A00] md:text-lg font-semibold">
                  Features
                </span>
            </div>
            <h3 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-black md:text-3xl">
              Packed with Powerful Features — Built for Results
            </h3>
            <p className="text-md text-[#475467]">
              Your blog shouldn't just attract visitors—it should drive action. Every feature in HyperBlog is designed to help you rank higher, engage deeper, and convert better. From automated SEO to AI visuals and smart lead magnets, it’s everything you need to turn blog traffic into real business growth.
              
            </p>
          </div>
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none md:grid-cols-3 mt-12">
            {/* Card 1 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-[#F6BF1A] before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-[#F6BF1A] after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-[#FFFCFC] border border-[#F6BF1A] flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-3 ">
                    <span className="relative text-md font-normal">
                      <span className="text-black font-semibold">
                        AI-Powered Content Creation & SEO Optimization
                      </span>
                    </span>
                  </div>
                  <p className="text-black text-xs">
                    Effortlessly generate custom banners, infographics, polls, and SEO metadata using AI. HyperBlog automatically handles image optimization, meta tags, schema markup, and Core Web Vitals to keep your blog performing at its best.
                  </p>
                </div>
                 {/* <Image
                  className="inline-flex mt-auto p-3"
                  src={feature3}
                  width={350}
                  height={288}
                  alt="Workflow 01"
                /> */}
                <img src="/images/feature3.png" width={350} height={288} className="inline-flex mt-auto p-3" alt="feature3" />
  
              </div>
            </a>
            {/* Card 2 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-[#F6BF1A] before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-[#F6BF1A] after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-[#FEE2DE] border border-[#F6BF1A] flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-3">
                    <span className="relative text-md font-normal">
                      <span className="text-black font-semibold">
                        Real-Time Analytics & Performance Tracking
                      </span>
                    </span>
                  </div>
                  <p className="text-black">
                    Monitor key metrics like traffic, engagement, and conversions with a user-friendly dashboard. Track your blog’s performance in real-time, making data-driven decisions to boost results.
                  </p>
                </div>
                {/* <Image
                  className="inline-flex mt-auto p-3"
                  src={feature5}
                  width={350}
                  height={288}
                  alt="Workflow 02"
                /> */}
                <img src="/images/feature5.png" width={350} height={288} className="inline-flex mt-auto p-3" alt="feature5" />

              </div>
            </a>
            {/* Card 3 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-[#F6BF1A] before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-[#F6BF1A] after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-[#FFF2D9] border border-[#F6BF1A] flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-3">
                    <span className="relative text-md font-normal">
                      <span className="text-black font-semibold">
                        Intent-Based Lead Capture & Conversion
                      </span>
                    </span>
                  </div>
                  <p className="text-black">
                    HyperBlog's AI automatically personalizes lead forms based on visitor behavior and content intent, helping you capture more leads and improve conversions without any manual setup.
                  </p>
                </div>
                {/* Image */}
                {/* <Image
                  className="inline-flex mt-auto p-3"
                  src={feature4}
                  width={350}
                  height={288}
                  alt="Workflow 03"
                /> */}
                <img src="/images/feature4.png" width={350} height={288} className="inline-flex mt-auto p-3" alt="feature4" />

              </div>
            </a>
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-[#F6BF1A] before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-[#F6BF1A] after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-[#FEE2DE] border border-[#F6BF1A] flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-3">
                    <span className="relative text-md font-normal">
                      <span className="text-black font-semibold">
                        Collaborative Team Management & Role-Based Permissions
                      </span>
                    </span>
                  </div>
                  <p className="text-black">
                    Invite team members with customizable roles such as admin, editor, and author, ensuring efficient collaboration. Secure your content and control access with role-based permissions for a smooth workflow.
                  </p>
                </div>
                 {/* Image */}
                {/* <Image
                  className="inline-flex mt-auto p-3"
                  src={feature3}
                  alt="Workflow 03"
                /> */}
                <img src="/images/feature3.png" width={350} height={288} className="inline-flex mt-auto p-3" alt="feature3" />

              </div>
            </a>
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-[#F6BF1A] before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-[#F6BF1A] after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-[#FFF2D9] border border-[#F6BF1A] flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-3">
                    <span className="relative text-md font-normal">
                      <span className="text-black font-semibold">
                        Multilingual Publishing & Global Reach
                      </span>
                    </span>
                  </div>
                  <p className="text-black">
                     Manage and publish your blog in multiple languages to cater to international audiences. HyperBlog ensures easy language management, expanding your brand’s visibility worldwide.
                  </p>
                </div>
                 {/* Image */}
                {/* <Image
                  className="inline-flex mt-auto p-3"
                  src={feature5}
                  alt="Workflow 03"
                /> */}
                <img src="/images/feature5.png" width={350} height={288} className="inline-flex mt-auto p-3" alt="feature5" />

              </div>
            </a>
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-[#F6BF1A] before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-[#F6BF1A] after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-[#FFFCFC] border border-[#F6BF1A] flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-3">
                    <span className="relative text-md font-normal">
                      <span className="text-black font-semibold">
                        Seamless Integration & Advanced Automation
                      </span>
                    </span>
                  </div>
                  <p className="text-black">
                     Connect your own domain, import content from Google Docs, Notion, or Markdown, and automatically generate SEO and post schemas.
                  </p>
                </div>
                 {/* Image */}
                {/* <Image
                  className="inline-flex mt-auto p-3"
                  src={feature4}
                  alt="Workflow 03"
                /> */}
                <img src="/images/feature4.png" width={350} height={288} className="inline-flex mt-auto p-3" alt="feature4" />

              </div>
            </a>
            
          </Spotlight>
         
        </div>
      </div>
    </section>
  );
}
