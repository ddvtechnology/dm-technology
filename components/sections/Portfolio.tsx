"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const indicators = [
  { label: "Controle", desc: "Financeiro completo" },
  { label: "Estoque", desc: "Tempo real" },
  { label: "Relatórios", desc: "Automáticos" },
  { label: "Eficiência", desc: "Operacional" },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="section-pad relative overflow-hidden"
      style={{
        background: "#000",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Background accent */}
      <div
        className="absolute right-0 top-1/4 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(255,255,255,0.03) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-dm relative z-10">
        {/* Header */}
        <div className="mb-14">
          <ScrollReveal delay={0}>
            <div className="tag mb-6">Portfólio</div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2
              className="font-display font-bold text-white"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Projetos que{" "}
              <span
                style={{
                  WebkitTextStroke: "1px rgba(255,255,255,0.35)",
                  color: "transparent",
                }}
              >
                geram resultado.
              </span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Featured project */}
        <ScrollReveal delay={150}>
          <div
            className="relative overflow-hidden"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              background: "#080808",
            }}
          >
            {/* Top label */}
            <div
              className="flex items-center justify-between px-6 py-4"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full opacity-60" />
                <span className="font-display font-semibold text-white text-sm">
                  Joaninha Baby Kids
                </span>
                <span className="tag" style={{ padding: "2px 8px", fontSize: "10px" }}>
                  Sistema Web
                </span>
              </div>
              <span className="text-xs text-gray-600 font-display">2026</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-0">
              {/* Screenshot */}
              <div
                className="relative overflow-hidden"
                style={{
                  borderRight: "1px solid rgba(255,255,255,0.06)",
                  minHeight: "360px",
                }}
              >
                {/* System screenshot */}
                <div className="relative w-full h-full" style={{ minHeight: "360px" }}>
                  <Image
                    src="/joaninha-system.png"
                    alt="Sistema Joaninha Baby Kids - Dashboard de gestão financeira e estoque"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={90}
                  />
                  {/* Overlay vignette */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to right, transparent 70%, #080808 100%)",
                    }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to bottom, transparent 70%, #080808 100%)",
                    }}
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="p-8 flex flex-col justify-center">
                <div className="tag mb-4" style={{ alignSelf: "flex-start" }}>
                  Gestão Completa
                </div>
                <h3
                  className="font-display font-bold text-white mb-4"
                  style={{ fontSize: "1.6rem", letterSpacing: "-0.02em" }}
                >
                  Sistema de Gestão
                  <br />
                  Operacional
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Sistema desenvolvido para gestão financeira, estoque, vendas e
                  organização operacional de loja de artigos infantis. Controle
                  total em um painel intuitivo.
                </p>

                {/* Indicators */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {indicators.map((ind) => (
                    <div
                      key={ind.label}
                      className="p-4"
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <div className="font-display font-semibold text-white text-sm mb-1">
                        {ind.label}
                      </div>
                      <div className="text-xs text-gray-600">{ind.desc}</div>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "PostgreSQL", "Dashboard"].map((tech) => (
                    <span key={tech} className="tag tag-white text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* More projects placeholder */}
        <ScrollReveal delay={250}>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-px bg-gray-900">
            {["Em desenvolvimento", "Em desenvolvimento", "Seu projeto aqui"].map((label, i) => (
              <div
                key={i}
                className="flex items-center justify-center py-12"
                style={{ background: "#050505" }}
              >
                <span className="text-xs text-gray-700 font-display uppercase tracking-widest">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={300}>
          <div className="mt-10 flex justify-center">
            <a
              href="https://wa.me/5587991718722?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20projetos%20desenvolvidos."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              id="portfolio-cta"
            >
              Quero um sistema como esse
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
