import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexora Global Industries",
  description: "Manufacturer and exporter of premium tile adhesives, epoxy, grouts, and waterproofing solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
