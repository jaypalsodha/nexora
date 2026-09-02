"use client";

import { useCallback, useMemo, useState } from "react";
import { categories, products } from "../../lib/data";
import Link from "next/link";

const comparisonNames = ["Nexo Eco", "Nexo Flex +", "Nexo Supreme", "BJM Plaster Waterproofing"];

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const catalogCategories = useMemo(
    () => ["All", ...categories.map((c) => c.title)],
    []
  );

  const filteredProducts = useMemo(() => {
    const search = searchQuery.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      if (!search) return matchesCategory;
      return (
        matchesCategory &&
        (product.name.toLowerCase().includes(search) ||
          product.benefit.toLowerCase().includes(search) ||
          product.category.toLowerCase().includes(search))
      );
    });
  }, [selectedCategory, searchQuery]);

  const handlePrint = useCallback(() => window.print(), []);

  const comparisonItems = products.filter((p) => comparisonNames.includes(p.name));

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-nx-600/5 via-white to-nx-400/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] rounded-full bg-nx-600/5 blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center animate-fadeInUp">
            <span className="badge mx-auto">Catalog</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink mt-4 mb-6 leading-tight">
              Explore the full <span className="gradient-text">Nexora</span> product catalog.
            </h1>
            <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Discover our adhesive, epoxy, waterproofing, grout, and wall-finishing systems in one export-ready brochure experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/nexora-catalog.txt" download className="btn-primary">
                Download full catalog
              </a>
              <button type="button" className="btn-secondary" onClick={handlePrint}>
                Print brochure
              </button>
              <Link href="/" className="btn-secondary">
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product families */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-ink mb-4">Product families</h2>
            <p className="text-muted text-lg">Each category is designed for a specific installation challenge, from tile bonding to waterproofing and finishing.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <button
                key={cat.title}
                onClick={() => setSelectedCategory(cat.title)}
                className={`group p-6 bg-white/80 backdrop-blur-sm border rounded-3xl text-left card-lift transition-all duration-300 ${
                  selectedCategory === cat.title
                    ? "border-nx-600/30 shadow-md shadow-nx-600/5"
                    : "border-black/5"
                }`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <h3 className="text-xl font-bold text-ink group-hover:text-nx-600 transition-colors">{cat.title}</h3>
                <p className="text-muted mt-2">{cat.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Table */}
      <section className="section-alt section-deco">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-ink mb-4">Product catalog</h2>
            <p className="text-muted text-lg">A curated selection of our top-performing products with key application details.</p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl mx-auto">
            <div className="flex-1">
              <label htmlFor="category-select" className="sr-only">Category</label>
              <select
                id="category-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-5 py-3.5 rounded-xl border border-black/10 bg-white text-ink font-semibold focus:outline-none focus:border-nx-600 focus:ring-2 focus:ring-nx-600/20 transition-all appearance-none cursor-pointer"
              >
                {catalogCategories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="flex-1 relative">
              <label htmlFor="search-input" className="sr-only">Search</label>
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                id="search-input"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-12 pr-5 py-3.5 rounded-xl border border-black/10 bg-white text-ink placeholder-muted font-medium focus:outline-none focus:border-nx-600 focus:ring-2 focus:ring-nx-600/20 transition-all"
              />
            </div>
          </div>

          {/* Results count */}
          <p className="text-center text-muted mb-8 text-sm font-medium">
            Showing <span className="text-ink font-bold">{filteredProducts.length}</span> of {products.length} products
          </p>

          {/* Table */}
          <div className="overflow-x-auto rounded-2xl border border-black/5 shadow-soft">
            <table className="catalog-table w-full">
              <thead>
                <tr className="bg-cream-50">
                  <th className="text-left">Product</th>
                  <th className="text-left">Category</th>
                  <th className="text-left">Type</th>
                  <th className="text-left">Benefit</th>
                  <th className="text-left">Specs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {filteredProducts.map((product) => (
                  <tr key={product.name} className="hover:bg-nx-50/50 transition-colors">
                    <td className="font-bold text-ink">{product.name}</td>
                    <td>
                      <span className="text-sm bg-nx-600/10 text-nx-700 px-2.5 py-0.5 rounded-full font-semibold">{product.category}</span>
                    </td>
                    <td className="text-muted">{product.type}</td>
                    <td className="text-muted max-w-xs">{product.benefit}</td>
                    <td className="text-muted text-sm">{product.specs.join(" • ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted font-semibold text-lg">No products match your search.</p>
              <button onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }} className="mt-4 text-nx-600 font-bold hover:underline">Clear filters</button>
            </div>
          )}
        </div>
      </section>

      {/* Spec cards */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-ink mb-4">Product specifications</h2>
            <p className="text-muted text-lg">A detailed view of every product with key application details.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <article
                key={product.name}
                className="bg-white/80 backdrop-blur-sm border border-black/5 rounded-3xl p-7 card-lift animate-fadeInUp"
                style={{ animationDelay: `${i * 0.03}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="product-badge">{product.type}</span>
                  <span className="text-xs font-bold text-nx-600 bg-nx-600/10 px-3 py-1 rounded-full">{product.category}</span>
                </div>
                <h3 className="text-xl font-bold text-ink mb-2">{product.name}</h3>
                <p className="text-muted text-sm leading-relaxed mb-5">{product.benefit}</p>
                <ul className="space-y-2.5">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-2.5 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-nx-600 mt-2 flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section-alt section-deco">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-ink mb-4">Top product comparison</h2>
            <p className="text-muted text-lg">Compare Nexora's flagship systems side-by-side to choose the right solution.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {comparisonItems.map((product) => (
              <article
                key={product.name}
                className="bg-white/80 backdrop-blur-sm border border-black/5 rounded-3xl p-7 card-lift"
              >
                <div className="flex items-start gap-4 mb-5">
                  <span className="product-badge">{product.type}</span>
                  <div>
                    <h3 className="text-xl font-bold text-ink">{product.name}</h3>
                    <span className="text-sm text-muted">{product.category}</span>
                  </div>
                </div>
                <p className="text-muted mb-5">{product.benefit}</p>
                <ul className="space-y-3">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-3 text-sm">
                      <span className="w-2 h-2 rounded-full bg-nx-600 mt-2 flex-shrink-0" />
                      <span className="text-muted">{spec}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
