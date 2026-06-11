# DevToolkit

A fast, SEO-friendly developer tools hub built with Next.js 15, TypeScript, and Tailwind CSS. All tools run entirely in the browser — no API dependency, no data sent to servers.

## Features

- 20 free developer tools (JSON, JWT, Base64, UUID, Regex, and more)
- Dark mode with system preference detection
- Global tool search with instant filtering
- Recently used tools (localStorage)
- SEO optimized with per-page metadata, sitemap, and robots.txt
- AdSense-ready placement components (disabled by default)
- Google Analytics hook (optional)
- Mobile-first responsive design

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Shadcn UI
- Lucide Icons

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd DeveloperHub

# Install dependencies
npm install

# Copy environment variables (optional)
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for SEO | `https://devtoolkit.dev` |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics ID | (empty) |
| `NEXT_PUBLIC_ADS_ENABLED` | Enable ad placement components | `false` |

## Tools

| Tool | Route |
|------|-------|
| JSON Formatter | `/tools/json-formatter` |
| JSON Validator | `/tools/json-validator` |
| JWT Decoder | `/tools/jwt-decoder` |
| Base64 Encoder | `/tools/base64-encoder` |
| URL Encoder | `/tools/url-encoder` |
| UUID Generator | `/tools/uuid-generator` |
| Unix Timestamp | `/tools/unix-timestamp` |
| Regex Tester | `/tools/regex-tester` |
| Password Generator | `/tools/password-generator` |
| Hash Generator | `/tools/hash-generator` |
| SQL Formatter | `/tools/sql-formatter` |
| HTML Formatter | `/tools/html-formatter` |
| CSS Formatter | `/tools/css-formatter` |
| JavaScript Formatter | `/tools/javascript-formatter` |
| Cron Generator | `/tools/cron-generator` |
| Color Converter | `/tools/color-converter` |
| Lorem Ipsum | `/tools/lorem-ipsum` |
| Text Diff | `/tools/text-diff` |
| Case Converter | `/tools/case-converter` |
| QR Code Generator | `/tools/qr-code-generator` |

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── tools/            # Individual tool routes
│   ├── about/            # Static pages
│   ├── layout.tsx        # Root layout
│   ├── sitemap.ts        # Dynamic sitemap
│   └── robots.ts         # Robots.txt
├── components/
│   ├── ui/               # Shadcn UI components
│   ├── tools/            # Tool implementations
│   ├── layout/           # Navbar, footer, etc.
│   ├── shared/           # Reusable tool components
│   ├── ads/              # Ad placement components
│   └── analytics/        # Google Analytics
├── hooks/                # Custom React hooks
└── lib/                  # Utilities, metadata, tool registry
```

## License

MIT
