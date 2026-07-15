# Context — single source of truth

## Problem

Indian local business owners don't lack tools — they lack time and execution. Surveys of small business owners put "lack of time" as the #1 barrier to digital adoption (~66%), ahead of cost and skills. Meanwhile the channels that actually convert in India are WhatsApp (78% of Indian SMBs already use it; ~98% open rates) and Google Business Profile / Maps discovery — not websites. Website builders (Durable, Wix AI, GoDaddy Airo, Lovable) produce a static artifact in minutes and then abandon the owner. The growth work — what to post, when, in what language, for which festival — never gets done.

Found via: Karyo's door-to-door client outreach in Gubbi/Tumkur. Owners repeatedly said variants of "I know I should post, I don't know what, and I don't have time."

## User

One persona only: **existing Indian local business owner** (shop, salon, clinic, tuition centre, service business). Mobile-first, possibly non-English-preferring, 5 minutes/day budget.

## Solution shape

Context moat (onboarding) → research agents → executable daily action cards → feedback loop. See CLAUDE.md for the four layers. The differentiator vs. any chat window: persistent business state + week-over-week adaptation + execution surface (deep links, copy-ready assets), not suggestions.

## Scope IN (MVP)

- Onboarding flow incl. voice-note tone capture (record → transcribe → tone profile JSON)
- Business profile schema in Supabase
- Research pipeline (competitor snapshot from curated demo data, festival calendar, playbook RAG-lite)
- Weekly plan generator → daily action cards (IG caption, WhatsApp broadcast, GBP post)
- Action card UI: copy button, wa.me deep link, share intent, posted/skipped toggle
- Feedback → next-week plan diff view (week 1 vs week 2, with "why it changed")
- Auto-generated one-pager + digital business card (byproduct, ≤ half a day total)
- DEMO_MODE cache for the entire pipeline

## Scope OUT (do not build; mention as roadmap only)

Billing/subscriptions · aspiring-founder persona · Facebook/LinkedIn/YouTube · live GBP/Meta API integrations · runtime scraping · analytics dashboards beyond the diff view · admin panels · notifications infra.

## Models

Free tiers only. Routing lives in `src/lib/llm.ts`:

| Task | Primary | Fallback chain |
|---|---|---|
| Weekly plan, research synthesis (quality) | Gemini 2.5 Flash (AI Studio free) | Groq Llama 3.3 70B → OpenRouter :free |
| Captions, quick replies, classification (volume/speed) | Groq Llama 3.3 70B | Gemini Flash-Lite → NVIDIA NIM |
| Transcription (voice onboarding) | Groq Whisper | manual text input fallback in UI |

Known free-tier reality (July 2026, verify before finals): Gemini 2.5 Flash ~1,500 req/day; Groq llama-3.3-70b ~30 RPM / 1,000 RPD; OpenRouter free models ~50 req/day until a $10 top-up lifts it to ~1,000/day. Free catalogs churn without notice — never hardcode a single model name without the fallback chain, and cache demo runs.

## Monetization story (slide only)

Free product = qualified-lead funnel for Karyo (the agency). Growth tier: premium model access, hands-on support, custom development. Honest, already-operating business model.
