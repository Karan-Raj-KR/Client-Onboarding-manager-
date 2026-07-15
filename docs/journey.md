# Journey — living graph

Rules: every major decision or milestone gets a node. Keep node text ≤ 12 words. This graph IS the pitch backbone; if it's not here, it didn't happen. GitHub renders Mermaid natively — no build step, no tooling, nothing to break.

```mermaid
flowchart TD
    subgraph P["1 · How we found the problem"]
        P1["Door-to-door outreach, Gubbi/Tumkur"] --> P2["Owners: 'no time, don't know what to post'"]
        P2 --> P3["Websites are commodity; growth work is the gap"]
    end

    subgraph S["2 · How we started solving it"]
        S1["Rejected: website builder framing"] --> S2["Rejected: suggestions-only (ChatGPT wrapper)"]
        S2 --> S3["Chosen: growth loop — context, research, execution, feedback"]
        S3 --> S4["Constraint: ₹0 API budget → free-tier routing + caching"]
    end

    subgraph B["3 · How we solved it (append nodes as we build)"]
        B1["Repo + context system (this)"]
    end

    subgraph F["4 · How we productize"]
        F1["Free tier → Karyo agency lead funnel"] --> F2["Growth tier: premium models + custom builds"]
        F2 --> F3["karyo.in subdomains, GBP/Meta APIs on roadmap"]
    end

    P3 --> S1
    S4 --> B1
    B1 --> F1
```

## Node log (append-only)

| Date | Node | Note |
|---|---|---|
| DAY0 | B1 | Repo scaffold, CLAUDE.md context system, team protocol |
