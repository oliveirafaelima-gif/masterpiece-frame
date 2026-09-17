import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-[1600px] gap-8 px-5 py-10 text-xs uppercase text-muted-foreground sm:grid-cols-[1fr_auto] sm:items-end sm:px-8 lg:px-12">
        <div>
          <p className="font-display text-2xl normal-case text-foreground">Ruan D’Ornellas</p>
          <p className="mt-2">Rio de Janeiro · Brasil</p>
        </div>
        <div className="flex gap-6">
          <Link to="/contato" className="transition-colors hover:text-accent">Contato</Link>
          <a href="mailto:contato@ruandornellas.com" className="transition-colors hover:text-accent">E-mail</a>
        </div>
      </div>
    </footer>
  );
}