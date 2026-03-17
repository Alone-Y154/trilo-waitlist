# Agent Instructions

> **This file is the agent's entry point for every prompt.**
> Before writing any code or making any decision, read this document to identify which skill(s) apply, then load and follow their detailed rules.

---

## How This Works

```
User Prompt
    │
    ▼
┌─────────────────────────┐
│  instructions.md (HERE) │  ← Route the task to the right skill(s)
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────────────────┐
│  .agents/skills/<skill>/SKILL.md    │  ← Load the matched skill's full rules
│  .agents/skills/<skill>/rules/*     │  ← Load sub-rules as needed
│  .agents/skills/<skill>/references/*│  ← Load references as needed
└─────────────────────────────────────┘
             │
             ▼
        Execute Task
```

### Routing Protocol

1. **Read the user's prompt** — identify intent, domain, and keywords.
2. **Match against the Skill Router below** — a task may match multiple skills; load all that apply.
3. **Load the matched skill(s)** — read `.agents/skills/<skill>/SKILL.md` for full instructions.
4. **Load sub-rules on demand** — if a skill references `rules/*.md` or `references/*.md`, load only the ones relevant to the current task.
5. **Execute** — follow the loaded skill's workflow, constraints, and checklists.
6. **Validate** — if the skill includes a pre-delivery checklist, run through it before responding.

> **Multiple skills can activate simultaneously.** For example, building a Next.js dashboard may activate `nextjs-app-router-patterns` + `interface-design` + `tailwind-design-system` + `ui-ux-pro-max`.

---

## Skill Router

### 🎨 Frontend & Design

These skills govern how interfaces look, feel, and behave. They stack — use the most specific one as primary and layer others for depth.

#### `frontend-design`

> **Path:** `.agents/skills/frontend-design/SKILL.md`

| | |
|---|---|
| **Purpose** | Create distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Bold creative direction, unique typography, unexpected layouts, rich visual detail. |
| **Activate when** | User asks to build a web component, page, or application where visual quality matters. |
| **Keywords** | build page, create component, landing page, hero section, web UI, distinctive design, visually striking |
| **Do NOT use for** | Dashboards, admin panels, data interfaces → use `interface-design` instead. |

#### `interface-design`

> **Path:** `.agents/skills/interface-design/SKILL.md`
> **Sub-files:** `references/critique.md`, `references/example.md`, `references/principles.md`, `references/validation.md`

| | |
|---|---|
| **Purpose** | Build dashboards, admin panels, SaaS apps, tools, settings pages, and data-heavy interfaces with craft and consistency. Anti-default, intent-driven design. |
| **Activate when** | User asks to build a dashboard, admin panel, SaaS app, tool UI, settings page, or any data interface. |
| **Keywords** | dashboard, admin panel, SaaS, settings page, data table, tool interface, CRUD, analytics view |
| **Do NOT use for** | Landing pages, marketing sites → use `frontend-design` instead. |

#### `frontend-design-system`

> **Path:** `.agents/skills/frontend-design-system/SKILL.md`

| | |
|---|---|
| **Purpose** | Production-grade UI using design tokens, layout rules, motion guidance, and accessibility checks. Systematic design language. |
| **Activate when** | Building a design system, establishing tokens, or needing consistent multi-screen design language. |
| **Keywords** | design tokens, design system, type scale, spacing scale, motion system, consistent UI |

#### `frontend-responsive-design-standards`

> **Path:** `.agents/skills/frontend-responsive-design-standards/SKILL.md`

| | |
|---|---|
| **Purpose** | Responsive, mobile-first layouts using fluid containers, flexible units, media queries, and touch-friendly patterns. |
| **Activate when** | Creating or modifying layouts that must work across mobile, tablet, and desktop. |
| **Keywords** | responsive, mobile-first, breakpoints, media queries, fluid layout, touch targets, viewport, adaptive |
| **Always layer with** | Any other frontend skill when the output must be responsive. |

#### `tailwind-design-system`

> **Path:** `.agents/skills/tailwind-design-system/SKILL.md`

| | |
|---|---|
| **Purpose** | Build production-ready design systems with Tailwind CSS v4 — CSS-first configuration, design tokens, component variants, dark mode, accessibility. |
| **Activate when** | Project uses Tailwind CSS, or user asks about Tailwind theming, tokens, components, or v3→v4 migration. |
| **Keywords** | Tailwind, Tailwind v4, `@theme`, OKLCH, utility classes, component library, dark mode, CSS-first config |

