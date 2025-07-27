"use client";

import { useState } from "react";
import { FaRupeeSign, FaDollarSign } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";

export default function PricingTable() {
  const [Monthly, setMonthly] = useState<boolean>(true);
  const [selected, setSelected] = useState<"USD" | "INR">("USD");
  const [isOpen, setIsOpen] = useState(false);

 const toggleDropdown = () => setIsOpen(!isOpen);

  const selectCurrency = (currency: "USD" | "INR") => {
    setSelected(currency);
    setIsOpen(false);
  };

   const prices = {
    USD: {
      free: { monthly: 0, yearly: 0 },
      launch: { monthly: 38, yearly: 44 },
      grow: { monthly: 94, yearly: 107 },
      scale: { monthly: 160, yearly: 141 },
    },
    INR: {
      free: { monthly: 0, yearly: 0 },
      launch: { monthly: 2043, yearly: 5676 },
      grow: { monthly: 4994, yearly: 5400 },
      scale: { monthly: 7492, yearly: 8514 },
    },
    SAVE: {
      free: { dollar: 0, rupee: 0 },
      launch: { dollar: 63, rupee: 3343 },
      grow: { dollar: 154, rupee: 8173 },
      scale: { dollar: 231, rupee: 12260 },
    },
  };

  const getPrice = (plan: "free" | "launch" | "grow" | "scale") => {
    const planPrices = prices[selected][plan];
    const price = Monthly ? planPrices.monthly : planPrices.yearly;
    const symbol = selected === "USD" ? "$" : "₹";
    return `${symbol}${price.toLocaleString()}`;
  };

  const getSavings = (plan: "free" | "launch" | "grow" | "scale") => {
    const savings = prices.SAVE[plan][selected === "USD" ? "dollar" : "rupee"];
    const symbol = selected === "USD" ? "$" : "₹";
    return savings > 0 ? `Save ${symbol}${savings.toLocaleString()} /Year` : "";
  };

  const currencies = [
    { code: "INR", symbol: <FaRupeeSign /> },
    { code: "USD", symbol: <FaDollarSign /> },
  ];

  return (
    <div>
      <div className="flex items-center justify-center mb-[100px]">

       <div className="flex items-center gap-6">
          {/* Toggle */}
          <div className="flex items-center gap-4">
            <div className="flex w-[200px] p-1 rounded-full bg-white shadow-md">
              <button
                onClick={() => setMonthly(false)}
                className={`flex-1 rounded-full py-2 text-center text-sm font-semibold ${
                  !Monthly ? "bg-[#FF7700] text-white" : "text-[#475467]"
                } transition-all duration-200`}
              >
                Monthly
              </button>
              <button
                onClick={() => setMonthly(true)}
                className={`flex-1 rounded-full py-2 text-center text-sm font-semibold ${
                  Monthly ? "bg-[#FF7700] text-white" : "text-[#475467]"
                } transition-all duration-200`}
              >
                Yearly
              </button>
            </div><div>
               <svg
            className="absolute top-[21%] left-[47%] w-24 h-16 rotate-[192deg]"
            viewBox="0 0 100 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 50 C30 0, 70 0, 100 20"
              stroke="#1E2C27"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead)"
            />
            <defs>
              <marker
                id="arrowhead"
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L0,6 L6,3 Z" fill="#1E2C27" />
              </marker>
            </defs>
          </svg>
</div>
            <div className="text-sm font-semibold text-[#FF7700]">GET 12% DISCOUNT</div>
          </div>

          <div className="relative">
  <button
    onClick={toggleDropdown}
    className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white-100 text-gray-800 hover:bg-[#ff7701] hover:text-white transition-colors"
  >
    {selected === "USD" ? (
      <>
        <FaDollarSign /> USD
      </>
    ) : (
      <>
        <FaRupeeSign /> INR
      </>
    )}
    <IoChevronDown />
  </button>

  {isOpen && (
    <div className="absolute z-10 bg-white border border-gray-200 shadow-md mt-1 w-full rounded-md">
      <div
        className="px-4 py-2 hover:bg-[#ff7701] hover:text-white text-gray-700 cursor-pointer flex items-center gap-2"
        onClick={() => selectCurrency("USD")}
      >
        <FaDollarSign /> USD
      </div>
      <div
        className="px-4 py-2 hover:bg-[#ff7701] hover:text-white text-gray-700 cursor-pointer flex items-center gap-2"
        onClick={() => selectCurrency("INR")}
      >
        <FaRupeeSign /> INR
      </div>
    </div>
  )}
</div>

    </div>
    </div>

      <div className="mx-auto grid max-w-xs items-start gap-8 md:max-w-2xl md:grid-cols-2 xl:max-w-none xl:grid-cols-4 xl:gap-6">
        {/* Pricing table 1 */}
        <div className="relative flex h-full flex-col rounded-2xl bg-gradient-to-br from-white via-white to-white p-5 backdrop-blur-sm border border-[#E4E4E7]">
          <div className="relative mb-4 border-b pb-5 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1]">
            <div className="text-[1.5rem] text-[#0F0805] font-[700]">
              FREE
            </div>
            <span className="text-[#0F0805] text-[13px]">For Individual & Bloggers</span>
            <div className="mt-5 mb-[94px] flex items-baseline font-nacelle">
              <span className="text-[37px] font-semibold tabular-nums text-black pl-1">
                {getPrice("free")}
              </span>
            </div>
           <a
              className="btn-sm relative w-full bg-gradient-to-t from-gray-800 to-gray-800/60 
                bg-[length:100%_100%] bg-[bottom] 
                text-white font-bold text-[15px] px-6 py-2.5 rounded-[5px]
                before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] 
                before:border before:border-transparent 
                before:[background:linear-gradient(to_top,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] 
                before:[mask-composite:exclude_!important] 
                before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] 
                hover:bg-[length:100%_150%]"
              href="#0"
            >
              Try hyperblog for FREE
            </a>
          </div>
          <p className="mb-4 text-[1rem] text-[#0F0805] font-[600]">
            What you get:
          </p>
          <ul className="grow space-y-2 text-sm text-[#0F0805]">
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-[#4B5162]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Connect with Hyperblog Domain</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-[#4B5162]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>1 Team member</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-[#4B5162]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>&lt; 30 posts/month</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-[#4B5162]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>&lt; 50,000 pageviews/month</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-[#4B5162]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>HyperBlog Branding</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-[#4B5162]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Schedule Posts</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-[#4B5162]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Basic templates</span>
            </li>
          </ul>
        </div>
        {/* Pricing table 2 */}
        <div className="relative flex h-full flex-col rounded-2xl bg-gradient-to-br from-white via-white to-white p-5 backdrop-blur-sm border border-[#E4E4E7]">
          <div className="relative mb-4 border-b pb-5 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1]">
            <div className="text-[1.5rem] text-[#0F0805] font-[700]">
              LAUNCH
            </div>
            <span className="text-[#0F0805] text-[13px]">For Solopreneurs & Early Stage Business</span>
            <div className="mt-5 flex items-baseline font-nacelle">
              <span className="text-[37px] font-semibold tabular-nums text-black pl-1">
                {getPrice("launch")} <span className="text-[15px] text-[#18181B] font-inter font-[400]">/ month</span>
              </span>
            </div>
           <div className="mb-[72px] flex items-center gap-2">
              <div className="text-[15px] text-[#18181B] font-inter font-[400]">
                {Monthly ? "billed yearly" : "Per user/month."}
              </div>
              <div className="text-[15px] text-[#FF7700] font-inter font-[400]">
                {Monthly && `(${getSavings('launch')})`}
              </div>
           </div>

            <a
              className="btn-sm relative w-full bg-gradient-to-t from-gray-800 to-gray-800/60 
                bg-[length:100%_100%] bg-[bottom] 
                text-white font-bold text-[15px] px-6 py-2.5 rounded-[5px]
                before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] 
                before:border before:border-transparent 
                before:[background:linear-gradient(to_top,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] 
                before:[mask-composite:exclude_!important] 
                before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] 
                hover:bg-[length:100%_150%]"
              href="#0"
            >
              Try hyperblog for FREE
            </a>
          </div>
           <p className="mb-4 text-[1rem] text-[#0F0805] font-[600]">
            All <span className="text-[#ff7701]">FREE</span> features, plus:
          </p>
          <ul className="grow space-y-2 text-sm text-[#0F0805]">
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-[#1D4ED8]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Connect your own Domain</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-[#1D4ED8]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Easy migration from Wordpress & Any CMS</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-[#1D4ED8]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>&lt; 100,000 pageviews/month</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-[#1D4ED8]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Subdirectory hosting</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-[#1D4ED8]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Remove Hyperblog branding</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-[#1D4ED8]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Free SSL & CDN</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-[#1D4ED8]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Google Analytics & GSC Integration</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-[#1D4ED8]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>SEO score</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-[#1D4ED8]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Auto technical SEO</span>
            </li>
          </ul>
        </div>
        {/* Pricing table 3 */}
        <div className="relative flex h-full flex-col rounded-2xl bg-gradient-to-br from-white via-white to-white backdrop-blur-sm border-[3px] border-[#FF7700]">
           <div className="text-[14px] text-[#ffffff] font-[500] bg-[#FF7700] pt-1 text-center mb-4 pb-1 rounded-t-xl">
              Most Popular
            </div>
          <div className="relative mb-4 border-b pr-5 pl-5 pb-10 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1]">
            <div className="text-[1.5rem] text-[#0F0805] font-[700]">
              GROW
            </div>
             <span className="text-[#0F0805] text-[13px]">For small teams & Growing Business</span>
            <div className="mt-5 flex items-baseline font-nacelle">
              <span className="text-[37px] font-semibold tabular-nums text-black pl-1">
                {getPrice("grow")} <span className="text-[15px] text-[#18181B] font-inter font-[400]">/ month</span>
              </span>
            </div>
            <div className="mb-[43px] flex items-center gap-2">
              <div className="text-[15px] text-[#18181B] font-inter font-[400]">
                {Monthly ? "billed yearly" : "Per user/month."}
              </div>
              <div className="text-[15px] text-[#FF7700] font-inter font-[400]">
                {Monthly && `(${getSavings('grow')})`}
              </div>
           </div>
             <a
              className="btn-sm relative w-full bg-[#FF7700] 
              text-white font-bold text-[15px] px-6 py-2.5 rounded-[5px]
              before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] 
              before:border before:border-transparent 
              before:[background:linear-gradient(to_top,#FF7700,#FF7700,#FF7700)_border-box] 
              before:[mask-composite:exclude_!important] 
              before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                        href="#0"
            >
              Try hyperblog for FREE
            </a>
          </div>
          <p className="mb-4 text-[1rem] pr-5 pl-5 pb-5 text-[#0F0805] font-[600]">
            All <span className="text-[#ff7701]">LAUNCH</span> features, plus:
          </p>
          <ul className="grow space-y-2 text-sm pr-5 pl-5 pb-5 text-[#0F0805]">
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-[#1D4ED8]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>upto 5 Team members</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-[#1D4ED8]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>&lt; 100 posts/month</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-[#1D4ED8]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Privacy-friendly Analytics</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-[#1D4ED8]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Collaborative review of posts</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-[#1D4ED8]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>AI Blog banner creation</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-[#1D4ED8]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>AI Infographic creation</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-[#1D4ED8]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Lead magnet content</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-[#1D4ED8]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Lead magnet design / Lead generation form</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-[#1D4ED8]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Premium templates</span>
            </li>
          </ul>
        </div>
        {/* Pricing table 4 */}
        <div className="relative flex h-full flex-col rounded-2xl bg-gradient-to-br from-white via-white to-white p-5 backdrop-blur-sm border border-[#E4E4E7]">
          <div className="relative mb-4 border-b pb-5 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1]">
            <div className="text-[1.5rem] text-[#0F0805] font-[700]">
              SCALE
            </div>
            <span className="text-[#0F0805] text-[13px] ">For Fast-growing Business</span>

            <div className="mt-5 flex items-baseline font-nacelle">
              <span className="text-[37px] font-semibold tabular-nums text-black pl-1">
                {getPrice("scale")}<span className="text-[15px] text-[#18181B] font-inter font-[400]"> / month</span>
              </span>
            </div>
            <div className="mb-[72px] flex items-center gap-2">
              <div className="text-[15px] text-[#18181B] font-inter font-[400]">
                {Monthly ? "billed yearly" : "Per user/month."}
              </div>
              <div className="text-[15px] text-[#FF7700] font-inter font-[400]">
                {Monthly && `(${getSavings('scale')})`}
              </div>
           </div>
            <a
               className="btn-sm relative w-full bg-gradient-to-t from-gray-800 to-gray-800/60 
                bg-[length:100%_100%] bg-[bottom] 
                text-white font-bold text-[15px] px-6 py-2.5 rounded-[5px]
                before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] 
                before:border before:border-transparent 
                before:[background:linear-gradient(to_top,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] 
                before:[mask-composite:exclude_!important] 
                before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] 
                hover:bg-[length:100%_150%]"
              href="#0"
            >
              Try hyperblog for FREE
            </a>
          </div>
          <p className="mb-4 text-[1rem] text-[#0F0805] font-[600]">
            All <span className="text-[#ff7701]">GROW </span> features, plus:
          </p>
          <ul className="grow space-y-2 text-sm text-[#0F0805]">
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-[#1D4ED8]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>upto 10 Team members</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-[#1D4ED8]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>&lt; 500 posts/month</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-[#1D4ED8]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>AI Poll creation</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-[#1D4ED8]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>AI Internal Links Insertion</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-[#1D4ED8]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>AI Related Posts Insertion</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-[#1D4ED8]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Content scanning / scoring based on Focus keyword</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-[#1D4ED8]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Intention Suggestions</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-[#1D4ED8]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>AI Helper</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-[#1D4ED8]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Zapier integration</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-[#1D4ED8]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Spreadsheet / Google Docs to blog posts</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 shrink-0 fill-current text-[#1D4ED8]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>API Access (self-serve)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
