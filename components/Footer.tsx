import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-white no-print">
      {/* Newsletter / CTA band */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
                Ready to build with{" "}
                <span className="text-nx-400">Nexora</span>?
              </h3>
              <p className="text-white/60 text-lg max-w-lg">
                Get in touch and let our team recommend the perfect construction
                chemical solution for your next project.
              </p>
            </div>
            <div>
              <form
                className="flex flex-col sm:flex-row gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href =
                    "mailto:sales@nexoraindia.org?subject=New Inquiry";
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-nx-400 focus:ring-2 focus:ring-nx-400/20 transition-all"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid md:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-nx-600 to-nx-700 flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-2xl font-extrabold tracking-tight">Nexora</span>
            </div>
            <p className="text-white/50 max-w-sm mb-6 leading-relaxed">
              Nexora Global Industries Pvt Ltd — an Indian manufacturer and exporter
              of construction chemicals based in Ahmedabad, Gujarat, India. With
              15+ years of industry experience, 100+ trusted partners, and a
              presence in 8 countries.
            </p>
            <div className="flex gap-4">
              {[
                { label: "Sales", href: "mailto:sales@nexoraindia.org" },
                { label: "Info", href: "mailto:info@nexoraindia.org" },
                { label: "Phone", href: "tel:+919274858900" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-nx-400 hover:bg-nx-400/10 transition-all"
                  aria-label={c.label}
                >
                  <span className="text-xs font-bold">{c.label[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/30 mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                ["Home", "/"],
                ["Products", "#products"],
                ["Solutions", "#categories"],
                ["Catalog", "/catalog"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/60 hover:text-white hover:underline underline-offset-4 transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/30 mb-4">
              Contact
            </h4>
            <ul className="space-y-4 text-white/50 text-sm leading-relaxed">
              <li>
                <a
                  href="mailto:sales@nexoraindia.org"
                  className="hover:text-white transition-colors break-all"
                >
                  sales@nexoraindia.org
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@nexoraindia.org"
                  className="hover:text-white transition-colors"
                >
                  info@nexoraindia.org
                </a>
              </li>
              <li>+91 92748 58900</li>
              <li className="text-white/30 text-xs leading-relaxed">
                Shade No 2, Survey No-1525/119, Near Navkar Heights, off. S.P. Ring
                Road, Ognaj, Ahmedabad - 380060
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/30 text-sm">
          <p>
            Marketed & Manufactured By: Nexora Global Industries Pvt Ltd
          </p>
          <p>© {new Date().getFullYear()} Nexora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
