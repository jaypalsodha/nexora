import Link from "next/link";

const productDocuments = [
  {
    name: "Nexo Eco",
    category: "Tile Adhesives",
    type: "Type 1, C1T",
    documents: [
      { label: "TDS", filename: "Nexo-Eco-TDS.pdf", url: "#" },
      { label: "MSDS", filename: "Nexo-Eco-MSDS.pdf", url: "#" },
    ],
  },
  {
    name: "Nexo Smart",
    category: "Tile Adhesives",
    type: "Type 2, C2T",
    documents: [
      { label: "TDS", filename: "Nexo-Smart-TDS.pdf", url: "#" },
      { label: "MSDS", filename: "Nexo-Smart-MSDS.pdf", url: "#" },
    ],
  },
  {
    name: "Nexo Flex",
    category: "Tile Adhesives",
    type: "Type 3, C2TE",
    documents: [
      { label: "TDS", filename: "Nexo-Flex-TDS.pdf", url: "#" },
      { label: "MSDS", filename: "Nexo-Flex-MSDS.pdf", url: "#" },
    ],
  },
  {
    name: "Nexo Flex +",
    category: "Tile Adhesives",
    type: "Type 3, C2TES1",
    documents: [
      { label: "TDS", filename: "Nexo-Flex+-TDS.pdf", url: "#" },
      { label: "MSDS", filename: "Nexo-Flex+-MSDS.pdf", url: "#" },
    ],
  },
  {
    name: "Nexo Ultra",
    category: "Tile Adhesives",
    type: "Type 4, C2TES1",
    documents: [
      { label: "TDS", filename: "Nexo-Ultra-TDS.pdf", url: "#" },
      { label: "MSDS", filename: "Nexo-Ultra-MSDS.pdf", url: "#" },
    ],
  },
  {
    name: "Nexo Advance",
    category: "Tile Adhesives",
    type: "Type 4, C2TES2",
    documents: [
      { label: "TDS", filename: "Nexo-Advance-TDS.pdf", url: "#" },
      { label: "MSDS", filename: "Nexo-Advance-MSDS.pdf", url: "#" },
    ],
  },
  {
    name: "Nexo Supreme",
    category: "PU Adhesives",
    type: "Type 5, R2T PU Adhesive",
    documents: [
      { label: "TDS", filename: "Nexo-Supreme-TDS.pdf", url: "#" },
      { label: "MSDS", filename: "Nexo-Supreme-MSDS.pdf", url: "#" },
    ],
  },
  {
    name: "Nexo Grout",
    category: "Grouts & Plasters",
    type: "Cement Grout",
    documents: [
      { label: "TDS", filename: "Nexo-Grout-TDS.pdf", url: "#" },
      { label: "MSDS", filename: "Nexo-Grout-MSDS.pdf", url: "#" },
    ],
  },
  {
    name: "Nexo Pro + Epoxy",
    category: "Epoxy Systems",
    type: "Epoxy Adhesive System",
    documents: [
      { label: "TDS", filename: "Nexo-Pro-Epoxy-TDS.pdf", url: "#" },
      { label: "MSDS", filename: "Nexo-Pro-Epoxy-MSDS.pdf", url: "#" },
    ],
  },
  {
    name: "BJM Plaster Waterproofing",
    category: "Waterproofing",
    type: "Waterproof Plaster",
    documents: [
      { label: "TDS", filename: "BJM-Waterproofing-TDS.pdf", url: "#" },
      { label: "MSDS", filename: "BJM-Waterproofing-MSDS.pdf", url: "#" },
    ],
  },
  {
    name: "Block Joining Mortar",
    category: "Grouts & Plasters",
    type: "Structural Mortar",
    documents: [
      { label: "TDS", filename: "Block-Joining-Mortar-TDS.pdf", url: "#" },
      { label: "MSDS", filename: "Block-Joining-Mortar-MSDS.pdf", url: "#" },
    ],
  },
  {
    name: "Nexo Wall Putty",
    category: "Wall Putty",
    type: "Finishing Compound",
    documents: [
      { label: "TDS", filename: "Nexo-Wall-Putty-TDS.pdf", url: "#" },
      { label: "MSDS", filename: "Nexo-Wall-Putty-MSDS.pdf", url: "#" },
    ],
  },
];

export default function DownloadsPage() {
  return (
    <main>
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-nx-600/5 via-white to-nx-400/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] rounded-full bg-nx-600/5 blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto animate-fadeInUp">
            <span className="badge mx-auto">Downloads</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink mt-4 mb-6 leading-tight">
              Technical documents & resources.
            </h1>
            <p className="text-muted text-lg md:text-xl leading-relaxed">
              Download TDS (Technical Data Sheets) and MSDS (Material Safety Data Sheets)
              for all Nexora products. Contact us for product samples and custom documentation.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="max-w-7xl mx-auto px-6">
          {/* Quick links */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-fadeInUp">
            {[
              { label: "Catalog", desc: "Download full product brochure", icon: "📖", href: "/nexora-catalog.txt" },
              { label: "Letterhead", desc: "Company letterhead template", icon: "📄", href: "/Nexora Letterhead Final.pdf" },
              { label: "Contact Us", desc: "Get in touch for samples", icon: "📧", href: "#contact" },
              { label: "Request Quote", desc: "Custom product inquiry", icon: "📋", href: "#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="p-6 bg-white/80 border border-black/5 rounded-2xl card-lift animate-fadeInUp text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-ink mb-2">{item.label}</h3>
                <p className="text-muted text-sm">{item.desc}</p>
              </a>
            ))}
          </div>

          {/* Product documents */}
          <div className="animate-fadeInUp">
            <h2 className="text-2xl font-extrabold tracking-tight text-ink mb-8">
              Product Technical Documents
            </h2>
            <div className="space-y-4">
              {productDocuments.map((product, pi) => (
                <div key={product.name} className="bg-white/80 border border-black/5 rounded-2xl p-6 card-lift">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-ink">{product.name}</h3>
                      <p className="text-muted text-sm">{product.category} • {product.type}</p>
                    </div>
                    <div className="flex gap-3">
                      {product.documents.map((doc) => (
                        <a
                          key={doc.label}
                          href={doc.url}
                          download={doc.filename}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-nx-600/10 text-nx-700 font-semibold text-sm hover:bg-nx-600/20 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          {doc.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Company info */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 animate-fadeInUp">
            <div className="p-8 bg-white/80 border border-black/5 rounded-2xl">
              <h3 className="text-xl font-bold text-ink mb-4">Company Information</h3>
              <div className="space-y-3 text-muted text-sm leading-relaxed">
                <p><strong className="text-ink">Company:</strong> Nexora Global Industries Pvt Ltd</p>
                <p><strong className="text-ink">Address:</strong> Shade No 2, Survey No-1525/119, Near Navkar Heights, off. S.P. Ring Road, Ognaj, Ahmedabad - 380060</p>
                <p><strong className="text-ink">Phone:</strong> +91 92748 58900</p>
                <p><strong className="text-ink">Email:</strong> sales@nexoraindia.org / info@nexoraindia.org</p>
              </div>
            </div>
            <div className="p-8 bg-white/80 border border-black/5 rounded-2xl">
              <h3 className="text-xl font-bold text-ink mb-4">Need something else?</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                Can't find what you're looking for? We can provide custom documentation,
                samples, and technical support for your specific project requirements.
              </p>
              <a href="#contact" className="btn-primary inline-flex text-sm">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
