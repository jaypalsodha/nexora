const products = [
  { name: "Nexo Eco", type: "Type 1, C1T" },
  { name: "Nexo Smart", type: "Type 2, C2T" },
  { name: "Nexo Flex", type: "Type 3, C2TE" },
  { name: "Nexo Flex +", type: "Type 3, C2TES1" },
  { name: "Nexo Ultra", type: "Type 4, C2TES1" },
  { name: "Nexo Advance", type: "Type 4, C2TES2" },
  { name: "Nexo Supreme", type: "Type 5, R2T PU Adhesive" },
  { name: "Nexo Grout", type: "Premium Tile Grout" },
  { name: "Nexo Grout + Stucco Grout", type: "Advanced Grout System" },
  { name: "Nexo Pro + Epoxy", type: "Epoxy Adhesive System" },
  { name: "BJM Plaster Waterproofing", type: "Waterproof Plaster Treatment" },
  { name: "Block Joining Mortar", type: "Structural Masonry Adhesive" },
  { name: "Nexo Wall Putty", type: "Surface Finishing Compound" },
];

const highlights = [
  "15 years of trusted adhesive and construction chemistry expertise",
  "Growing global presence across 8 countries",
  "High-performance tile adhesives, epoxies, grouts, and waterproofing",
  "Manufacturing and exporting premium construction solutions",
];

export default function HomePage() {
  return (
    <main>
      <section className="section hero">
        <div className="container hero-grid">
          <div>
            <span className="badge">Nexora Global Industries</span>
            <h1 className="section-title">Premium adhesives, grout, epoxy, and waterproofing solutions.</h1>
            <p className="subtitle">
              Manufacturer and exporter with over 15 years of experience delivering proven tile adhesives, cement grouts, polyurethane systems, and construction chemicals worldwide.
            </p>
            <div style={{ marginTop: "2rem" }}>
              <button className="button" type="button">View Product Range</button>
            </div>
          </div>

          <div className="spotlight">
            <div style={{ marginBottom: "1rem" }}>
              <p className="badge">8 countries and growing</p>
            </div>
            <h2 style={{ margin: 0, fontSize: "1.9rem" }}>Trusted performance for tile installers and construction partners.</h2>
            <p style={{ marginTop: "1rem", color: "#475569" }}>
              We craft specialty adhesives and cement-based products that simplify installation, protect surfaces, and improve long-lasting finish quality.
            </p>
            <div className="features" style={{ marginTop: "1.75rem" }}>
              {highlights.map((item) => (
                <div key={item} className="feature-card">
                  <p style={{ margin: 0, fontWeight: 600 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
            <div>
              <p className="badge">Product portfolio</p>
              <h2 className="section-title">Complete range for tile, plaster, and masonry applications.</h2>
            </div>
          </div>

          <div className="grid grid-3" style={{ marginTop: "2rem" }}>
            {products.map((product) => (
              <article key={product.name} className="card">
                <h3 style={{ marginTop: 0 }}>{product.name}</h3>
                <p style={{ color: "#475569", marginBottom: "1.5rem" }}>{product.type}</p>
                <ul className="list">
                  <li className="list-item">
                    <strong>•</strong>
                    <span>Reliable strength and adhesion</span>
                  </li>
                  <li className="list-item">
                    <strong>•</strong>
                    <span>Engineered for fast, clean installation</span>
                  </li>
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "2rem", paddingBottom: "3rem" }}>
        <div className="container">
          <div className="card card-strong">
            <h2 style={{ marginTop: 0 }}>Build with confidence.</h2>
            <p style={{ margin: "1rem 0 0", lineHeight: 1.8 }}>
              Nexora brings more than a decade of product development for premium tile adhesives, cementitious systems, and surface finishes. Our product line is built for modern construction standards and international export quality.
            </p>
            <div style={{ marginTop: "1.75rem", display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <span className="badge">Reliable supply chain</span>
              <span className="badge">Global export quality</span>
              <span className="badge">Technical support</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>Manufacturer & Exporter of Premium Tiles Adhesive, PU Adhesive, Epoxy, Cement Grout, Ready Mix Plaster.</p>
          <p>Designed for deployment on Vercel and ready for GitHub repository setup.</p>
        </div>
      </footer>
    </main>
  );
}
