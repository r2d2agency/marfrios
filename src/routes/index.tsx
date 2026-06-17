import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Award, Truck, Tag, Users, MessageCircle, Calendar, Store,
  MapPin, Phone, Menu, X, ChevronLeft, ChevronRight,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import logo from "@/assets/marfrios-logo.png";
import hero from "@/assets/hero-products.jpg.asset.json";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import fachadaAsset from "@/assets/marfrios-fachada.jpg.asset.json";
const pSalame = { url: "/produtos/salame.jpg" };
const pBacon = { url: "/produtos/bacon.jpg" };
const pBatata = { url: "/produtos/batata.jpg" };
const pCatupiry = { url: "/produtos/catupiry.jpg" };
const pMussFat = { url: "/produtos/mussarela-fatiada.jpg" };
const pMussPed = { url: "/produtos/mussarela-pedaco.jpg" };

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
  { img: pSalame.url, label: "Salame" },
  { img: pBacon.url, label: "Bacon Fatiado" },
  { img: pMussFat.url, label: "Queijo Mussarela Fatiado" },
  { img: pMussPed.url, label: "Queijo Mussarela em Peça" },
  { img: pCatupiry.url, label: "Requeijão Catupiry" },
  { img: pBatata.url, label: "Batata Frita Congelada" },
  { img: "/produtos/galeria-laticinios.jpg", label: "Leite, Creme de Leite e Nutella" },
  { img: "/produtos/galeria-conservas.jpg", label: "Conservas, Palmito e Molhos" },
  { img: "/produtos/galeria-ovos.jpg", label: "Ovos por Atacado" },
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

const heroSlides = [
  {
    img: "/produtos/hero-marfrios.webp",
    eyebrow: "MarFrios Distribuidora",
    titleTop: "MARCAS QUE",
    titleAccent: "VOCÊ CONFIA",
    desc: "Catupiry, mussarela e os melhores laticínios para o seu negócio.",
  },
  {
    img: hero.url,
    eyebrow: "MarFrios Distribuidora",
    titleTop: "ATACADISTA DE",
    titleAccent: "LATICÍNIOS",
    desc: "Qualidade, variedade e preço justo para o seu negócio.",
  },
  {
    img: heroSlide2,
    eyebrow: "Estoque sempre completo",
    titleTop: "VARIEDADE QUE",
    titleAccent: "ABASTECE",
    desc: "Mais de mil clientes atendidos com agilidade e compromisso.",
  },
  {
    img: heroSlide3,
    eyebrow: "Parceiros das melhores cozinhas",
    titleTop: "FEITO PARA",
    titleAccent: "SUA PIZZARIA",
    desc: "Mozarela, queijos e laticínios selecionados para o seu negócio.",
  },
];

