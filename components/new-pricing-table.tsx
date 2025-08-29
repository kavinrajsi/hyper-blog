'use client';

import { useEffect, useRef, useState } from 'react';
import { FaRupeeSign, FaDollarSign } from 'react-icons/fa';
import { IoChevronDown } from 'react-icons/io5';

export default function NewPricingTable() {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [stopSticky, setStopSticky] = useState(false);
  const tableWrapperRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLTableElement>(null);
  const lastRowRef = useRef<HTMLTableRowElement>(null);

  const featureLabels = [
    'AI Credits', 'Auto technical SEO', 'Easy migration from Wordpress and other CMS',
    'Connect your Own domain', 'Team members access',
    '< 100,000 pageviews/month (Unlimited pageview / Month)', 'Posts / Month',
    'Subdirectory hosting', 'Remove Hyperblog branding', 'Free SSL & CDN',
    'Schedule Posts', 'Google Analytics & GSC Integration', 'SEO Score',
    'Author Bio', 'Ai Banner creation', 'Ai Lead Magnet', 'Blog templates',
    '24/5 Support', 'Leads / Month', 'Ai Lead Magnet Design', 'AI Helper',
    'AI Poll creation', 'Ai Infographics Creation', 'Ai Internal Links',
    'Privacy-friendly Analytics', 'Collaborative review of posts',
    'Restrict Free email Domains / Allow only official E-mails',
    'Webhooks for Leads', 'API Access (self-serve)',
    'Leads Magnet Analysis - which lead magnet provides more Leads',
    'Individual Blog wise Leads', 'Blog Approval Flow',
    'Spreadsheet / Google Docs to blog posts', 'Zapier integration'
  ];

  const tooltips: Record<string, string> = {
    'AI Credits':
      'Use these AI credits to create banners, infographics, polls, Lead Magnet',
    'Author Bio':
      'Adding Auhtor Bio increase your Blogs Expertise, Authoritativeness',
    'Ai Lead Magnet':
      'Create Personalised Lead Magnet which relates to the Blog',
    'AI Helper':
      'Helps to create Blog outline',
  };

  const plans = [
    {
      name: 'FREE',
      description: 'For Individual Users & Content Bloggers',
      price: { USD: '$0', INR: '₹0' },
      features: [
        '400','✔','✔','✔','2','✔','50','✔','✔','✔',
        '✔','✔','✔','✔','✔','✔','Basic','24/5 Support','500','✔',
        '✖','✖','✖','✖','✖','✖','✖','✖','✖','✖',
        '✖','✖','✖','✖'
      ],
    },
    {
      name: 'LAUNCH',
      description: 'For Solopreneurs & Early Stage Business',
      price: { USD: '$44', INR: '₹2,322' },
      features: [
        '400','✔','✔','✔','2','✔','50','✔','✔','✔',
        '✔','✔','✔','✔','✔','✔','Basic','24/5 Support','500','✔',
        '✖','✖','✖','✖','✖','✖','✖','✖','✖','✖',
        '✖','✖','✖','✖'
      ],
    },
    {
      name: 'GROW',
      description: 'For small teams & Growing Business',
      price: { USD: '$107', INR: '₹5,676' },
      isPopular: true,
      features: [
        '1200','✔','✔','✔','5','✔','100','✔','✔','✔',
        '✔','✔','✔','✔','✔','✔','Premium','24/5 Support','Unlimited','✔',
        '✔','✔','✔','✔','✔','✔','✖','✖','✖','✖',
        '✖','✖','✖','✖'
      ],
    },
    {
      name: 'SCALE',
      description: 'For Fast-growing Modern Business',
      price: { USD: '$141', INR: '₹8,514' },
      features: [
        '4000','✔','✔','✔','10','✔','250','✔','✔','✔',
        '✔','✔','✔','✔','✔','✔','Pro','24/5 Priority Support','Unlimited','✔',
        '✔','✔','✔','✔','✔','✔','✔','✔','✔','✔',
        '✔','✔','✔','✔'
      ],
    },
  ];

  const addOns = [
    { title: 'Extra Users', price: '$4', desc: '2 Users / Month' },
    { title: 'AI Credits', price: '$7.5', desc: '400 / Month' },
    { title: 'AI Credits', price: '$12.50', desc: '1000 / Month' },
    { title: 'Domain', price: '$15', desc: '/ Month' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!tableWrapperRef.current || !tableRef.current) return;
      const wrapperRect = tableWrapperRef.current.getBoundingClientRect();
      const lastRowRect = lastRowRef.current?.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      setIsSticky(wrapperRect.top <= 0 && wrapperRect.bottom > 400);
      setStopSticky(!!lastRowRect && lastRowRect.top < windowHeight - 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const HeaderRow = ({ sticky = false }: { sticky?: boolean }) => (
    <thead className={`${sticky ? 'bg-white' : ''}`}>
      <tr>
        <th className="w-1/5 bg-white px-5 py-6 text-center align-middle text-xl font-semibold text-[#101828] border border-gray-200">
          Features
        </th>
        {plans.map((plan) => (
          <th
            key={plan.name}
            className={`w-1/5 relative bg-white px-5 py-6 text-center align-top rounded-t-2xl shadow-sm border border-gray-200 h-[200px] ${
              plan.isPopular ? 'border-2 border-orange-500 shadow-lg' : ''
            }`}
          >
            <div className="flex flex-col h-full">
              {plan.isPopular && (
                <div className="absolute -top-3 left-0 right-0 flex justify-center">
                  <span className="bg-[#FF7700] text-white px-4 py-1 rounded-full text-xs font-medium">
                    Most Popular ✨
                  </span>
                </div>
              )}
              <div className="flex-grow flex flex-col justify-between min-h-[120px]">
                <div>
                  <h3 className="text-xl font-semibold text-[#101828]">{plan.name}</h3>
                  <span className="text-[#0F0805] font-[400] text-[13px] block mt-1">
                    {plan.description}
                  </span>
                  <div className="mt-4 mb-3">
                    <span className="text-3xl font-bold text-[#101828]">
                      {plan.price[currency]}
                    </span>
                    <span className="text-xs ml-1 font-[400] text-[#475467]">/ month</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <button
                  className={`w-full ${plan.isPopular ? 'bg-[#FF7700]' : 'bg-[#344054]'} text-white rounded-lg py-2 text-sm font-medium`}
                >
                  Try hyperblog for FREE
                </button>
              </div>
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );

  return (
    <div className="mx-auto max-w-7xl sm:px-6 px-4 mt-[7em]">
      {/* Heading + Dropdown */}
      <div className="relative flex justify-end items-center mb-[8em]">
        <button className="absolute left-1/2 -translate-x-1/2 text-lg font-semibold text-[#FF7700] bg-[#FFF3E9] px-6 py-3 rounded-full">
          Compare plans
        </button>
        {/* Currency Dropdown */}
        <div className="relative w-[120px]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-[#101828] shadow-sm hover:shadow-md focus:outline-none"
          >
            <span className="flex items-center gap-2">
              {currency === 'USD' ? <FaDollarSign className="text-sm" /> : <FaRupeeSign className="text-sm" />}
              {currency}
            </span>
            <IoChevronDown />
          </button>
          {isOpen && (
            <div className="absolute mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10 overflow-hidden">
              {(['USD', 'INR'] as const).map((cur) => (
                <div
                  key={cur}
                  onClick={() => {
                    setCurrency(cur);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium cursor-pointer ${
                    currency === cur ? 'bg-orange-500 text-white' : 'hover:bg-gray-100 text-[#101828]'
                  }`}
                >
                  {cur === 'USD' ? <FaDollarSign /> : <FaRupeeSign />}
                  {cur}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Pricing Table */}
      <div className="mt-6 relative" ref={tableWrapperRef}>
        {/* Scrollable wrapper */}
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table ref={tableRef} className="min-w-[700px] w-full table-fixed border-separate border-spacing-0">
            <HeaderRow />
            <tbody>
              {featureLabels.map((label, idx) => (
                <tr
                  key={label}
                  ref={idx === featureLabels.length - 1 ? lastRowRef : null}
                  className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFB]'}
                >
                  <td className="w-1/5 py-4 px-4 text-sm font-medium text-[#101828] border border-gray-200">
                    {tooltips[label] ? (
                      <div className="relative group inline-block cursor-pointer">
                        {label}
                        <div className="absolute left-0 bottom-full mb-2 hidden group-hover:block w-56 bg-black text-white text-xs rounded-md px-3 py-2 shadow-lg z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {tooltips[label]}
                        </div>
                      </div>
                    ) : (
                      label
                    )}
                  </td>
                  {plans.map((plan) => (
                    <td
                      key={plan.name + label}
                      className="w-1/5 py-4 px-4 text-center text-sm border border-gray-200"
                    >
                      {plan.features[idx] === '✔' ? (
                        <svg
                          className="w-4 h-4 mx-auto text-[#101828]"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 12c1.5 2 3 4 4.5 5 4-5 7-8 11-12" />
                        </svg>
                      ) : plan.features[idx] === '✖' ? (
                        <svg
                          className="w-4 h-4 mx-auto text-red-500"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      ) : (
                        <span className="text-[#101828]">{plan.features[idx]}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sticky Floating Header */}
        {isSticky && !stopSticky && (
          <div
            className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-white z-30 rounded-t-2xl shadow-md overflow-x-auto"
            style={{ width: tableRef.current?.offsetWidth }}
          >
            <table className="min-w-[700px] w-full table-fixed border-separate border-spacing-0">
              <HeaderRow sticky />
            </table>
          </div>
        )}
      </div>

      {/* Add-ons Section */}
      <div className="text-center mt-24 mb-12 max-w-7xl mx-auto ">
        <h3 className="text-[25px] pb-6 font-semibold text-[#101828]">Our Additional add-ons</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {addOns.map((item) => (
            <div
              key={item.title + item.price}
              className="border border-gray-200 rounded-lg shadow-sm px-6 py-12"
            >
              <h4 className="text-xl font-semibold text-[#101828]">{item.title}</h4>
              <p className="text-3xl font-bold text-[#101828] pt-4 pb-2">{item.price}</p>
              <p className="text-xs text-[#ff7701] font-[500]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
