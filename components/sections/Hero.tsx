"use client";

import { useEffect, useRef } from "react";
import Particles from "@/components/ui/Particles";
import ScrollReveal from "@/components/ScrollReveal";

export default function Hero() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const grid = gridRef.current;
      if (!grid) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      grid.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "#000" }}
    >
      {/* Circuit grid background */}
      <div
        ref={gridRef}
        className="circuit-grid absolute inset-0 transition-transform duration-700 ease-out"
        style={{ willChange: "transform" }}
        aria-hidden="true"
      />

      {/* Particles */}
      <Particles />

      {/* Radial glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Corner accent lines */}
      <div className="absolute top-0 left-0 w-24 h-24 pointer-events-none" aria-hidden="true">
        <div className="absolute top-16 left-0 w-16 h-px bg-white opacity-20" />
        <div className="absolute top-16 left-0 w-px h-16 bg-white opacity-20" />
      </div>
      <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-16 right-0 w-16 h-px bg-white opacity-20" />
        <div className="absolute bottom-16 right-0 w-px h-16 bg-white opacity-20" />
      </div>

      {/* Content */}
      <div className="container-dm relative z-10 pt-32 pb-20">
        <div className="max-w-5xl">
          {/* Label */}
          <ScrollReveal delay={0}>
            <div className="flex items-center gap-3 mb-8">
              <span className="tag">Software House</span>
              <div className="flex items-center gap-1.5">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-white inline-block animate-pulse"
                  style={{ animationDuration: "2s" }}
                />
                <span className="text-xs text-gray-500 font-display tracking-widest uppercase">
                  Disponível para novos projetos
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Main headline */}
          <ScrollReveal delay={100}>
            <h1
              className="font-display font-bold text-white leading-none mb-6"
              style={{
                fontSize: "clamp(2.8rem, 7vw, 6rem)",
                letterSpacing: "-0.03em",
              }}
            >
              Transformamos
              <br />
              <span
                style={{
                  WebkitTextStroke: "1px rgba(255,255,255,0.4)",
                  color: "transparent",
                }}
              >
                problemas
              </span>{" "}
              em
              <br />
              soluções digitais.
            </h1>
          </ScrollReveal>

          {/* Subtitle */}
          <ScrollReveal delay={200}>
            <p
              className="text-gray-400 mb-10 max-w-xl leading-relaxed"
              style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}
            >
              Sistemas, automações e tecnologia sob medida para{" "}
              <span className="text-gray-200">empresas</span>,{" "}
              <span className="text-gray-200">negócios locais</span> e{" "}
              <span className="text-gray-200">setor público</span>.
            </p>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal delay={300}>
            <div className="flex flex-wrap gap-4 mb-16">
              <a
                href="https://wa.me/5587991718722?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                id="hero-cta-orcamento"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Solicitar orçamento
              </a>
              <a
                href="https://wa.me/5587991718722?text=Olá!%20Gostaria%20de%20agendar%20uma%20conversa."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                id="hero-cta-agendar"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Agendar uma conversa
              </a>
            </div>
          </ScrollReveal>

          {/* Stats row */}
          <ScrollReveal delay={400}>
            <div
              className="flex flex-wrap gap-px"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              {[
                { value: "100%", label: "Personalizado" },
                { value: "24h", label: "Suporte ativo" },
                { value: "∞", label: "Escalável" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex-1 min-w-[120px] pt-6 pr-8"
                >
                  <div
                    className="font-display font-bold text-white mb-1"
                    style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Dashboard mockup */}
      <div className="container-dm relative z-10 pb-20">
        <ScrollReveal delay={500} direction="right">
          <div
            className="relative mx-auto overflow-hidden"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              background: "linear-gradient(180deg, #0d0d0d 0%, #050505 100%)",
              maxWidth: "900px",
            }}
          >
            {/* Browser chrome */}
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="flex gap-1.5">
                {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
                  <div key={i} className="w-3 h-3 rounded-full" style={{ background: c, opacity: 0.6 }} />
                ))}
              </div>
              <div
                className="flex-1 mx-4 rounded px-3 py-1 text-xs text-gray-600 font-mono"
                style={{ background: "#0a0a0a", border: "1px solid #1a1a1a" }}
              >
                app.dmtechnology.com.br
              </div>
            </div>

            {/* Mock dashboard UI */}
            <div className="grid grid-cols-4 min-h-[280px]">
              {/* Sidebar */}
              <div
                className="col-span-1 p-4 hidden sm:block"
                style={{ borderRight: "1px solid rgba(255,255,255,0.04)" }}
              >
                <div className="text-xs text-gray-600 uppercase tracking-widest mb-4">Menu</div>
                {["Dashboard", "Produtos", "Estoque", "Vendas", "Relatórios"].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 py-2 px-2 mb-1 text-xs text-gray-500"
                    style={{
                      background: i === 0 ? "rgba(255,255,255,0.04)" : "transparent",
                      borderLeft: i === 0 ? "2px solid rgba(255,255,255,0.3)" : "2px solid transparent",
                    }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                    {item}
                  </div>
                ))}
              </div>

              {/* Main */}
              <div className="col-span-4 sm:col-span-3 p-5">
                <div className="text-xs text-gray-500 mb-4 font-display uppercase tracking-wider">
                  Resumo Financeiro
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                  {[
                    { label: "Faturamento", value: "R$ 12.4k", up: true },
                    { label: "Lucro", value: "R$ 8.1k", up: true },
                    { label: "Estoque", value: "1.240", up: false },
                    { label: "Vendas", value: "87", up: true },
                  ].map((card, i) => (
                    <div
                      key={i}
                      className="p-3"
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <div className="text-xs text-gray-600 mb-1">{card.label}</div>
                      <div className="text-sm font-display font-bold text-white">{card.value}</div>
                      <div className={`text-xs mt-1 ${card.up ? "text-green-500" : "text-gray-500"}`}>
                        {card.up ? "↑ 12%" : "—"}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Chart bars */}
                <div className="flex items-end gap-1.5 h-20">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1"
                      style={{
                        height: `${h}%`,
                        background:
                          i === 10
                            ? "rgba(255,255,255,0.5)"
                            : "rgba(255,255,255,0.1)",
                        transition: "height 0.3s ease",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <div className="text-xs text-gray-600 uppercase tracking-widest">Scroll</div>
        <div
          className="w-px h-12 bg-gradient-to-b from-gray-600 to-transparent"
          style={{ animation: "pulse 2s ease-in-out infinite" }}
        />
      </div>
    </section>
  );
}
