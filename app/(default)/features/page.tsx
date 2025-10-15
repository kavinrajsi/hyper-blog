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
    <main className="feature-page">
      <section className="feature-hero">
        <div className="feature-hero__content">
          <p className="feature-hero__eyebrow">SEO that just happens</p>
          <h1 className="feature-hero__title">
            SEO that just happens —{" "}
            <span className="feature-hero__title--accent">automatically.</span>
          </h1>
          <p className="feature-hero__description">
            HyperBlog takes care of behind-the-scenes technical SEO work, so
            your blog ranks better without plugins, checklists, or extra steps.
            Hit publish and watch every post stay fast, optimized, and ready to
            convert.
          </p>
          <div className="feature-hero__actions">
            <Link className="feature-cta feature-cta--primary" href="/pricing">
              Get started free
            </Link>
            <Link className="feature-cta feature-cta--ghost" href="/contact">
              Talk to sales
            </Link>
          </div>
        </div>
        <div className="feature-hero__visual">
          <Image
            src="/images/integrate_site.png"
            alt="HyperBlog dashboard preview"
            width={720}
            height={520}
            priority
          />
        </div>
      </section>

      <section className="feature-highlight">
        <div className="feature-highlight__header">
          <h2 className="feature-highlight__title">Why choose HyperBlog?</h2>
          <p className="feature-highlight__subtitle">
            Our all-in-one platform transforms blogs into conversion engines,
            combining technical excellence with audience experiences that win.
          </p>
        </div>

        <div className="feature-highlight__layout">
          <article className="feature-highlight__card">
            <h3 className="feature-highlight__card-title">
              {activeFeature.title}
            </h3>
            <p className="feature-highlight__card-description">
              {activeFeature.description}
            </p>
            {activeFeature.image ? (
              <div className="feature-highlight__card-media">
                <Image
                  src={activeFeature.image}
                  alt={activeFeature.title}
                  width={480}
                  height={320}
                />
              </div>
            ) : null}
            {activeFeature.statLabel && activeFeature.statValue ? (
              <div className="feature-highlight__card-stat">
                <div className="feature-highlight__card-stat-label">
                  {activeFeature.statLabel}
                </div>
                <div className="feature-highlight__card-stat-value">
                  {activeFeature.statValue}
                </div>
              </div>
            ) : null}
            {activeFeature.chart ? (
              <div className="feature-highlight__card-chart">
                <Image
                  src={activeFeature.chart}
                  alt="SEO growth chart"
                  width={520}
                  height={320}
                />
              </div>
            ) : null}
          </article>

          <div className="feature-accordion feature-accordion--vertical">
            {featureAccordions.map((item, index) => {
              const isActive = index === activeFeatureIndex;
              return (
                <button
                  key={item.title}
                  type="button"
                  className={`feature-accordion__item feature-accordion__item${
                    isActive ? "--active" : ""
                  }`}
                  onClick={() => setActiveFeatureIndex(index)}
                  aria-expanded={isActive}
                >
                  <span className="feature-accordion__label">{item.title}</span>
                  <span className="feature-accordion__icon">
                    <span />
                    <span />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="feature-workflow">
        <div className="feature-workflow__header">
          <h2 className="feature-workflow__title">
            Automate your SEO effortlessly
          </h2>
          <p className="feature-workflow__description">
            Orchestrate your entire revenue team’s workflow with modules built
            for collaboration, velocity, and results.
          </p>
        </div>

        <div className="feature-workflow__grid">
          <div className="feature-workflow__tabs">
            {workflowTabs.map((tab, index) => {
              const isActive = index === activeWorkflowIndex;
              return (
                <button
                  key={tab.title}
                  type="button"
                  className={`feature-workflow__tab feature-workflow__tab${
                    isActive ? "--active" : ""
                  }`}
                  onClick={() => setActiveWorkflowIndex(index)}
                  aria-selected={isActive}
                >
                  <span className="feature-workflow__tab-title">
                    {tab.title}
                  </span>
                  <span className="feature-workflow__tab-icon" />
                </button>
              );
            })}
          </div>
          <div className="feature-workflow__panel">
            <h3 className="feature-workflow__panel-title">
              {workflowTabs[activeWorkflowIndex].title}
            </h3>
            <p className="feature-workflow__panel-description">
              {workflowTabs[activeWorkflowIndex].description}
            </p>
            <Link
              href={workflowTabs[activeWorkflowIndex].ctaUrl}
              className="feature-cta feature-cta--link"
            >
              {workflowTabs[activeWorkflowIndex].cta}
            </Link>
            <div className="feature-workflow__panel-visual">
              <Image
                src="/images/Screen3.png"
                alt="Workflow visual"
                width={640}
                height={360}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="feature-seo">
        <div className="feature-seo__media">
          <Image
            src={activeSeo.image ?? "/images/features.png"}
            alt="Built-in SEO illustration"
            width={640}
            height={420}
          />
        </div>

        <div className="feature-seo__content">
          <h2 className="feature-seo__title">
            Built-in SEO that actually builds traffic
          </h2>
          <p className="feature-seo__subtitle">
            HyperBlog monitors every post with AI guardrails, automated audits,
            and actionable insights—so growth teams can stay focused on the
            message.
          </p>
          <div className="feature-accordion feature-accordion--stacked">
            {seoAccordions.map((item, index) => {
              const isActive = index === activeSeoIndex;
              return (
                <button
                  key={item.title}
                  type="button"
                  className={`feature-accordion__item feature-accordion__item${
                    isActive ? "--active" : ""
                  }`}
                  onClick={() => setActiveSeoIndex(index)}
                  aria-expanded={isActive}
                >
                  <span className="feature-accordion__label">{item.title}</span>
                  <span className="feature-accordion__icon">
                    <span />
                    <span />
                  </span>
                </button>
              );
            })}
          </div>
          <p className="feature-seo__detail">{activeSeo.description}</p>
        </div>
      </section>

      <section className="feature-intro-cta">
        <div className="feature-intro-cta__content">
          <h2 className="feature-intro-cta__title">
            Want to see how it works in real-time?
          </h2>
          <p className="feature-intro-cta__description">
            We’ll show you how HyperBlog auto-optimizes content the moment you
            hit “Publish.”
          </p>
          <Link className="feature-cta feature-cta--secondary" href="/contact">
            Book demo
          </Link>
        </div>
        <div className="feature-intro-cta__media">
          <Image
            src="/images/Screen.png"
            alt="Live demo preview"
            width={680}
            height={420}
          />
        </div>
      </section>

      <section className="feature-comparison">
        <h2 className="feature-comparison__title">Why HyperBlog wins</h2>
        <div className="feature-comparison__table" role="table">
          <div className="feature-comparison__row feature-comparison__row--head" role="row">
            <span className="feature-comparison__cell feature-comparison__cell--head" role="columnheader">
              Feature
            </span>
            <span className="feature-comparison__cell feature-comparison__cell--head" role="columnheader">
              HyperBlog
            </span>
            <span className="feature-comparison__cell feature-comparison__cell--head" role="columnheader">
              Traditional CMS + Plugins
            </span>
          </div>
          {comparisonRows.map((row) => (
            <div className="feature-comparison__row" role="row" key={row.label}>
              <span className="feature-comparison__cell feature-comparison__cell--label" role="cell">
                {row.label}
              </span>
              <span className="feature-comparison__cell feature-comparison__cell--value" role="cell">
                {row.hyperblog}
              </span>
              <span className="feature-comparison__cell feature-comparison__cell--value" role="cell">
                {row.competitor}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="feature-testimonials">
        <div className="feature-testimonials__header">
          <div className="feature-testimonials__badge">What our customers say</div>
          <h2 className="feature-testimonials__title">
            Revenue and content teams ship faster with HyperBlog.
          </h2>
        </div>

        <div className="feature-testimonials__carousel">
          <div className="feature-testimonials__card">
            <div className="feature-testimonials__avatar">
              <Image
                src={activeTestimonial.avatar}
                alt={activeTestimonial.name}
                width={120}
                height={120}
              />
            </div>
            <blockquote className="feature-testimonials__quote">
              {activeTestimonial.quote}
            </blockquote>
            <div className="feature-testimonials__person">
              <span className="feature-testimonials__name">
                {activeTestimonial.name}
              </span>
              <span className="feature-testimonials__role">
                {activeTestimonial.title}
              </span>
            </div>
          </div>
          <div className="feature-testimonials__controls">
            <button
              className="feature-testimonials__control feature-testimonials__control--prev"
              type="button"
              onClick={() =>
                setActiveTestimonialIndex((prev) =>
                  prev === 0 ? testimonials.length - 1 : prev - 1,
                )
              }
            >
              Prev
            </button>
            <div className="feature-testimonials__dots">
              {testimonials.map((_testimonial, index) => (
                <button
                  type="button"
                  key={_testimonial.name}
                  className={`feature-testimonials__dot feature-testimonials__dot${
                    index === activeTestimonialIndex ? "--active" : ""
                  }`}
                  onClick={() => setActiveTestimonialIndex(index)}
                  aria-label={`View testimonial from ${_testimonial.name}`}
                />
              ))}
            </div>
            <button
              className="feature-testimonials__control feature-testimonials__control--next"
              type="button"
              onClick={() =>
                setActiveTestimonialIndex((prev) =>
                  prev === testimonials.length - 1 ? 0 : prev + 1,
                )
              }
            >
              Next
            </button>
          </div>
        </div>
      </section>

      <section className="feature-faq">
        <h2 className="feature-faq__title">Frequently asked questions</h2>
        <p className="feature-faq__subtitle">
          Everything you need to know about HyperBlog.
        </p>

        <div className="feature-faq__list">
          {faqItems.map((item, index) => {
            const isActive = index === activeFaqIndex;
            return (
              <div className="feature-faq__item" key={item.question}>
                <button
                  type="button"
                  className={`feature-faq__button feature-faq__button${
                    isActive ? "--active" : ""
                  }`}
                  onClick={() =>
                    setActiveFaqIndex((prev) => (prev === index ? -1 : index))
                  }
                  aria-expanded={isActive}
                >
                  <span className="feature-faq__question">{item.question}</span>
                  <span className="feature-faq__icon">
                    <span />
                    <span />
                  </span>
                </button>
                {isActive ? (
                  <p className="feature-faq__answer">{item.answer}</p>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="feature-faq__cta">
          <div className="feature-faq__cta-icon">?</div>
          <div className="feature-faq__cta-content">
            <h3 className="feature-faq__cta-title">
              You have different questions?
            </h3>
            <p className="feature-faq__cta-description">
              We’ll connect you with a specialist to answer every question you
              have about HyperBlog.
            </p>
          </div>
          <Link className="feature-cta feature-cta--primary" href="/contact">
            Talk to us
          </Link>
        </div>
      </section>

      <section className="feature-footer-cta">
        <div className="feature-footer-cta__card">
          <h2 className="feature-footer-cta__title">
            Join the content-first platform
          </h2>
          <p className="feature-footer-cta__description">
            Launch faster, automate technical SEO, and convert readers into
            qualified pipeline with HyperBlog.
          </p>
          <div className="feature-footer-cta__actions">
            <Link className="feature-cta feature-cta--primary" href="/signup">
              Start free trial
            </Link>
            <Link className="feature-cta feature-cta--ghost" href="/contact">
              Book demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
