'use client';

import { useEffect, useRef, useState } from 'react';
import { FaRupeeSign, FaDollarSign } from "react-icons/fa";


export default function NewPricingTable() {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [isSticky, setIsSticky] = useState(false);
  const [stopSticky, setStopSticky] = useState(false);
  const tableWrapperRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLTableElement>(null);
  const lastRowRef = useRef<HTMLTableRowElement>(null);

  const plans = [
    { name: 'Free', description: 'Best for personal use', price: { USD: '$0', INR: '₹0' }, features: Array(11).fill('-') },
    { name: 'Launch', description: 'Best for personal use', price: { USD: '$38', INR: '2043' }, features: Array(11).fill('✔') },
    { name: 'Grow', description: 'Best for personal use', price: { USD: '$94', INR: '4994' }, isPopular: true, features: Array(11).fill('✔') },
    { name: 'Scale', description: 'Best for personal use', price: { USD: '$160', INR: '7492' }, features: Array(11).fill('✔') },
  ];

  const featureLabels = [
    'Auto technical SEO', 'Connect your Own domain', 'Member', 'Pageviews/Month',
    'Posts/Month', 'Subdirectory hosting', 'Remove branding',
    'Free SSL & CDN', 'Schedule Posts', 'Easy migration', 'A/B Testing'
  ];

  const addOns = [
    { title: 'Extra Users', price: '$4', desc: '2 users/month' },
    { title: 'Ai Credits', price: '$7.5', desc: '400/month' },
    { title: 'Ai Credits', price: '$12.50', desc: '1000/month' },
    { title: 'Domain', price: '$15', desc: '/month' },
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

  const HeaderRow = ({ sticky = false }) => (
    <thead className={`${sticky ? 'bg-white' : ''}`}>
      <tr>
        <th className="w-[240px] bg-white"></th>
        {plans.map((plan) => (
          <th
            key={plan.name}
            className="relative bg-white px-5 py-6 text-center align-top rounded-t-2xl shadow-sm border border-gray-200"
            style={{ width: 'calc((100% - 240px) / 4)' }}
          >
            {plan.isPopular && (
              <div className="absolute -top-3 left-0 right-0 flex justify-center">
                <span className="bg-[#FF7700] text-white px-4 py-1 rounded-full text-xs font-medium">
                  Most Popular ✨
                </span>
              </div>
            )}
            <h3 className="text-xl font-semibold text-[#101828]">{plan.name}</h3>
            <p className="text-xs mt-1 text-[#475467]">{plan.description}</p>
            <div className="mt-4 mb-3">
              <span className="text-3xl font-bold text-[#101828]">{plan.price[currency]}</span>
              <span className="text-xs ml-1 text-[#475467]">/month*</span>
            </div>
            <button
              className={`w-full ${plan.isPopular ? 'bg-[#FF7700]' : 'bg-[#344054]'} text-white rounded-lg py-2 mb-4 text-sm font-medium`}
            >
              Coming Soon
            </button>
            <p className="text-[#FF7700] text-xs mb-2">*Lorem Ipsum dummy text</p>
            <a href="#" className="text-xs text-[#475467] underline hover:text-[#101828]">Learn more</a>
          </th>
        ))}
      </tr>
    </thead>
  );

  return (
    <div className="max-w-[1200px] mx-auto px-4 mt-[7em]">
      {/* 🔹 Heading + Dropdown */}
     <div className="relative flex justify-end items-center mb-[4em]">
  <button className="absolute left-1/2 -translate-x-1/2 text-sm font-semibold text-[#FF7700] bg-[#FFF3E9] px-6 py-3 rounded-full">
    Compare plans
  </button>
  <div className="relative inline-block">
  <select
    value={currency}
    onChange={(e) => setCurrency(e.target.value as 'INR' | 'USD')}
    className="appearance-none bg-orange-500 text-white font-semibold px-4 py-2 rounded-md pr-8 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 cursor-pointer"
  >
    <option value="USD"><FaDollarSign /> USD</option>
    <option value="INR"><FaRupeeSign /> INR</option>
  </select>
</div>
</div>

      {/* 🔹 Pricing Table */}
      <div className="mt-6 relative" ref={tableWrapperRef}>
        <table ref={tableRef} className="w-full border-separate border-spacing-0">
          <HeaderRow />
          <tbody>
            {featureLabels.map((label, idx) => (
              <tr
                key={label}
                ref={idx === featureLabels.length - 1 ? lastRowRef : null}
                className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFB]'}
              >
                <td className="py-4 px-4 text-sm font-medium text-[#101828]">
                  {label}
                </td>
                {plans.map((plan) => (
                  <td
                    key={plan.name + label}
                    className="py-4 px-4 text-center text-sm text-[#101828] border border-gray-200"
                  >
                    {plan.features[idx]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {/* 🔹 Sticky Floating Header */}
        {isSticky && !stopSticky && (
          <div
            className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-white z-30 rounded-t-2xl shadow-md"
            style={{ width: tableRef.current?.offsetWidth }}
          >
            <table className="w-full border-separate border-spacing-0">
              <HeaderRow sticky />
            </table>
          </div>
        )}
      </div>

      {/* 🔹 Additional Add-ons Section */}
      <div className="text-center mt-12">
        <h3 className="text-xl font-semibold text-[#101828]">Our Additional add-ons</h3>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {addOns.map((item) => (
            <div
              key={item.title + item.price}
              className="border border-gray-200 rounded-lg shadow-sm px-6 py-4 w-48"
            >
              <h4 className="text-sm font-medium text-[#101828]">{item.title}</h4>
              <p className="text-lg font-semibold text-[#101828] mt-1">{item.price}</p>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
