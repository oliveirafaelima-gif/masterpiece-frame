import obraCiclica from "@/assets/obra-ciclica.jpg";
import obraMemoria from "@/assets/obra-memoria.jpg";

export type Artwork = {
  id: string;
  title: string;
  year: string;
  technique: "Acrílica" | "Óleo" | "Mista";
  series: string;
  dimensions: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  position?: string;
};

export const artworkFilters = ["Todas", "Óleo", "Acrílica", "Mista"] as const;

export const artworks: Artwork[] = [
  {
    id: "estudo-ciclico-i",
    title: "Estudo cíclico I",
    year: "2026",
    technique: "Mista",
    series: "Estudos provisórios",
    dimensions: "160 × 120 cm",
    description:
      "Imagem e ficha técnica provisórias. Substitua este texto pela leitura conceitual e pelos dados da obra.",
    image: obraCiclica,
    imageWidth: 1280,
    imageHeight: 1600,
  },
  {
    id: "entre-memoria-e-desejo",
    title: "Entre memória e desejo",
    year: "2026",
    technique: "Acrílica",
    series: "Estudos provisórios",
    dimensions: "110 × 145 cm",
    description:
      "Imagem e ficha técnica provisórias. Espaço destinado ao contexto, à pesquisa e às reflexões propostas pela obra.",
    image: obraMemoria,
    imageWidth: 1408,
    imageHeight: 1056,
  },
  {
    id: "natureza-em-suspensao",
    title: "Natureza em suspensão",
    year: "2025",
    technique: "Óleo",
    series: "Estudos provisórios",
    dimensions: "180 × 130 cm",
    description: "Conteúdo provisório a ser substituído pelo artista.",
    image: obraCiclica,
    imageWidth: 1280,
    imageHeight: 1600,
    position: "object-[38%_center]",
  },
  {
    id: "intervalo",
    title: "Intervalo",
    year: "2025",
    technique: "Mista",
    series: "Estudos provisórios",
    dimensions: "90 × 120 cm",
    description: "Conteúdo provisório a ser substituído pelo artista.",
    image: obraMemoria,
    imageWidth: 1408,
    imageHeight: 1056,
    position: "object-[70%_center]",
  },
  {
    id: "corpo-paisagem",
    title: "Corpo-paisagem",
    year: "2024",
    technique: "Acrílica",
    series: "Estudos provisórios",
    dimensions: "140 × 100 cm",
    description: "Conteúdo provisório a ser substituído pelo artista.",
    image: obraCiclica,
    imageWidth: 1280,
    imageHeight: 1600,
    position: "object-[65%_center]",
  },
  {
    id: "linha-de-retorno",
    title: "Linha de retorno",
    year: "2024",
    technique: "Óleo",
    series: "Estudos provisórios",
    dimensions: "100 × 130 cm",
    description: "Conteúdo provisório a ser substituído pelo artista.",
    image: obraMemoria,
    imageWidth: 1408,
    imageHeight: 1056,
    position: "object-[25%_center]",
  },
];