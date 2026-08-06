"use client";

import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { categories, products } from "../../lib/data";

const comparisonNames = [
  "Nexo Eco",
  "Nexo Flex +",
  "Nexo Supreme",
  "BJM Plaster Waterproofing",
];

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const catalogCategories = useMemo(
    () => ["All", ...categories.map((category) => category.title)],
    []
  );

  const filteredProducts = useMemo(
    () =>
      products.filter((product) => {
        const matchesCategory =
          selectedCategory === "All" || product.category === selectedCategory;
        const search = searchQuery.trim().toLowerCase();
        const matchesSearch =
          !search ||
          product.name.toLowerCase().includes(search) ||
          product.benefit.toLowerCase().includes(search) ||
          product.category.toLowerCase().includes(search);
        return matchesCategory && matchesSearch;
      }),
    [selectedCategory, searchQuery]
  );
  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  const comparisonItems = products.filter((product) => comparisonNames.includes(product.name));

  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="catalog-hero card">
            <div className="catalog-hero-copy">
              <span className="badge">Catalog</span>
              <h2>Explore the full Nexora product catalog.</h2>
              <p className="section-subtitle">
                Discover our adhesive, epoxy, waterproofing, grout, and wall-finishing systems in one export-ready brochure experience.
              </p>
              <div className="panel-actions">
                <a className="button" href="/nexora-catalog.txt" download>
                  Download full catalog
                </a>
                <button type="button" className="button secondary" onClick={handlePrint}>
                  Print brochure
                </button>
                <a className="button secondary" href="/">
                  Back to home
                </a>
              </div>
            </div>
            <div className="catalog-highlight">
              <h3>Why Nexora</h3>
              <ul className="catalog-bullet-list">
                <li>Premium chemistry for demanding construction sites</li>
                <li>Technical support for specification and sourcing</li>
                <li>Export-ready product packaging and reliability</li>
              </ul>
            </div>
          </div>

          <div className="section-heading" style={{ marginTop: "2rem" }}>
            <h3>Product families</h3>
            <p className="section-subtitle">
              Each category is designed for a specific installation challenge, from tile bonding to waterproofing and finishing.
            </p>
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
            <h3>Product catalog</h3>
            <p className="section-subtitle">
              A curated selection of our top-performing adhesives, grout, waterproofing, and finishing products with key application details.
            </p>
          </div>

          <div className="catalog-filters">
            <div className="filter-group">
              <label htmlFor="category-select">Category</label>
              <select
                id="category-select"
                value={selectedCategory}
                onChange={(event: ChangeEvent<HTMLSelectElement>) => setSelectedCategory(event.target.value)}
              >
                {catalogCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="search-input">Search</label>
              <input
                id="search-input"
                type="search"
                value={searchQuery}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchQuery(event.target.value)}
                placeholder="Search by product name, benefit, or category"
              />
            </div>
          </div>

          <div className="table-wrapper">
            <table className="catalog-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Type</th>
                  <th>Benefit</th>
                  <th>Specs</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.name}>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.type}</td>
                    <td>{product.benefit}</td>
                    <td>{product.specs.join(" • ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="section-heading" style={{ marginTop: "2rem" }}>
            <h3>Product specifications</h3>
            <p className="section-subtitle">
              A larger view of our catalog with detailed cards for every product.
            </p>
          </div>

          <div className="grid expanded-product-grid">
            {products.map((product) => (
              <article key={product.name} className="card product-card product-spec-card">
                <div className="product-card-header">
                  <div className="product-badge">{product.type}</div>
                  <span className="product-category">{product.category}</span>
                </div>
                <h3>{product.name}</h3>
                <p>{product.benefit}</p>
                <ul className="product-specs">
                  {product.specs.map((spec) => (
                    <li key={spec}>{spec}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="section-heading" style={{ marginTop: "2rem" }}>
            <h3>Top product comparison</h3>
            <p className="section-subtitle">
              Compare Nexora’s flagship systems side-by-side to choose the right solution for your next project.
            </p>
          </div>

          <div className="grid comparison-grid">
            {comparisonItems.map((product) => (
              <article key={product.name} className="card comparison-card">
                <div className="comparison-card-header">
                  <div>
                    <span className="product-badge">{product.type}</span>
                    <h4>{product.name}</h4>
                    <p className="product-category">{product.category}</p>
                  </div>
                </div>
                <div className="comparison-details">
                  <p>{product.benefit}</p>
                  <ul className="product-specs comparison-specs">
                    {product.specs.map((spec) => (
                      <li key={spec}>{spec}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
