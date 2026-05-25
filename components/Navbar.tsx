"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(0,0,0,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <nav className="container-dm flex items-center justify-between py-5">
        {/* Logo */}
        <Link
          href="#hero"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 group"
          aria-label="DM Technology - Início"
        >
          <div className="flex items-center gap-2">
            <div
              className="relative flex items-center justify-center"
              style={{ width: 36, height: 36 }}
            >
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
                <rect x="1" y="1" width="34" height="34" rx="1" stroke="white" strokeWidth="1.5" />
                <path d="M8 10h5.5c4.142 0 7.5 3.358 7.5 7.5S17.642 25 13.5 25H8V10z" fill="white" />
                <path d="M22 10l4.5 7.5L22 25" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" fill="none" />
                <path d="M22 10l4.5 7.5" stroke="white" strokeWidth="2" strokeLinecap="square" />
              </svg>
            </div>
            <div>
              <span
                className="block text-white font-display font-bold tracking-widest uppercase text-xs"
                style={{ letterSpacing: "0.25em", lineHeight: 1.2 }}
              >
                TECHNOLOGY
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-display font-medium text-gray-400 hover:text-white transition-colors duration-200 tracking-wide cursor-pointer bg-transparent border-none"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/5587991718722"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-3 px-6"
            id="nav-cta-whatsapp"
          >
            Falar no WhatsApp
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2 cursor-pointer bg-transparent border-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          id="nav-hamburger"
        >
          <span
            className="block h-px w-6 bg-white transition-all duration-300"
            style={{
              transform: isOpen ? "rotate(45deg) translate(3px, 3px)" : "none",
            }}
          />
          <span
            className="block h-px w-6 bg-white transition-all duration-300"
            style={{ opacity: isOpen ? 0 : 1 }}
          />
          <span
            className="block h-px w-6 bg-white transition-all duration-300"
            style={{
              transform: isOpen ? "rotate(-45deg) translate(3px, -3px)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isOpen ? "400px" : "0",
          background: "rgba(0,0,0,0.97)",
          borderBottom: isOpen ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div className="container-dm py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-lg font-display font-medium text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-900 cursor-pointer bg-transparent border-none"
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://wa.me/5587991718722"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4 justify-center"
            id="nav-mobile-cta"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
