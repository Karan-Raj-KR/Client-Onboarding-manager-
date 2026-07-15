# AGENTS.md

This project's full agent context lives in [`CLAUDE.md`](CLAUDE.md). It applies to ALL AI coding agents (Antigravity, Gemini CLI, Codex, Cursor, etc.), not just Claude Code.

Read, in order, before generating anything:
1. `CLAUDE.md` — product spec, stack, rules, session protocol
2. `docs/context.md` — problem, users, scope in/out, model routing detail
3. Last 10 lines of `docs/decisions.md` — what just changed
4. Your owner's section of `docs/tasks.md` — what you are allowed to build

Hard rules: one LLM routing module (`src/lib/llm.ts`), zod-validated JSON outputs, mobile-first, demo-cache-first, no features outside scope, append to `docs/decisions.md` after every meaningful change.
