"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";

export default function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="z-30 mt-2 w-full md:mt-5 items-center font-sans leading-normal tracking-normal">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-16 items-center justify-between gap-3 rounded-2xl bg-white px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-[#ED811F] before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          
          {/* Logo */}
          <div className="flex items-center h-full px-4">
            <Logo />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex">
            

            {/* Hover Dropdown */}
            <li className="relative text-[#ff7701] hover:text-[#ff7701]">
              <div className="group relative inline-block">
                <a
                  href="#"
                  className="block py-6 px-4 lg:p-6 text-sm lg:text-base flex items-center"
                >
                  Features <span className="pl-2 text-xs">▼</span>
                </a>

                {/* Dropdown */}
                <div className="fixed left-1/2 top-[84px] w-[1100px] p-6 shadow-xl bg-[#ff7701] rounded-2xl
                  opacity-0 pointer-events-none
                  group-hover:opacity-100 group-hover:pointer-events-auto
                  transition-opacity duration-200 z-50
                  -translate-x-1/2">
                  <div className="container mx-auto grid grid-cols-3 grid-rows-2 gap-3 text-white">
                    {[
                      { title: "⁠Auto Technical SEO", link: "/#" },
                      { title: "Blog to Banner", link: "/#" },
                      { title: "Blog to Infographics", link: "/#" },
                      { title: "Personalised Lead Magnet", link: "/#" },
                      { title: "Customise Design", link: "/#" },
                      { title: "Analytics", link: "/#" },
                    ].map((item) => (
                      <ul
                        key={item.title}
                        className="px-4 border-gray-600 border-b lg:border-b-0 pb-6 pt-6"
                      >
                        <div className="flex items-center">
                          <div className="h-8 w-8 bg-white text-black rounded mr-3 flex items-center justify-center">★</div>
                          <Link href={item.link} className="font-bold text-xl mb-2 hover:underline">
                            {item.title}
                          </Link>
                        </div>
                        <p className="text-gray-100 text-sm">Sample text for {item.title} description.</p>
                      </ul>
                    ))}
                  </div>

                </div>
              </div>
            </li>

            <li className="relative text-[#ff7701] hover:text-[#ff7701]">
              <div className="group relative inline-block">
                <a
                  href="#"
                  className="block py-6 px-4 lg:p-6 text-sm lg:text-base flex items-center"
                >
                  Solutions <span className="pl-2 text-xs">▼</span>
                </a>

                {/* Dropdown */}
                <div className="fixed left-1/2 top-[84px] w-[1100px] p-6 shadow-xl bg-[#ff7701] rounded-2xl
                  opacity-0 pointer-events-none
                  group-hover:opacity-100 group-hover:pointer-events-auto
                  transition-opacity duration-200 z-50
                  -translate-x-1/2">
                  <div className="container mx-auto grid grid-cols-3 grid-rows-2 gap-3 text-white">
                    {[
                      { title: "⁠AI Blogging CMS for B2B", link: "/#" },
                      { title: "AI Blogging CMS for SaaS", link: "/#" },
                      { title: "AI Blogging CMS for B2C", link: "/#" },
                      { title: "AI Blogging CMS for B2B Agency", link: "/#" },
                      { title: "AI Blogging CMS for Startups", link: "/#" },
                    ].map((item) => (
                      <ul
                        key={item.title}
                        className="px-4 border-gray-600 border-b lg:border-b-0 pb-6 pt-6"
                      >
                        <div className="flex items-center">
                          <div className="h-8 w-8 bg-white text-black rounded mr-3 flex items-center justify-center">★</div>
                          <Link href={item.link} className="font-bold text-xl mb-2 hover:underline">
                            {item.title}
                          </Link>
                        </div>
                        <p className="text-gray-100 text-sm">Sample text for {item.title} description.</p>
                      </ul>
                    ))}
                  </div>

                </div>
              </div>
            </li>

            <li className="text-[#ff7701] hover:text-[#ff7701]">
              <a href="/pricing" className="relative block py-6 px-2 lg:p-6 text-sm lg:text-base">
                Pricing
              </a>
            </li>
            <li className="text-[#ff7701] hover:text-[#ff7701]">
              <a href="/blog" className="relative block py-6 px-2 lg:p-6 text-sm lg:text-base">
                Blogs
              </a>
            </li>
            <li className="text-[#ff7701] hover:text-[#ff7701]">
              <a href="https://docs.hyperblog.io/" className="relative block py-6 px-2 lg:p-6 text-sm lg:text-base">
                Help Center 
              </a>
            </li>
            <li className="text-[#ff7701] hover:text-[#ff7701]">
              <a href="#" className="relative block py-6 px-2 lg:p-6 text-sm lg:text-base">
                About Us
              </a>
            </li>
            <li className="flex items-center">
              <Link
                href="/signin"
                className="btn-sm relative bg-[#ED811F] bg-[length:100%_100%] bg-[bottom] px-4 py-2 text-white 
                  before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] 
                  before:border before:border-white before:[background:linear-gradient(to_right,#FFFFFF,#FFFFFF,#FFFFFF)_border-box] 
                  before:[mask-composite:exclude_!important] 
                  before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] 
                  hover:bg-[length:100%_150%]"
              >
                Get Started - Free
              </Link>
            </li>

          </ul>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </nav>
    </div>
  );
}
