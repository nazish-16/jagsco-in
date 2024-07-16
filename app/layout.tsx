import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jagsco Interiors",
  description: "Welcome to Jagsco, your premier destination for exquisite marble and stone solutions. At Jagsco, we specialize in sourcing, crafting, and delivering the finest quality marble and stone products to transform your spaces into timeless masterpieces.",
  icons: "https://img.icons8.com/?size=100&id=2797&format=png&color=FFFFFF"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='scroll-smooth' style={{ scrollBehavior: 'smooth' }}>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