#### `ui-ux-pro-max`

> **Path:** `.agents/skills/ui-ux-pro-max/SKILL.md`
> **Sub-files:** `data/`, `scripts/`

| | |
|---|---|
| **Purpose** | Comprehensive UI/UX design intelligence — 50+ styles, 161 color palettes, 57 font pairings, 99 UX guidelines, 25 chart types. Priority-based recommendation engine. |
| **Activate when** | Choosing colors, fonts, styles for a product; reviewing UI for UX quality; building charts/data viz; accessibility audit. |
| **Keywords** | color palette, font pairing, UI review, UX audit, accessibility check, chart type, style recommendation, design decision |
| **Priority categories** | 1. Accessibility (CRITICAL) → 2. Touch & Interaction (CRITICAL) → 3. Performance (HIGH) → ... → 10. Charts (LOW) |
| **Script usage** | `python3 skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system` for full recommendations. |

#### `web-design-guidelines`

> **Path:** `.agents/skills/web-design-guidelines/SKILL.md`

| | |
|---|---|
| **Purpose** | Audit UI code against Vercel's Web Interface Guidelines. Fetches live rules and checks compliance. |
| **Activate when** | User asks to review, audit, or check their UI code for best practices. |
| **Keywords** | review UI, check accessibility, audit design, web best practices, UI compliance |

---

### ⚡ Next.js & Framework

These skills handle Next.js-specific architecture, patterns, and upgrades.

#### `nextjs-app-router-patterns`

> **Path:** `.agents/skills/nextjs-app-router-patterns/SKILL.md`

| | |
|---|---|
| **Purpose** | Master Next.js 14+ App Router — Server Components, streaming, parallel routes, intercepting routes, Server Actions, advanced data fetching and caching. |
| **Activate when** | Building with Next.js App Router, implementing Server Components, setting up routes, data fetching, or streaming. |
| **Keywords** | App Router, Server Components, Client Components, `use server`, streaming, Suspense, parallel routes, intercepting routes, `generateStaticParams`, Server Actions, route handlers |

#### `next-upgrade`

> **Path:** `.agents/skills/next-upgrade/SKILL.md`

| | |
|---|---|
| **Purpose** | Upgrade Next.js to the latest version following official migration guides and codemods. |
| **Activate when** | User wants to upgrade their Next.js version. |
| **Keywords** | upgrade Next.js, update Next, Next.js version, codemod, migration, breaking changes |

---

### 🏗️ Architecture & Backend

#### `architecture-patterns`

> **Path:** `.agents/skills/architecture-patterns/SKILL.md`

| | |
|---|---|
| **Purpose** | Implement Clean Architecture, Hexagonal Architecture (Ports & Adapters), and Domain-Driven Design (DDD) for maintainable, testable, scalable systems. |
| **Activate when** | Designing backend systems, refactoring monoliths, establishing architecture standards, implementing DDD, planning microservices. |
| **Keywords** | clean architecture, hexagonal, ports and adapters, DDD, domain-driven design, refactor backend, microservices, separation of concerns, testable architecture |

---

### 🎬 Remotion & Video

These two skills cover Remotion video development. Use `remotion-best-practices` for code-level rules and `remotion-video-production` for end-to-end video production workflows.

#### `remotion-best-practices`

> **Path:** `.agents/skills/remotion-best-practices/SKILL.md`
> **Sub-files:** `rules/` — 37 specialized rule files

| | |
|---|---|
| **Purpose** | Domain-specific coding rules for Remotion — animations, audio, video, fonts, 3D, captions, transitions, timing, and more. |
| **Activate when** | Writing or modifying any Remotion code. |
| **Keywords** | Remotion, `useCurrentFrame`, `interpolate`, `Sequence`, `Audio`, `Video`, captions, subtitles, transitions |
| **Sub-rule loading** | Load specific `rules/*.md` files based on the task (e.g., `rules/audio.md` for audio work, `rules/subtitles.md` for captions). |

#### `remotion-video-production`

> **Path:** `.agents/skills/remotion-video-production/SKILL.md`

| | |
|---|---|
| **Purpose** | End-to-end programmable video production — scene planning, asset orchestration, validation gates, rendering. |
| **Activate when** | Producing a complete video (not just writing code), automated video generation, brand videos, marketing content. |
| **Keywords** | video production, automated video, brand video, marketing video, scene planning, render video, video pipeline |

