"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#categories", label: "Solutions" },
  { href: "/catalog", label: "Catalog" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`no-print fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-black/5"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 lg:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-nx-600 to-nx-700 flex items-center justify-center shadow-md shadow-nx-600/20 group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-ink block leading-none">
                Nexora
              </span>
              <span className="text-[10px] font-bold text-nx-600 tracking-widest uppercase">
                Innovation that builds the future
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="nav-link text-sm font-semibold text-muted hover:text-ink transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="#contact"
              className="btn-primary text-sm !px-6 !py-2.5"
            >
              Get in Touch
            </a>
          </div>

          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-black/5 transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute inset-y-0 right-0 w-72 bg-white shadow-2xl p-6 flex flex-col">
            <button
              className="self-end w-10 h-10 flex items-center justify-center rounded-lg hover:bg-black/5"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="mt-8 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-4 rounded-xl text-base font-semibold text-muted hover:text-ink hover:bg-nx-50 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 btn-primary text-center"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </>
  );
}
