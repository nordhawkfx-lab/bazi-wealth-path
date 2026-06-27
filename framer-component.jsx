import React, { useState, useEffect } from "react";

/**
 * LIFE PATH — HOMEPAGE FRAMER COMPONENT
 * F-45 Recognition Layer — Full Rebuild 2026
 *
 * Usage in Framer:
 * 1. Assets → Code → New File → paste this entire code
 * 2. Import fonts: Instrument Serif, Fraunces, Outfit, JetBrains Mono (Google Fonts)
 * 3. Set canvas size to 1440px wide
 * 4. WhatsApp links are live — replace number if needed
 */

// ── Design tokens (mirrors bazi-design.css) ──────────────────
const T = {
  /* Colors */
  indigo:       "#2D2B55",
  indigoLight:  "#4E4C8A",
  teal:         "#1A7B6B",
  tealHover:    "#1E9078",
  tealLight:    "#2AADA0",
  gold:         "#B8955A",
  goldBorder:   "rgba(184,149,90,0.28)",
  goldSubtle:   "rgba(184,149,90,0.06)",
  earth:        "#8B6B4A",
  dark:         "#1C1B2E",
  darkD:        "#13121F",
  bg:           "#FAFAF8",
  muted:        "#F0EDE8",
  borderDk:     "rgba(184,149,90,0.13)",
  borderLt:     "rgba(139,107,74,0.20)",
  textDkP:      "#EAE7DC",
  textDkS:      "#A89E8A",
  textDkM:      "#6B6680",
  textLtP:      "#1C1B2E",
  textLtS:      "#4A4255",
  textLtM:      "#8B6B4A",

  /* Typography */
  ffDisplay:    "'Instrument Serif', Georgia, serif",
  ffBody:       "'Outfit', -apple-system, system-ui, sans-serif",
  ffMono:       "'JetBrains Mono', monospace",
};

// WhatsApp number
const WA_BASE = "https://wa.me/6282117175544?text=";
const WA_GENERAL = WA_BASE + encodeURIComponent("Halo, saya tertarik konsultasi Life Path. Boleh saya ceritakan situasi saya?");
const WA_WEALTH  = WA_BASE + encodeURIComponent("Halo, saya tertarik dengan Wealth Path Bazi Session.");
const WA_LOVE    = WA_BASE + encodeURIComponent("Halo, saya tertarik dengan Love Path Bazi Session.");
const WA_CLARITY = WA_BASE + encodeURIComponent("Halo, saya tertarik dengan Clarity & Direction Consultation. Boleh saya cerita dulu?");

// ── WhatsApp Icon ─────────────────────────────────────────────
function WaIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

