# CLAUDE.md — Karyo Growth Engine (Graphify repo)

You are working on **Karyo**, a hackathon MVP (TakeOver'26 finals). Three humans share this repo: Karan (backend/agents), Havinash (frontend), Saagnik (demo/pitch). Read this file fully before generating anything.

## What Karyo is

An AI growth head for Indian local businesses. NOT a website builder. NOT a chatbot. It:
1. **Onboards** an owner in ~10 min: category, location, price range, photos, 60s voice note about the shop (→ tone profile), language (Kannada/Hindi/English).
2. **Researches** via a multi-agent pipeline: nearby competitor scan (manually collected public data for demo locality), festival/seasonality calendar, platform playbook (curated corpus in `/data/playbooks`).
3. **Plans + executes**: daily action cards — ready-to-post captions in the owner's tone and language, image specs, hashtags, WhatsApp broadcast drafts, Google Business Profile festival posts. One-tap copy / wa.me / share-intent deep links. Owner spends 5 min/day.
4. **Learns**: owner marks posted/skipped + rough results; next week's plan is conditioned on last week's outcomes. Show the week1→week2 diff.

Byproducts (low priority): one-page site on `{business}.karyo.in`, digital business card ("Powered by Karyo" footer).

## Stack (do not deviate without a decisions.md entry)

- Next.js (App Router, TS) + Tailwind + shadcn/ui, in `/app`
- Supabase: auth, Postgres (business profiles, action cards, feedback), storage (photos)
- LLM routing (free tiers only, see `docs/context.md#models`): Gemini 2.5 Flash (quality/long-context), Groq Llama 3.3 70B (fast/high-volume), OpenRouter :free + NVIDIA NIM (fallbacks). All calls go through `src/lib/llm.ts` — ONE routing module, never call providers directly from features.
- Agents: plain TypeScript orchestration (sequential pipeline). No heavy framework unless a decisions.md entry justifies it.
- Every LLM output is JSON validated with zod. On parse failure: one retry with error appended, then fallback model.

## Coding rules

- Ponytail discipline: reuse before write, stdlib/platform before dependency, one line before ten. Never cut validation, error handling, or accessibility.
- No feature outside `docs/context.md#scope-in`. If tempted, add to `docs/context.md#scope-out` discussion instead and stop.
- Mobile-first. Every screen must be usable at 380px width.
- Demo resilience: every pipeline stage must read from `/data/demo-cache` when `DEMO_MODE=true`. Cache-first, live-regenerate optional.
- Secrets only in `.env.local` (gitignored). Never hardcode keys. Never commit `/data/demo-cache` entries containing real personal data beyond our permitted demo business.

## Protocol for EVERY session (human or AI)

1. `git pull`, read the last 10 lines of `docs/decisions.md` and your section of `docs/tasks.md`.
2. Work only on your claimed task, on your branch prefix (`karan/`, `hav/`, `saag/`).
3. Before finishing: append to `docs/decisions.md` — format: `YYYY-MM-DD | who | what | why (one line)`. Update `docs/tasks.md`. If the change alters the story, update `docs/journey.md` (add a node to the Mermaid graph).
4. Commit messages: `feat|fix|docs(scope): summary`.

## What NOT to build (hard no, judges have seen it all)

- Website-builder-as-the-product framing
- Aspiring-founder / "build a business" persona
- Billing, subscriptions, admin panels
- Facebook/other platforms beyond Instagram + WhatsApp + GBP
- Any live third-party scraping at runtime

## Pitch anchor (keep every feature aligned to this)

"A website takes minutes now — that's exactly why we didn't build a website builder. Karyo is the loop that runs *after* the artifact: it knows this business, plans its week, produces ready-to-execute actions, and adapts to what worked. Lovable forgets you when the tab closes. Karyo gets smarter about your shop every week."
