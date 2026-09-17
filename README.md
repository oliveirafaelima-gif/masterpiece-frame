# Dornellas Studio

Você é um designer e desenvolvedor fullstack especializado em portfólios digitais de artistas visuais. Sua linguagem de design é editorial, refinada e orientada à obra, não ao desenvolvedor.

Crie um site de portfólio completo para o artista plástico **Ruan Dornellas** com as seguintes especificações:

---

## Identidade visual

- Paleta: preto profundo como base, branco e tons de cinza grafite, com um único acento cromático neutro (dourado fosco ou terracota sutil) para elementos de destaque

- Tipografia: fonte serif clássica para o nome e títulos das obras (ex: Playfair Display ou similar disponível via Google Fonts), sans-serif limpa para corpo de texto e navegação

- Layout: amplo espaço em branco, imagens grandes e respiradas, sem elementos de design que concorram com as obras

- Estética de referência: galeria de arte contemporânea europeia, não portfólio de tecnologia

---

## Estrutura de páginas

### 1. Home

- Nome "Ruan Dornellas" centralizado em tipografia grande

- Tagline curta: "Artista Plástico · Instalações · Efeitos Especiais"

- Imagem de destaque (hero) que ocupa 80%+ da viewport — usar placeholder escuro com bordas refinadas onde o artista inserirá a imagem principal

- Navegação minimalista: fixada no topo, links: Obras, Instalações, Cinema, Sobre, Contato

### 2. Obras (Paintings)

- Grid masonry responsivo com espaçamento generoso

- Cada obra: imagem, título, técnica e ano ao hover

- Filtro por série ou técnica (ex: "Todas", "Óleo", "Acrílica", "Mista")

- Ao clicar: modal ou página interna com imagem expandida, descrição e detalhes técnicos

### 3. Instalações

- Layout de página única com rolagem narrativa

- Cada instalação: nome, ano, local de exibição, descrição e galeria de fotos

- Espaço para embed de vídeo (YouTube/Vimeo)

### 4. Cinema (Efeitos Especiais)

- Lista de produções: título do filme/série, papel do artista, ano, estúdio

- Espaço para imagens de bastidores ou stills aprovados

- Seção diferenciada visualmente das demais, com tom mais técnico/industrial

### 5. Sobre

- Foto do artista (placeholder)

- Bio em dois blocos: narrativa pessoal (300 palavras max) e lista de exposições, prêmios e participações em produções

- Link para download de currículo artístico (PDF — apenas placeholder de botão)

### 6. Contato

- Formulário simples: nome, e-mail, mensagem e assunto (dropdown: "Aquisição de obra", "Projetos e colaborações", "Imprensa", "Outros")

- Links para Instagram e e-mail direto

- Sem mapa, sem endereço físico

---

## Requisitos técnicos

- MUST ser totalmente responsivo (mobile-first)

- MUST usar React com Tailwind CSS

- MUST ter transições suaves entre páginas (fade ou slide sutil)

- MUST ter lazy loading nas imagens para performance

- NEVER usar animações chamativas, carrosséis automáticos ou elementos que distraiam das obras

- NEVER usar cores vibrantes além do acento único definido

- Todos os textos em português (Brasil)

- Todos os conteúdos são placeholders editáveis — estruture os dados em um arquivo separado (ex: `data/artworks.ts`, `data/installations.ts`) para o artista poder atualizar sem mexer nos componentes

---

## Entregáveis esperados

Ao final, output ✅ com:

1. Estrutura de pastas completa

2. Lista de todos os arquivos criados

3. Instruções de como adicionar novas obras ao portfólio

Referência de informações sobre o artista: https://galeriaathena.com/artists/184-ruan-dornellas/

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://masterpiece-frame.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f720b1be-5c57-4805-a1ea-691a86b3c32e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
