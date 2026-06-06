import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Award, Truck, Tag, Users, MessageCircle, Calendar, Store,
  MapPin, Phone, Menu, X, ChevronLeft, ChevronRight,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import logo from "@/assets/marfrios-logo.png";
import hero from "@/assets/hero-products.jpg";
import pLeite from "@/assets/prod-leite.jpg";
import pQueijos from "@/assets/prod-queijos.jpg";
import pIogurtes from "@/assets/prod-iogurtes.jpg";
import pManteiga from "@/assets/prod-manteiga.jpg";
import pRequeijao from "@/assets/prod-requeijao.jpg";
import pOutros from "@/assets/prod-outros.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MarFrios Distribuidora — Atacadista de Laticínios em São José do Rio Preto" },
      { name: "description", content: "Distribuidora de laticínios para pizzarias, restaurantes e lanchonetes. Qualidade, variedade e preço justo. Fale conosco pelo WhatsApp (17) 99122-0670." },
      { property: "og:title", content: "MarFrios Distribuidora — Atacadista de Laticínios" },
      { property: "og:description", content: "Laticínios de qualidade para o seu negócio. Atacado e varejo em São José do Rio Preto - SP." },
    ],
  }),
  component: Page,
});

const WHATSAPP = "5517991220670";
const PHONE_DISPLAY = "(17) 99122-0670";
const waLink = `https://wa.me/${WHATSAPP}`;

const nav = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Vantagens", href: "#vantagens" },
  { label: "Contato", href: "#contato" },
];

const heroFeatures = [
  { icon: Award, label: "Produtos de Qualidade" },
  { icon: Truck, label: "Entrega Rápida e Segura" },
  { icon: Tag, label: "Preços Competitivos" },
  { icon: Users, label: "Atendimento Especializado" },
];

const diferenciais = [
  { icon: Award, title: "Qualidade Garantida", desc: "Trabalhamos com as melhores marcas e produtos selecionados." },
  { icon: Tag, title: "Preço Competitivo", desc: "Condições especiais para atacadistas, com preços que cabem no seu negócio." },
  { icon: Truck, title: "Entrega Rápida", desc: "Agilidade e compromisso para garantir que seu pedido chegue no prazo." },
  { icon: Users, title: "Atendimento Especializado", desc: "Equipe pronta para atender e oferecer as melhores soluções." },
];

const produtos = [
  { img: pLeite, label: "Leites e Bebidas Lácteas" },
  { img: pQueijos, label: "Queijos" },
  { img: pIogurtes, label: "Iogurtes e Sobremesas" },
  { img: pManteiga, label: "Manteigas e Cremes" },
  { img: pRequeijao, label: "Requeijões e Cremes de Queijo" },
  { img: pOutros, label: "Outros Laticínios" },
];

const horarios = [
  { icon: Calendar, top: "Seg a Sex", bottom: "8h às 20h" },
  { icon: Calendar, top: "Sábado", bottom: "até 19h" },
  { icon: Calendar, top: "Domingo", bottom: "até 12:00h" },
  { icon: Store, top: "Atacado e Varejo", bottom: "Tudo para seu negócio!" },
];

