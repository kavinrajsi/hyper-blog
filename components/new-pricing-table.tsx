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
      <FaCheck className="mx-auto text-green-500" />
    ) : (
      <span className="text-gray-400">-</span>
    );
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
        <select 
          value={currency}
          onChange={(e) => setCurrency(e.target.value as 'INR' | 'USD')}
          className="border border-gray-300 rounded-md px-3 py-2"
        >
          <option value="INR">INR</option>
          <option value="USD">USD</option>
        </select>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <div 
            key={plan.name}
            className={`relative rounded-lg border ${
              plan.isPopular ? 'border-orange-500' : 'border-gray-200'
            } p-6`}
          >
            {plan.isPopular && (
              <div className="absolute -top-3 left-0 right-0 flex justify-center">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              </div>
            )}
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <p className="text-gray-600 text-sm">{plan.description}</p>
            <div className="my-4">
              <span className="text-3xl font-bold">{plan.price[currency]}</span>
              <span className="text-gray-500">/month*</span>
            </div>
            <button className="w-full bg-gray-700 text-white rounded-md py-2 mb-6">
              Coming Soon
            </button>
            <p className="text-orange-500 mb-4">*Lorem Lorem Ipsum is simply dummy text of the</p>
            <a href="#" className="text-gray-600 underline text-sm">Learn more</a>
          </div>
        ))}
      </div>

      {/* Features Comparison Table */}
      <div className="mt-12 overflow-x-auto">
        <table className="w-full">
          <tbody>
            {Object.entries(featureLabels).map(([key, label]) => (
              <tr key={key} className="border-b">
                <td className="py-4 font-medium">{label}</td>
                {plans.map((plan) => (
                  <td key={plan.name} className="py-4 text-center">
                    {key === 'aiCredits' ? plan.aiCredits :
                     renderFeatureValue(plan.features, key as keyof PlanFeatures)}
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
