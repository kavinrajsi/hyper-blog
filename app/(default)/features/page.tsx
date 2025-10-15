"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import featuresData from "@/content/features.json";

const {
  hero,
  highlight,
  featureAccordions,
  workflow,
  seo,
  demo,
  comparison,
  testimonials: testimonialsContent,
  faq,
  footerCta,
} = featuresData;

export default function FeaturesPage() {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [activeSeoIndex, setActiveSeoIndex] = useState(0);
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [activeWorkflowIndex, setActiveWorkflowIndex] = useState(0);

  const testimonials = testimonialsContent.items;

  const activeFeature = useMemo(
    () => featureAccordions[activeFeatureIndex],
    [activeFeatureIndex],
  );

  const activeSeo = useMemo(
    () => seo.accordions[activeSeoIndex],
    [activeSeoIndex],
  );

  const activeTestimonial = testimonials[activeTestimonialIndex];

  return (
    <main className="feature feature--page mx-auto flex max-w-6xl flex-col gap-14 px-4 py-16 text-slate-900 sm:px-6 md:gap-16 md:py-20 lg:max-w-7xl lg:px-12 xl:max-w-[1120px] xl:px-0">
      <section className="feature__hero relative grid gap-10 overflow-hidden rounded-3xl p-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:p-12">
        <div className="feature__hero-content relative flex flex-col gap-5">
          <div className="feature__hero-eyebrow text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 sm:text-sm">
            {hero.eyebrow}
          </div>
          <h1 className="feature__hero-title font-nacelle text-3xl font-semibold uppercase leading-tight text-orange-500 md:text-4xl lg:text-[46px]">
            {hero.title}
          </h1>
          <p className="feature__hero-highlight font-nacelle text-[32px] font-semibold uppercase leading-tight text-[#ff735c] md:text-[42px]">
            {hero.highlight}
          </p>
          <p className="feature__hero-description text-base leading-relaxed text-slate-600 md:text-lg">
            {hero.description}
          </p>
          <div className="feature__hero-actions flex flex-wrap gap-4">
            <Link
              className="feature__cta feature__cta--primary inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5 hover:bg-orange-400 sm:px-8 sm:py-3.5 sm:text-base"
              href={hero.primaryCta.href}
            >
              {hero.primaryCta.label}
            </Link>
          </div>
        </div>
        <div className="feature__hero-visual relative overflow-hidden rounded-3xl border border-orange-100">
          <Image
            src={hero.image}
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
            {highlight.title}
          </h2>
          <p className="feature__highlight-subtitle text-sm leading-relaxed text-slate-600 md:text-base">
            {highlight.subtitle}
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
                      ? "border-orange-500"
                      : "border-orange-200 hover:-translate-y-0.5 hover:border-orange-300"
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

          <article className="feature__highlight-card flex flex-1 flex-col gap-6 rounded-3xl border border-orange-200/70 p-6 md:p-8">
            <div className="flex flex-col gap-3">
              <h3 className="feature__highlight-card-title text-xl font-semibold text-orange-600 md:text-2xl">
                {activeFeature.title}
              </h3>
              <p className="feature__highlight-card-description text-sm leading-relaxed text-slate-600 md:text-base">
                {activeFeature.description}
              </p>
            </div>

            {activeFeature.image ? (
              <div className="feature__highlight-card-media overflow-hidden rounded-2xl border border-orange-200/60">
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
              <div className="feature__highlight-card-stat flex items-center justify-between rounded-2xl px-5 py-4 text-sm font-semibold text-orange-700">
                <span>{activeFeature.statLabel}</span>
                <span className="text-lg text-orange-600">
                  {activeFeature.statValue}
                </span>
              </div>
            ) : null}

            {activeFeature.chart ? (
              <div className="feature__highlight-card-chart overflow-hidden rounded-2xl border border-orange-100">
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

      <section className="feature__workflow flex flex-col gap-8 rounded-3xl border border-indigo-100/40 p-8 md:gap-10 md:p-12">
        <div className="feature__workflow-header flex flex-col gap-4 text-center md:text-left">
          <h2 className="feature__workflow-title font-nacelle text-2xl font-semibold text-slate-900 md:text-3xl">
            {workflow.title}
          </h2>
          <p className="feature__workflow-description text-sm leading-relaxed text-slate-600 md:text-base">
            {workflow.description}
          </p>
        </div>

        <div className="feature__workflow-grid flex flex-col gap-6">
          <div className="feature__workflow-tabs grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {workflow.tabs.map((tab, index) => {
              const isActive = index === activeWorkflowIndex;
              return (
                <button
                  key={tab.title}
                  type="button"
                  aria-selected={isActive}
                  onClick={() => setActiveWorkflowIndex(index)}
                  className={`feature__workflow-tab flex items-center justify-between rounded-2xl border px-5 py-4 text-left text-sm font-semibold transition-all md:text-base ${
                    isActive
                      ? "border-indigo-500"
                      : "border-indigo-200 hover:-translate-y-0.5 hover:border-indigo-300"
                  }`}
                >
                  <span className="pr-4 text-indigo-900">{tab.title}</span>
                  <span
                    className={`h-4 w-4 rounded-full border ${
                      isActive ? "border-indigo-500" : "border-indigo-200"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div className="feature__workflow-panel flex flex-col gap-6 rounded-3xl border border-indigo-100 p-6 md:p-8">
            <div className="flex flex-col gap-3">
              <h3 className="feature__workflow-panel-title text-xl font-semibold text-indigo-900 md:text-2xl">
                {workflow.tabs[activeWorkflowIndex].title}
              </h3>
              <p className="feature__workflow-panel-description text-sm leading-relaxed text-indigo-700 md:text-base">
                {workflow.tabs[activeWorkflowIndex].description}
              </p>
            </div>
            <Link
              href={workflow.tabs[activeWorkflowIndex].ctaUrl}
              className="feature__cta feature__cta--link inline-flex items-center text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700 md:text-base"
            >
              {workflow.tabs[activeWorkflowIndex].cta}
            </Link>
            <div className="feature__workflow-panel-visual overflow-hidden rounded-2xl border border-indigo-100">
              <Image
                src={workflow.panelImage}
                alt="Workflow visual"
                width={640}
                height={360}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="feature__seo grid gap-8 rounded-3xl border border-orange-100/40 p-8 md:grid-cols-2 md:gap-10 md:p-10">
        <div className="feature__seo-media overflow-hidden rounded-3xl border border-orange-100">
          <Image
            src={activeSeo.image ?? seo.defaultImage}
            alt="Built-in SEO illustration"
            width={640}
            height={420}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="feature__seo-content flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="feature__seo-title font-nacelle text-2xl font-semibold text-orange-700 md:text-3xl">
              {seo.title}
            </h2>
          </div>

          <div className="feature__seo-accordion flex flex-col gap-3">
            {seo.accordions.map((item, index) => {
              const isActive = index === activeSeoIndex;
              return (
                <button
                  key={item.title}
                  type="button"
                  aria-expanded={isActive}
                  onClick={() => setActiveSeoIndex(index)}
                  className={`feature__seo-accordion-item flex items-center justify-between rounded-2xl border px-5 py-4 text-left text-sm font-semibold transition-all md:text-base ${
                    isActive
                      ? "border-orange-600"
                      : "border-orange-200 hover:-translate-y-0.5 hover:border-orange-300"
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

          <p className="feature__seo-detail rounded-2xl border border-orange-200 px-5 py-4 text-sm leading-relaxed text-orange-900 md:text-base">
            {activeSeo.description}
          </p>
        </div>
      </section>

      <section className="feature__demo flex flex-col gap-6 rounded-3xl border border-orange-500 p-8 md:gap-10 md:p-12">
        <div className="feature__demo-media overflow-hidden rounded-3xl border border-orange-200">
          <Image
            src={demo.image}
            alt="Live demo preview"
            width={680}
            height={420}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="feature__demo-content flex flex-col gap-4">
          <h2 className="feature__demo-title font-nacelle text-2xl font-semibold md:text-3xl">
            {demo.title}
          </h2>
          <p className="feature__demo-description text-sm leading-relaxed text-slate-600 md:text-base">
            {demo.description}
          </p>
          <Link
            className="feature__cta feature__cta--secondary inline-flex w-fit items-center justify-center rounded-xl border border-orange-500 px-6 py-3 text-sm font-semibold text-orange-600 transition-all hover:-translate-y-0.5 hover:text-orange-500 sm:px-8 sm:py-3.5 sm:text-base"
            href={demo.cta.href}
          >
            {demo.cta.label}
          </Link>
        </div>
      </section>

      <section className="feature__comparison flex flex-col gap-6">
        <h2 className="feature__comparison-title text-center font-nacelle text-2xl font-semibold text-slate-900 md:text-3xl">
          {comparison.title}
        </h2>
        <div className="feature__comparison-table overflow-hidden rounded-3xl border border-slate-200/80">
          <div className="grid grid-cols-1 gap-3 border-b border-slate-100 px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 md:grid-cols-[1.1fr_0.9fr_1fr] md:text-sm">
            <span>Feature</span>
            <span className="md:text-center">HyperBlog</span>
            <span className="md:text-center">Traditional CMS + Plugins</span>
          </div>
          {comparison.rows.map((row) => (
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

      <section className="feature__testimonials flex flex-col gap-8 rounded-3xl border border-slate-100 p-8 md:gap-10 md:p-12">
        <div className="feature__testimonials-header flex flex-col items-center gap-3 text-center">
          <div className="feature__testimonials-badge inline-flex items-center rounded-full border border-orange-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-orange-500">
            {testimonialsContent.badge}
          </div>
          <h2 className="feature__testimonials-title font-nacelle text-2xl font-semibold text-slate-900 md:text-3xl">
            {testimonialsContent.title}
          </h2>
        </div>

        <div className="feature__testimonials-carousel flex flex-col items-center gap-6">
          <div className="feature__testimonials-card flex w-full max-w-xl flex-col items-center gap-5 rounded-3xl border border-slate-100 px-6 py-8 text-center md:px-10 md:py-10">
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
              className="feature__testimonials-control inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-sm font-semibold text-slate-700 transition-transform hover:-translate-y-0.5"
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
                      ? "border-orange-500"
                      : "border-orange-200 hover:border-orange-400"
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
              className="feature__testimonials-control inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-sm font-semibold text-slate-700 transition-transform hover:-translate-y-0.5"
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
            {faq.title}
          </h2>
          <p className="feature__faq-subtitle text-sm leading-relaxed text-slate-600 md:text-base">
            {faq.subtitle}
          </p>
        </div>

        <div className="feature__faq-list flex flex-col gap-4">
          {faq.items.map((item, index) => {
            const isActive = index === activeFaqIndex;
            return (
              <div
                key={item.question}
                className="feature__faq-item rounded-3xl border border-slate-200/80 px-6 py-5"
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

        <div className="feature__faq-cta grid gap-4 rounded-3xl border border-orange-200 px-6 py-6 md:grid-cols-[auto_1fr_auto] md:items-center md:px-8 md:py-8">
          <div className="feature__faq-cta-icon flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500 text-lg font-bold text-orange-600 md:h-16 md:w-16">
            {faq.cta.icon}
          </div>
          <div className="feature__faq-cta-copy flex flex-col gap-1">
            <h3 className="feature__faq-cta-title text-base font-semibold text-slate-900 md:text-lg">
              {faq.cta.title}
            </h3>
            <p className="feature__faq-cta-description text-sm leading-relaxed text-slate-600">
              {faq.cta.description}
            </p>
          </div>
          <Link
            className="feature__cta feature__cta--primary inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-orange-400 sm:px-8 sm:py-3.5 sm:text-base"
            href={faq.cta.href}
          >
            {faq.cta.label}
          </Link>
        </div>
      </section>

      <section className="feature__footer-cta flex justify-center pb-10 pt-4">
        <div className="feature__footer-cta-card flex w-full max-w-3xl flex-col items-center gap-5 rounded-[32px] border border-rose-200/80 px-8 py-10 text-center md:px-12 md:py-12">
          <h2 className="feature__footer-cta-title font-nacelle text-2xl font-semibold text-slate-900 md:text-[28px]">
            {footerCta.title}
          </h2>
          <p className="feature__footer-cta-description text-sm leading-relaxed text-slate-600 md:text-base">
            {footerCta.description}
          </p>
          <div className="feature__footer-cta-actions flex w-full flex-col gap-3 sm:max-w-xl sm:flex-row sm:justify-center">
            <Link
              className="feature__cta feature__cta--primary inline-flex flex-1 items-center justify-center rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-orange-400 sm:px-8 sm:py-3.5 sm:text-base"
              href={footerCta.primaryCta.href}
            >
              {footerCta.primaryCta.label}
            </Link>
            <Link
              className="feature__cta feature__cta--ghost inline-flex flex-1 items-center justify-center rounded-xl border border-orange-300 px-6 py-3 text-sm font-semibold text-orange-600 transition-all hover:-translate-y-0.5 sm:px-8 sm:py-3.5 sm:text-base"
              href={footerCta.secondaryCta.href}
            >
              {footerCta.secondaryCta.label}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
