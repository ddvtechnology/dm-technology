"use client";

import ScrollReveal from "@/components/ScrollReveal";

const values = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Eficiência",
    desc: "Processos otimizados que eliminam trabalho manual e aumentam a produtividade.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: "Automação",
    desc: "Sistemas inteligentes que trabalham por você, 24 horas por dia.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    title: "Organização",
    desc: "Visão clara de toda a operação em um único lugar, em tempo real.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Resultados",
    desc: "Tecnologia que gera impacto real: mais vendas, menos custos, mais controle.",
  },
];

const audiences = [
  "Comércio local",
  "Clínicas e saúde",
  "Empresas médias",
  "Microempreendedores",
  "Setor público",
];

export default function About() {
  return (
    <section
      id="sobre"
      className="section-pad relative"
      style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      <div className="container-dm relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <ScrollReveal delay={0}>
              <div className="tag mb-6">Sobre a empresa</div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2
                className="font-display font-bold text-white mb-6"
                style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
              >
                Tecnologia aplicada a{" "}
                <span
                  style={{
                    WebkitTextStroke: "1px rgba(255,255,255,0.35)",
                    color: "transparent",
                  }}
                >
                  negócios reais.
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-gray-400 leading-relaxed mb-8" style={{ fontSize: "1.05rem" }}>
                A DM Technology desenvolve sistemas, automações e soluções digitais
                personalizadas para organizar processos, otimizar operações e gerar
                resultados reais.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div>
                <p className="text-xs text-gray-600 uppercase tracking-widest mb-4 font-display">
                  Atendemos
                </p>
                <div className="flex flex-wrap gap-2">
                  {audiences.map((a) => (
                    <span key={a} className="tag tag-white">
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Value cards */}
          <div className="grid grid-cols-2 gap-3">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 80}>
                <div className="card-tech p-6 h-full">
                  <div
                    className="w-10 h-10 flex items-center justify-center mb-4 text-white"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {v.icon}
                  </div>
                  <h3 className="font-display font-semibold text-white text-sm mb-2">
                    {v.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
