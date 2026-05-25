import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DM Technology | Sistemas, Automações e Soluções Digitais",
  description:
    "A DM Technology desenvolve sistemas, automações e soluções digitais personalizadas para organizar processos, otimizar operações e gerar resultados reais para empresas e negócios.",
  keywords:
    "sistemas web, automações, dashboards, landing pages, inteligência artificial, software house, DM Technology",
  authors: [{ name: "DM Technology" }],
  creator: "DM Technology",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://dmtechnology.com.br",
    title: "DM Technology | Sistemas, Automações e Soluções Digitais",
    description:
      "Tecnologia aplicada a negócios reais. Sistemas, automações e soluções digitais sob medida.",
    siteName: "DM Technology",
  },
  twitter: {
    card: "summary_large_image",
    title: "DM Technology | Sistemas e Automações",
    description: "Tecnologia aplicada a negócios reais.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
