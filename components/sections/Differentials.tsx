"use client";

import ScrollReveal from "@/components/ScrollReveal";

const differentials = [
  {
    number: "01",
    title: "Soluções sob medida",
    desc: "Nada genérico. Cada sistema é construído para o seu negócio, suas dores e seus objetivos específicos.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Tecnologia moderna",
    desc: "Stack atual, performance otimizada e arquitetura que suporta crescimento sem precisar reconstruir.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Interface intuitiva",
    desc: "Design pensado para o usuário final. Qualquer colaborador opera o sistema sem treinamento extenso.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="14" rx="1" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Organização operacional",
    desc: "Processos claros, dados centralizados e visibilidade total da operação em tempo real.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Automação de processos",
    desc: "Eliminamos tarefas manuais repetitivas, reduzindo erros e liberando sua equipe para o que importa.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93A10 10 0 0 1 21.98 11h-2.05M4.93 4.93A10 10 0 0 0 2.02 11h2.05M19.07 19.07A10 10 0 0 1 12.01 22v-2.05M4.93 19.07A10 10 0 0 0 12.01 22v-2.05" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Suporte e evolução contínua",
    desc: "Não entregamos e sumimos. Acompanhamos, evoluímos e suportamos o sistema junto com o seu negócio.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

export default function Differentials() {
  return (
    <section
      id="diferenciais"
      className="section-pad relative"
      style={{
        background: "#020202",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Vertical line accent */}
      <div
        className="absolute left-1/2 top-0 bottom-0 w-px pointer-events-none hidden lg:block"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.04), transparent)" }}
        aria-hidden="true"
      />

      <div className="container-dm relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <ScrollReveal delay={0}>
              <div className="tag mb-6">Por que a DM Technology</div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2
                className="font-display font-bold text-white"
                style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
              >
                O que nos
                <br />
                <span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.35)", color: "transparent" }}>
                  diferencia.
                </span>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={150}>
            <p className="text-gray-500 leading-relaxed text-sm lg:pt-12">
              Não somos uma agência genérica. Somos especialistas em transformar
              complexidade operacional em sistemas simples, rápidos e eficientes.
              Tecnologia premium acessível para negócios reais.
            </p>
          </ScrollReveal>
        </div>

        {/* Differentials list */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-900">
          {differentials.map((d, i) => (
            <ScrollReveal key={d.number} delay={i * 80}>
              <div
                className="group relative p-8 transition-colors duration-300 hover:bg-[#0d0d0d]"
                style={{ background: "#040404", minHeight: "200px" }}
              >
                {/* Number */}
                <div
                  className="font-display font-bold mb-5 transition-colors duration-300"
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.2em",
                    color: "#333333",
                  }}
                >
                  {d.number}
                </div>

                {/* Icon + Title row */}
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-gray-600 group-hover:text-white transition-colors duration-300"
                    style={{
                      border: "1px solid rgba(255,255,255,0.06)",
                      background: "rgba(255,255,255,0.02)",
                    }}
                  >
                    {d.icon}
                  </div>
                  <h3
                    className="font-display font-semibold text-gray-300 group-hover:text-white transition-colors duration-300"
                    style={{ fontSize: "0.95rem", lineHeight: 1.3 }}
                  >
                    {d.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 group-hover:text-gray-400 text-xs leading-relaxed transition-colors duration-300 pl-11">
                  {d.desc}
                </p>

                {/* Bottom reveal line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px transition-transform duration-500 origin-left"
                  style={{
                    background: "linear-gradient(90deg, rgba(255,255,255,0.2), transparent)",
                    transform: "scaleX(0)",
                  }}
                  aria-hidden="true"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
