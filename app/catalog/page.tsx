"use client";

import { useCallback } from "react";
import { categories, products } from "../../lib/data";

export default function CatalogPage() {
  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="badge">Catalog</span>
            <h2>Explore the full Nexora product catalog.</h2>
            <p className="section-subtitle">
              Browse our product families, download the catalog, and see how Nexora supports export-ready construction projects.
            </p>
          </div>

          <div className="panel-actions">
            <a className="button" href="/nexora-catalog.txt" download>
              Download full catalog
            </a>
            <button type="button" className="button secondary" onClick={handlePrint}>
              Print brochure
            </button>
          </div>

          <div className="grid category-grid">
            {categories.map((category) => (
              <article key={category.title} className="card category-card">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </article>
            ))}
          </div>

          <div className="section-heading" style={{ marginTop: "2rem" }}>
            <h3>Featured products</h3>
            <p className="section-subtitle">
              A curated selection of our top-performing adhesives, grout, waterproofing, and finishing products.
            </p>
          </div>

          <div className="grid product-grid">
            {products.map((product) => (
              <article key={product.name} className="card product-card">
                <div className="product-badge">{product.type}</div>
                <h3>{product.name}</h3>
                <p>{product.benefit}</p>
                <div className="product-extra">{product.category}</div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
