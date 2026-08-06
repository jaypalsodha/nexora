const products = [
  {
    name: "Nexo Eco",
    category: "Type 1, C1T",
    description: "A dependable tile adhesive for interior installations with consistent workability.",
  },
  {
    name: "Nexo Smart",
    category: "Type 2, C2T",
    description: "Enhanced adhesive for increased bond strength and improved flexibility.",
  },
  {
    name: "Nexo Flex",
    category: "Type 3, C2TE",
    description: "Flexible polymer-modified adhesive for high-stress tile applications.",
  },
  {
    name: "Nexo Flex +",
    category: "Type 3, C2TES1",
    description: "High-performance adhesive with forgiving slip resistance and superior adhesion.",
  },
  {
    name: "Nexo Ultra",
    category: "Type 4, C2TES1",
    description: "Premium adhesive for heavy-duty industrial and commercial tile work.",
  },
  {
    name: "Nexo Advance",
    category: "Type 4, C2TES2",
    description: "Advanced polymer adhesive for demanding installations and wet areas.",
  },
  {
    name: "Nexo Supreme",
    category: "Type 5, R2T PU Adhesive",
    description: "Polyurethane adhesive for resilient, long-lasting bonding and chemical resistance.",
  },
  {
    name: "Nexo Grout",
    category: "Standard Cement Grout",
    description: "Smooth finish grout formulated for tile joints and easy cleaning.",
  },
  {
    name: "Nexo Grout + Stucco Grout",
    category: "Advanced Grout System",
    description: "Dual-purpose grout and render system for polished, durable surfaces.",
  },
  {
    name: "Nexo Pro + Epoxy",
    category: "Epoxy Adhesive System",
    description: "High-strength epoxy for structural bonding and chemical protection.",
  },
  {
    name: "BJM Plaster Waterproofing",
    category: "Waterproof Plaster",
    description: "Waterproofing mortar designed to protect plaster and masonry surfaces.",
  },
  {
    name: "Block Joining Mortar",
    category: "Structural Mortar",
    description: "Reliable mortar for strong, stable block bonding and masonry joints.",
  },
  {
    name: "Nexo Wall Putty",
    category: "Surface Finishing Compound",
    description: "Fine finishing putty for smooth, paint-ready walls and ceilings.",
  },
];

const highlights = [
  {
    title: "15+ years",
    detail: "Adhesive expertise built on reliable performance.",
  },
  {
    title: "8 countries",
    detail: "Export-ready products supporting a growing international network.",
  },
  {
    title: "Premium quality",
    detail: "Manufactured to meet global construction and export standards.",
  },
  {
    title: "Trusted support",
    detail: "Technical guidance from specification to site delivery.",
  },
];

const pillars = [
  {
    title: "Performance",
    body: "Products engineered for durability, adhesion, and long-term finish quality.",
  },
  {
    title: "Innovation",
    body: "Modern formulas that reduce installation time and improve ease of use.",
  },
  {
    title: "Export-ready",
    body: "Solutions designed for international markets and global logistics.",
  },
];

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#hero">
            Nexora
          </a>
          <nav className="nav-links">
            <a href="#products">Products</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section id="hero" className="section hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Nexora Global Industries</span>
            <h1>Premium adhesives, epoxy, grout, and waterproofing for modern construction.</h1>
            <p className="subtitle">
              Trusted manufacturer and exporter with over 15 years of experience building products for tile, masonry, and surface finishing applications.
            </p>
            <div className="hero-actions">
              <a className="button" href="#products">
                View products
              </a>
              <a className="button secondary" href="#contact">
                Request a quote
              </a>
            </div>
            <div className="stats-grid">
              {highlights.map((item) => (
                <article key={item.title} className="stat-card">
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="hero-panel">
            <div className="panel-card">
              <p className="badge">Global expertise</p>
              <h2>Build stronger installations with Nexora.</h2>
              <p>
                Our portfolio spans high-performance tile adhesives, epoxy systems, cement grouts, waterproofing, and finishing compounds for professional applications.
              </p>
              <div className="feature-list">
                <div>
                  <strong>• Export-ready quality</strong>
                </div>
                <div>
                  <strong>• Certified performance</strong>
                </div>
                <div>
                  <strong>• Site-ready convenience</strong>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="products" className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <span className="badge">Product range</span>
            <h2>Complete systems for tiles, plaster, and masonry.</h2>
            <p className="section-subtitle">
              Choose from our full range of adhesives, grouts, epoxies, waterproofing, and surface finishing solutions.
            </p>
          </div>

          <div className="grid product-grid">
            {products.map((product) => (
              <article key={product.name} className="card product-card">
                <div className="product-badge">{product.category}</div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <ul className="list mini-list">
                  <li>High bond strength</li>
                  <li>Site-ready performance</li>
                  <li>Suitable for export markets</li>
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <div className="section-heading">
            <span className="badge">Why Nexora</span>
            <h2>Trusted performance backed by industry experience.</h2>
            <p className="section-subtitle">
              We combine proven chemistry, manufacturing discipline, and export-ready quality to deliver dependable construction materials.
            </p>
          </div>

          <div className="grid grid-3 pillar-grid">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="card pillar-card">
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section section-contact">
        <div className="container contact-grid">
          <div className="contact-copy">
            <span className="badge">Get in touch</span>
            <h2>Ready to partner on your next construction project?</h2>
            <p className="section-subtitle">
              Contact our team for product details, technical support, or distribution inquiries.
            </p>
            <div className="contact-details">
              <div>
                <h3>Email</h3>
                <p>sales@nexora.com</p>
              </div>
              <div>
                <h3>Location</h3>
                <p>India & international distribution</p>
              </div>
            </div>
          </div>
          <div className="contact-card">
            <h3>Request a quote</h3>
            <p>Share your project details and we’ll connect you with the right product recommendations.</p>
            <a className="button" href="mailto:sales@nexora.com?subject=Quote%20Request%20for%20Nexora%20Products">
              Email sales@nexora.com
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <p>Nexora Global Industries Pvt Ltd — Manufacturer & exporter of premium construction chemicals.</p>
          <p>Ready for Vercel deployment and optimized for modern export markets.</p>
        </div>
      </footer>
    </main>
  );
}