---

### 🔍 SEO & Visibility

Two complementary SEO skills — `seo-geo` for comprehensive traditional + AI SEO, and `ai-seo` for AI-specific citation optimization.

#### `seo-geo`

> **Path:** `.agents/skills/seo-geo/SKILL.md`
> **Sub-files:** `references/` (6 docs), `scripts/` (10 Python audit scripts), `examples/`

| | |
|---|---|
| **Purpose** | Comprehensive SEO & GEO (Generative Engine Optimization) — optimize for both traditional search engines and AI search engines. |
| **Activate when** | User wants to improve search ranking, search visibility, keyword research, schema markup, meta tags, JSON-LD, or AI search visibility. |
| **Keywords** | SEO, keywords, meta tags, JSON-LD, schema markup, search ranking, indexing, sitemap, backlinks, GEO, AI search |
| **Script usage** | `python3 skills/seo-geo/scripts/seo_audit.py` and related scripts for audits. |

#### `ai-seo`

> **Path:** `.agents/skills/ai-seo/SKILL.md`
> **Sub-files:** `references/content-patterns.md`, `references/platform-ranking-factors.md`

| | |
|---|---|
| **Purpose** | Optimize content specifically for AI search engines — get cited in AI-generated answers (Google AI Overviews, ChatGPT, Perplexity, Claude, Gemini, Copilot). |
| **Activate when** | User wants AI visibility, AI citations, or optimization specifically for LLM-powered search. |
| **Keywords** | AI SEO, AEO, GEO, LLMO, AI Overviews, ChatGPT optimization, Perplexity ranking, AI citations, zero-click search, LLM mentions |

---

### � Legal & Compliance

These skills handle legal pages — privacy policies, terms of service, and compliance documentation.

#### `privacy-policy`

> **Path:** `.agents/skills/privacy-policy/SKILL.md`

| | |
|---|---|
| **Purpose** | Draft comprehensive, clear, and compliant privacy policies covering data types, jurisdiction, GDPR/CCPA considerations, and clauses needing legal review. Plain-language explanations. |
| **Activate when** | User asks to create a privacy policy, update data protection documentation, add cookie policy, or prepare for compliance. |
| **Keywords** | privacy policy, privacy page, data protection, GDPR, CCPA, cookie policy, data collection, user rights, data retention |
| **Important** | Output is informational only — always recommend legal review before publication. |

#### `terms-page-generator`

> **Path:** `.agents/skills/terms-page-generator/SKILL.md`

| | |
|---|---|
| **Purpose** | Guide Terms of Service page content, structure, and compliance — acceptance, service description, user obligations, IP, liability, termination, governing law. |
| **Activate when** | User asks to create terms of service, terms and conditions, user agreement, or any legal terms page. |
| **Keywords** | terms of service, terms and conditions, terms of use, user agreement, ToS, legal terms, service agreement, terms page |
| **Related** | Often linked with `privacy-policy`. |

---

### �🚀 Launch & Strategy

#### `launch-strategy`

> **Path:** `.agents/skills/launch-strategy/SKILL.md`

| | |
|---|---|
| **Purpose** | Plan SaaS product launches and feature announcements — momentum building, channel strategy (ORB Framework), five-phase launch playbook. |
| **Activate when** | User is preparing to launch, ship, or announce a product, feature, or update. |
| **Keywords** | launch, Product Hunt, ship, go-to-market, GTM, beta launch, early access, waitlist, announcement, feature release, launch checklist |

---

### 🤖 Agent Behavior & Memory

These skills govern how the agent itself operates — memory, planning, proactiveness.

#### `proactive-agent`

> **Path:** `.agents/skills/proactive-agent/SKILL.md`

| | |
|---|---|
| **Purpose** | Transform the agent from task-follower to proactive partner — anticipate needs, maintain context across sessions (WAL Protocol, Working Buffer), self-improve. |
| **Activate when** | Setting up agent memory architecture, implementing proactive behavior, context survival, or agent self-improvement. |
| **Keywords** | agent memory, proactive, anticipate, WAL protocol, session state, ONBOARDING.md, AGENTS.md, SOUL.md, context survival |

#### `remembering-conversations`

> **Path:** `.agents/skills/remembering-conversations/SKILL.md`
> **Sub-files:** `API.md`

