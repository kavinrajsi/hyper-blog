'use client';

import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

interface PlanFeatures {
  autoTechnicalSEO: boolean;
  connectOwnDomain: boolean;
  members: string;
  pageviewsMonth: string;
  postsMonth: string;
  subdirectoryHosting: boolean;
  removeHyperblogBranding: boolean;
  freeSSLAndCDN: boolean;
  schedulePosts: boolean;
  easyMigration: boolean;
  abTesting: boolean;
}

interface Plan {
  name: string;
  description: string;
  price: {
    USD: string;
    INR: string;
  };
  aiCredits: string;
  isPopular?: boolean;
  features: PlanFeatures;
}

type FeatureKey = keyof PlanFeatures;

const renderFeatureValue = (features: PlanFeatures, key: keyof PlanFeatures) => {
  const value = features[key];
  if (typeof value === 'boolean') {
    return value ? (
      <svg className="mx-auto" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M20 6L9 17L4 12" stroke="#039855" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) : (
      <span className="text-[#667085] font-medium">-</span>
    );
  }
  if (key === 'members' || key === 'pageviewsMonth' || key === 'postsMonth') {
    return <span className="text-[#101828] font-medium">{value}</span>;
  }
  return value;
};

export default function NewPricingTable() {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  const plans = [
    {
      name: 'Free',
      description: 'Best for personal use',
      price: { USD: '$0', INR: '₹0' },
      aiCredits: '-',
      features: {
        autoTechnicalSEO: false,
        connectOwnDomain: false,
        members: '-',
        pageviewsMonth: '-',
        postsMonth: '-',
        subdirectoryHosting: false,
        removeHyperblogBranding: false,
        freeSSLAndCDN: false,
        schedulePosts: false,
        easyMigration: false,
        abTesting: false
      }
    },
    {
      name: 'Launch',
      description: 'Best for personal use',
      price: { USD: '$25', INR: '₹2000' },
      aiCredits: '400',
      features: {
        autoTechnicalSEO: true,
        connectOwnDomain: true,
        members: '1',
        pageviewsMonth: '< 100,000',
        postsMonth: '< 50',
        subdirectoryHosting: true,
        removeHyperblogBranding: true,
        freeSSLAndCDN: true,
        schedulePosts: true,
        easyMigration: true,
        abTesting: true
      }
    },
    {
      name: 'Grow',
      description: 'Best for personal use',
      price: { USD: '$45', INR: '₹4000' },
      aiCredits: '1,200',
      isPopular: true,
      features: {
        autoTechnicalSEO: true,
        connectOwnDomain: true,
        members: 'Upto 5',
        pageviewsMonth: '< 100,000',
        postsMonth: '< 100',
        subdirectoryHosting: true,
        removeHyperblogBranding: true,
        freeSSLAndCDN: true,
        schedulePosts: true,
        easyMigration: true,
        abTesting: true
      }
    },
    {
      name: 'Scale',
      description: 'Best for personal use',
      price: { USD: '$95', INR: '₹8000' },
      aiCredits: '4,000',
      features: {
        autoTechnicalSEO: true,
        connectOwnDomain: true,
        members: 'Upto 10',
        pageviewsMonth: '< 100,000',
        postsMonth: '< 500',
        subdirectoryHosting: true,
        removeHyperblogBranding: true,
        freeSSLAndCDN: true,
        schedulePosts: true,
        easyMigration: true,
        abTesting: true
      }
    }
  ];

  const featureLabels = {
    aiCredits: 'AI Credits',
    autoTechnicalSEO: 'Auto technical SEO',
    connectOwnDomain: 'Connect your Own domain',
    members: 'Member',
    pageviewsMonth: 'Pageviews/Month',
    postsMonth: 'Posts/Month',
    subdirectoryHosting: 'Subdirectory hosting',
    removeHyperblogBranding: 'Remove Hyperblog branding',
    freeSSLAndCDN: 'Free SSL & CDN',
    schedulePosts: 'Schedule Posts',
    easyMigration: 'Easy migration from WordPress and other CMS',
    abTesting: 'A/B Testing'
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4">
      {/* Currency Selector */}
      <div className="flex justify-end mb-8">
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg">
          <span>₹ INR</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <div 
            key={plan.name}
            className={`relative bg-white rounded-xl border ${
              plan.isPopular ? 'border-[#FF7700]' : 'border-gray-200'
            } p-6`}
          >
            {plan.isPopular && (
              <div className="absolute -top-3 left-0 right-0 flex justify-center">
                <span className="bg-[#FF7700] text-white px-6 py-1.5 rounded-full text-sm font-medium">
                  Most Popular ⭐️
                </span>
              </div>
            )}
            <h3 className="text-2xl font-bold text-[#101828]">{plan.name}</h3>
            <p className="text-[#475467] text-sm mt-1">{plan.description}</p>
            <div className="mt-6 mb-4">
              <span className="text-4xl font-bold text-[#101828]">{plan.price[currency]}</span>
              <span className="text-[#475467] ml-1">/month*</span>
            </div>
            <button className={`w-full ${
              plan.isPopular ? 'bg-[#FF7700]' : 'bg-[#344054]'
            } text-white rounded-lg py-2.5 mb-6 font-medium`}>
              Coming Soon
            </button>
            <p className="text-[#FF7700] text-sm mb-2">*Lorem Lorem Ipsum is simply dummy text of the</p>
            <a href="#" className="text-[#475467] text-sm hover:text-[#101828] underline">Learn more</a>
          </div>
        ))}
      </div>

      {/* Features Comparison Table */}
      <div className="mt-16 overflow-x-auto relative">
        <div className="sticky top-0 bg-white z-10 pb-4">
          <div className="grid grid-cols-4 gap-6">
            <div></div>
            {plans.map((plan) => (
              <div key={plan.name} className="text-center">
                <h4 className="text-lg font-semibold text-[#101828]">{plan.name}</h4>
                <p className="text-[#475467] text-sm">{plan.description}</p>
              </div>
            ))}
          </div>
        </div>
        <table className="w-full">
          <tbody className="divide-y divide-dashed divide-gray-200">
            {Object.entries(featureLabels).map(([key, label], idx) => (
              <tr key={key} className={`${idx % 2 === 0 ? 'bg-[#F9FAFB]' : 'bg-white'}`}>
                <td className="py-4 px-4 font-medium text-[#101828] text-sm border-b border-dashed border-gray-200">
                  {label}
                </td>
                {plans.map((plan) => (
                  <td key={plan.name} className="py-4 px-4 text-center border-b border-dashed border-gray-200">
                    {key === 'aiCredits' ? (
                      <span className="text-[#101828] font-medium">{plan.aiCredits}</span>
                    ) : renderFeatureValue(plan.features, key as keyof PlanFeatures)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
