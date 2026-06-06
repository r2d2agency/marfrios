import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-church.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Igreja Graça e Paz — Comunidade de Fé" },
      { name: "description", content: "Uma comunidade acolhedora de fé, esperança e amor. Junte-se a nós nos cultos, estudos bíblicos e eventos." },
      { property: "og:title", content: "Igreja Graça e Paz" },
      { property: "og:description", content: "Uma comunidade acolhedora de fé, esperança e amor." },
    ],
  }),
  component: Index,
});

const services = [
  { day: "Domingo", time: "10h00", title: "Culto de Celebração" },
  { day: "Quarta", time: "19h30", title: "Estudo Bíblico" },
  { day: "Sexta", time: "20h00", title: "Reunião de Oração" },
  { day: "Sábado", time: "16h00", title: "Encontro dos Jovens" },
];

const events = [
  { date: "15 JUN", title: "Retiro de Casais", location: "Sítio Bethel" },
  { date: "22 JUN", title: "Batismo nas Águas", location: "Templo Sede" },
  { date: "06 JUL", title: "Conferência de Adoração", location: "Templo Sede" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="absolute top-0 z-20 w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-background">
          <a href="#" className="font-display text-xl tracking-wide">
            Graça <span className="text-accent">&</span> Paz
          </a>
          <nav className="hidden gap-10 text-sm font-light tracking-wide md:flex">
            <a href="#sobre" className="hover:text-accent transition">Sobre</a>
            <a href="#cultos" className="hover:text-accent transition">Cultos</a>
            <a href="#eventos" className="hover:text-accent transition">Eventos</a>
            <a href="#contato" className="hover:text-accent transition">Contato</a>
          </nav>
          <a href="#contato" className="hidden border border-background/40 px-5 py-2 text-xs uppercase tracking-[0.2em] hover:bg-background hover:text-foreground transition md:inline-block">
            Visite-nos
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <img src={heroImage} alt="Interior da igreja com luz dourada" className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-vignette absolute inset-0" />
        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center text-background">
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-accent">Desde 1978</p>
          <h1 className="font-display text-5xl leading-[1.05] text-balance md:text-7xl lg:text-8xl">
            Onde a fé encontra<br /><em className="text-accent font-normal">a comunidade.</em>
          </h1>
          <div className="gold-rule my-10 w-32" />
          <p className="max-w-xl text-base font-light leading-relaxed text-background/85 md:text-lg">
            Uma igreja que acredita no poder transformador do evangelho,
            no acolhimento sincero e na presença viva de Deus em cada encontro.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#cultos" className="bg-accent px-8 py-3 text-xs uppercase tracking-[0.25em] text-ink hover:bg-background transition">
              Horários de Culto
            </a>
            <a href="#sobre" className="border border-background/50 px-8 py-3 text-xs uppercase tracking-[0.25em] hover:bg-background hover:text-foreground transition">
              Conheça-nos
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-background/60 text-xs uppercase tracking-[0.3em] animate-pulse">
          role para baixo
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="border-b border-border py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">01 — Sobre nós</p>
            <div className="gold-rule mt-4 w-16" />
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-4xl leading-tight text-balance md:text-6xl">
              Uma comunidade enraizada na <em className="text-primary">graça</em>, voltada para servir.
            </h2>
            <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
              Há mais de quatro décadas, nossa congregação tem sido um lugar de refúgio,
              ensino bíblico sólido e adoração genuína. Cremos que a igreja é mais do que
              um edifício — é o povo de Deus reunido para amar, servir e proclamar.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {[
                { n: "1.200+", l: "Membros ativos" },
                { n: "48", l: "Anos de história" },
                { n: "12", l: "Ministérios" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-5xl text-primary">{s.n}</div>
                  <div className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CULTOS */}
      <section id="cultos" className="bg-primary py-32 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent">02 — Programação</p>
              <div className="gold-rule mt-4 w-16" />
              <h2 className="mt-6 font-display text-5xl leading-tight md:text-6xl">
                Horários dos<br /><em className="text-accent">cultos & encontros</em>
              </h2>
            </div>
            <p className="max-w-sm text-sm font-light leading-relaxed text-primary-foreground/70">
              Você é nosso convidado de honra. Venha como está — todos são bem-vindos à mesa do Senhor.
            </p>
          </div>

          <div className="grid gap-px bg-primary-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="bg-primary p-10 transition hover:bg-primary-foreground/5">
                <div className="text-xs uppercase tracking-[0.3em] text-accent">{s.day}</div>
                <div className="mt-6 font-display text-6xl">{s.time}</div>
                <div className="mt-6 border-t border-primary-foreground/15 pt-4 font-light">{s.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTOS */}
      <section id="eventos" className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">03 — Agenda</p>
            <div className="gold-rule mt-4 w-16" />
            <h2 className="mt-6 font-display text-5xl leading-tight md:text-6xl">
              Próximos <em className="text-primary">eventos</em>
            </h2>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {events.map((e) => (
              <a key={e.title} href="#" className="group flex flex-col gap-4 py-8 transition hover:bg-secondary/40 md:flex-row md:items-center md:gap-12 md:px-4">
                <div className="font-display text-3xl text-primary md:w-32">{e.date}</div>
                <div className="flex-1 font-display text-2xl md:text-3xl">{e.title}</div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">{e.location}</div>
                <div className="text-2xl text-accent opacity-0 transition group-hover:opacity-100 md:block">→</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO / CTA */}
      <section id="contato" className="bg-ink py-32 text-background">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">04 — Venha nos visitar</p>
            <div className="gold-rule mt-4 w-16" />
            <h2 className="mt-6 font-display text-5xl leading-tight md:text-6xl">
              Estamos guardando<br /><em className="text-accent">um lugar para você.</em>
            </h2>
            <p className="mt-8 max-w-md text-base font-light leading-relaxed text-background/70">
              Seja para uma conversa, uma oração ou simplesmente para conhecer —
              nossas portas estão sempre abertas.
            </p>
          </div>
          <div className="space-y-8 font-light">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-accent">Endereço</div>
              <div className="mt-3 text-xl">Rua das Oliveiras, 142<br />Centro — São Paulo, SP</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-accent">Contato</div>
              <div className="mt-3 text-xl">contato@gracaepaz.org<br />(11) 3000-0000</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-accent">Redes</div>
              <div className="mt-3 flex gap-6 text-sm uppercase tracking-wider">
                <a href="#" className="border-b border-accent/40 pb-1 hover:text-accent">Instagram</a>
                <a href="#" className="border-b border-accent/40 pb-1 hover:text-accent">YouTube</a>
                <a href="#" className="border-b border-accent/40 pb-1 hover:text-accent">Spotify</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink border-t border-background/10 py-10 text-background/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs uppercase tracking-[0.25em] md:flex-row">
          <div className="font-display text-base normal-case tracking-normal text-background">
            Graça <span className="text-accent">&</span> Paz
          </div>
          <div>© {new Date().getFullYear()} — Todos os direitos reservados</div>
        </div>
      </footer>
    </div>
  );
}