| | |
|---|---|
| **Purpose** | Search past conversation history before reinventing solutions. Dispatches episodic memory search. |
| **Activate when** | Agent is stuck, user references past conversations, or historical context would help the current task. |
| **Keywords** | do you remember, last time, we discussed, before, past conversation, what did we decide, how did we solve |

#### `executing-plans`

> **Path:** `.agents/skills/executing-plans/SKILL.md`

| | |
|---|---|
| **Purpose** | Execute a previously written implementation plan with review checkpoints. |
| **Activate when** | A plan file exists and needs step-by-step execution. |
| **Keywords** | execute plan, implementation plan, follow the plan, run the plan, plan file |

---

## Skill Stacking Matrix

Common task patterns and which skills to combine:

| Task | Primary Skill | Layer With |
|---|---|---|
| Build a landing page | `frontend-design` | `tailwind-design-system` + `frontend-responsive-design-standards` + `ui-ux-pro-max` |
| Build a dashboard | `interface-design` | `tailwind-design-system` + `ui-ux-pro-max` + `nextjs-app-router-patterns` |
| Build a Next.js app | `nextjs-app-router-patterns` | `frontend-design` or `interface-design` + `tailwind-design-system` |
| Upgrade Next.js | `next-upgrade` | — |
| Create a Remotion video | `remotion-video-production` | `remotion-best-practices` |
| Fix Remotion code | `remotion-best-practices` | Load specific `rules/*.md` for the domain |
| Optimize for search | `seo-geo` | `ai-seo` (if AI search is a priority) |
| Optimize for AI search | `ai-seo` | `seo-geo` (for traditional search too) |
| Launch a product | `launch-strategy` | `seo-geo` + `ai-seo` |
| Design a component | `frontend-design` or `interface-design` | `ui-ux-pro-max` + `tailwind-design-system` + `frontend-responsive-design-standards` |
| Review UI quality | `web-design-guidelines` | `ui-ux-pro-max` |
| Set up design tokens | `frontend-design-system` | `tailwind-design-system` |
| Refactor backend | `architecture-patterns` | — |
| Build a design system | `tailwind-design-system` | `frontend-design-system` + `ui-ux-pro-max` |
| Choose colors/fonts/style | `ui-ux-pro-max` | `frontend-design` |
| Make UI responsive | `frontend-responsive-design-standards` | `tailwind-design-system` |
| Create privacy policy | `privacy-policy` | `frontend-design` + `tailwind-design-system` |
| Create terms of service | `terms-page-generator` | `privacy-policy` (link together) |

---

## Priority Resolution

When multiple skills conflict, follow this precedence:

1. **Accessibility rules always win** — `ui-ux-pro-max` §1 (Accessibility) and WCAG standards override aesthetic preferences.
2. **Platform-specific skills override generic ones** — `nextjs-app-router-patterns` overrides generic frontend advice for Next.js projects.
3. **Specific skills override broad ones** — `interface-design` overrides `frontend-design` for dashboards; `ai-seo` overrides `seo-geo` for AI-specific optimization.
4. **The user's explicit request overrides all** — if the user says "make it brutalist," follow that even if `ui-ux-pro-max` recommends otherwise.

---

## Quick Skill Lookup by Keyword

| If the user says... | Load this skill |
|---|---|
| "build a landing page" | `frontend-design` |
| "build a dashboard" | `interface-design` |
| "make it responsive" | `frontend-responsive-design-standards` |
| "use Tailwind" | `tailwind-design-system` |
| "upgrade Next.js" | `next-upgrade` |
| "Server Components" / "App Router" | `nextjs-app-router-patterns` |
| "clean architecture" / "DDD" | `architecture-patterns` |
| "Remotion" / "video code" | `remotion-best-practices` |
| "make a video" / "video production" | `remotion-video-production` |
| "SEO" / "meta tags" / "schema" | `seo-geo` |
| "AI SEO" / "ChatGPT ranking" | `ai-seo` |
| "launch" / "Product Hunt" / "ship" | `launch-strategy` |
| "review my UI" / "audit design" | `web-design-guidelines` |
| "choose colors" / "font pairing" | `ui-ux-pro-max` |
| "design tokens" / "design system" | `frontend-design-system` |
| "do you remember" / "last time" | `remembering-conversations` |
| "execute the plan" | `executing-plans` |
| "agent memory" / "proactive" | `proactive-agent` |
| "privacy policy" / "cookie policy" / "GDPR" | `privacy-policy` |
| "terms of service" / "ToS" / "terms page" | `terms-page-generator` |
