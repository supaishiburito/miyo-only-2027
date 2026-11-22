# Miyo Only 2027

English | [日本語](./README.JP.md)

An unofficial website for Miyo only 2027 event.

Astro, TypeScript, and Tailwind CSS generate the static site.

## Local development

Use Node.js 24. From the project directory, run:

```sh
npm ci
npm run dev
```

## Deploy to Cloudflare Pages

When you pushed a new commit / merged a new PR to main, the pipeline will automatically deploy the website to cloudflare pages.

## Project structure

```text
.github/workflows/  GitHub Actions
public/images/      Event artwork, logo, circle artwork
src/components/     Shared navigation, ticket cards, and FAQ
src/config/         Event settings and navigation
src/data/           Circle roster and FAQ
src/layouts/        Shared layouts and metadata
src/pages/          Homepage, visitor pages, and robots.txt
src/styles/         Theme and responsive styles
src/utils/          Content, image, and URL helpers
```
