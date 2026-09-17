import obraCiclica from "@/assets/obra-ciclica.jpg";
import obraMemoria from "@/assets/obra-memoria.jpg";
import florestaN1 from "@/assets/floresta/estudo-para-floresta-01.jpg";
import florestaN2 from "@/assets/floresta/estudo-para-floresta-02.jpg";
import florestaN3 from "@/assets/floresta/estudo-para-floresta-03.jpg";
import florestaN4 from "@/assets/floresta/estudo-para-floresta-04.jpg";
import florestaN5 from "@/assets/floresta/estudo-para-floresta-05.jpg";
import florestaN6 from "@/assets/floresta/estudo-para-floresta-06.jpg";
import florestaN7 from "@/assets/floresta/estudo-para-floresta-07.jpg";
import destaque01 from "@/assets/destaque/destaque-01.jpg";
import destaque02 from "@/assets/destaque/destaque-02.jpg";
import destaque03 from "@/assets/destaque/destaque-03.jpg";
import destaque04 from "@/assets/destaque/destaque-04.jpg";
import destaque05 from "@/assets/destaque/destaque-05.jpg";

export type Artwork = {
  id: string;
  title: string;
  year: string;
  technique: "Acrílica" | "Óleo" | "Mista" | "A confirmar";
  series: string;
  dimensions: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  position?: string;
  /** Hand-picked for the "Obras em destaque" home carousel — a curated subset, not the full catalog. */
  featured?: boolean;
};

export const artworkFilters = ["Todas", "Óleo", "Acrílica", "Mista", "A confirmar"] as const;

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
  {
    id: "estudo-para-floresta-01",
    title: "Estudo para floresta nº 1",
    year: "2026",
    technique: "Acrílica",
    series: "Estudo sobre a floresta",
    dimensions: "20 × 40 cm",
    description:
      "Acrílica sobre tela. Parte da série 'Estudo sobre a floresta'. Texto crítico e contexto ainda serão adicionados pelo artista.",
    image: florestaN1,
    imageWidth: 960,
    imageHeight: 1200,
  },
  {
    id: "estudo-para-floresta-02",
    title: "Estudo para floresta nº 2",
    year: "2026",
    technique: "Acrílica",
    series: "Estudo sobre a floresta",
    dimensions: "20 × 40 cm",
    description:
      "Acrílica sobre tela. Parte da série 'Estudo sobre a floresta'. Texto crítico e contexto ainda serão adicionados pelo artista.",
    image: florestaN2,
    imageWidth: 960,
    imageHeight: 1200,
  },
  {
    id: "estudo-para-floresta-03",
    title: "Estudo para floresta nº 3",
    year: "2026",
    technique: "Acrílica",
    series: "Estudo sobre a floresta",
    dimensions: "20 × 40 cm",
    description:
      "Acrílica sobre tela. Parte da série 'Estudo sobre a floresta'. Texto crítico e contexto ainda serão adicionados pelo artista.",
    image: florestaN3,
    imageWidth: 960,
    imageHeight: 1200,
  },
  {
    id: "estudo-para-floresta-04",
    title: "Estudo para floresta nº 4",
    year: "2026",
    technique: "Acrílica",
    series: "Estudo sobre a floresta",
    dimensions: "20 × 40 cm",
    description:
      "Acrílica sobre tela. Parte da série 'Estudo sobre a floresta'. Texto crítico e contexto ainda serão adicionados pelo artista.",
    image: florestaN4,
    imageWidth: 960,
    imageHeight: 1200,
  },
  {
    id: "estudo-para-floresta-05",
    title: "Estudo para floresta nº 5",
    year: "2026",
    technique: "Acrílica",
    series: "Estudo sobre a floresta",
    dimensions: "20 × 40 cm",
    description:
      "Acrílica sobre tela. Parte da série 'Estudo sobre a floresta'. Texto crítico e contexto ainda serão adicionados pelo artista.",
    image: florestaN5,
    imageWidth: 960,
    imageHeight: 1200,
  },
  {
    id: "estudo-para-floresta-06",
    title: "Estudo para floresta nº 6",
    year: "2026",
    technique: "Acrílica",
    series: "Estudo sobre a floresta",
    dimensions: "20 × 40 cm",
    description:
      "Acrílica sobre tela. Parte da série 'Estudo sobre a floresta'. Texto crítico e contexto ainda serão adicionados pelo artista.",
    image: florestaN6,
    imageWidth: 960,
    imageHeight: 1200,
  },
  {
    id: "estudo-para-floresta-07",
    title: "Estudo para floresta nº 7",
    year: "2026",
    technique: "Acrílica",
    series: "Estudo sobre a floresta",
    dimensions: "20 × 40 cm",
    description:
      "Acrílica sobre tela. Parte da série 'Estudo sobre a floresta'. Texto crítico e contexto ainda serão adicionados pelo artista.",
    image: florestaN7,
    imageWidth: 960,
    imageHeight: 1200,
  },
  {
    id: "destaque-01",
    title: "Obra em destaque nº 1",
    year: "A confirmar",
    technique: "A confirmar",
    series: "Obras em destaque",
    dimensions: "A confirmar",
    description: "Título, técnica, ano e dimensões a confirmar com o artista.",
    image: destaque01,
    imageWidth: 2000,
    imageHeight: 2000,
    featured: true,
  },
  {
    id: "destaque-02",
    title: "Obra em destaque nº 2",
    year: "A confirmar",
    technique: "A confirmar",
    series: "Obras em destaque",
    dimensions: "A confirmar",
    description: "Título, técnica, ano e dimensões a confirmar com o artista.",
    image: destaque02,
    imageWidth: 1440,
    imageHeight: 1440,
    featured: true,
  },
  {
    id: "destaque-03",
    title: "Obra em destaque nº 3",
    year: "A confirmar",
    technique: "A confirmar",
    series: "Obras em destaque",
    dimensions: "A confirmar",
    description: "Título, técnica, ano e dimensões a confirmar com o artista.",
    image: destaque03,
    imageWidth: 1440,
    imageHeight: 960,
    featured: true,
  },
  {
    id: "destaque-04",
    title: "Obra em destaque nº 4",
    year: "A confirmar",
    technique: "A confirmar",
    series: "Obras em destaque",
    dimensions: "A confirmar",
    description: "Título, técnica, ano e dimensões a confirmar com o artista.",
    image: destaque04,
    imageWidth: 1440,
    imageHeight: 960,
    featured: true,
  },
  {
    id: "destaque-05",
    title: "Obra em destaque nº 5",
    year: "A confirmar",
    technique: "A confirmar",
    series: "Obras em destaque",
    dimensions: "A confirmar",
    description: "Título, técnica, ano e dimensões a confirmar com o artista.",
    image: destaque05,
    imageWidth: 2000,
    imageHeight: 2000,
    featured: true,
  },
];
