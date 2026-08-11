# Portfólio — Victor Werneck

Portfólio de UX & Product Design construído com React, TypeScript, Vite e Tailwind CSS.

## Desenvolvimento local

Requisitos: Node.js 20 ou superior.

```bash
npm install
npm run dev
```

## Verificações

```bash
npm run typecheck
npm run build
```

## Estrutura de conteúdo

O catálogo de projetos fica em `src/content/projects.ts`. Projetos publicados possuem rota em `/projetos/:slug`; projetos ainda em produção permanecem visíveis como rascunhos sem link público.

## Publicação

O projeto é publicado na Vercel. O arquivo `vercel.json` direciona URLs internas para a aplicação, permitindo abrir e compartilhar estudos de caso diretamente.
