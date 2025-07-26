"use client";

import Image from "next/image";
import integrate_site from "@/public/images/integrate_site.png";
import { FaArrowRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";



export default function Middlehome1() {

  return (
    <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div>
            <h3 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-black md:text-3xl text-center mb-10">
              Integrate with Your Existing Website
            </h3>
            <div className="flex flex-col items-center justify-between pb-12 md:flex-row md:gap-8 md:pb-6 lg:gap-16">
              {/* Left content */}
              <div className="shrink-0 md:w-[500px] [&_>*]:pl-7">
                <div className="relative mb-6 border-l [border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.400/.25),transparent)1] after:absolute after:left-0 after:top-0 after:h-4 after:w-px after:origin-bottom after:-translate-y-full after:animate-shine after:bg-[linear-gradient(180deg,_transparent,_theme(colors.indigo.500/.5)_25%,_theme(colors.indigo.500)_50%,_theme(colors.indigo.500/.5)_75%,_transparent)] after:opacity-0">
                  <div className="mb-4">
                    <h4 className="bg-[linear-gradient(to_right,theme(colors.black),theme(colors.black),theme(colors.black),theme(colors.black),theme(colors.black))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-2xl">
                      Easily Integrate HyperBlog with Your Existing Website
                    </h4>
                    <p className="text-[#0F0805]">
                      No need to rebuild or migrate your whole site—just plug HyperBlog into your existing setup and start growing.
                    </p>
                  </div>
                <div>
                  <div className="flex items-start mt-3 mb-1">
                    <FaCheck className="text-[#e57a00] text-md mr-2 mt-[2px] min-w-[20px]"/>
                    <div>
                    <h2 className="text-md font-semibold text-gray-900">Flexible Integration Options </h2>
                    <p className="mb-2 text-gray-900">Use it as a subfolder (e.g. /blog), subdomain (e.g. blog.yoursite.com), or your main domain.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mt-3 mb-1" >
                  <FaCheck className="text-[#e57a00] text-md mr-2 mt-[2px] min-w-[20px]"/>
                    <div>
                    <h2 className=" text-md font-semibold text-gray-900">Works with Any Platform </h2>
                    <p className="mb-2 text-gray-900">WordPress, Webflow, custom code—anything goes.</p>
                    </div>
                  </div>

                  <div className="flex items-start mt-3 mb-1">
                  <FaCheck className="text-[#e57a00] text-md mr-2 mt-[2px] min-w-[20px]"/>
                    <div>
                    <h2 className="text-md font-semibold text-gray-900">No Code or Plugins Needed </h2>
                    <p className="mb-2 text-gray-900">Simple setup, no tech headaches.</p>
                    </div>
                  </div>

                  <div className="flex items-start mt-3 mb-1">
                  <FaCheck className="text-[#e57a00] text-md mr-2 mt-[2px] min-w-[20px]"/>
                    <div>
                    <h2 className="mb-1 text-md font-semibold text-gray-900">Your Site Stays Untouched</h2>
                    <p className="mb-2 text-gray-900"> Keep your current design and structure as is.</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start mt-3 mb-1">
                  <FaCheck className="text-[#e57a00] text-md mr-2 mt-[2px] min-w-[20px]"/>
                    <div>
                    <h2 className="text-md font-semibold text-gray-900">All the HyperBlog Power </h2>
                    <p className="mb-2 text-gray-900">AI visuals, SEO automation, lead magnets & blazing speed.</p>
                    </div>
                  </div>
                
                </div>
              </div>

              {/* Right content */}
                <div className="relative flex flex-col">
                  {/* <Image
                  className="inline-flex mt-auto p-3"
                  src={integrate_site}
                  alt="Integrate Hyperblog"
                /> */}
                <img src="/images/integrate_site.png" className="inline-flex mt-auto p-3" alt="integrate_site" />

                </div>
            </div>
           
          </div>
        </div>
    </section>
  );
}
