"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { applications, categories, filterCategories, pillars, products, stats, testimonials, trustPoints } from "../lib/data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useToast } from "../components/ToastContext";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [contact, setContact] = useState({ name: "", company: "", email: "", details: "" });
  const { showToast } = useToast();

  const visibleProducts = useMemo(
    () =>
      selectedCategory === "All"
        ? products
        : products.filter((product) => product.category === selectedCategory),
    [selectedCategory]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContact((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent("Nexora Product Inquiry");
    const body = encodeURIComponent(
      `Name: ${contact.name}\nCompany: ${contact.company}\nEmail: ${contact.email}\nProject details: ${contact.details}`
    );
    window.location.href = `mailto:sales@nexoraindia.org?subject=${subject}&body=${body}`;
    showToast("Inquiry sent! We'll get back to you soon.", "success");
  };

  return (
    <main>
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background decorations */}
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="hero-glow-1 top-[-6rem] right-[-8rem]" />
        <div className="hero-glow-2 bottom-[-4rem] left-[-6rem]" />

        {/* Floating orbs */}
        <div className="absolute top-1/4 right-[10%] w-20 h-20 rounded-full bg-nx-600/10 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-[5%] w-32 h-32 rounded-full bg-nx-400/8 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div className="lg:col-span-7 space-y-8 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nx-600/10 border border-nx-600/20">
                <span className="w-2 h-2 rounded-full bg-nx-600 animate-pulse" />
                <span className="text-sm font-bold text-nx-700 uppercase tracking-wider">
                  Manufacturer & Exporter
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-ink">
                Construction chemicals{" "}
                <span className="gradient-text">crafted for durability</span>{" "}
                and scale.
              </h1>

              <p className="text-lg md:text-xl text-muted max-w-xl leading-relaxed">
                Nexora Global Industries delivers premium tile adhesives, PU systems,
                epoxy, grout, waterproofing, and finishing products across 8
                countries — built for project efficiency and export-ready performance.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="btn-primary text-base">
                  Request a quote
                </a>
                <Link href="#products" className="btn-secondary text-base">
                  Explore products
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 pt-4">
                {stats.map((stat) => (
                  <div key={stat.value} className="stat-animate">
                    <div className="text-3xl font-extrabold text-ink tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-muted uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Panel */}
            <div className="lg:col-span-5 animate-fadeInUp" style={{ animationDelay: "0.15s" }}>
              <div className="relative">
                {/* Glow behind card */}
                <div className="absolute -inset-4 bg-gradient-to-br from-nx-600/10 to-nx-400/5 rounded-5xl blur-2xl" />

                <div className="relative bg-white/90 backdrop-blur-xl border border-white/50 rounded-3xl p-8 shadow-[0_36px_120px_rgba(15,_23,_42,_0.10)] card-lift">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-nx-600/10 mb-5">
                    <span className="text-xs font-bold text-nx-700 uppercase tracking-wider">
                      Trusted by professionals
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-ink mb-3">
                    Premium performance across tile, masonry, and finishing workflows.
                  </h2>

                  <p className="text-muted leading-relaxed mb-6">
                    Our products are built to reduce site risk, speed installation,
                    and provide strong, long-lasting results in both residential and
                    commercial projects.
                  </p>

                  <div className="space-y-4 mb-8">
                    {[
                      { icon: "🚢", title: "Export-ready manufacturing", desc: "Consistent quality for international supply chains" },
                      { icon: "✅", title: "Trusted certification", desc: "Quality control at every stage of production" },
                      { icon: "🛠️", title: "Technical support", desc: "Expert guidance from product selection to site" },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-3">
                        <span className="text-lg flex-shrink-0 mt-0.5">{item.icon}</span>
                        <div>
                          <div className="font-bold text-ink text-sm">{item.title}</div>
                          <div className="text-muted text-sm">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link href="/catalog" className="btn-primary text-sm">
                      View catalog
                    </Link>
                    <a href="/nexora-catalog.txt" download className="btn-secondary text-sm">
                      Download catalog
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted animate-pulseSlow">
          <span className="text-xs font-semibold uppercase tracking-widest">Scroll</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ═══ WHY NEXORA ═══ */}
      <section className="section section-deco">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Left copy */}
            <div className="lg:col-span-2 space-y-6 animate-fadeInLeft">
              <span className="badge">Why Nexora</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-ink leading-tight">
                Trusted by contractors, distributors, and project teams.
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                We combine product reliability, export-ready support, and practical
                technical guidance to help buyers move faster with confidence.
              </p>
              <a href="#contact" className="btn-primary inline-flex">
                Talk to sales
              </a>
            </div>

            {/* Trust points */}
            <div className="lg:col-span-3 space-y-4">
              {trustPoints.map((point, i) => (
                <div
                  key={point.title}
                  className="group p-6 bg-white/80 backdrop-blur-sm border border-black/5 rounded-2xl hover:border-nx-600/20 hover:shadow-md transition-all duration-300 animate-fadeInUp"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-nx-600/10 to-nx-400/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="text-xl">
                        {[
                          "🏭",
                          "⚡",
                          "🤝",
                        ][i]}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-ink mb-1">{point.title}</h3>
                      <p className="text-muted leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA box */}
          <div className="mt-12 rounded-3xl bg-gradient-to-br from-nx-600 to-nx-700 p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)" }} />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold mb-2">Need the right system for your project?</h3>
                <p className="text-nx-100 text-lg">Share your application and we'll recommend the most suitable Nexora solution.</p>
              </div>
              <div className="flex justify-end">
                <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-nx-700 font-bold hover:bg-cream-50 hover:shadow-lg transition-all active:scale-95">
                  Contact us →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SOLUTIONS (CATEGORIES) ═══ */}
      <section id="categories" className="section-alt section-deco">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeInUp">
            <span className="badge">Solutions</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-ink mt-4 mb-4">
              Every product family for modern construction needs.
            </h2>
            <p className="text-muted text-lg">
              From adhesives and grouts to waterproofing and finishes, Nexora provides reliable chemistry that works on every job.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((item, i) => (
              <article
                key={item.title}
                className="group p-8 bg-white/80 backdrop-blur-sm border border-black/5 rounded-3xl card-lift animate-fadeInUp"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-nx-600/10 to-nx-400/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-nx-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-ink mb-2">{item.title}</h3>
                <p className="text-muted leading-relaxed">{item.description}</p>
                <div className="mt-6">
                  <span className="inline-flex items-center gap-1 text-nx-600 font-bold text-sm group-hover:gap-2 transition-all">
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ APPLICATIONS ═══ */}
      <section id="applications" className="section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeInUp">
            <span className="badge">Applications</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-ink mt-4 mb-4">
              Built for residential, commercial, and industrial workflows.
            </h2>
            <p className="text-muted text-lg">
              Whether your team is fitting out a hotel, supporting a distributor program, or delivering a high-spec residential project, Nexora has a fit-for-purpose system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((item, i) => (
              <div
                key={item.title}
                className="group p-6 bg-white/80 backdrop-blur-sm border border-black/5 rounded-3xl card-lift animate-fadeInUp text-center"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {[
                    "🏠",
                    "🏨",
                    "🏭",
                    "🌍",
                  ][i]}
                </div>
                <h3 className="text-lg font-bold text-ink mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRODUCTS ═══ */}
      <section id="products" className="section-alt section-deco">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-fadeInUp">
            <span className="badge">Product range</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-ink mt-4 mb-4">
              Browse Nexora products by category.
            </h2>
            <p className="text-muted text-lg">
              Filter the portfolio to find adhesives, grouts, epoxy systems, waterproofing, and finishing compounds.
            </p>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fadeInUp">
            {filterCategories.map((category) => (
              <button
                key={category}
                className={`filter-pill ${selectedCategory === category ? "active" : ""}`}
                onClick={() => setSelectedCategory(category)}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product grid */}
          {visibleProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleProducts.map((product, i) => (
                <article
                  key={product.name}
                  className="bg-white/80 backdrop-blur-sm border border-black/5 rounded-3xl p-7 card-lift animate-fadeInUp"
                  style={{ animationDelay: `${i * 0.04}s` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="product-badge">{product.type}</span>
                    <span className="text-xs font-bold text-nx-600 bg-nx-600/10 px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-2">{product.name}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-4">{product.benefit}</p>
                  <ul className="space-y-2">
                    {product.specs.map((spec) => (
                      <li key={spec} className="flex items-start gap-2 text-sm text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-nx-600 mt-2 flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted font-semibold py-12">No products match this category yet.</p>
          )}
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section id="about" className="section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeInUp">
            <span className="badge">About Nexora</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-ink mt-4 mb-4">
              Built on manufacturing excellence and export-ready quality.
            </h2>
            <p className="text-muted text-lg">
              We partner with contractors and distributors across 8 countries to deliver premium construction materials.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((item, i) => (
              <article
                key={item.title}
                className="p-8 bg-white/80 backdrop-blur-sm border border-black/5 rounded-3xl card-lift animate-fadeInUp text-center"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-nx-600/10 to-nx-400/5 flex items-center justify-center mx-auto mb-5">
                  <span className="text-2xl font-black text-nx-600">0{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">{item.title}</h3>
                <p className="text-muted leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="section-alt section-deco">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeInUp">
            <span className="badge">Customer stories</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-ink mt-4 mb-4">
              Construction teams trust Nexora on every project.
            </h2>
            <p className="text-muted text-lg">
              Real feedback from contractors, procurement teams, and international partners.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <article
                key={t.name}
                className="p-8 bg-white/80 backdrop-blur-sm border border-black/5 rounded-3xl card-lift animate-fadeInUp flex flex-col"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative">
                  <span className="text-6xl font-serif text-nx-600/15 leading-none">"</span>
                  <p className="text-muted leading-relaxed pt-2">{t.quote}</p>
                </div>
                <div className="mt-auto pt-6 flex items-center gap-3 border-t border-black/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-nx-600/20 to-nx-400/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-nx-700">{t.name[0]}</span>
                  </div>
                  <div>
                    <div className="font-bold text-ink text-sm">{t.name}</div>
                    <div className="text-muted text-xs">{t.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact" className="section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left: Info */}
            <div className="lg:col-span-2 space-y-8 animate-fadeInLeft">
              <span className="badge">Contact</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-ink leading-tight">
                Ready to start your next project?
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                Send your requirements and our team will respond with product recommendations and support options.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-nx-600/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-nx-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-ink mb-1">Emails</h4>
                    <a href="mailto:sales@nexoraindia.org" className="text-muted hover:text-nx-600 transition-colors text-sm block">sales@nexoraindia.org</a>
                    <a href="mailto:info@nexoraindia.org" className="text-muted hover:text-nx-600 transition-colors text-sm block">info@nexoraindia.org</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-nx-600/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-nx-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-ink mb-1">Customer care</h4>
                    <a href="tel:+919274858900" className="text-muted hover:text-nx-600 transition-colors text-sm">+91 92748 58900</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-nx-600/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-nx-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-ink mb-1">Address</h4>
                    <p className="text-muted text-sm leading-relaxed">
                      Shade No 2, Survey No-1525/119, Near Navkar Heights, off. S.P. Ring Road, Ognaj, Ahmedabad - 380060
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3 animate-fadeInRight">
              <div className="bg-white/80 backdrop-blur-sm border border-black/5 rounded-3xl p-8 md:p-10 shadow-soft">
                <h3 className="text-2xl font-extrabold text-ink mb-2">Request a quote</h3>
                <p className="text-muted mb-8">Provide your details and we'll connect you with the ideal Nexora solution.</p>
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-ink mb-2">Name <span className="text-nx-600">*</span></label>
                      <input
                        className="form-input"
                        type="text"
                        name="name"
                        value={contact.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink mb-2">Company</label>
                      <input
                        className="form-input"
                        type="text"
                        name="company"
                        value={contact.company}
                        onChange={handleChange}
                        placeholder="Your company"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-2">Email <span className="text-nx-600">*</span></label>
                    <input
                      className="form-input"
                      type="email"
                      name="email"
                      value={contact.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-2">Project details <span className="text-nx-600">*</span></label>
                    <textarea
                      className="form-input min-h-[120px] resize-y"
                      name="details"
                      value={contact.details}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project..."
                      rows={4}
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full text-base">
                    Send inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
