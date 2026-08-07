"use client";

import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { applications, categories, filterCategories, pillars, products, stats, testimonials, trustPoints } from "../lib/data";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [contact, setContact] = useState({ name: "", company: "", email: "", details: "" });

  const visibleProducts = useMemo(
    () =>
      selectedCategory === "All"
        ? products
        : products.filter((product) => product.category === selectedCategory),
    [selectedCategory]
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setContact((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent("Nexora Product Inquiry");
    const body = encodeURIComponent(
      `Name: ${contact.name}\nCompany: ${contact.company}\nEmail: ${contact.email}\nProject details: ${contact.details}`
    );
    window.location.href = `mailto:sales@nexora.com?subject=${subject}&body=${body}`;
  };

  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#hero">
            <span className="brand-name">Nexora</span>
            <span className="brand-tagline">Innovation that builds the future</span>
          </a>
          <nav className="nav-links">
            <a href="#products">Products</a>
            <a href="#categories">Solutions</a>
            <a href="/catalog">Catalog</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section id="hero" className="section hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Manufacturer & exporter</span>
            <h1>Construction chemicals crafted for durability, efficiency, and export-ready performance.</h1>
            <p className="subtitle">
              Nexora Global Industries delivers premium tile adhesives, PU systems, epoxy, grout, waterproofing, and finishing products served across 8 countries.
            </p>
            <div className="hero-actions">
              <a className="button" href="#contact">
                Request technical sheet
              </a>
              <a className="button secondary" href="#products">
                Explore products
              </a>
            </div>
            <div className="hero-stats">
              {stats.map((stat) => (
                <div key={stat.value} className="stat-pill">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="hero-panel">
            <div className="panel-card">
              <p className="badge">Trusted by construction professionals</p>
              <h2>Premium performance across tile, masonry, and finishing workflows.</h2>
              <p>
                Our products are built to reduce site risk, speed installation, and provide strong, long-lasting results in both residential and commercial projects.
              </p>
              <div className="feature-list">
                <div>• Export-ready manufacturing</div>
                <div>• Trusted certification and quality control</div>
                <div>• Technical support for every project</div>
              </div>
              <div className="panel-actions">
                <a className="button" href="/catalog">
                  View catalog
                </a>
                <a className="button secondary" href="/nexora-catalog.txt" download>
                  Download catalog
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container trust-grid">
          <div className="trust-copy">
            <span className="badge">Why Nexora</span>
            <h2>Trusted by contractors, distributors, and project teams.</h2>
            <p className="section-subtitle">
              We combine product reliability, export-ready support, and practical technical guidance to help buyers move faster with confidence.
            </p>
            <div className="trust-points">
              {trustPoints.map((point) => (
                <div key={point.title} className="trust-point">
                  <strong>{point.title}</strong>
                  <span>{point.description}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="trust-cta">
            <h3>Need the right system for your project?</h3>
            <p>Share your application and we’ll recommend the most suitable Nexora solution.</p>
            <a className="button" href="#contact">
              Talk to sales
            </a>
          </div>
        </div>
      </section>

      <section id="categories" className="section">
        <div className="container">
          <div className="section-heading">
            <span className="badge">Solutions</span>
            <h2>Every product family for modern construction needs.</h2>
            <p className="section-subtitle">
              From adhesives and grouts to waterproofing and finishes, Nexora provides reliable chemistry that works on every job.
            </p>
          </div>

          <div className="grid category-grid">
            {categories.map((item) => (
              <article key={item.title} className="card category-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="applications" className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <span className="badge">Applications</span>
            <h2>Built for residential, commercial, and industrial workflows.</h2>
            <p className="section-subtitle">
              Whether your team is fitting out a hotel, supporting a distributor program, or delivering a high-spec residential project, Nexora has a fit-for-purpose system.
            </p>
          </div>

          <div className="grid application-grid">
            {applications.map((item) => (
              <article key={item.title} className="card application-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="section">
        <div className="container">
          <div className="section-heading">
            <span className="badge">Product range</span>
            <h2>Browse Nexora products by category.</h2>
            <p className="section-subtitle">
              Filter the portfolio to find adhesives, grouts, epoxy systems, waterproofing, and finishing compounds.
            </p>
          </div>

          <div className="filter-bar">
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

          <div className="grid product-grid">
            {visibleProducts.map((product) => (
              <article key={product.name} className="card product-card">
                <div className="product-badge">{product.type}</div>
                <h3>{product.name}</h3>
                <p>{product.benefit}</p>
                <div className="product-meta">
                  <span>{product.category}</span>
                  <span>{product.specs[0]}</span>
                </div>
              </article>
            ))}
          </div>

          {visibleProducts.length === 0 && <p className="no-results">No products match this category yet.</p>}
        </div>
      </section>

      <section id="about" className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <span className="badge">About Nexora</span>
            <h2>Built on manufacturing excellence and export-ready quality.</h2>
            <p className="section-subtitle">
              We partner with contractors and distributors across 8 countries to deliver premium construction materials.
            </p>
          </div>

          <div className="grid grid-3 pillar-grid">
            {pillars.map((item) => (
              <article key={item.title} className="card pillar-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt testimonials-section">
        <div className="container">
          <div className="section-heading">
            <span className="badge">Customer stories</span>
            <h2>Construction teams trust Nexora on every project.</h2>
            <p className="section-subtitle">
              Real feedback from contractors, procurement teams, and international partners.
            </p>
          </div>

          <div className="grid testimonials-grid">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="card testimonial-card">
                <p className="testimonial-quote">“{testimonial.quote}”</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section section-contact">
        <div className="container contact-grid">
          <div className="contact-copy">
            <span className="badge">Contact</span>
            <h2>Ready to start your next project?</h2>
            <p className="section-subtitle">
              Send your requirements and our team will respond with product recommendations and support options.
            </p>
            <div className="contact-details">
              <div>
                <h3>Email</h3>
                <p>sales@nexora.com</p>
              </div>
              <div>
                <h3>Service</h3>
                <p>Technical support, sourcing, and international distribution</p>
              </div>
            </div>
          </div>

          <div className="contact-card">
            <h3>Request a quote</h3>
            <p>Provide your details and we’ll connect you with the ideal Nexora solution.</p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label className="form-field">
                <span>Name</span>
                <input className="form-control" type="text" name="name" value={contact.name} onChange={handleChange} required />
              </label>
              <label className="form-field">
                <span>Company</span>
                <input className="form-control" type="text" name="company" value={contact.company} onChange={handleChange} />
              </label>
              <label className="form-field">
                <span>Email</span>
                <input className="form-control" type="email" name="email" value={contact.email} onChange={handleChange} required />
              </label>
              <label className="form-field">
                <span>Project details</span>
                <textarea className="form-control" name="details" value={contact.details} onChange={handleChange} rows={4} required />
              </label>
              <button type="submit" className="button">
                Send inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <p>Nexora Global Industries Pvt Ltd — Manufacturer and exporter of premium tile adhesives, epoxies, grouts, plaster, and waterproofing.</p>
          <p>Built for professionals, ready for Vercel deployment.</p>
        </div>
      </footer>
    </main>
  );
}
