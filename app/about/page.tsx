"use client";
import Link from "next/link";
import { useToast } from "../../components/ToastContext";

export default function AboutPage() {
  const { showToast } = useToast();

  return (
    <main>
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-nx-600/5 via-white to-nx-400/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] rounded-full bg-nx-600/5 blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto animate-fadeInUp">
            <span className="badge mx-auto">About Nexora</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink mt-4 mb-6 leading-tight">
              Built on manufacturing excellence and{" "}
              <span className="gradient-text">export-ready quality.</span>
            </h1>
            <p className="text-muted text-lg md:text-xl leading-relaxed">
              With over 15 years of industry experience, Nexora Global Industries has established
              itself as a trusted manufacturer and exporter of construction chemicals, serving
              contractors, distributors, and project teams across 8 countries.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-fadeInLeft">
              <h2 className="text-3xl font-extrabold tracking-tight text-ink">Our story</h2>
              <p className="text-muted text-lg leading-relaxed">
                Nexora Global Industries Pvt Ltd began with a simple vision: to deliver
                high-performance construction chemicals that make every project stronger,
                faster, and more reliable. From our manufacturing facility in Ahmedabad,
                Gujarat, we have grown to serve clients across 8 countries with a
                commitment to quality and innovation.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                Our product portfolio spans six major categories — tile adhesives, PU adhesives,
                epoxy systems, grouts & plasters, waterproofing, and wall putty — each formulated
                to meet the demands of modern construction, from residential homes to large-scale
                commercial and industrial projects.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                {[
                  { value: "15+", label: "Years experience" },
                  { value: "8", label: "Countries served" },
                  { value: "100+", label: "Trusted partners" },
                  { value: "6", label: "Product families" },
                ].map((stat) => (
                  <div key={stat.label} className="p-6 bg-white/80 border border-black/5 rounded-2xl text-center">
                    <div className="text-3xl font-extrabold text-nx-600">{stat.value}</div>
                    <div className="text-sm font-medium text-muted mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "🏭",
                "✈️",
                "🧪",
                "🌍",
              ].map((emoji, i) => (
                <div
                  key={emoji}
                  className="aspect-square rounded-3xl bg-gradient-to-br from-nx-600/10 to-nx-400/5 flex items-center justify-center text-7xl animate-float"
                  style={{ animationDelay: `-${i * 1.5}s` }}
                >
                  {emoji}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-ink mb-4">Our mission & values</h2>
            <p className="text-muted text-lg">What drives everything we do at Nexora.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🎯",
                title: "Quality Assured",
                desc: "Manufacturing and export processes built to international standards, ensuring every product meets the highest benchmarks.",
                color: "from-nx-600/10 to-nx-400/5",
              },
              {
                icon: "💡",
                title: "Focused Innovation",
                desc: "Products designed to lower installation risk and improve finish performance through continuous research and development.",
                color: "from-nx-600/10 to-nx-400/5",
              },
              {
                icon: "🤝",
                title: "Professional Support",
                desc: "Technical guidance from product selection through project delivery, ensuring you have the right solution at every step.",
                color: "from-nx-600/10 to-nx-400/5",
              },
            ].map((pillar, i) => (
              <article
                key={pillar.title}
                className="p-8 bg-white/80 border border-black/5 rounded-3xl card-lift animate-fadeInUp text-center"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mx-auto mb-5 text-3xl group-hover:scale-110 transition-transform`}>
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">{pillar.title}</h3>
                <p className="text-muted leading-relaxed">{pillar.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Quality */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeInUp">
            <span className="badge">Quality & Certification</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-ink mt-4 mb-4">
              Built to international standards.
            </h2>
            <p className="text-muted text-lg">
              Our manufacturing processes and quality control systems ensure every product meets the demands of global markets.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "ISO Certified", desc: "Quality management systems verified", icon: "🏅" },
              { title: "Export Ready", desc: "Products packaged for international supply chains", icon: "📦" },
              { title: "Batch Testing", desc: "Every batch undergoes rigorous quality checks", icon: "🧪" },
              { title: "Technical Support", desc: "On-site guidance for every project", icon: "🛠️" },
            ].map((item, i) => (
              <article
                key={item.title}
                className="p-6 bg-white/80 border border-black/5 rounded-2xl card-lift animate-fadeInUp text-center"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-ink mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="rounded-3xl bg-gradient-to-br from-nx-600 to-nx-700 p-8 md:p-14 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)" }} />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Let's work together</h2>
              <p className="text-nx-100 text-lg mb-8 max-w-xl mx-auto">
                Ready to start your next project? Reach out to our team today and discover why
                contractors and distributors worldwide trust Nexora.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-nx-700 font-bold hover:bg-cream-50 hover:shadow-lg transition-all active:scale-95">
                Get in touch →
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-ink text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center text-white/40 text-sm">
          <p>Marketed & Manufactured By: Nexora Global Industries Pvt Ltd</p>
        </div>
      </footer>
    </main>
  );
}
