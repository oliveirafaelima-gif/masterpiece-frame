import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { profile } from "@/data/profile";

export const Route = createFileRoute("/contato")({
  head: () => ({ meta: [
    { title: "Contato — Ruan D’Ornellas" }, { name: "description", content: "Entre em contato com Ruan D’Ornellas para obras, projetos, colaborações e imprensa." },
    { property: "og:title", content: "Contato — Ruan D’Ornellas" }, { property: "og:description", content: "Obras, projetos, colaborações e imprensa." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ContatoPage,
});

function ContatoPage() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); event.currentTarget.reset(); };
  return <div className="page-shell page-enter py-16 sm:py-24"><div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24"><section><p className="eyebrow">Correspondência</p><h1 className="mt-5 font-display text-6xl sm:text-8xl">Contato</h1><p className="mt-8 max-w-sm leading-7 text-muted-foreground">Para aquisições, colaborações, imprensa ou outras conversas sobre o trabalho.</p><div className="mt-12 grid gap-4 text-sm"><a href={`mailto:${profile.email}`} className="flex items-center justify-between border-b border-border py-3 hover:text-accent"><span>{profile.email}</span><ArrowUpRight className="h-4 w-4" /></a><a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center justify-between border-b border-border py-3 hover:text-accent"><span>Instagram · {profile.instagram}</span><ArrowUpRight className="h-4 w-4" /></a></div></section>
    <form onSubmit={submit} className="grid gap-7" aria-label="Formulário de contato"><label className="form-label">Nome<Input name="name" required placeholder="Seu nome" className="editorial-field" /></label><label className="form-label">E-mail<Input name="email" type="email" required placeholder="voce@email.com" className="editorial-field" /></label><label className="form-label">Assunto<Select required name="subject"><SelectTrigger className="editorial-field"><SelectValue placeholder="Selecione um assunto" /></SelectTrigger><SelectContent><SelectItem value="aquisicao">Aquisição de obra</SelectItem><SelectItem value="projetos">Projetos e colaborações</SelectItem><SelectItem value="imprensa">Imprensa</SelectItem><SelectItem value="outros">Outros</SelectItem></SelectContent></Select></label><label className="form-label">Mensagem<Textarea name="message" required placeholder="Escreva sua mensagem" className="editorial-field min-h-40 resize-y" /></label><div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-center"><Button variant="editorial" size="lg" type="submit">Enviar mensagem</Button>{sent ? <p role="status" className="text-sm text-accent">Mensagem registrada nesta demonstração.</p> : null}</div><p className="text-xs leading-5 text-muted-foreground">Formulário demonstrativo. O envio real será ativado quando o serviço de e-mail for conectado.</p></form></div></div>;
}