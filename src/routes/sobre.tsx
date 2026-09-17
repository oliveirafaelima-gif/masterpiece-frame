import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export const Route = createFileRoute("/sobre")({
  head: () => ({ meta: [
    { title: "Sobre — Ruan Dornellas" }, { name: "description", content: "Biografia e trajetória de Ruan Dornellas, artista plástico brasileiro." },
    { property: "og:title", content: "Sobre — Ruan Dornellas" }, { property: "og:description", content: "Biografia e trajetória do artista." },
    { property: "og:type", content: "profile" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: SobrePage,
});

function SobrePage() {
  return <div className="page-shell page-enter py-16 sm:py-24"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"><figure><img src={profile.portrait.src} alt="Retrato provisório do artista em ateliê" loading="lazy" width={profile.portrait.width} height={profile.portrait.height} className="w-full"/><figcaption className="mt-3 text-xs text-muted-foreground">Retrato provisório · substituir por fotografia oficial</figcaption></figure><div><p className="eyebrow">{profile.birth}</p><h1 className="mt-5 font-display text-6xl sm:text-8xl">Sobre</h1><p className="mt-5 text-sm text-muted-foreground">{profile.location}</p><div className="mt-12 max-w-2xl space-y-6 text-lg leading-8 text-foreground/90">{profile.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><Button variant="editorial" className="mt-10" disabled><Download /> Currículo artístico · em breve</Button></div></div>
    <section className="mt-24 grid gap-10 border-t border-border pt-14 lg:grid-cols-[0.5fr_1.5fr]"><div><p className="eyebrow">Trajetória selecionada</p><h2 className="mt-4 font-display text-4xl">Exposições</h2></div><ol>{profile.exhibitions.map((item) => <li key={item} className="border-b border-border py-5 leading-7 first:pt-0">{item}</li>)}</ol></section></div>;
}