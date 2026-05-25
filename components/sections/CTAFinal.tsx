"use client";

import Particles from "@/components/ui/Particles";
import ScrollReveal from "@/components/ScrollReveal";

export default function CTAFinal() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden"
      style={{
        background: "#000",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "120px 0",
      }}
    >
      {/* Particles */}
      <Particles />

      {/* Circuit grid — denser */}
      <div
        className="absolute inset-0 pointer-events-none circuit-grid circuit-grid-dense"
        style={{
          mask: "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)",
          WebkitMask: "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Corner lines */}
      {[
        { top: 0, left: 0 },
        { top: 0, right: 0 },
        { bottom: 0, left: 0 },
        { bottom: 0, right: 0 },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute w-12 h-12 pointer-events-none"
          style={pos}
          aria-hidden="true"
        >
          <div
            className="absolute w-8 h-px bg-white"
            style={{
              opacity: 0.25,
              top: pos.top === 0 ? 8 : undefined,
              bottom: pos.bottom === 0 ? 8 : undefined,
              left: pos.left === 0 ? 0 : undefined,
              right: pos.right === 0 ? 0 : undefined,
            }}
          />
          <div
            className="absolute w-px h-8 bg-white"
            style={{
              opacity: 0.25,
              top: pos.top === 0 ? 8 : undefined,
              bottom: pos.bottom === 0 ? 8 : undefined,
              left: pos.left === 0 ? 0 : undefined,
              right: pos.right === 0 ? 0 : undefined,
            }}
          />
        </div>
      ))}

      <div className="container-dm relative z-10 text-center">
        <ScrollReveal delay={0}>
          <div className="tag mb-8 mx-auto" style={{ display: "inline-block" }}>
            Próximo passo
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2
            className="font-display font-bold text-white mx-auto mb-6"
            style={{
              fontSize: "clamp(2.2rem, 5.5vw, 5rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              maxWidth: "900px",
            }}
          >
            Seu negócio ainda depende de{" "}
            <span
              style={{
                WebkitTextStroke: "1px rgba(255,255,255,0.4)",
                color: "transparent",
              }}
            >
              processos
            </span>
            <br />
            manuais?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p
            className="text-gray-400 mx-auto mb-12 leading-relaxed"
            style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", maxWidth: "560px" }}
          >
            A tecnologia certa organiza sua operação, automatiza tarefas e
            acelera resultados. Vamos construir juntos?
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a
              href="https://wa.me/5587991718722?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20meu%20negócio."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              id="cta-final-orcamento"
              style={{ padding: "16px 36px", fontSize: "15px" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Solicitar orçamento
            </a>
            <a
              href="https://wa.me/5587991718722"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              id="cta-final-whatsapp"
              style={{ padding: "16px 36px", fontSize: "15px" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar no WhatsApp
            </a>
          </div>
        </ScrollReveal>

        {/* Contact info */}
        <ScrollReveal delay={400}>
          <div
            className="flex flex-wrap justify-center gap-8 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            {[
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                ),
                label: "dm.technology@gmail.com",
                href: "mailto:dm.technology@gmail.com",
              },
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                ),
                label: "+55 87 99171-8722",
                href: "tel:+5587991718722",
              },
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                ),
                label: "@dm.technology__",
                href: "https://instagram.com/dm.technology__",
              },
            ].map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-300 transition-colors duration-200 text-sm"
              >
                {contact.icon}
                {contact.label}
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
