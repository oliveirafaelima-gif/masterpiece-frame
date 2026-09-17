import { createFileRoute } from "@tanstack/react-router";
import { cinemaImage, productions } from "@/data/cinema";

export const Route = createFileRoute("/cinema")({
  head: () => ({ meta: [
    { title: "Cinema e Efeitos Especiais — Ruan D’Ornellas" }, { name: "description", content: "Projetos de efeitos especiais e processos de Ruan D’Ornellas para cinema." },
    { property: "og:title", content: "Cinema — Ruan D’Ornellas" }, { property: "og:description", content: "Efeitos especiais e processos para cinema." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: CinemaPage,
});

function CinemaPage() {
  return <div className="page-enter bg-industrial"><div className="page-shell py-16 sm:py-24"><p className="eyebrow">Efeitos especiais</p><div className="mt-7 grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end"><h1 className="font-display text-5xl leading-[0.92] sm:text-8xl">Cinema<br />& matéria</h1><p className="leading-7 text-muted-foreground">Uma área dedicada a processos, efeitos práticos e colaborações audiovisuais. Os créditos abaixo aguardam confirmação do artista.</p></div>
    <img src={cinemaImage.src} alt="Imagem provisória de bastidores de efeitos especiais" loading="lazy" width={cinemaImage.width} height={cinemaImage.height} className="mt-16 aspect-[16/9] w-full object-cover grayscale-[30%]" />
    <section className="mt-20"><div className="grid grid-cols-[1fr_auto] border-b border-border pb-4 text-xs uppercase text-muted-foreground"><span>Produções selecionadas</span><span>Créditos provisórios</span></div>{productions.map((item, index) => <div key={index} className="grid gap-4 border-b border-border py-7 sm:grid-cols-[1.3fr_1fr_0.35fr_0.7fr] sm:items-center"><h2 className="font-display text-2xl">{item.title}</h2><p className="text-sm">{item.role}</p><p className="text-sm text-muted-foreground">{item.year}</p><p className="text-sm text-muted-foreground sm:text-right">{item.studio}</p></div>)}</section></div></div>;
}