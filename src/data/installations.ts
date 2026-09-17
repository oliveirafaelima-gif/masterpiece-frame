import instalacaoCampo from "@/assets/instalacao-campo.jpg";

export type Installation = {
  title: string;
  year: string;
  venue: string;
  status: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
};

export const installations: Installation[] = [
  {
    title: "Campo de passagem",
    year: "2026",
    venue: "Local de exibição a confirmar",
    status: "Projeto visual provisório",
    description:
      "Uma ocupação espacial pensada como campo de tensão entre peso, permanência e deslocamento. Imagem e texto são simulações editoriais e devem ser substituídos pela documentação real.",
    image: instalacaoCampo,
    imageWidth: 1600,
    imageHeight: 1072,
  },
  {
    title: "Matéria de retorno",
    year: "2025",
    venue: "Local de exibição a confirmar",
    status: "Conteúdo provisório",
    description:
      "Área reservada para apresentar outra instalação, incluindo contexto curatorial, materiais, dimensões variáveis e relação com o espaço expositivo.",
    image: instalacaoCampo,
    imageWidth: 1600,
    imageHeight: 1072,
  },
];