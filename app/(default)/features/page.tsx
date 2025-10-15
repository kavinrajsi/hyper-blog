"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";



const featureAccordions = [
  {
    title: "Auto-Technical SEO",
    description:
      "HyperBlog optimizes load speed, Core Web Vitals, schema, and metadata the moment you publish. No plugins, no manual work.",
    image: "/images/feature3.png",
    statLabel: "Total Followers",
    statValue: "65%",
    chart: "/images/Screen.png",
  },
  {
    title: "Blazing Fast Speed & Seamless Experience",
    description:
      "CDN-level caching, image optimization, and instant page rendering give your audience a lightning-fast browsing experience.",
  },
  {
    title: "Interactive & Engaging Content Tools",
    description:
      "Launch interactive polls, lead magnets, and AI-generated visuals within minutes—no designers needed.",
  },
  {
    title: "AI-Powered Lead Generation",
    description:
      "Deliver personalized lead magnets that convert high-intent readers into qualified pipeline automatically.",
  },
  {
    title: "Unified Platform",
    description:
      "Bring content creation, optimization, analytics, and conversion under one roof with HyperBlog.",
  },
];

const workflowTabs = [
  {
    title: "Unified Platform",
    description:
      "Bring every part of your revenue workflow together—strategy, creation, publishing, and reporting—without switching tools.",
    cta: "See how",
    ctaUrl: "/contact",
  },
  {
    title: "Works In Days",
    description:
      "Launch high-performing blogs in under a week with templates, AI-assisted content, and automated optimizations.",
    cta: "Get started",
    ctaUrl: "/pricing",
  },
  {
    title: "Integrations",
    description:
      "Connect CRM, analytics, and automation tools in a click so the data you need to scale is always in sync.",
    cta: "Explore integrations",
    ctaUrl: "/contact",
  },
  {
    title: "Report Seamlessly",
    description:
      "Track traffic, conversions, and SEO lift with dashboards built for marketing and revenue teams.",
    cta: "View reporting",
    ctaUrl: "/contact",
  },
];

const seoAccordions = [
  {
    title: "Higher rankings in one place",
    description:
      "HyperBlog auto-builds structured schema, internal links, and SEO-friendly layouts while monitoring technical issues.",
    image: "/images/Screen2.png",
  },
  {
    title: "Less Reliance on dev or SEO teams",
    description:
      "Non-technical teams can launch content that meets technical benchmarks without waiting for engineering sprints.",
  },
  {
    title: "Better conversions & stay-on-site time",
    description:
      "Personalized CTAs, sticky lead capture, and interactive modules keep readers engaged and ready to convert.",
  },
];

const comparisonRows = [
  {
    label: "Auto Meta Tags",
    hyperblog: "Yes",
    competitor: "Manual or plugins",
  },
  {
    label: "Sitemaps",
    hyperblog: "Automated",
    competitor: "Manual setup",
  },
  {
    label: "Internal Linking",
    hyperblog: "Smart AI suggestions",
    competitor: "Manual updates",
  },
  {
    label: "Schema",
    hyperblog: "Built-in",
    competitor: "Limited or missing",
  },
  {
    label: "Speed Optimization",
    hyperblog: "Serverless + CDN",
    competitor: "Depends on hosting",
  },
];

const faqItems = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! Test drive HyperBlog for 30 days. If you need help, we’ll onboard your team with a live session and tailored success plan.",
  },
  {
    question: "How does HyperBlog help with SEO?",
    answer:
      "HyperBlog automates technical SEO optimizations and provides AI recommendations so every post hits benchmarks instantly.",
  },
  {
    question: "Can I migrate existing blogs?",
    answer:
      "Absolutely. Our team helps migrate legacy content, redirects, and metadata so you never lose search equity.",
  },
  {
    question: "Does HyperBlog work for agencies?",
    answer:
      "Yes. Manage multiple client blogs, templates, and permissions from a single dashboard with role-based access.",
  },
  {
    question: "What integrations are supported?",
    answer:
      "We integrate with HubSpot, Salesforce, Marketo, Zapier, Google Analytics, and more. Custom integrations are available.",
  },
];

