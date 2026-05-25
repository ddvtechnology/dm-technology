"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    id: "sistemas-web",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="14" rx="1" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Sistemas Web",
    desc: "Plataformas completas com gestão financeira, estoque, vendas e controle operacional.",
    featured: true,
  },
  {
    id: "automacoes",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Automações",
    desc: "Processos automáticos que eliminam tarefas repetitivas e erros humanos.",
    featured: false,
  },
  {
    id: "dashboards",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <rect x="3" y="3" width="18" height="18" rx="1" fill="none" />
      </svg>
    ),
    title: "Dashboards",
    desc: "Painéis visuais com indicadores de desempenho em tempo real.",
    featured: false,
  },
  {
    id: "landing-pages",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
        <polyline points="13 2 13 9 20 9" />
      </svg>
    ),
    title: "Landing Pages",
    desc: "Páginas de alta conversão com design premium e otimizadas para vendas.",
    featured: false,
  },
  {
    id: "inteligencia-artificial",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M8 12h8M12 8v8" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Inteligência Artificial",
    desc: "Soluções com IA para análise de dados, previsões e automação inteligente.",
    featured: true,
  },
  {
    id: "sites-institucionais",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Sites Institucionais",
    desc: "Presença digital profissional que gera autoridade e credibilidade.",
    featured: false,
  },
  {
    id: "bots",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        <circle cx="9" cy="16" r="1" fill="currentColor" />
        <circle cx="15" cy="16" r="1" fill="currentColor" />
      </svg>
    ),
    title: "Bots",
    desc: "Chatbots e bots para WhatsApp, atendimento e processos automatizados.",
    featured: false,
  },
  {
    id: "solucoes-personalizadas",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93A10 10 0 0 1 21.98 11h-2.05M4.93 4.93A10 10 0 0 0 2.02 11h2.05M19.07 19.07A10 10 0 0 1 12.01 22v-2.05M4.93 19.07A10 10 0 0 0 12.01 22v-2.05" />
      </svg>
    ),
    title: "Soluções Personalizadas",
    desc: "Desenvolvimento sob medida para demandas específicas do seu negócio.",
    featured: false,
  },
  {
    id: "gestao-comercial",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Gestão Comercial",
    desc: "CRM e ferramentas de gestão para estruturar seu processo comercial.",
    featured: false,
  },
];

export default function Services() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="servicos"
      className="section-pad relative"
      style={{
        background: "#030303",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container-dm relative z-10">
        {/* Header */}
        <div className="mb-14">
          <ScrollReveal delay={0}>
            <div className="tag mb-6">O que fazemos</div>
          </ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <ScrollReveal delay={100}>
              <h2
                className="font-display font-bold text-white"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                Serviços & Soluções
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={150} direction="right">
              <p className="text-gray-500 max-w-xs text-sm leading-relaxed">
                Tecnologia sob medida para cada etapa do seu negócio.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Services grid — intentionally broken/asymmetric layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-900">
          {services.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 50}>
              <div
                className="relative p-7 cursor-pointer group"
                style={{
                  background:
                    hoveredId === service.id
                      ? "#111111"
                      : service.featured
                      ? "#0a0a0a"
                      : "#050505",
                  transition: "background 0.3s ease",
                  minHeight: "180px",
                }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                id={`service-${service.id}`}
              >
                {/* Top border reveal on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-px transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                    opacity: hoveredId === service.id ? 1 : 0,
                  }}
                  aria-hidden="true"
                />

                {/* Featured badge */}
                {service.featured && (
                  <span
                    className="absolute top-4 right-4 tag"
                    style={{ fontSize: "9px", padding: "2px 8px" }}
                  >
                    Destaque
                  </span>
                )}

                {/* Icon */}
                <div
                  className="text-gray-400 mb-4 transition-colors duration-300"
                  style={{ color: hoveredId === service.id ? "#ffffff" : undefined }}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3
                  className="font-display font-semibold mb-2 transition-colors duration-300"
                  style={{
                    fontSize: "0.95rem",
                    color: hoveredId === service.id ? "#ffffff" : "#cccccc",
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-xs leading-relaxed transition-all duration-300"
                  style={{
                    color: hoveredId === service.id ? "#888888" : "#555555",
                  }}
                >
                  {service.desc}
                </p>

                {/* Arrow reveal */}
                <div
                  className="absolute bottom-5 right-5 transition-all duration-300"
                  style={{
                    opacity: hoveredId === service.id ? 1 : 0,
                    transform:
                      hoveredId === service.id ? "translate(0,0)" : "translate(-4px, 4px)",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={200}>
          <div className="mt-10 flex justify-center">
            <a
              href="https://wa.me/5587991718722?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              id="services-cta"
            >
              Ver todos os serviços
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
