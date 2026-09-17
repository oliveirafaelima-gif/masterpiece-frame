# Guia de conteúdo — Ruan Dornellas

## Estrutura principal

```text
src/
├── assets/                 Imagens provisórias do portfólio
├── components/             Cabeçalho, rodapé, grade e elementos compartilhados
│   └── ui/                 Controles de interface
├── data/                   Todo o conteúdo editável
│   ├── artworks.ts         Obras e filtros
│   ├── installations.ts    Instalações
│   ├── cinema.ts           Produções e bastidores
│   └── profile.ts          Biografia, exposições e contatos
├── routes/                 Páginas do site
│   ├── index.tsx           Home
│   ├── obras.tsx           Obras
│   ├── instalacoes.tsx     Instalações
│   ├── cinema.tsx          Cinema
│   ├── sobre.tsx           Sobre
│   └── contato.tsx         Contato
└── styles.css              Identidade visual e estilos globais
```

## Como adicionar uma nova obra

1. Salve a fotografia em `src/assets/`, preferencialmente em JPG ou WebP otimizado.
2. Abra `src/data/artworks.ts`.
3. Importe a imagem no início do arquivo:

```ts
import novaObra from "@/assets/nova-obra.jpg";
```

4. Adicione um item ao array `artworks`:

```ts
{
  id: "nome-unico-da-obra",
  title: "Título da obra",
  year: "2026",
  technique: "Acrílica",
  series: "Nome da série",
  dimensions: "120 × 90 cm",
  description: "Texto sobre a pesquisa e o contexto da obra.",
  image: novaObra,
  imageWidth: 1200,
  imageHeight: 1600,
},
```

O campo `technique` aceita `Óleo`, `Acrílica` ou `Mista`. Para criar outra categoria, adicione o nome também em `artworkFilters`.

## Conteúdo provisório

As imagens geradas, os projetos de instalação, os créditos de cinema, o e-mail e o Instagram são provisórios. Revise os dados antes da publicação.