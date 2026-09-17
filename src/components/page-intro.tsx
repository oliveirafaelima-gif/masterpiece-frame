export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <header className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <div className="mt-6 grid gap-7 lg:grid-cols-[minmax(0,1.5fr)_minmax(18rem,0.5fr)] lg:items-end">
        <h1 className="font-display text-5xl leading-[0.95] text-foreground sm:text-7xl lg:text-8xl">{title}</h1>
        {description ? <p className="max-w-md leading-7 text-muted-foreground lg:pb-2">{description}</p> : null}
      </div>
    </header>
  );
}