function HeroSlideshow() {
  const autoplay = useRef(
    Autoplay({ delay: 5500, stopOnInteraction: false, stopOnMouseEnter: false }),
  );
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 }, [autoplay.current]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section id="home" className="relative pt-20">
      <div className="relative h-[88vh] min-h-[600px] w-full overflow-hidden">
        {/* slides */}
        <div className="absolute inset-0" ref={emblaRef}>
          <div className="flex h-full">
            {heroSlides.map((s, i) => (
              <div key={i} className="relative h-full min-w-0 shrink-0 grow-0 basis-full overflow-hidden">
                <img
                  src={s.img}
                  alt=""
                  className={`h-full w-full object-cover ${index === i ? "animate-kenburns" : ""}`}
                  width={1920}
                  height={1080}
                />
              </div>
            ))}
          </div>
        </div>

        {/* gradient: image -> white at bottom + soft left wash for legibility */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/85 via-white/40 to-transparent lg:from-white/75 lg:via-white/20" />

        {/* text overlay */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
          <div key={index} className="max-w-xl">
            <div className="animate-slide-in-left text-xs font-bold uppercase tracking-[0.22em] text-brand" style={{ animationDelay: "0.05s" }}>
              {heroSlides[index].eyebrow}
            </div>
            <h1 className="mt-4 text-3xl font-black leading-[1.02] md:text-4xl lg:text-5xl">
              <span className="block animate-slide-in-left text-foreground/85" style={{ animationDelay: "0.15s" }}>
                {heroSlides[index].titleTop}
              </span>
              <span className="block animate-slide-in-left text-brand" style={{ animationDelay: "0.3s" }}>
                {heroSlides[index].titleAccent}
              </span>
            </h1>
            <div className="mt-5 h-1 w-20 rounded-full bg-brand animate-slide-in-left" style={{ animationDelay: "0.45s" }} />
            <p className="mt-6 max-w-md text-lg text-muted-foreground animate-slide-in-left" style={{ animationDelay: "0.55s" }}>
              {heroSlides[index].desc}
            </p>

            <div className="mt-8 grid max-w-md grid-cols-2 gap-4 sm:grid-cols-4 animate-slide-in-left" style={{ animationDelay: "0.7s" }}>
              {heroFeatures.map((f) => (
                <div key={f.label} className="flex flex-col items-center text-center sm:items-start sm:text-left">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand/10 text-brand backdrop-blur">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-2 text-[11px] font-semibold leading-snug text-foreground/80">
                    {f.label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-white shadow-cta transition hover:bg-brand-dark hover:scale-[1.03] animate-slide-in-left"
              style={{ animationDelay: "0.85s" }}
            >
              <MessageCircle className="h-5 w-5" /> Fale pelo WhatsApp
            </a>
          </div>
        </div>

        {/* arrows */}
        <button
          onClick={() => emblaApi?.scrollPrev()}
          aria-label="Slide anterior"
          className="absolute left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-brand shadow-card backdrop-blur transition hover:bg-brand hover:text-white md:flex"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          aria-label="Próximo slide"
          className="absolute right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-brand shadow-card backdrop-blur transition hover:bg-brand hover:text-white md:flex"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* dots */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Ir para slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                index === i ? "w-8 bg-brand" : "w-2 bg-brand/30 hover:bg-brand/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProdutosGaleria() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? null : (i + 1) % produtos.length));
      if (e.key === "ArrowLeft") setLightbox((i) => (i === null ? null : (i - 1 + produtos.length) % produtos.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <>
      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
        {produtos.map((p, i) => (
          <button
            key={p.label}
            type="button"
            onClick={() => setLightbox(i)}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-border/60 transition hover:-translate-y-1 hover:shadow-cta focus:outline-none focus:ring-2 focus:ring-brand"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={p.img}
                alt={p.label}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-3 pt-10 text-left">
              <div className="text-sm font-bold leading-tight text-white drop-shadow sm:text-base">{p.label}</div>
            </div>
          </button>
        ))}
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Fechar"
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label="Anterior"
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i === null ? null : (i - 1 + produtos.length) % produtos.length)); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label="Próximo"
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i === null ? null : (i + 1) % produtos.length)); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <figure className="flex max-h-full max-w-5xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={produtos[lightbox].img}
              alt={produtos[lightbox].label}
              className="max-h-[80vh] w-auto rounded-xl object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center text-base font-semibold text-white">
              {produtos[lightbox].label}
            </figcaption>
          </figure>
        </div>
      )}
    </>
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
            <img src={logo} alt="MarFrios" className="h-9 w-auto" />
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
      <HeroSlideshow />


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

          <ProdutosGaleria />
        </Reveal>
      </section>


      {/* SOBRE */}
      <section id="sobre" className="bg-background py-24">
        <Reveal className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
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
            <div className="overflow-hidden rounded-2xl shadow-card ring-1 ring-border/60">
              <img
                src={fachadaAsset.url}
                alt="Fachada da MarFrios Distribuidora com frota de vans"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4">
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

          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {horarios.map((h, i) => (
              <Reveal key={h.top} delay={i * 100}>
                <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-white/10 px-4 py-5 text-center ring-1 ring-white/15 backdrop-blur-sm transition hover:bg-white/15 sm:py-7">
                  <h.icon className="h-8 w-8 text-yellow sm:h-10 sm:w-10" strokeWidth={1.8} />
                  <div className="mt-3 text-sm font-semibold sm:text-base">{h.top}</div>
                  <div className="mt-1 text-base font-extrabold sm:text-lg">{h.bottom}</div>
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
        <div>© {new Date().getFullYear()} MarFrios Distribuidora. Todos os direitos reservados.</div>
        <div className="mt-1 text-xs text-white/80">CNPJ: 35.502.133/0001-40</div>
        <div className="mt-1 text-xs text-white/80">Design by TNS R2D2</div>
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
