"use client";

import { ChangeEvent, FormEvent, useMemo, useState } from "react";

const categories = [
  {
    title: "Tile Adhesives",
    description: "Premium adhesives formulated for ceramic, porcelain, and natural stone installations.",
  },
  {
    title: "PU Adhesives",
    description: "Polyurethane-based adhesives for strong bonding with chemical and moisture resistance.",
  },
  {
    title: "Epoxy Systems",
    description: "High-performance epoxy adhesives for structural applications and heavy-duty flooring.",
  },
  {
    title: "Grouts & Plasters",
    description: "Smooth cementitious grouts, stucco systems, and ready-mix plaster solutions.",
  },
  {
    title: "Waterproofing",
    description: "Durable systems to protect walls, plaster, and masonry from moisture damage.",
  },
  {
    title: "Wall Putty",
    description: "Fine finishing putty designed for smooth, paint-ready surfaces.",
  },
];

const products = [
  {
    name: "Nexo Eco",
    category: "Tile Adhesives",
    type: "Type 1, C1T",
    benefit: "Reliable interior adhesive for ceramic tile installations.",
  },
  {
    name: "Nexo Smart",
    category: "Tile Adhesives",
    type: "Type 2, C2T",
    benefit: "Improved bond strength and installation flexibility.",
  },
  {
    name: "Nexo Flex",
    category: "Tile Adhesives",
    type: "Type 3, C2TE",
    benefit: "Flexible formula for movement-prone surfaces.",
  },
  {
    name: "Nexo Flex +",
    category: "Tile Adhesives",
    type: "Type 3, C2TES1",
    benefit: "Slip-resistant adhesive for vertical and heavy-duty tiling.",
  },
  {
    name: "Nexo Ultra",
    category: "Tile Adhesives",
    type: "Type 4, C2TES1",
    benefit: "Premium adhesive built for industrial and commercial settings.",
  },
  {
    name: "Nexo Advance",
    category: "Tile Adhesives",
    type: "Type 4, C2TES2",
    benefit: "Water-resistant adhesive for wet area applications.",
  },
  {
    name: "Nexo Supreme",
    category: "PU Adhesives",
    type: "Type 5, R2T PU Adhesive",
    benefit: "Polyurethane bonding with high durability and chemical resistance.",
  },
  {
    name: "Nexo Grout",
    category: "Grouts & Plasters",
    type: "Cement Grout",
    benefit: "Smooth finish grout for tiled joints and easy maintenance.",
  },
  {
    name: "Nexo Grout + Stucco Grout",
    category: "Grouts & Plasters",
    type: "Dual System",
    benefit: "A complete grout and render solution for polished surfaces.",
  },
  {
    name: "Nexo Pro + Epoxy",
    category: "Epoxy Systems",
    type: "Epoxy Adhesive System",
    benefit: "Strong, chemical-resistant adhesive for demanding installs.",
  },
  {
    name: "BJM Plaster Waterproofing",
    category: "Waterproofing",
    type: "Waterproof Plaster",
    benefit: "Protects plaster and masonry from moisture ingress.",
  },
  {
    name: "Block Joining Mortar",
    category: "Grouts & Plasters",
    type: "Structural Mortar",
    benefit: "Stable mortar for block bonding and masonry work.",
  },
  {
    name: "Nexo Wall Putty",
    category: "Wall Putty",
    type: "Finishing Compound",
    benefit: "Fine finishing putty for smooth, paint-ready walls.",
  },
];

const stats = [
  {
    value: "15+ years",
    label: "industry experience",
  },
  {
    value: "8 countries",
    label: "global reach",
  },
  {
    value: "100+",
    label: "trusted partners",
  },
];

const pillars = [
  {
    title: "Quality Assured",
    description: "Manufacturing and export processes built to international standards.",
  },
  {
    title: "Focused Innovation",
    description: "Products designed to lower installation risk and improve finish performance.",
  },
  {
    title: "Professional Support",
    description: "Technical guidance from product selection through project delivery.",
  },
];

const filterCategories = [
  "All",
  "Tile Adhesives",
  "PU Adhesives",
  "Epoxy Systems",
  "Grouts & Plasters",
  "Waterproofing",
  "Wall Putty",
];

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
            Nexora
          </a>
          <nav className="nav-links">
            <a href="#products">Products</a>
            <a href="#categories">Solutions</a>
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
              <a className="button" href="#products">
                View products
              </a>
              <a className="button secondary" href="#contact">
                Request quote
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
            </div>
          </aside>
        </div>
      </section>

      <section id="categories" className="section section-alt">
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
                <div className="product-extra">{product.category}</div>
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
