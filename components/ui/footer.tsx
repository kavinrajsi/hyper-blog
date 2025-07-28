import Link from "next/link";
import Logo from "./logo";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-12 lg:gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 text-sm text-[#475467] max-w-[360px]">
              We are dedicated to delivering innovative solutions that empower businesses to thrive in an ever-changing world.
            </p>
             <div className="flex gap-4 mt-12 md:mt-12">
            <Link href="https://www.linkedin.com" target="_blank" className="text-[#98A2B3] hover:text-[#2D2D2D] transition-colors">
              <FaLinkedinIn className="w-5 h-5" />
            </Link>
            <Link href="https://www.facebook.com" target="_blank" className="text-[#98A2B3] hover:text-[#2D2D2D] transition-colors">
              <FaFacebookF className="w-5 h-5" />
            </Link>
            <Link href="https://www.youtube.com" target="_blank" className="text-[#98A2B3] hover:text-[#2D2D2D] transition-colors">
              <FaYoutube className="w-5 h-5" />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="text-[#98A2B3] hover:text-[#2D2D2D] transition-colors">
              <FaXTwitter className="w-5 h-5" />
            </Link>
          </div>
          </div>
          
          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {/* Product column */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-black">FEATURES</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="" className="text-[#475467] hover:text-[#2D2D2D] transition-colors">
                    Auto Technical SEO
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-[#475467] hover:text-[#2D2D2D] transition-colors">
                    Blog to Banner
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-[#475467] hover:text-[#2D2D2D] transition-colors">
                    Blog to Infographics
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-[#475467] hover:text-[#2D2D2D] transition-colors">
                    Personalised Lead Magnet
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-[#475467] hover:text-[#2D2D2D] transition-colors">
                    Customise Design
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-[#475467] hover:text-[#2D2D2D] transition-colors">
                    Analytics
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company column */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-black">SOLUTIONS</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/about" className="text-[#475467] hover:text-[#2D2D2D] transition-colors">
                    ⁠AI Blogging CMS for B2B
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-[#475467] hover:text-[#2D2D2D] transition-colors">
                    AI Blogging CMS for SaaS
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-[#475467] hover:text-[#2D2D2D] transition-colors">
                    AI Blogging CMS for B2C
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-[#475467] hover:text-[#2D2D2D] transition-colors">
                    AI Blogging CMS for B2B Agency
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-[#475467] hover:text-[#2D2D2D] transition-colors">
                    AI Blogging CMS for Content Agency
                  </Link>
                </li>
              </ul>
            </div>

            {/* Content Library column */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-black">COMPARE</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="" className="text-[#475467] hover:text-[#2D2D2D] transition-colors">
                    Wordpress vs Hyperblog
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-[#475467] hover:text-[#2D2D2D] transition-colors">
                    Medium vs Hyperblog
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-[#475467] hover:text-[#2D2D2D] transition-colors">
                    Ghost vs Hyperblog
                  </Link>
                </li>
              </ul>
            </div>
             {/* Resources column */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-black">COMPANY</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/refund-policy" className="text-[#475467] hover:text-[#2D2D2D] transition-colors">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/refund-policy" className="text-[#475467] hover:text-[#2D2D2D] transition-colors">
                    Updates
                  </Link>
                </li>
                <li>
                  <Link href="/refund-policy" className="text-[#475467] hover:text-[#2D2D2D] transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/refund-policy" className="text-[#475467] hover:text-[#2D2D2D] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-[#475467] hover:text-[#2D2D2D] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-[#475467] hover:text-[#2D2D2D] transition-colors">
                    Terms & Condition
                  </Link>
                </li>
                <li>
                  <Link href="/refund-policy" className="text-[#475467] hover:text-[#2D2D2D] transition-colors">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-3 flex flex-col items-center justify-center text-center pt-8 border-t border-gray-200">
          <p className="text-sm text-[#475467]">
            © 2025 <span className="text-[#ff7701]">Hyperblog</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