const testimonials = [
  {
    name: "Alisa Hester",
    title: "PM, Hugglance",
    quote:
      "“HyperBlog gave us a single place to publish faster, rank higher, and convert readers into qualified pipeline.”",
    avatar: "/images/testimonial-02.jpg",
  },
  {
    name: "Renee Fisher",
    title: "Head of Growth, Northpeak",
    quote:
      "“We replaced five tools with HyperBlog, automated SEO guardrails, and doubled conversions on new content.”",
    avatar: "/images/testimonial-04.jpg",
  },
  {
    name: "Andre King",
    title: "Founder, Crisp Labs",
    quote:
      "“Our content team can launch new blog experiences without engineers. HyperBlog keeps everything fast and on-brand.”",
    avatar: "/images/testimonial-05.jpg",
  },
];

export default function FeaturesPage() {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [activeSeoIndex, setActiveSeoIndex] = useState(0);
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [activeWorkflowIndex, setActiveWorkflowIndex] = useState(0);

  const activeFeature = useMemo(
    () => featureAccordions[activeFeatureIndex],
    [activeFeatureIndex],
  );

  const activeSeo = useMemo(
    () => seoAccordions[activeSeoIndex],
    [activeSeoIndex],
  );

  const activeTestimonial = testimonials[activeTestimonialIndex];

  return (
    <main className="feature feature--page mx-auto flex max-w-6xl flex-col gap-14 bg-white px-4 py-16 text-slate-900 sm:px-6 md:gap-16 md:py-20 lg:max-w-7xl lg:px-12 xl:max-w-[1120px] xl:px-0">
      <section className="feature__hero relative grid gap-10 overflow-hidden rounded-3xl bg-gradient-to-b from-orange-50 via-white to-white p-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:p-12">
        <div className="feature__hero-content relative flex flex-col gap-5">
          <div className="feature__hero-eyebrow text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 sm:text-sm">
            SEO that just
          </div>
          <h1 className="feature__hero-title font-nacelle text-3xl font-semibold uppercase leading-tight text-orange-500 md:text-4xl lg:text-[46px]">
            Happens
          </h1>
          <p className="feature__hero-highlight font-nacelle text-[32px] font-semibold uppercase leading-tight text-[#ff735c] md:text-[42px]">
            Automatically.
          </p>
          <p className="feature__hero-description text-base leading-relaxed text-slate-600 md:text-lg">
            HyperBlog takes care of all the behind-the-scenes technical SEO work—so
            your blog ranks better without you lifting a finger. No plugins, no
            checklists, no stress.
          </p>
          <div className="feature__hero-actions flex flex-wrap gap-4">
            <Link
              className="feature__cta feature__cta--primary inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5 sm:px-8 sm:py-3.5 sm:text-base"
              href="/pricing"
            >
              Get Started - FREE
            </Link>
          </div>
        </div>
        <div className="feature__hero-visual relative overflow-hidden rounded-3xl border border-orange-100 bg-white">
          <Image
            src="/images/integrate_site.png"
            alt="HyperBlog dashboard preview"
            width={720}
            height={520}
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="feature__highlight flex flex-col gap-8 md:gap-10">
        <div className="feature__highlight-header flex flex-col gap-4 text-center md:text-left lg:max-w-[420px]">
          <h2 className="feature__highlight-title font-nacelle text-2xl font-semibold text-slate-900 md:text-3xl">
            Why choose HyperBlog?
          </h2>
          <p className="feature__highlight-subtitle text-sm leading-relaxed text-slate-600 md:text-base">
            Turn every post into a conversion engine with automated SEO, visual
            storytelling, and optimized journeys in one place.
          </p>
        </div>

        <div className="feature__highlight-grid flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start lg:gap-10">
          <div className="feature__highlight-accordion flex flex-col gap-3 lg:max-w-[420px]">
            {featureAccordions.map((item, index) => {
              const isActive = index === activeFeatureIndex;
              return (
                <button
                  key={item.title}
                  type="button"
                  aria-expanded={isActive}
                  onClick={() => setActiveFeatureIndex(index)}
                  className={`feature__highlight-accordion-item flex items-center justify-between rounded-2xl border px-5 py-4 text-left text-sm font-semibold transition-all md:text-base ${
                    isActive
                      ? "border-orange-500 bg-orange-50"
                      : "border-orange-200 bg-white hover:-translate-y-0.5 hover:border-orange-300"
                  }`}
                >
                  <span className="pr-4 text-slate-900">{item.title}</span>
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full border text-orange-500 transition-transform ${
                      isActive ? "rotate-180 border-orange-500" : "border-orange-200"
                    }`}
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
              );
            })}
          </div>

          <article className="feature__highlight-card flex flex-1 flex-col gap-6 rounded-3xl border border-orange-200/70 bg-gradient-to-b from-white via-orange-50/50 to-orange-50/80 p-6 md:p-8">
            <div className="flex flex-col gap-3">
              <h3 className="feature__highlight-card-title text-xl font-semibold text-orange-600 md:text-2xl">
                {activeFeature.title}
              </h3>
              <p className="feature__highlight-card-description text-sm leading-relaxed text-slate-600 md:text-base">
                {activeFeature.description}
              </p>
            </div>

            {activeFeature.image ? (
              <div className="feature__highlight-card-media overflow-hidden rounded-2xl border border-orange-200/60 bg-white">
                <Image
                  src={activeFeature.image}
                  alt={activeFeature.title}
                  width={480}
                  height={320}
                  className="h-full w-full object-cover"
                />
              </div>
            ) : null}

            {activeFeature.statLabel && activeFeature.statValue ? (
              <div className="feature__highlight-card-stat flex items-center justify-between rounded-2xl bg-orange-100/80 px-5 py-4 text-sm font-semibold text-orange-700">
                <span>{activeFeature.statLabel}</span>
                <span className="text-lg text-orange-600">
                  {activeFeature.statValue}
                </span>
              </div>
            ) : null}

            {activeFeature.chart ? (
              <div className="feature__highlight-card-chart overflow-hidden rounded-2xl border border-orange-100 bg-white">
                <Image
                  src={activeFeature.chart}
                  alt="SEO growth chart"
                  width={520}
                  height={320}
                  className="h-full w-full object-cover"
                />
              </div>
            ) : null}
          </article>
        </div>
      </section>

      <section className="feature__workflow flex flex-col gap-8 rounded-3xl bg-gradient-to-b from-indigo-50 via-white to-white p-8 md:gap-10 md:p-12">
        <div className="feature__workflow-header flex flex-col gap-4 text-center md:text-left">
          <h2 className="feature__workflow-title font-nacelle text-2xl font-semibold text-slate-900 md:text-3xl">
            Automate your SEO effortlessly
          </h2>
          <p className="feature__workflow-description text-sm leading-relaxed text-slate-600 md:text-base">
            Orchestrate strategy, creation, and reporting without switching
            tools. Every module is built for collaboration, velocity, and
            reliable growth.
          </p>
        </div>

        <div className="feature__workflow-grid flex flex-col gap-6">
          <div className="feature__workflow-tabs grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {workflowTabs.map((tab, index) => {
              const isActive = index === activeWorkflowIndex;
              return (
                <button
                  key={tab.title}
                  type="button"
                  aria-selected={isActive}
                  onClick={() => setActiveWorkflowIndex(index)}
                  className={`feature__workflow-tab flex items-center justify-between rounded-2xl border px-5 py-4 text-left text-sm font-semibold transition-all md:text-base ${
                    isActive
                      ? "border-indigo-500 bg-indigo-100"
                      : "border-indigo-200 bg-white hover:-translate-y-0.5 hover:border-indigo-300"
                  }`}
                >
                  <span className="pr-4 text-indigo-900">{tab.title}</span>
                  <span
                    className={`h-4 w-4 rounded-full ${
                      isActive ? "bg-indigo-600" : "bg-indigo-200"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div className="feature__workflow-panel flex flex-col gap-6 rounded-3xl border border-indigo-100 bg-gradient-to-b from-white via-indigo-50/60 to-white p-6 md:p-8">
            <div className="flex flex-col gap-3">
              <h3 className="feature__workflow-panel-title text-xl font-semibold text-indigo-900 md:text-2xl">
                {workflowTabs[activeWorkflowIndex].title}
              </h3>
              <p className="feature__workflow-panel-description text-sm leading-relaxed text-indigo-700 md:text-base">
                {workflowTabs[activeWorkflowIndex].description}
              </p>
            </div>
            <Link
              href={workflowTabs[activeWorkflowIndex].ctaUrl}
              className="feature__cta feature__cta--link inline-flex items-center text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700 md:text-base"
            >
              {workflowTabs[activeWorkflowIndex].cta}
            </Link>
            <div className="feature__workflow-panel-visual overflow-hidden rounded-2xl border border-indigo-100 bg-white">
              <Image
                src="/images/Screen3.png"
                alt="Workflow visual"
                width={640}
                height={360}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="feature__seo grid gap-8 rounded-3xl bg-gradient-to-b from-orange-100/70 via-white to-orange-50 p-8 md:grid-cols-2 md:gap-10 md:p-10">
        <div className="feature__seo-media overflow-hidden rounded-3xl border border-orange-100 bg-white">
          <Image
            src={activeSeo.image ?? "/images/features.png"}
            alt="Built-in SEO illustration"
            width={640}
            height={420}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="feature__seo-content flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="feature__seo-title font-nacelle text-2xl font-semibold text-orange-700 md:text-3xl">
              Built-in SEO that actually builds traffic
            </h2>
          </div>

          <div className="feature__seo-accordion flex flex-col gap-3">
            {seoAccordions.map((item, index) => {
              const isActive = index === activeSeoIndex;
              return (
                <button
                  key={item.title}
                  type="button"
                  aria-expanded={isActive}
                  onClick={() => setActiveSeoIndex(index)}
                  className={`feature__seo-accordion-item flex items-center justify-between rounded-2xl border px-5 py-4 text-left text-sm font-semibold transition-all md:text-base ${
                    isActive
                      ? "border-orange-600 bg-orange-50"
                      : "border-orange-200 bg-white hover:-translate-y-0.5 hover:border-orange-300"
                  }`}
                >
                  <span className="pr-4 text-orange-800">{item.title}</span>
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full border text-orange-600 transition-transform ${
                      isActive ? "border-orange-500 rotate-180" : "border-orange-200"
                    }`}
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
              );
            })}
          </div>

          <p className="feature__seo-detail rounded-2xl border border-orange-200 bg-white/80 px-5 py-4 text-sm leading-relaxed text-orange-900 md:text-base">
            {activeSeo.description}
          </p>
        </div>
      </section>

      <section className="feature__demo flex flex-col gap-6 rounded-3xl bg-gradient-to-r from-orange-500 via-orange-500 to-orange-600 p-8 text-white md:gap-10 md:p-12">
        <div className="feature__demo-media overflow-hidden rounded-3xl border border-white/20 bg-white/10">
          <Image
            src="/images/Screen.png"
            alt="Live demo preview"
            width={680}
            height={420}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="feature__demo-content flex flex-col gap-4">
          <h2 className="feature__demo-title font-nacelle text-2xl font-semibold md:text-3xl">
            Want to see how it works in real-time?
          </h2>
          <p className="feature__demo-description text-sm leading-relaxed text-orange-50/90 md:text-base">
            We’ll show you how HyperBlog auto-optimizes content the moment you
            hit “Publish.”
          </p>
          <Link
            className="feature__cta feature__cta--secondary inline-flex w-fit items-center justify-center rounded-xl border border-white/60 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/20 sm:px-8 sm:py-3.5 sm:text-base"
            href="/contact"
          >
            Book demo
          </Link>
        </div>
      </section>

      <section className="feature__comparison flex flex-col gap-6">
        <h2 className="feature__comparison-title text-center font-nacelle text-2xl font-semibold text-slate-900 md:text-3xl">
          Why HyperBlog wins
        </h2>
        <div className="feature__comparison-table overflow-hidden rounded-3xl border border-slate-200/80 bg-white">
          <div className="grid grid-cols-1 gap-3 border-b border-slate-100 bg-slate-50 px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 md:grid-cols-[1.1fr_0.9fr_1fr] md:text-sm">
            <span>Feature</span>
            <span className="md:text-center">HyperBlog</span>
            <span className="md:text-center">Traditional CMS + Plugins</span>
          </div>
          {comparisonRows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-1 gap-3 border-b border-slate-100 px-6 py-4 text-sm text-slate-600 last:border-b-0 md:grid-cols-[1.1fr_0.9fr_1fr]"
            >
              <span className="font-semibold text-slate-900">{row.label}</span>
              <span className="md:text-center text-emerald-600">{row.hyperblog}</span>
              <span className="md:text-center text-slate-500">{row.competitor}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="feature__testimonials flex flex-col gap-8 rounded-3xl bg-gradient-to-b from-white to-slate-100 p-8 md:gap-10 md:p-12">
        <div className="feature__testimonials-header flex flex-col items-center gap-3 text-center">
          <div className="feature__testimonials-badge inline-flex items-center rounded-full bg-orange-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-orange-500">
            What our customers say
          </div>
          <h2 className="feature__testimonials-title font-nacelle text-2xl font-semibold text-slate-900 md:text-3xl">
            Revenue and content teams ship faster with HyperBlog.
          </h2>
        </div>

        <div className="feature__testimonials-carousel flex flex-col items-center gap-6">
          <div className="feature__testimonials-card flex w-full max-w-xl flex-col items-center gap-5 rounded-3xl border border-slate-100 bg-white px-6 py-8 text-center md:px-10 md:py-10">
            <div className="feature__testimonials-avatar h-24 w-24 overflow-hidden rounded-full border-4 border-orange-100">
              <Image
                src={activeTestimonial.avatar}
                alt={activeTestimonial.name}
                width={120}
                height={120}
                className="h-full w-full object-cover"
              />
            </div>
            <blockquote className="feature__testimonials-quote text-sm leading-relaxed text-slate-600 md:text-base">
              {activeTestimonial.quote}
            </blockquote>
            <div className="feature__testimonials-person flex flex-col gap-1">
              <span className="text-base font-semibold text-slate-900">
                {activeTestimonial.name}
              </span>
              <span className="text-sm font-medium text-slate-500">
                {activeTestimonial.title}
              </span>
            </div>
          </div>

          <div className="feature__testimonials-controls flex items-center gap-4">
            <button
              type="button"
              onClick={() =>
                setActiveTestimonialIndex((prev) =>
                  prev === 0 ? testimonials.length - 1 : prev - 1,
                )
              }
              className="feature__testimonials-control inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-700 transition-transform hover:-translate-y-0.5"
            >
              <span className="sr-only">Previous testimonial</span>
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="feature__testimonials-dots inline-flex items-center gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  aria-label={`View testimonial from ${testimonial.name}`}
                  onClick={() => setActiveTestimonialIndex(index)}
                  className={`feature__testimonials-dot h-3 w-3 rounded-full border transition-all ${
                    index === activeTestimonialIndex
                      ? "border-orange-500 bg-orange-500"
                      : "border-orange-200 bg-transparent hover:bg-orange-200"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() =>
                setActiveTestimonialIndex((prev) =>
                  prev === testimonials.length - 1 ? 0 : prev + 1,
                )
              }
              className="feature__testimonials-control inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-700 transition-transform hover:-translate-y-0.5"
            >
              <span className="sr-only">Next testimonial</span>
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="feature__faq flex flex-col gap-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="feature__faq-title font-nacelle text-2xl font-semibold text-slate-900 md:text-3xl">
            Frequently asked questions
          </h2>
          <p className="feature__faq-subtitle text-sm leading-relaxed text-slate-600 md:text-base">
            Everything you need to know about HyperBlog.
          </p>
        </div>

        <div className="feature__faq-list flex flex-col gap-4">
          {faqItems.map((item, index) => {
            const isActive = index === activeFaqIndex;
            return (
          <div
                key={item.question}
                className="feature__faq-item rounded-3xl border border-slate-200/80 bg-white px-6 py-5"
              >
                <button
                  type="button"
                  aria-expanded={isActive}
                  onClick={() =>
                    setActiveFaqIndex((prev) => (prev === index ? -1 : index))
                  }
                  className="feature__faq-button flex w-full items-center justify-between gap-6 text-left text-sm font-semibold text-slate-900 md:text-base"
                >
                  <span className="flex-1">{item.question}</span>
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full border text-slate-600 transition-transform ${
                      isActive ? "rotate-45 border-orange-500 text-orange-500" : "border-slate-200"
                    }`}
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        d="M12 4v16m8-8H4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                {isActive ? (
                  <p className="feature__faq-answer mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                    {item.answer}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="feature__faq-cta grid gap-4 rounded-3xl border border-orange-200 bg-gradient-to-r from-orange-50 via-amber-50 to-orange-100 px-6 py-6 md:grid-cols-[auto_1fr_auto] md:items-center md:px-8 md:py-8">
          <div className="feature__faq-cta-icon flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-lg font-bold text-white md:h-16 md:w-16">
            ?
          </div>
          <div className="feature__faq-cta-copy flex flex-col gap-1">
            <h3 className="feature__faq-cta-title text-base font-semibold text-slate-900 md:text-lg">
              You have different questions?
            </h3>
            <p className="feature__faq-cta-description text-sm leading-relaxed text-slate-600">
              We’ll connect you with a specialist to answer every question you
              have about HyperBlog.
            </p>
          </div>
            <Link
              className="feature__cta feature__cta--primary inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 sm:px-8 sm:py-3.5 sm:text-base"
              href="/contact"
            >
              Talk to us
          </Link>
        </div>
      </section>

      <section className="feature__footer-cta flex justify-center pb-10 pt-4">
        <div className="feature__footer-cta-card flex w-full max-w-3xl flex-col items-center gap-5 rounded-[32px] border border-rose-200/80 bg-gradient-to-b from-white via-rose-50/70 to-rose-100 px-8 py-10 text-center md:px-12 md:py-12">
          <h2 className="feature__footer-cta-title font-nacelle text-2xl font-semibold text-slate-900 md:text-[28px]">
            Join the content-first platform
          </h2>
          <p className="feature__footer-cta-description text-sm leading-relaxed text-slate-600 md:text-base">
            Launch faster, automate technical SEO, and convert readers into
            qualified pipeline with HyperBlog.
          </p>
          <div className="feature__footer-cta-actions flex w-full flex-col gap-3 sm:max-w-xl sm:flex-row sm:justify-center">
            <Link
              className="feature__cta feature__cta--primary inline-flex flex-1 items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 sm:px-8 sm:py-3.5 sm:text-base"
              href="/signup"
            >
              Start free trial
            </Link>
            <Link
              className="feature__cta feature__cta--ghost inline-flex flex-1 items-center justify-center rounded-xl border border-orange-300 bg-orange-50/60 px-6 py-3 text-sm font-semibold text-orange-600 transition-all hover:-translate-y-0.5 hover:bg-orange-100 sm:px-8 sm:py-3.5 sm:text-base"
              href="/contact"
            >
              Book demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
