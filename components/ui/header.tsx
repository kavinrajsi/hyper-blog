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
              <li>
                <Link
                  href="/pricing"
                  className="flex items-center px-2 py-1 text-[#ED811F] transition hover:text-[#FE7062] lg:px-3"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="flex items-center px-2 py-1 text-[#ED811F] transition hover:text-[#FE7062] lg:px-3"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="flex items-center px-2 py-1 text-[#ED811F] transition hover:text-[#FE7062] lg:px-3"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="flex items-center px-2 py-1 text-[#ED811F] transition hover:text-[#FE7062] lg:px-3"
                >
                  Help Centre
                </Link>
              </li>

              {/* Dropdown with custom title styling */}
              <Dropdown title={<span className="text-[#ED811F]">Resources</span>}>
                <ul className="bg-white border border-[#ED811F] rounded-md p-2">
                  <li>
                    <Link
                      href="/newsletter"
                      className="flex rounded-lg px-2 py-1.5 text-sm text-[#ED811F] hover:text-[#FE7062]"
                    >
                      Newsletter
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="flex rounded-lg px-2 py-1.5 text-sm text-[#ED811F] hover:text-[#FE7062]"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </Dropdown>
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

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
