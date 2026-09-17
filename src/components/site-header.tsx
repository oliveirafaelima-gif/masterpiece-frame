import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { label: "Obras", to: "/obras" as const },
  { label: "Instalações", to: "/instalacoes" as const },
  { label: "Cinema", to: "/cinema" as const },
  { label: "Sobre", to: "/sobre" as const },
  { label: "Contato", to: "/contato" as const },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto grid h-16 max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center px-5 sm:flex sm:h-20 sm:justify-between sm:px-8 lg:px-12">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="min-w-0 truncate font-display text-xl text-foreground sm:text-2xl"
        >
          Ruan D’Ornellas
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="nav-link"
              activeProps={{ className: "nav-link text-accent" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      <nav
        aria-label="Navegação móvel"
        className={cn(
          "absolute inset-x-0 top-full grid border-b border-border bg-background px-5 transition-all duration-300 lg:hidden",
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0",
        )}
      >
        {navigation.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            onClick={() => setOpen(false)}
            className="border-b border-border/60 py-5 font-display text-3xl last:border-0"
            activeProps={{ className: "border-b border-border/60 py-5 font-display text-3xl text-accent last:border-0" }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}