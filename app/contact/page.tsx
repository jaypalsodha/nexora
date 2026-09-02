"use client";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main>
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-nx-600/5 via-white to-nx-400/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] rounded-full bg-nx-600/5 blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto animate-fadeInUp">
            <span className="badge mx-auto">Contact</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink mt-4 mb-6 leading-tight">
              Ready to start your next project?
            </h1>
            <p className="text-muted text-lg md:text-xl leading-relaxed">
              Send your requirements and our team will respond with product recommendations and support options.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left: Details */}
            <div className="lg:col-span-2 space-y-10 animate-fadeInLeft">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-ink mb-6">Get in touch</h2>
                <p className="text-muted text-lg leading-relaxed mb-8">
                  We're here to help you find the perfect Nexora solution for your project.
                </p>
              </div>

              {/* Contact cards */}
              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6 text-nx-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    title: "Email",
                    items: [
                      { label: "Sales", href: "mailto:sales@nexoraindia.org", value: "sales@nexoraindia.org" },
                      { label: "General", href: "mailto:info@nexoraindia.org", value: "info@nexoraindia.org" },
                    ],
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6 text-nx-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    title: "Phone",
                    items: [
                      { label: "Customer care", href: "tel:+919274858900", value: "+91 92748 58900" },
                    ],
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6 text-nx-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    title: "Office",
                    items: [
                      {
                        label: "Ahmedabad",
                        value: "Shade No 2, Survey No-1525/119, Near Navkar Heights, off. S.P. Ring Road, Ognaj, Ahmedabad - 380060",
                        href: null,
                      },
                    ],
                  },
                ].map((section) => (
                  <div key={section.title} className="space-y-3">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-muted">{section.title}</h4>
                    {section.items.map((item) => (
                      <div key={item.label} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-nx-600/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          {section.icon}
                        </div>
                        <div>
                          <div className="font-bold text-ink text-sm">{item.label}</div>
                          {item.href ? (
                            <a href={item.href} className="text-muted hover:text-nx-600 transition-colors text-sm block">
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-muted text-sm leading-relaxed">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3 animate-fadeInRight">
              <div className="bg-white/80 backdrop-blur-sm border border-black/5 rounded-3xl p-8 md:p-10 shadow-soft">
                <h3 className="text-2xl font-extrabold text-ink mb-2">Request a quote</h3>
                <p className="text-muted mb-8">Provide your details and we'll connect you with the ideal Nexora solution.</p>
                <form
                  className="space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
                    const company = (form.elements.namedItem("company") as HTMLInputElement)?.value || "";
                    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value || "";
                    const details = (form.elements.namedItem("details") as HTMLTextAreaElement)?.value || "";
                    const subject = encodeURIComponent("Nexora Product Inquiry");
                    const body = encodeURIComponent(`Name: ${name}\nCompany: ${company}\nEmail: ${email}\nProject details: ${details}`);
                    window.location.href = `mailto:sales@nexoraindia.org?subject=${subject}&body=${body}`;
                  }}
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-ink mb-2">Name <span className="text-nx-600">*</span></label>
                      <input className="form-input" type="text" name="name" required placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink mb-2">Company</label>
                      <input className="form-input" type="text" name="company" placeholder="Your company" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-2">Email <span className="text-nx-600">*</span></label>
                    <input className="form-input" type="email" name="email" required placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-2">Project details <span className="text-nx-600">*</span></label>
                    <textarea className="form-input min-h-[120px] resize-y" name="details" required placeholder="Tell us about your project..." rows={4} />
                  </div>
                  <button type="submit" className="btn-primary w-full text-base">
                    Send inquiry
                  </button>
                </form>
              </div>

              {/* Office hours */}
              <div className="mt-8 bg-white/80 border border-black/5 rounded-3xl p-6">
                <h4 className="font-bold text-ink mb-3">Office Hours</h4>
                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                  {["Mon – Fri: 9:00 AM – 6:00 PM", "Sat: 10:00 AM – 2:00 PM", "Sun: Closed"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-muted">
                      <span className="w-2 h-2 rounded-full bg-nx-600" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
