# Portfólio — Weslley Almeida Sales

Site pessoal feito com React, Vite, Tailwind CSS e Motion.

No ar em: **https://sallesdev01.github.io**

## Rodar local

```bash
npm install
npm run dev
```

## Editar textos

Todo o conteúdo (resumo, cases, experiência, stack, contato) fica em `src/data/content.ts`.

## Adicionar prints dos cases (Google Ads / Meta)

1. Salve as imagens em `public/cases/`, por exemplo `public/cases/unic-google-ads.png`.
2. No case correspondente em `src/data/content.ts`, preencha `prints`:

   ```ts
   prints: ['/cases/unic-google-ads.png', '/cases/unic-meta-ads.png'],
   ```

O primeiro print vira a capa do card e todos aparecem ao abrir o case.

## Publicar atualizações

```bash
npm run deploy
```

Gera o build e envia para a branch `gh-pages`, que o GitHub Pages serve.
