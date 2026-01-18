# Claude Agent Notes for Floop Website

## Development Server

**Important:** The Next.js dev server (`pnpm dev`) may stop running between conversations or after periods of inactivity. If the user reports "refused to connect" or the site not loading, restart the server with:

```bash
cd "C:\Users\cmcnu\Documents\Floop Website" && pnpm dev
```

Run this in background mode to keep it running while continuing work.

## Project Overview

This is the new website for Floopedu.com, built with:
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Shadcn/ui components

## Key Files

- `app/page.tsx` - Main homepage
- `components/feedback-demo.tsx` - Interactive demo with Essay/Image/Video tabs
- `components/ui/` - Shadcn UI component library

## GitHub Repository

Repository: https://github.com/cmcnutt0000/floop-website
