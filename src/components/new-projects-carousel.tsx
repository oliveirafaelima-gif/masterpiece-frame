import { Link } from "@tanstack/react-router";

import { RevealRow } from "@/components/reveal-row";
import { installations, type Installation } from "@/data/installations";

const ITEM_CLASS = "w-[78%] shrink-0 sm:w-[46%] lg:w-[31%]";

function ProjectCard({ item }: { item: Installation }) {
  return (
    <Link to="/instalacoes" className="group block focus-visible:outline-none">
      <div className="relative overflow-hidden bg-muted">
        <img
          src={item.image}
          alt={`Visualização provisória da instalação ${item.title}`}
          loading="lazy"
          width={item.imageWidth}
          height={item.imageHeight}
          className="block aspect-video h-auto w-full object-cover transition duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-xl">{item.title}</h3>
        <span className="shrink-0 text-xs text-muted-foreground">{item.year}</span>
      </div>
      <p className="mt-1 text-xs uppercase text-muted-foreground">{item.status}</p>
    </Link>
  );
}

export function NewProjectsCarousel() {
  return (
    <section className="page-shell border-t border-border py-20 sm:py-28">
      <div className="flex items-end justify-between gap-6 border-b border-border pb-6">
        <div>
          <p className="eyebrow">Espaço e matéria</p>
          <h2 className="mt-3 font-display text-4xl sm:text-6xl">Novos projetos</h2>
        </div>
        <Link
          to="/instalacoes"
          className="hidden shrink-0 text-xs uppercase text-muted-foreground transition-colors hover:text-accent sm:inline"
        >
          Ver instalações →
        </Link>
      </div>

      <div className="mt-10">
        <RevealRow
          items={installations}
          renderItem={(item) => <ProjectCard item={item} />}
          itemClassName={ITEM_CLASS}
          seeAllHref="/instalacoes"
          seeAllLabel="Ver instalações"
          initialCount={3}
          step={2}
        />
      </div>
    </section>
  );
}