/* Fade-in on scroll */
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); obs.disconnect(); }
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`,
      }}
      className={className}
    >
      {children}
    </div>
  );
}

function Page() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="#home" className="flex items-center">
            <img src={logo} alt="MarFrios Distribuidora" className="h-9 w-auto" />
            <span className="ml-1 hidden text-[10px] font-bold tracking-[0.18em] text-brand sm:inline">
              DISTRIBUIDORA
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-foreground/80 transition hover:text-brand">
                {n.label}
              </a>
            ))}
          </nav>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-cta transition hover:bg-brand-dark hover:scale-[1.03] md:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden rounded-md p-2 text-foreground"
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-border bg-background lg:hidden">
            <nav className="flex flex-col gap-1 px-6 py-4">
              {nav.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2 text-sm font-medium text-foreground/80 hover:text-brand">
                  {n.label}
                </a>
              ))}
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white">
                <MessageCircle className="h-4 w-4" /> {PHONE_DISPLAY}
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative pt-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 md:py-20 lg:grid-cols-2">
          {/* LEFT */}
          <div className="animate-fade-up">
            <h1 className="text-5xl font-black leading-[1.05] md:text-6xl lg:text-7xl">
              <span className="text-foreground/85">ATACADISTA DE</span>
              <br />
              <span className="text-brand">LATICÍNIOS</span>
            </h1>
            <div className="mt-5 h-1 w-20 rounded-full bg-brand" />
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Qualidade, variedade e preço justo para o seu negócio.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {heroFeatures.map((f) => (
                <div key={f.label} className="flex flex-col items-center text-center sm:items-start sm:text-left">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <div className="mt-3 text-xs font-semibold leading-snug text-foreground/80">
                    {f.label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-white shadow-cta transition hover:bg-brand-dark hover:scale-[1.03]"
            >
              <MessageCircle className="h-5 w-5" /> Fale pelo WhatsApp
            </a>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-card">
              <img
                src={hero}
                alt="Fachada MarFrios com produtos lácteos"
                className="h-full w-full object-cover"
                width={1024}
                height={1024}
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden h-24 w-24 rounded-full bg-yellow/90 shadow-card md:block" />
            <div className="absolute -top-4 -right-4 hidden h-16 w-16 rounded-full bg-brand/90 shadow-card md:block" />
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section id="vantagens" className="relative overflow-hidden bg-background py-24">
        {/* decorative */}
        <div className="pointer-events-none absolute -left-10 top-10 hidden h-40 w-40 rounded-full bg-yellow/20 blur-3xl md:block" />
        <div className="pointer-events-none absolute -right-10 bottom-10 hidden h-40 w-40 rounded-full bg-brand/10 blur-3xl md:block" />

        <Reveal className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-black md:text-4xl">
            Por que escolher a <span className="text-brand">MarFrios</span>?
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-brand" />

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {diferenciais.map((d, i) => (
              <Reveal key={d.title} delay={i * 100}>
                <div className="group flex flex-col items-center text-center transition">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand transition group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                    <d.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 text-base font-bold">{d.title}</h3>
                  <p className="mt-2 max-w-[14rem] text-sm text-muted-foreground">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      {/* PRODUTOS */}
      <section id="produtos" className="bg-soft py-24">
        <Reveal className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-black md:text-4xl">
            Nossos <span className="text-brand">Produtos</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-brand" />

          <div className="mt-16 grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
            {produtos.map((p, i) => (
              <Reveal key={p.label} delay={i * 80}>
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center">
                  <div className="relative h-32 w-32 overflow-hidden rounded-full shadow-card ring-4 ring-white transition duration-300 group-hover:-translate-y-1 group-hover:shadow-cta">
                    <img src={p.img} alt={p.label} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                  </div>
                  <div className="mt-5 max-w-[10rem] text-center text-sm font-bold text-foreground">
                    {p.label}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      {/* SOBRE (compact section to honor nav anchor) */}
      <section id="sobre" className="bg-background py-24">
        <Reveal className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Sobre a MarFrios</span>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Distribuidora especializada em <span className="text-brand">laticínios</span> para o seu negócio.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Atendemos pizzarias, restaurantes, lanchonetes e estabelecimentos comerciais
              com produtos selecionados das melhores marcas. Atacado e varejo com o compromisso
              de oferecer qualidade, preço competitivo e atendimento de verdade.
            </p>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-cta transition hover:bg-brand-dark hover:scale-[1.03]">
              <MessageCircle className="h-4 w-4" /> Solicitar orçamento
            </a>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              { n: "1000+", l: "Clientes atendidos" },
              { n: "10+", l: "Anos de mercado" },
              { n: "100%", l: "Compromisso" },
              { n: "24h", l: "Resposta WhatsApp" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl bg-soft p-6 shadow-soft">
                <div className="text-3xl font-black text-brand">{s.n}</div>
                <div className="mt-1 text-sm font-medium text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* HORÁRIO — Red Stripe */}
      <section className="bg-brand py-20 text-white">
        <Reveal className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-black md:text-4xl">
            Horário de <span className="text-yellow">Atendimento</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-yellow" />

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {horarios.map((h, i) => (
              <Reveal key={h.top} delay={i * 100}>
                <div className="flex flex-col items-center border-white/15 text-center lg:border-r last:border-r-0">
                  <h.icon className="h-10 w-10 text-white" strokeWidth={1.8} />
                  <div className="mt-4 text-base font-semibold">{h.top}</div>
                  <div className="mt-1 text-lg font-bold">{h.bottom}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CONTATO / LOCALIZAÇÃO */}
      <section id="contato" className="bg-background py-24">
        <Reveal className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-black md:text-4xl">
            Onde <span className="text-brand">Estamos</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-brand" />

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xl font-bold">{PHONE_DISPLAY}</div>
                  <div className="mt-1 text-sm text-muted-foreground">Fale conosco pelo WhatsApp</div>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="text-base leading-relaxed">
                  <div className="font-semibold">Av. Alberto Olivieri, 2397</div>
                  <div className="text-muted-foreground">
                    Jardim Anielli, São José do Rio Preto - SP
                    <br />
                    15044-215
                  </div>
                </div>
              </div>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-white shadow-cta transition hover:bg-brand-dark hover:scale-[1.03]"
              >
                <MessageCircle className="h-5 w-5" /> Fale pelo WhatsApp
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-card">
              <iframe
                title="MarFrios localização"
                src="https://www.google.com/maps?q=Av.+Alberto+Olivieri,+2397,+Jardim+Anielli,+S%C3%A3o+Jos%C3%A9+do+Rio+Preto+-+SP&output=embed"
                className="h-[360px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand py-6 text-center text-sm text-white/95">
        © {new Date().getFullYear()} MarFrios Distribuidora. Todos os direitos reservados.
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-cta transition hover:scale-110 animate-float"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
