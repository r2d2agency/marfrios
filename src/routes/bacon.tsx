import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, MessageCircle, X } from "lucide-react";
import logo from "@/assets/marfrios-logo.png";

const WHATSAPP = "5517991220670";
const waLink = `https://wa.me/${WHATSAPP}`;

const bacons = [
  { img: "/congelados/bacon-marfrios-fatiado.webp", label: "Bacon MarFrios Fatiado 1kg" },
  { img: "/congelados/bacon-paleta-marfrios.webp", label: "Bacon Paleta Fatiado MarFrios 1kg" },
  { img: "/congelados/bacon-cubos-marfrios.webp", label: "Bacon em Cubos MarFrios 1kg" },
  { img: "/congelados/bacon-frigomarla.webp", label: "Bacon Defumado Frigo Marla 1kg" },
  { img: "/congelados/papada-fatias-misterbeef.webp", label: "Papada Suína Defumada em Fatias Mister Beef 1kg" },
  { img: "/congelados/papada-paleta-cubos-misterbeef.webp", label: "Papada e Paleta Suína Defumada em Cubos Mister Beef 1kg" },
];

export const Route = createFileRoute("/bacon")({
  head: () => ({
    meta: [
      { title: "Bacon — MarFrios Distribuidora" },
      { name: "description", content: "Linha completa de bacon MarFrios: fatiado, em cubos, paleta, papada defumada e mais para o seu negócio." },
      { property: "og:title", content: "Bacon — MarFrios Distribuidora" },
      { property: "og:description", content: "Bacon fatiado, em cubos, paleta e papada defumada para pizzarias, lanchonetes e restaurantes." },
    ],
  }),
  component: BaconPage,
});

function BaconPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? null : (i + 1) % bacons.length));
      if (e.key === "ArrowLeft") setLightbox((i) => (i === null ? null : (i - 1 + bacons.length) % bacons.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-6">
          <Link to="/" className="flex items-center shrink-0">
            <img src={logo} alt="MarFrios" className="h-9 w-auto" />
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            <a href="/#sobre" className="text-sm font-semibold text-foreground/80 transition hover:text-brand">Sobre</a>
            <a href="/#produtos" className="text-sm font-semibold text-foreground/80 transition hover:text-brand">Produtos</a>
            <a href="/#vantagens" className="text-sm font-semibold text-foreground/80 transition hover:text-brand">Vantagens</a>
            <a href="/#contato" className="text-sm font-semibold text-foreground/80 transition hover:text-brand">Contato</a>
          </nav>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-soft px-4 py-2 text-sm font-semibold text-foreground/80 transition hover:bg-brand hover:text-white shrink-0"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar
          </Link>
        </div>
      </header>

      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">MarFrios</span>
            <h1 className="mt-3 text-3xl font-black md:text-5xl">
              Nossa linha de <span className="text-brand">Bacon</span>
            </h1>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-brand" />
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground">
              Bacon fatiado, em cubos, paleta e papada defumada para o seu negócio.
              Clique em uma imagem para ampliar ou fale conosco para fazer seu pedido.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {bacons.map((p, i) => (
              <button
                key={p.label + i}
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

          <div className="mt-14 flex justify-center">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-white shadow-cta transition hover:bg-brand-dark hover:scale-[1.03]"
            >
              <MessageCircle className="h-5 w-5" /> Pedir pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

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
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i === null ? null : (i - 1 + bacons.length) % bacons.length)); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label="Próximo"
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i === null ? null : (i + 1) % bacons.length)); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <figure className="flex max-h-full max-w-5xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={bacons[lightbox].img}
              alt={bacons[lightbox].label}
              className="max-h-[80vh] w-auto rounded-xl object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center text-base font-semibold text-white">
              {bacons[lightbox].label}
            </figcaption>
          </figure>
        </div>
      )}

      <footer className="bg-brand py-6 text-center text-sm text-white/95">
        <div>© {new Date().getFullYear()} MarFrios Distribuidora. Todos os direitos reservados.</div>
      </footer>
    </div>
  );
}
