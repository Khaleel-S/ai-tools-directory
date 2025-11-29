
## Getting Started

First, run the development server:

npm run dev


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.


# ai-tools-directory
AI Tools Directory - SDE Intern Assignment
Live Demo: ai-verse-beta.netlify.app
GitHub: github.com/Khaleel-S/ai-tools-directory

A polished content directory website built with Next.js 16 App Router + Tailwind CSS featuring 200+ real AI tools with advanced filters, comparison modal, SEO, and sitemap generation.

✨ Features Delivered
Feature	Status	Details
Home Page	✅	Hero animations, featured tools, category grid
Tools Listing	✅	Search, filters (category/pricing), sort (popular/newest)
Detail Pages	✅	Dynamic SEO, rich tool cards, CTAs
Comparison Modal	✅	Select/compare up to 4 tools side-by-side
Dark Mode	✅	Theme toggle with localStorage persistence
SEO + Sitemap	✅	Dynamic metadata, OpenGraph, static generation
Responsive Design	✅	Mobile-first, premium UI/animations
📊 Dataset Used
Source: Manually curated from There's An AI For That + Futurepedia
Total Tools: 200+ real AI tools
Categories: Image Generation, Text Generation, Video, Search, Image Editing
Fields: id, slug, name, description, logo, category, pricing, rating, popularity, tags, website, updated

Sample Data Structure:

json
{
  "id": "1",
  "slug": "midjourney",
  "name": "Midjourney",
  "category": "Image Generation",
  "pricing": "Paid",
  "rating": 4.8,
  "popularity": 15000000,
  "tags": ["Art", "Discord"],
  "website": "https://www.midjourney.com"
}


🔧 Dataset Generation Process
Method 1: Manual Curation + AI Assistance (Used)
text
1. Browsed theresanaiforthat.com → Copied top 50 tools
2. Used Perplexity AI → "List 150 popular AI tools with categories, pricing, ratings"
3. Validated logos/websites → Fixed broken links
4. Generated slugs → `kebab-case` from tool names
5. Added realistic metrics → popularity (users), ratings (4.5-4.9)
6. TypeScript validation → Ensured data integrity
Method 2: Web Scraping (Alternative - Not Used)


# Generated: → lib/data.ts
dara.ts -> Serves as json file where the data is written in the form of key-value pairs.

🛠 Tech Stack
Frontend: Next.js 16.0.5 (App Router) + TypeScript
Styling: Tailwind CSS + shadcn/ui components
Fonts: Manrope (body) + Syne (headings) via next/font/google
Icons: Lucide React
State: React Context API (comparison feature)
Deployment: Vercel (SSG + ISR)
Linting: ESLint + Prettier
Animations: Tailwind + Framer Motion
SEO: Next.js Metadata API + sitemap.ts

🎨 Design Inspiration (12 References)
Dribbble: "AI Tools Directory" by UI8 → Hero gradient, card hover effects

Awwwards: FutureTools.io → Dark theme, category chips

Product Hunt: AI tool launch pages → Comparison modals

Tailwind UI: Premium card components + glassmorphism

Vercel Templates: Next.js showcase layouts

Color Palette: Slate-900 base → Blue/Indigo gradients → Glassmorphism overlays



🤖 AI Prompts Used
Prompt 1: Dataset Generation
text
"Generate 150 real AI tools dataset in TypeScript interface format. Include: id, slug, name, description, logo URL, category (Image/Text/Video/etc), pricing (Free/Freemium/Paid), rating (4.5-4.9), popularity (1M-250M users), tags array, website URL. Base on theresanaiforthat.com top tools. Export as getAllTools() function."

Prompt 2: SEO Implementation
text
"Next.js 14 App Router complete SEO setup for tools directory. Dynamic metadata for /tools/[slug], sitemap.ts with all tool pages, OpenGraph/Twitter cards, canonical URLs, robots.txt. Static generation with generateStaticParams."


🚀 Deployment

✅ Vercel: Automatic CI/CD from GitHub


🔮 With 2 More Days - Improvements
 Comparision of bots based on the rating and performance
