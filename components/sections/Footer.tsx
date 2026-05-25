"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#000",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container-dm py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <rect x="1" y="1" width="34" height="34" rx="1" stroke="white" strokeWidth="1.5" opacity="0.6" />
                <path d="M8 10h5.5c4.142 0 7.5 3.358 7.5 7.5S17.642 25 13.5 25H8V10z" fill="white" opacity="0.7" />
                <path d="M22 10l4.5 7.5L22 25" stroke="white" strokeWidth="2" strokeLinecap="square" fill="none" opacity="0.7" />
              </svg>
              <span className="font-display font-bold text-gray-400 tracking-widest uppercase text-xs" style={{ letterSpacing: "0.25em" }}>
                TECHNOLOGY
              </span>
            </div>
            <p className="text-xs text-gray-700 max-w-[220px] text-center md:text-left leading-relaxed">
              Sistemas, automações e soluções digitais para negócios reais.
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-4">
              {/* Instagram */}
              <a
                href="https://instagram.com/dm.technology__"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram DM Technology"
                id="footer-instagram"
                className="w-9 h-9 flex items-center justify-center text-gray-600 hover:text-white transition-colors duration-200"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/5587991718722"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp DM Technology"
                id="footer-whatsapp"
                className="w-9 h-9 flex items-center justify-center text-gray-600 hover:text-white transition-colors duration-200"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:dm.technology@gmail.com"
                aria-label="Email DM Technology"
                id="footer-email"
                className="w-9 h-9 flex items-center justify-center text-gray-600 hover:text-white transition-colors duration-200"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <p className="text-xs text-gray-700 text-center md:text-right">
              © {year} DM Technology. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