// ── Hero Section ──────────────────────────────────────────────
function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const fadeUp = (delay = 0) => ({
    opacity:   visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
  });

  const doorHover = {
    base: {
      border: `1px solid ${T.borderDk}`,
      background: "rgba(28,27,46,0.52)",
      padding: "1.6rem 1.5rem",
      position: "relative",
      overflow: "hidden",
      cursor: "pointer",
      transition: "border-color 0.28s ease, background 0.28s ease, transform 0.28s cubic-bezier(0.34,1.56,0.64,1)",
      textDecoration: "none",
      display: "block",
      borderRadius: 0,
    },
  };

  return (
    <section
      style={{
        position:       "relative",
        minHeight:      "100svh",
        display:        "flex",
        flexDirection:  "column",
        background:     T.darkD,
        overflow:       "hidden",
      }}
    >
      {/* Keyframes injected once */}
      <style>{`
        @keyframes lp-hero-zoom { from { transform: scale(1.05); } to { transform: scale(1.00); } }
        @keyframes lp-zh-appear { to { opacity: 0.06; } }
        .lp-door:hover { border-color: rgba(184,149,90,0.38) !important; background: rgba(45,43,85,0.42) !important; transform: translateY(-3px) !important; }
        .lp-door:hover .lp-door-zh { opacity: 0.18 !important; }
      `}</style>

      {/* Batik background */}
      <div style={{
        position:   "absolute", inset: 0,
        backgroundImage: "url('batik.jpg')",
        backgroundSize: "cover", backgroundPosition: "center 38%",
        filter:     "saturate(0.45) brightness(0.38)",
        animation:  "lp-hero-zoom 28s ease-out forwards",
      }} />

      {/* Indigo gradient overlay */}
      <div style={{
        position:   "absolute", inset: 0,
        background: "linear-gradient(150deg, rgba(19,18,31,0.94) 0%, rgba(45,43,85,0.62) 55%, rgba(19,18,31,0.92) 100%)",
      }} />

      {/* Kawung dot pattern */}
      <div style={{
        position:   "absolute", inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Ccircle cx='20' cy='20' r='1.4' fill='%23B8955A'/%3E%3Ccircle cx='0' cy='0' r='1.4' fill='%23B8955A'/%3E%3Ccircle cx='40' cy='0' r='1.4' fill='%23B8955A'/%3E%3Ccircle cx='0' cy='40' r='1.4' fill='%23B8955A'/%3E%3Ccircle cx='40' cy='40' r='1.4' fill='%23B8955A'/%3E%3Cline x1='0' y1='0' x2='40' y2='40' stroke='%23B8955A' stroke-width='0.45'/%3E%3Cline x1='40' y1='0' x2='0' y2='40' stroke='%23B8955A' stroke-width='0.45'/%3E%3C/svg%3E")`,
        backgroundSize: "40px 40px",
        opacity:    0.07,
        pointerEvents: "none",
      }} />

      {/* Ambient glow */}
      <div style={{
        position: "absolute", top: "-8%", left: "48%",
        transform: "translateX(-50%)",
        width: 680, height: 340,
        background: "radial-gradient(ellipse at center, rgba(45,43,85,0.22) 0%, transparent 70%)",
        filter: "blur(80px)", pointerEvents: "none",
      }} />

      {/* Corner decorative characters */}
      <div style={{
        position: "absolute", left: "2%", bottom: "14%",
        fontFamily: T.ffDisplay, fontSize: "clamp(6rem,10vw,9rem)",
        color: T.indigoLight, lineHeight: 1,
        opacity: 0, animation: "lp-zh-appear 2.5s ease forwards 1s",
        pointerEvents: "none", userSelect: "none", fontStyle: "italic",
      }}>北鷹</div>
      <div style={{
        position: "absolute", right: "3%", top: "16%",
        fontFamily: T.ffDisplay, fontSize: "clamp(4rem,7vw,7rem)",
        color: T.indigoLight, lineHeight: 1,
        opacity: 0, animation: "lp-zh-appear 2.5s ease forwards 1.3s",
        pointerEvents: "none", userSelect: "none",
      }}>財路</div>

      {/* Hero content */}
      <div style={{
        position: "relative", zIndex: 2,
        flex: 1, display: "flex", alignItems: "center",
        maxWidth: 1200, margin: "0 auto", width: "100%",
        padding: "calc(62px + 5rem) 2.5rem 3rem",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 0.88fr",
          gap: "4.2rem",
          alignItems: "center",
          width: "100%",
        }}>

          {/* Left: Copy */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>

            {/* Badge */}
            <div style={{
              ...fadeUp(0.1),
              display: "inline-flex", alignItems: "center",
              padding: "0.28rem 0.80rem",
              border: `1px solid ${T.goldBorder}`,
              background: T.goldSubtle,
              color: T.gold,
              fontFamily: T.ffBody,
              fontSize: "0.70rem",
              fontWeight: 500,
              letterSpacing: "0.08em",
              marginBottom: "2rem",
            }}>
              Forecast + Dual-Track Remedy &nbsp;·&nbsp; 777K IDR
            </div>

            {/* Headline — Instrument Serif */}
            <h1 style={{
              ...fadeUp(0.2),
              fontFamily: T.ffDisplay,
              fontSize: "clamp(2.6rem, 5.5vw + 0.5rem, 5.2rem)",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: 1.12,
              color: "#fff",
              marginBottom: "2rem",
              letterSpacing: "-0.01em",
            }}>
              Pola yang sama<br />
              terus <em style={{ fontStyle: "italic", color: T.gold }}>berulang</em>.<br />
              Di bisnis. Di hubungan.<br />
              Di <em style={{ fontStyle: "italic", color: T.gold }}>rezeki</em>.
            </h1>

            {/* Subline */}
            <p style={{
              ...fadeUp(0.35),
              fontFamily: T.ffBody,
              fontSize: "clamp(1.05rem, 1.0vw + 0.35rem, 1.20rem)",
              color: T.textDkP,
              lineHeight: 1.75,
              maxWidth: "48ch",
              marginBottom: "2rem",
            }}>
              Forecast baik hanya terwujud kalau kamu siap menyambutnya. Saya tidak cuma membaca apa yang akan datang — mari kita siapkan bersama.
            </p>

            {/* Dual CTAs */}
            <div style={{ ...fadeUp(0.48), display: "flex", gap: "1.2rem", flexWrap: "wrap" }}>
              <a href={WA_GENERAL} style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "1rem 2rem",
                background: "#128C7E",
                color: "#fff",
                fontFamily: T.ffBody,
                fontSize: "0.82rem", fontWeight: 600,
                letterSpacing: "0.10em", textTransform: "uppercase",
                textDecoration: "none", borderRadius: 2,
                boxShadow: "0 2px 14px rgba(18,140,126,0.28)",
                transition: "background 0.22s ease",
              }}>
                <WaIcon size={14} /> Mulai dari sini →
              </a>
              <a href="pendekatan.html" style={{
                display: "inline-flex", alignItems: "center",
                padding: "1rem 2rem",
                border: `1.5px solid ${T.borderDk}`,
                background: "transparent",
                color: T.textDkP,
                fontFamily: T.ffBody,
                fontSize: "0.82rem", fontWeight: 600,
                letterSpacing: "0.10em", textTransform: "uppercase",
                textDecoration: "none", borderRadius: 2,
                transition: "border-color 0.22s ease, color 0.22s ease",
              }}>
                Lihat cara kerjanya
              </a>
            </div>

            <p style={{ ...fadeUp(0.60), fontFamily: T.ffBody, fontSize: "0.70rem", color: T.textDkM, fontStyle: "italic", marginTop: "1rem" }}>
              Tidak ada komitmen di percakapan awal.
            </p>
          </div>

          {/* Right: Door selector cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            {[
              { zh: "財", title: "Wealth Path", body: "Rezeki, karir, dan pola keuangan", href: "yang-anda-dapatkan.html#wealth", delay: 0.35 },
              { zh: "情", title: "Love Path",   body: "Pola relasi, jodoh, dan ikatan jiwa", href: "yang-anda-dapatkan.html#love", delay: 0.50 },
            ].map((door) => (
              <a
                key={door.title}
                href={door.href}
                className="lp-door"
                style={{
                  ...fadeUp(door.delay),
                  ...doorHover.base,
                }}
              >
                <div className="lp-door-zh" style={{
                  position: "absolute", right: "-0.5rem", bottom: "-1rem",
                  fontFamily: T.ffDisplay, fontSize: "5.5rem",
                  color: T.indigoLight, opacity: 0.10, lineHeight: 1,
                  pointerEvents: "none", userSelect: "none",
                  transition: "opacity 0.3s ease",
                }}>
                  {door.zh}
                </div>
                <div style={{
                  width: 36, height: 36,
                  border: `1px solid ${T.borderDk}`,
                  background: "rgba(184,149,90,0.06)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "1rem",
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="1.5" strokeLinecap="round">
                    {door.zh === "財"
                      ? <><circle cx="12" cy="12" r="10"/><path d="M12 6v12M9 9a3 3 0 016 0c0 1.66-1.34 3-3 3s-3 1.34-3 3a3 3 0 006 0"/></>
                      : <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                    }
                  </svg>
                </div>
                <div style={{ fontFamily: T.ffDisplay, fontSize: "1.4rem", color: "#fff", marginBottom: "0.4rem", fontWeight: 400, lineHeight: 1.2 }}>
                  {door.title}
                </div>
                <div style={{ fontFamily: T.ffBody, fontSize: "0.82rem", color: T.textDkS, lineHeight: 1.6, marginBottom: "1rem" }}>
                  {door.body}
                </div>
                <div style={{ fontFamily: T.ffBody, fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: T.gold }}>
                  Selami pola →
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* Trust strip */}
      <div style={{
        position: "relative", zIndex: 2,
        borderTop: `1px solid ${T.borderDk}`,
        background: "rgba(19,18,31,0.55)",
        padding: "1.25rem 2.5rem",
        display: "flex", justifyContent: "center", alignItems: "center",
        gap: "2rem", flexWrap: "wrap",
        ...fadeUp(0.7),
      }}>
        {["15+ Tahun Studi", "3 Tradisi Keilmuan", "1 Fokus: Remedy"].map((s, i) => (
          <React.Fragment key={s}>
            <span style={{ fontFamily: T.ffBody, fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: T.textDkS }}>{s}</span>
            {i < 2 && <span style={{ width: 3, height: 3, borderRadius: "50%", background: T.gold, opacity: 0.5 }} />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

// ── Approach / 5-Layer Section ────────────────────────────────
function ApproachSection() {
  const layers = [
    { zh: "命", num: "01", title: "Analisa Karakter", desc: "Kecenderungan psikologis natural — bagaimana Anda secara bawaan mengambil keputusan.", featured: false },
    { zh: "運", num: "02", title: "Life Event",       desc: "Validasi pola keputusan masa lalu — menemukan mengapa hal-hal tertentu terus terjadi dengan cara yang sama.", featured: false },
    { zh: "時", num: "03", title: "Timing of Event", desc: "Periode stabil vs periode clash — kapan kondisi lebih kondusif untuk melangkah, kapan harus berjaga.", featured: false },
    { zh: "斷", num: "04", title: "Diagnosis",       desc: "Titik sumbatan keputusan — di mana energi bocor, di mana pola berulang menghambat langkah konkret.", featured: false },
    { zh: "策", num: "05", title: "Crafting Remedy", desc: "Dual-track action plan: BaZi tactical (langkah nyata, timing keputusan) + Vedic energetic (kalibrasi planet, puasa, gemstone, donasi). Remedy yang disesuaikan — bukan generik.", featured: true },
  ];

  return (
    <section style={{ background: T.dark, padding: "4.5rem 2.5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <span style={{ display: "block", fontFamily: T.ffBody, fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.20em", textTransform: "uppercase", color: T.gold, marginBottom: "1.25rem" }}>
          Filosofi Inti · The Approach
        </span>
        <h2 style={{ fontFamily: T.ffDisplay, fontSize: "clamp(2.2rem,4vw+0.4rem,3.8rem)", color: "#fff", fontWeight: 400, lineHeight: 1.15, marginBottom: "0.5rem" }}>
          Ini bukan tentang nasib.<br />
          <em style={{ color: T.gold }}>Ini tentang pola.</em>
        </h2>
        <hr style={{ width: 44, height: 1, background: T.gold, border: "none", margin: "1.5rem 0 2rem" }} />

        <p style={{ fontFamily: T.ffBody, fontSize: "0.95rem", color: T.textDkS, lineHeight: 1.85, maxWidth: 680, marginBottom: "3rem" }}>
          BaZi adalah sistem yang membaca interaksi pola karakteristik berdasarkan data kelahiran — untuk mengidentifikasi bagaimana seseorang cenderung membuat keputusan, di mana titik buta yang sering muncul, dan kapan kondisi lebih kondusif untuk langkah tertentu.
        </p>

        {/* 5 Layers */}
        <div style={{ display: "flex", flexDirection: "column", gap: 1, background: T.borderDk }}>
          {layers.map((layer) => (
            <div key={layer.zh} style={{
              display: "grid", gridTemplateColumns: "88px 1fr",
              border: `1px solid ${layer.featured ? T.goldBorder : T.borderDk}`,
              background: layer.featured ? "linear-gradient(90deg, rgba(184,149,90,0.06) 0%, rgba(28,27,46,0.5) 100%)" : "rgba(255,255,255,0.02)",
              transition: "border-color 0.28s ease",
            }}>
              <div style={{
                background:  layer.featured ? "rgba(184,149,90,0.10)" : "rgba(184,149,90,0.04)",
                borderRight: `1px solid ${layer.featured ? T.goldBorder : T.borderDk}`,
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                padding: "1.5rem 0.5rem", gap: "0.25rem",
              }}>
                <span style={{ fontFamily: T.ffDisplay, fontSize: "1.8rem", color: T.gold, lineHeight: 1, fontStyle: "italic" }}>{layer.zh}</span>
                <span style={{ fontFamily: T.ffBody, fontSize: "0.60rem", letterSpacing: "0.12em", textTransform: "uppercase", color: T.textDkM }}>{layer.num}</span>
              </div>
              <div style={{ padding: "1.4rem 2rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                {layer.featured && (
                  <span style={{ fontFamily: T.ffBody, fontSize: "0.60rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: T.gold, marginBottom: "0.4rem" }}>
                    ★ Fokus Utama
                  </span>
                )}
                <span style={{ fontFamily: T.ffBody, fontSize: "0.95rem", fontWeight: 600, color: T.textDkP, marginBottom: "0.4rem" }}>{layer.title}</span>
                <span style={{ fontFamily: T.ffBody, fontSize: "0.82rem", color: T.textDkS, lineHeight: 1.75 }}>{layer.desc}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "2.5rem" }}>
          <a href="pendekatan.html" style={{
            fontFamily: T.ffBody, fontSize: "0.82rem", fontWeight: 500,
            color: T.tealLight, borderBottom: `1px solid rgba(42,173,160,0.35)`,
            paddingBottom: 1, textDecoration: "none",
          }}>
            Baca metodologi lengkap →
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Testimonials ──────────────────────────────────────────────
function TestimonialsSection() {
  const testis = [
    { q: "Awalnya saya pikir ini bakal kayak baca zodiak biasa. Ternyata dia nanya detail soal keputusan bisnis yang lagi saya hadapi, terus ngaitin sama pola dari chart saya. Bukan jawaban generik yang bisa dipake buat siapa aja.", init: "E", role: "Entrepreneur · Jakarta · Wealth Path" },
    { q: "Saya datang dengan skeptis tinggi. Yang membuat saya tetap ikut adalah karena dari awal sudah dibilang ini bukan tentang meramal — dan memang, tidak ada satu pun klaim yang tidak bisa saya evaluasi sendiri.", init: "R", role: "Professional · Surabaya · Clarity & Direction" },
    { q: "Bagian yang paling kerasa itu pas dia kasih window waktu spesifik, bukan cuma analisis karakter doang. Saya jalanin remedy yang dia saranin, dan keputusan yang sebelumnya berat banget jadi lebih gampang diambil.", init: "A", role: "Business Owner · Bali · Wealth Path" },
  ];

  return (
    <section style={{ background: T.muted, padding: "5rem 2.5rem", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", left: -40, top: "50%", transform: "translateY(-50%)",
        fontFamily: T.ffDisplay, fontSize: "32rem", color: "rgba(12,60,45,0.03)",
        lineHeight: 1, pointerEvents: "none", userSelect: "none",
      }}>證</div>

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <span style={{ display: "block", fontFamily: T.ffBody, fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.20em", textTransform: "uppercase", color: T.teal, marginBottom: "1.25rem" }}>
          Hasil Nyata · Testimonial
        </span>
        <h2 style={{ fontFamily: T.ffDisplay, fontSize: "clamp(2.2rem,4vw+0.4rem,3.8rem)", color: T.textLtP, fontWeight: 400, lineHeight: 1.15, marginBottom: "3rem" }}>
          Apa yang biasanya berubah<br />
          <em style={{ color: T.teal }}>setelah satu sesi.</em>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.618rem" }}>
          {testis.map((t) => (
            <div key={t.init} style={{
              background: "#fff", border: `1px solid rgba(139,107,74,0.20)`,
              padding: "1.5rem 1.25rem",
              display: "flex", flexDirection: "column", justifyContent: "space-between",
              transition: "border-color 0.28s ease",
            }}>
              <div>
                <span style={{ fontFamily: T.ffDisplay, fontSize: "3.5rem", color: T.gold, opacity: 0.18, lineHeight: 1, display: "block", marginBottom: "0.4rem", fontStyle: "italic" }}>"</span>
                <p style={{ fontFamily: T.ffBody, fontSize: "0.82rem", color: T.textLtS, lineHeight: 1.80, fontStyle: "italic", marginBottom: "1.2rem" }}>{t.q}</p>
              </div>
              <div>
                <span style={{ fontFamily: T.ffDisplay, fontSize: "1.4rem", color: T.gold, opacity: 0.5, display: "block", marginBottom: "0.2rem", fontStyle: "italic" }}>{t.init}</span>
                <span style={{ fontFamily: T.ffBody, fontSize: "0.60rem", letterSpacing: "0.12em", color: T.textLtM, textTransform: "uppercase" }}>{t.role}</span>
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontFamily: T.ffBody, fontSize: "0.60rem", color: T.textLtM, textAlign: "center", marginTop: "3rem" }}>
          Nama, kota, dan detail disamarkan sepenuhnya atas permintaan klien.
        </p>
      </div>
    </section>
  );
}

// ── Services Section ──────────────────────────────────────────
function ServicesSection() {
  return (
    <section style={{ background: T.bg, padding: "5rem 2.5rem", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", right: -60, top: "50%", transform: "translateY(-50%)",
        fontFamily: T.ffDisplay, fontSize: "32rem", color: "rgba(26,123,107,0.04)",
        lineHeight: 1, pointerEvents: "none", userSelect: "none",
      }}>財</div>

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <span style={{ display: "block", fontFamily: T.ffBody, fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.20em", textTransform: "uppercase", color: T.teal, marginBottom: "1.25rem" }}>
          Layanan · Services
        </span>
        <h2 style={{ fontFamily: T.ffDisplay, fontSize: "clamp(2.2rem,4vw+0.4rem,3.8rem)", color: T.textLtP, fontWeight: 400, lineHeight: 1.15, marginBottom: "3rem" }}>
          Ada dua cara saya bisa<br />
          <em style={{ color: T.teal }}>membantu Anda saat ini.</em>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.618rem" }}>

          {/* Service 1 */}
          <div style={{ background: "#fff", border: `1px solid rgba(139,107,74,0.20)`, padding: "2rem 1.8rem", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", right: -8, bottom: -16, fontFamily: T.ffDisplay, fontSize: "7rem", color: T.tealLight, opacity: 0.04, lineHeight: 1 }}>明</div>
            <span style={{ display: "inline-block", fontFamily: T.ffBody, fontSize: "0.60rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: T.teal, background: "rgba(26,123,107,0.10)", border: `1px solid rgba(26,123,107,0.30)`, padding: "0.22rem 0.65rem", borderRadius: 20, marginBottom: "1.2rem" }}>Mulai dari sini</span>
            <h3 style={{ fontFamily: T.ffDisplay, fontSize: "1.45rem", fontWeight: 400, color: T.textLtP, marginBottom: "0.8rem", lineHeight: 1.2 }}>Clarity &amp; Direction Consultation</h3>
            <p style={{ fontFamily: T.ffBody, fontSize: "0.82rem", color: T.textLtS, lineHeight: 1.72, flex: 1, marginBottom: "1.2rem" }}>
              Untuk Anda yang lagi stuck di satu keputusan dan butuh sudut pandang yang lebih jernih. Kita ngobrol, saya baca polanya, dan Anda keluar dengan gambaran yang lebih jelas soal apa yang sebenernya lagi terjadi.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem", marginBottom: "1.2rem", paddingTop: "1rem", borderTop: `1px solid rgba(139,107,74,0.20)` }}>
              <span style={{ fontFamily: T.ffBody, fontSize: "0.68rem", color: T.earth }}>60 menit via Google Meet</span>
              <span style={{ fontFamily: T.ffBody, fontSize: "0.68rem", color: T.earth }}>1-on-1, privat, direkam</span>
            </div>
            <a href={WA_CLARITY} style={{ display: "inline-flex", width: "100%", justifyContent: "center", alignItems: "center", gap: "0.5rem", padding: "1rem", background: T.muted, color: T.textLtP, fontFamily: T.ffBody, fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", textDecoration: "none", borderRadius: 2, marginTop: "auto" }}>
              <WaIcon size={13} /> Tanya dulu sebelum booking
            </a>
          </div>

          {/* Service 2 */}
          <div style={{ background: "#fff", border: `1px solid rgba(184,149,90,0.35)`, padding: "2rem 1.8rem", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", right: -8, bottom: -16, fontFamily: T.ffDisplay, fontSize: "7rem", color: T.gold, opacity: 0.04, lineHeight: 1 }}>財</div>
            <span style={{ display: "inline-block", fontFamily: T.ffBody, fontSize: "0.60rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: T.gold, background: T.goldSubtle, border: `1px solid ${T.goldBorder}`, padding: "0.22rem 0.65rem", borderRadius: 20, marginBottom: "1.2rem" }}>Layanan Utama</span>
            <h3 style={{ fontFamily: T.ffDisplay, fontSize: "1.45rem", fontWeight: 400, color: T.textLtP, marginBottom: "0.8rem", lineHeight: 1.2 }}>Life Path Bazi Session</h3>
            <p style={{ fontFamily: T.ffBody, fontSize: "0.82rem", color: T.textLtS, lineHeight: 1.72, marginBottom: "1rem" }}>
              Ini yang lebih dalam — untuk keputusan bisnis, keuangan, atau relasi. 90 menit, direkam, plus ringkasan tertulis yang bisa Anda baca ulang kapan aja.
            </p>
            <div style={{ fontFamily: T.ffBody, fontSize: "0.78rem", color: T.textLtS, background: "rgba(240,237,232,0.6)", borderLeft: `2px solid ${T.goldBorder}`, padding: "0.8rem 1rem", marginBottom: "1rem", lineHeight: 1.7 }}>
              <strong style={{ display: "block", marginBottom: "0.4rem", fontSize: "0.60rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Yang Anda dapatkan:</strong>
              • Peta pola BaZi — titik kuat &amp; rawan keputusan<br/>
              • Window waktu Vedic — kapan kondisi kondusif untuk bergerak<br/>
              • Remedy konkret yang bisa langsung dijalankan<br/>
              • Opsi lapisan Javanese Esoteric untuk kasus kompleks
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem", marginBottom: "1.2rem", paddingTop: "1rem", borderTop: `1px solid rgba(139,107,74,0.20)` }}>
              <span style={{ fontFamily: T.ffBody, fontSize: "0.68rem", color: T.earth }}>90 menit via Google Meet</span>
              <span style={{ fontFamily: T.ffBody, fontSize: "0.68rem", color: T.earth }}>1-on-1, privat, direkam</span>
              <span style={{ fontFamily: T.ffBody, fontSize: "0.68rem", color: T.earth }}>+ PDF ringkasan rekomendasi</span>
            </div>
            <a href={WA_GENERAL} style={{ display: "inline-flex", width: "100%", justifyContent: "center", alignItems: "center", gap: "0.5rem", padding: "1rem", background: T.teal, color: "#fff", fontFamily: T.ffBody, fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", textDecoration: "none", borderRadius: 2, marginTop: "auto" }}>
              <WaIcon size={13} /> Siap untuk sesi? Chat aja
            </a>
          </div>

        </div>

        <div style={{ borderTop: `1px solid rgba(139,107,74,0.20)`, paddingTop: "1.5rem", marginTop: "2rem", textAlign: "center", fontFamily: T.ffBody, fontSize: "0.82rem", color: T.textLtM }}>
          Belum yakin mana yang paling pas?{" "}
          <a href={WA_BASE + encodeURIComponent("Halo, saya belum tahu harus mulai dari mana.")} style={{ color: T.teal, fontWeight: 500, textDecoration: "underline", textDecorationColor: "rgba(26,123,107,0.35)" }}>
            Cerita dulu kondisinya via WhatsApp → saya yang bantu memilih
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Final CTA Section ─────────────────────────────────────────
function CtaSection() {
  return (
    <section style={{
      position: "relative", overflow: "hidden",
      background: T.darkD,
      padding: "8rem 2.5rem",
      textAlign: "center",
    }}>
      {/* bg overlay */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(19,18,31,0.82) 0%, rgba(19,18,31,0.94) 100%)" }} />
      {/* decorative zh */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontFamily: T.ffDisplay, fontSize: "clamp(14rem,24vw,28rem)", color: T.gold, opacity: 0.025, lineHeight: 1, pointerEvents: "none" }}>財</div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 860, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <span style={{ fontFamily: T.ffBody, fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.20em", textTransform: "uppercase", color: T.gold, marginBottom: "1.25rem", display: "block" }}>Mulai Percakapan</span>
        <h2 style={{ fontFamily: T.ffDisplay, fontSize: "clamp(2rem,4vw+0.4rem,3.5rem)", color: "#fff", fontWeight: 400, lineHeight: 1.2, maxWidth: "26ch", marginBottom: "1.25rem" }}>
          Remedy yang berhasil bukan yang membuat hidup sempurna seketika — tapi yang membuat{" "}
          <em style={{ color: T.gold }}>gejolak risiko seminimal mungkin.</em>
        </h2>
        <hr style={{ width: 44, height: 1, background: T.gold, border: "none", margin: "0 0 2rem" }} />
        <p style={{ fontFamily: T.ffBody, fontSize: "0.95rem", color: T.textDkS, maxWidth: "52ch", lineHeight: 1.8, marginBottom: "2.5rem" }}>
          Jika kerangka ini masuk akal untuk situasi Anda sekarang — tidak perlu memutuskan apa-apa dulu. Mari kita bicarakan situasinya langsung, santai.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1.2rem", justifyContent: "center" }}>
          <a href={WA_GENERAL} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "1.2rem 2.2rem", background: "#128C7E", color: "#fff", fontFamily: T.ffBody, fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", textDecoration: "none", borderRadius: 2, boxShadow: "0 2px 14px rgba(18,140,126,0.28)" }}>
            <WaIcon size={15} /> Mari kita lihat situasi Anda dulu
          </a>
          <a href="pendekatan.html" style={{ display: "inline-flex", alignItems: "center", padding: "1.2rem 2.2rem", border: `1.5px solid ${T.borderDk}`, background: "transparent", color: T.textDkP, fontFamily: T.ffBody, fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", textDecoration: "none", borderRadius: 2 }}>
            Penasaran cara kerjanya?
          </a>
        </div>
        <p style={{ fontFamily: T.ffBody, fontSize: "0.68rem", color: T.textDkM, fontStyle: "italic", marginTop: "1.2rem" }}>Tidak ada komitmen di percakapan awal.</p>
      </div>
    </section>
  );
}

// ── Root Component ────────────────────────────────────────────
export default function LifePathHomepage() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ fontFamily: T.ffBody, background: T.bg, color: T.textLtP, overflowX: "hidden" }}>

      {/* NAV */}
      <nav style={{
        position:       "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        height:         62,
        display:        "flex", alignItems: "center", justifyContent: "space-between",
        padding:        "0 2.5rem",
        background:     scrolled ? "rgba(19,18,31,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom:   scrolled ? `1px solid ${T.borderDk}` : "1px solid transparent",
        boxShadow:      scrolled ? `0 1px 0 ${T.borderDk}, 0 4px 24px rgba(0,0,0,0.18)` : "none",
        transition:     "background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
      }}>
        <a href="index.html" style={{ fontFamily: T.ffDisplay, fontStyle: "italic", fontSize: "1.08rem", color: T.gold, letterSpacing: "-0.01em", textDecoration: "none" }}>
          Life Path · 北鷹
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: "2.618rem" }}>
          {[["Pendekatan", "pendekatan.html"], ["Tentang", "about.html"], ["FAQ", "faq.html"]].map(([label, href]) => (
            <a key={label} href={href} style={{ fontFamily: T.ffBody, fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: T.textDkS, textDecoration: "none" }}>
              {label}
            </a>
          ))}
          <a href={WA_GENERAL} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.65rem 1.20rem", background: T.teal, color: "#fff", fontFamily: T.ffBody, fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", textDecoration: "none", borderRadius: 2 }}>
            <WaIcon size={12} /> Konsultasi
          </a>
        </div>
      </nav>

      {/* SECTIONS */}
      <HeroSection />
      <ApproachSection />
      <ServicesSection />
      <TestimonialsSection />
      <CtaSection />

      {/* FOOTER */}
      <footer style={{ background: T.darkD, borderTop: `1px solid ${T.borderDk}`, padding: "5rem 2.5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: "4.236rem", marginBottom: "3.25rem" }}>
          <div>
            <span style={{ fontFamily: T.ffDisplay, fontStyle: "italic", fontSize: "1.15rem", color: T.gold, display: "block", marginBottom: "0.75rem" }}>Life Path · 北鷹</span>
            <p style={{ fontFamily: T.ffBody, fontSize: "0.82rem", color: T.textDkS, lineHeight: 1.65, maxWidth: "28ch", marginBottom: "0.5rem" }}>Saya baca pola dari data lahir Anda, kemudian kita ubah jadi langkah konkret. Guide, not guru.</p>
            <span style={{ fontFamily: T.ffBody, fontSize: "0.60rem", letterSpacing: "0.14em", textTransform: "uppercase", color: T.textDkM }}>Guide, Not Guru.</span>
          </div>
          {[
            { label: "Halaman", links: [["Home","index.html"],["Pendekatan","pendekatan.html"],["Tentang","about.html"],["FAQ","faq.html"],["Artikel","artikel.html"]] },
            { label: "Layanan",  links: [["Wealth Path","yang-anda-dapatkan.html#wealth"],["Love Path","yang-anda-dapatkan.html#love"],["Clarity & Direction","yang-anda-dapatkan.html"]] },
            { label: "Kontak",  links: [["Chat via WhatsApp","https://wa.me/6282117175544"],["FAQ","faq.html"]] },
          ].map(col => (
            <div key={col.label}>
              <span style={{ fontFamily: T.ffBody, fontSize: "0.60rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: T.textDkP, display: "block", marginBottom: "1rem" }}>{col.label}</span>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {col.links.map(([label, href]) => (
                  <a key={label} href={href} style={{ fontFamily: T.ffBody, fontSize: "0.82rem", color: T.textDkS, textDecoration: "none" }}>{label}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ maxWidth: 1200, margin: "0 auto", borderTop: `1px solid ${T.borderDk}`, padding: "1.5rem 0 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: T.ffBody, fontSize: "0.60rem", color: T.textDkM }}>© 2026 Life Path by DJ Nordhawk. All rights reserved.</span>
          <span style={{ fontFamily: T.ffBody, fontSize: "0.60rem", letterSpacing: "0.14em", textTransform: "uppercase", color: T.textDkM }}>Guide, Not Guru.</span>
        </div>
      </footer>

    </div>
  );
}
