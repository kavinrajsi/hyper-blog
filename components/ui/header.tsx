"use client";

import Link from "next/link";
import Logo from "./logo";
import Dropdown from "@/components/dropdown";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-[#ED811F] before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow flex-wrap items-center justify-center gap-4 text-sm lg:gap-8">

              {/* Features - Mega Menu */}
             

              {/* Other nav items */}
              <li>
                <Link href="/pricing" className="flex items-center px-2 py-1 text-[#ED811F] transition hover:text-[#FE7062] lg:px-3">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/blog" className="flex items-center px-2 py-1 text-[#ED811F] transition hover:text-[#FE7062] lg:px-3">
                  Blogs
                </Link>
              </li>
               <li className="relative">
                <Dropdown
                  title={<span className="text-[#ED811F]">Features</span>}
                  isMega={true}
                  align="center"
                >
                  {/* Mega Menu */}
                  <div className="absolute inset-x-0 top-full z-50">
                    <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
                      <div className="bg-white px-6 py-6 shadow-xl rounded-xl border border-gray-200">
                        <div className="grid grid-cols-3 gap-6">
                          {/* Item 1 */}
                          <div className="rounded-lg bg-[#F8FAFC] p-4">
                            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                              <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <h3 className="mb-1 text-lg font-semibold text-gray-900">Social Media</h3>
                            <p className="text-sm text-gray-600">Manage social media at scale effortlessly.</p>
                          </div>

                          {/* Item 2 */}
                          <div className="rounded-lg bg-[#F8FAFC] p-4">
                            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
                              <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                              </svg>
                            </div>
                            <h3 className="mb-1 text-lg font-semibold text-gray-900">Review Management</h3>
                            <p className="text-sm text-gray-600">Improve your star ratings of online listings.</p>
                          </div>

                          {/* Item 3 */}
                          <div className="rounded-lg bg-[#F8FAFC] p-4">
                            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                              <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                            <h3 className="mb-1 text-lg font-semibold text-gray-900">AI Pilot</h3>
                            <p className="text-sm text-gray-600">Generate fresh content in your brand tone.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dropdown>
              </li>
              <li>
                <Link href="https://docs.hyperblog.io/" className="flex items-center px-2 py-1 text-[#ED811F] transition hover:text-[#FE7062] lg:px-3">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/about" className="flex items-center px-2 py-1 text-[#ED811F] transition hover:text-[#FE7062] lg:px-3">
                  About Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/signin"
                className="btn-sm relative bg-[#ED811F] bg-[length:100%_100%] bg-[bottom] py-[5px] text-white before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-white before:[background:linear-gradient(to_right,#FFFFFF,#FFFFFF,#FFFFFF)_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
              >
                Get Started - Free 
              </Link>
            </li>
          </ul>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
