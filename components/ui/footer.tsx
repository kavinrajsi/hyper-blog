import Link from "next/link";
import Logo from "./logo";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
          {/* 1st block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-black">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-[#0F0805] transition hover:text-[#777777]"
                  href=""
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  className="text-[#0F0805] transition hover:text-[#777777]"
                  href=""
                >
                  Integrations
                </a>
              </li>
              <li>
                <a
                  className="text-[#0F0805] transition hover:text-[#777777]"
                  href=""
                >
                  Pricing &amp; Plans
                </a>
              </li>
              <li>
                <a
                  className="text-[#0F0805] transition hover:text-[#777777]"
                  href=""
                >
                  Changelog
                </a>
              </li>
              <li>
                <a
                  className="text-[#0F0805] transition hover:text-[#777777]"
                  href=""
                >
                  Our method
                </a>
              </li>
              <li>
                <a
                  className="text-[#0F0805] transition hover:text-[#777777]"
                  href=""
                >
                  User policy
                </a>
              </li>
            </ul>
          </div>
          {/* 2nd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-black">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-[#0F0805] transition hover:text-[#777777]"
                  href=""
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  className="text-[#0F0805] transition hover:text-[#777777]"
                  href=""
                >
                  Diversity &amp; Inclusion
                </a>
              </li>
              <li>
                <a
                  className="text-[#0F0805] transition hover:text-[#777777]"
                  href=""
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="text-[#0F0805] transition hover:text-[#777777]"
                  href=""
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  className="text-[#0F0805] transition hover:text-[#777777]"
                  href=""
                >
                  Financial statements
                </a>
              </li>
            </ul>
          </div>
          {/* 3rd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-black">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-[#0F0805] transition hover:text-[#777777]"
                  href="/refund-policy"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#0F0805] transition hover:text-[#777777]"
                  href="/terms"
                >
                  Terms & Conditions
                </Link> 
              </li>
              <li>
                <Link
                  className="text-[#0F0805] transition hover:text-[#777777]"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          {/* 4th block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-black">
              Content Library
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-[#0F0805] transition hover:text-[#777777]"
                  href=""
                >
                  Templates
                </a>
              </li>
              <li>
                <a
                  className="text-[#0F0805] transition hover:text-[#777777]"
                  href=""
                >
                  Tutorials
                </a>
              </li>
              <li>
                <a
                  className="text-[#0F0805] transition hover:text-[#777777]"
                  href=""
                >
                  Knowledge base
                </a>
              </li>
              <li>
                <a
                  className="text-[#0F0805] transition hover:text-[#777777]"
                  href=""
                >
                  Learn
                </a>
              </li>
              <li>
                <a
                  className="text-[#0F0805] transition hover:text-[#777777]"
                  href=""
                >
                  Cookie manager
                </a>
              </li>
            </ul>
          </div>
          {/* 5th block */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
            <div className="mb-3">
              <Logo />
            </div>
            <div className="text-sm">
              <ul className="inline-flex items-center gap-2">
                <li>
                  <a
                    className="flex items-center justify-center text-[#777777] transition hover:text-[#ea7c00]"
                    href="https://www.linkedin.com/company/hyperblog/"
                    aria-label="Twitter"
                    target="_blank"
                  >
                    <FaLinkedinIn className="text-[#000] transition duration-500 text-xl hover:text-[#ea7c00]" />
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-[#777777] transition hover:text-[#ea7c00]"
                    href="https://www.facebook.com/hyperblog.io/"
                    aria-label="Medium"
                    target="_blank"
                  >
                    <FaFacebookF className="text-[#000] transition duration-500 text-lg hover:text-[#ea7c00]"/>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-[#777777] transition hover:text-[#ea7c00]"
                    href="https://x.com/HyperBlog_io"
                    aria-label="Github"
                    target="_blank"
                  >
                    <FaXTwitter className="text-[#000] transition duration-500 text-lg hover:text-[#ea7c00]"/>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-[#777777] transition hover:text-[#ea7c00]"
                    href="https://youtube.com/@hyperblog_io"
                    aria-label="Github"
                    target="_blank"
                  >
                    <FaYoutube className="text-[#000] text-2xl transition duration-500 hover:text-[#ea7c00]"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid flex justify-center pb-5">
          <p className="text-[#222] text-xs">© 2025 <Link href={'/'} className="text-[#ed7d00]">Hyperblog</Link> - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
