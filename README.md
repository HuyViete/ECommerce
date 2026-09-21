# E-Commerce SEO & Generative Engine Optimization (GEO) Benchmark

This repository contains an academic and technical comparative research benchmark demonstrating the empirical difference between flawed traditional client-side rendering (SPA) and state-of-the-art Generative Engine Optimization (GEO) with Next.js 15.

---

## Directory Structure

```
c:\Coding\MYBK\ECommerce/
├── bad/        # AudioFluff: Flawed Technical SEO & Zero GEO (React Vite SPA)
│   ├── index.html        (Empty #root container, frozen "React App" title)
│   ├── public/robots.txt (Disallows GPTBot, PerplexityBot, /products/)
│   └── src/              (1.5s useEffect delay, div soup, keyword stuffing, zero schema)
│
└── good/       # ApexAcoustics: Academic GEO Benchmark (Next.js 15 App Router)
    ├── app/
    │   ├── layout.tsx         (Semantic HTML5, comprehensive metadataBase)
    │   ├── page.tsx           (Answer-First pattern, empirical test matrix)
    │   ├── products/
    │   │   ├── page.tsx       (Server-rendered catalog)
    │   │   └── [slug]/
    │   │       ├── page.tsx   (RSC, SSG, Schema.org JSON-LD, benchmarks, quotes)
    │   ├── api/markdown/      (Content negotiation CommonMark endpoints)
    │   ├── robots.ts          (Dynamic RFC 9309 crawler routing)
    │   └── sitemap.ts         (Dynamic XML sitemap)
    ├── public/
    │   ├── llms.txt           (Jeremy Howard specification compliant)
    │   └── llms-full.txt      (Concatenated markdown knowledge base)
    └── lib/
        ├── products.ts        (Aggarwal et al. 2024 & E-GEO 2025 verified metrics)
        └── markdown.ts        (Noise-free CommonMark generator)
```

---

## Empirical Comparison Matrix

| Test Dimension | `bad/` (AudioFluff SPA) | `good/` (ApexAcoustics Next.js 15) | Academic Foundation |
| :--- | :--- | :--- | :--- |
| **Raw HTML (`curl -s <URL>`)** | Empty `<div id="root"></div>` (0 text) | Full static HTML, tables & meta tags | Eliminates JavaScript execution requirement for RAG scrapers. |
| **Google Rich Results Test** | 0 schemas detected (No JSON-LD) | `Product`, `Offer`, `MerchantReturnPolicy`, `ShippingDetails`, `AggregateRating` | Ingestion into Google Shopping Graph (35B+ products). |
| **Crawler Access (`/robots.txt`)** | Blocks `OAI-SearchBot` & `PerplexityBot` | Surgical RFC 9309 rules (Search bots allowed) | Prevents accidental delisting on ChatGPT Search and Perplexity. |
| **Context Ingestion (`/llms.txt`)** | 404 Not Found (or HTML SPA fallback) | Clean CommonMark (`/llms.txt` standard) | Jeremy Howard (2024): Saves >80% LLM context window tokens. |
| **Generative Visibility** | 10x Keyword stuffing, zero metrics | Exact dB, THD, mAh stats + Authoritative quotes | Aggarwal et al. (KDD '24): +37% stats, +40% quotes visibility gain. |

---

## Running Locally

### 1. Run the GEO Benchmark (Good)
```bash
cd good
npm install
npm run dev
# Server running at http://localhost:3000
```

### 2. Run the Flawed SEO Baseline (Bad)
```bash
cd bad
npm install
npm run dev
# Server running at http://localhost:5173
```
