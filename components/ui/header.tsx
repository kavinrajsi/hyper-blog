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
            {/* Features Dropdown */}
            <li className="relative text-[#ff7701] hover:text-[#ff7701]">
              <div className="group relative inline-block">
                <Link
                  href="/features"
                  className="block py-6 px-4 lg:p-6 text-sm lg:text-base flex items-center"
                >
                  Features
                  <svg
                    className="w-3 h-3 mt-1 ml-1 text-[#ff7701]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                <div className="fixed left-1/2 top-[84px] w-[1100px] p-6 shadow-xl bg-[#ffffff] rounded-2xl
                  opacity-0 pointer-events-none
                  group-hover:opacity-100 group-hover:pointer-events-auto
                  transition-opacity duration-200 z-50
                  -translate-x-1/2 ">
                  <div className="container mx-auto grid grid-cols-3 grid-rows-2 gap-3 text-white">
                    {[
                      { title: "⁠Auto Technical SEO", des: "Let HyperBlog handle all SEO tags, schema, speed & rankings.", link: "/features" },
                      { title: "Blog to Banner", des: "Turn your blog headlines into stunning, ready-to-share social banners.", link: "/features" },
                      { title: "Blog to Infographics", des: "Convert key blog takeaways into beautiful, lead-generating infographics.", link: "/features" },
                      { title: "Personalised Lead Magnet", des: "Create and deliver tailored lead magnets for every blog — automatically.", link: "/features" },
                      { title: "Customise Design", des: "Match blog design to your brand — layout, colors, typography & more.", link: "/features" },
                      { title: "Analytics", des: "Track performance, leads, and top content — all in one place.", link: "/features" },
                    ].map((item, index) => (
                      <ul key={item.title} className="px-4 border-gray-600 border-b lg:border-b-0 pb-6 pt-6 hover:bg-[#ffe9e0] rounded-xl">
                        <div className="flex items-start">
                          <div className="h-12 w-12 bg-[#ffffff] hover:bg-[#ffffff] rounded mr-3 flex items-center justify-center flex-shrink-0 shadow-md">
                            {index === 0 && (
                              <svg className="w-10 h-10 p-0.5 text-[#ff7701]" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6zm8.4-3a6.4 6.4 0 01-.7 2.9l2.1 1.7-2 3.5-2.5-1a6.4 6.4 0 01-2.8.7l-.5 2.6h-4l-.5-2.6a6.4 6.4 0 01-2.8-.7l-2.5 1-2-3.5 2.1-1.7a6.4 6.4 0 01-.7-2.9c0-1 .2-2 .7-2.9L2.6 7.5 4.6 4l2.5 1a6.4 6.4 0 012.8-.7l.5-2.6h4l.5 2.6a6.4 6.4 0 012.8.7l2.5-1 2 3.5-2.1 1.7c.5.9.7 1.9.7 2.9z" />
                              </svg>
                            )}
                            {index === 1 && (
                              <svg className="w-10 h-10 p-0.5 text-[#ff7701]" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.3l-6.2 3.7 1.6-7-5.4-4.7 7.1-.6L12 2l2.9 6.7 7.1.6-5.4 4.7 1.6 7z" />
                              </svg>
                            )}
                            {index === 2 && (
                              <svg className="w-10 h-10 p-0.5 text-[#ff7701] " fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m6.364 1.636l-1.414 1.414M21 12h-2M18.364 18.364l-1.414-1.414M12 21v-2M5.636 18.364l1.414-1.414M3 12h2M5.636 5.636l1.414 1.414" />
                              </svg>
                            )}
                            {index === 3 && (
                              <svg className="w-10 h-10 p-0.5 text-[#ff7701]" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.3l-6.2 3.7 1.6-7-5.4-4.7 7.1-.6L12 2l2.9 6.7 7.1.6-5.4 4.7 1.6 7z" />
                              </svg>
                            )}
                            {index === 4 && (
                              <svg className="w-10 h-10 p-0.5 text-[#ff7701]" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.3l-6.2 3.7 1.6-7-5.4-4.7 7.1-.6L12 2l2.9 6.7 7.1.6-5.4 4.7 1.6 7z" />
                              </svg>
                            )}
                            {index === 5 && (
                              <svg className="w-10 h-10 p-0.5 text-[#ff7701]" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6zm8.4-3a6.4 6.4 0 01-.7 2.9l2.1 1.7-2 3.5-2.5-1a6.4 6.4 0 01-2.8.7l-.5 2.6h-4l-.5-2.6a6.4 6.4 0 01-2.8-.7l-2.5 1-2-3.5 2.1-1.7a6.4 6.4 0 01-.7-2.9c0-1 .2-2 .7-2.9L2.6 7.5 4.6 4l2.5 1a6.4 6.4 0 012.8-.7l.5-2.6h4l.5 2.6a6.4 6.4 0 012.8.7l2.5-1 2 3.5-2.1 1.7c.5.9.7 1.9.7 2.9z" />
                              </svg>
                            )}
                          </div>
                          <div className="flex flex-col">
                            <Link href={item.link} className="font-bold text-[#e57a00] text-[18px] mb-2">
                              {item.title}
                            </Link>
                            <p className="text-[#ff7701] text-sm">{item.des}</p>
                            </div>
                        </div>
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            {/* Solutions Dropdown */}
            <li className="relative text-[#ff7701] hover:text-[#ff7701]">
              <div className="group relative inline-block">
                <a
                  href="#"
                  className="block py-6 px-4 lg:p-6 text-sm lg:text-base flex items-center"
                >
                  Solutions
                  <svg
                    className="w-3 h-3 mt-1 ml-1 text-[#ff7701]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>

                <div className="fixed left-1/2 top-[84px] w-[1100px] p-6 shadow-xl bg-[#ffffff] rounded-2xl
                  opacity-0 pointer-events-none
                  group-hover:opacity-100 group-hover:pointer-events-auto
                  transition-opacity duration-200 z-50
                  -translate-x-1/2 ">
                  <div className="container mx-auto grid grid-cols-3 grid-rows-2 gap-3 text-[#ff7701]">
                    {[
                      { title: "⁠AI Blogging CMS for B2B", des: "Turn long sales cycles into inbound leads with conversion-optimized blogs.", link: "/features" },
                      { title: "AI Blogging CMS for SaaS", des: "Drive product discovery and signups through SEO-smart, engaging blog content.", link: "/features" },
                      { title: "AI Blogging CMS for B2C", des: "Build trust, rank higher, and convert readers into loyal customers.", link: "/features" },
                      { title: "AI Blogging CMS for B2B Agency", des: "Offer smarter blog solutions to clients — fast, scalable, and SEO-ready.", link: "/features" },
                      { title: "AI Blogging CMS for Startups", des: "Deliver visual-rich, high-performance blogs for every client — at scale.", link: "/features" },
                    ].map((item, index) => (
                      <ul key={item.title} className="px-4 border-gray-600 border-b lg:border-b-0 pb-6 pt-6 hover:bg-[#ffe9e0] rounded-xl">
                        <div className="flex items-start">
                          <div className="h-12 w-12 bg-[#ffffff] hover:bg-[#ffffff] rounded mr-3 flex items-center justify-center flex-shrink-0 shadow-md">
                            {index === 0 && (
                              <svg className="w-10 h-10 p-0.5" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6zm8.4-3a6.4 6.4 0 01-.7 2.9l2.1 1.7-2 3.5-2.5-1a6.4 6.4 0 01-2.8.7l-.5 2.6h-4l-.5-2.6a6.4 6.4 0 01-2.8-.7l-2.5 1-2-3.5 2.1-1.7a6.4 6.4 0 01-.7-2.9c0-1 .2-2 .7-2.9L2.6 7.5 4.6 4l2.5 1a6.4 6.4 0 012.8-.7l.5-2.6h4l.5 2.6a6.4 6.4 0 012.8.7l2.5-1 2 3.5-2.1 1.7c.5.9.7 1.9.7 2.9z" />
                              </svg>
                            )}
                            {index === 1 && (
                              <svg className="w-10 h-10 p-0.5" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.3l-6.2 3.7 1.6-7-5.4-4.7 7.1-.6L12 2l2.9 6.7 7.1.6-5.4 4.7 1.6 7z" />
                              </svg>
                            )}
                            {index === 2 && (
                              <svg className="w-10 h-10 p-0.5" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m6.364 1.636l-1.414 1.414M21 12h-2M18.364 18.364l-1.414-1.414M12 21v-2M5.636 18.364l1.414-1.414M3 12h2M5.636 5.636l1.414 1.414" />
                              </svg>
                            )}
                            {index === 3 && (
                              <svg className="w-10 h-10 p-0.5" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.3l-6.2 3.7 1.6-7-5.4-4.7 7.1-.6L12 2l2.9 6.7 7.1.6-5.4 4.7 1.6 7z" />
                              </svg>
                            )}
                            {index === 4 && (
                              <svg className="w-10 h-10 p-0.5" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.3l-6.2 3.7 1.6-7-5.4-4.7 7.1-.6L12 2l2.9 6.7 7.1.6-5.4 4.7 1.6 7z" />
                              </svg>
                            )}
                          </div>
                          <div className="flex flex-col">
                            <Link href={item.link} className="font-bold text-[#e57a00] text-[18px] mb-2">
                              {item.title}
                            </Link>
                            <p className="text-[#ff7701] text-sm">{item.des}</p>
                            </div>
                        </div>
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            {/* Other Menu Items */}
            <li className="text-[#ff7701] hover:text-[#ff7701]">
              <a href="/pricing" className="relative block py-6 px-2 lg:p-6 text-sm lg:text-base">
                Pricing
              </a>
            </li>
            <li className="text-[#ff7701] hover:text-[#ff7701]">
              <a href="/" className="relative block py-6 px-2 lg:p-6 text-sm lg:text-base">
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
                href="/#"
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
