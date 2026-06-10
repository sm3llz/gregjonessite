# SITE REVIEW

A recurring discipline for keeping gregjones.io elite. The site is a system; like any
system, it decays without maintenance. Review every **60 days**.

> Remove friction relentlessly. Compound quietly.

---

## Review cadence

- **Frequency:** every 60 days.
- **Trigger:** the GitHub Action `site-review.yml` opens a *"60-Day Site Review"* issue automatically and runs dependency + build checks. You can also run it manually from the Actions tab.
- **Time budget:** ~30 focused minutes.
- **Owner:** Greg (or delegate).

---

## Review checklist

Work top to bottom. Each item is a yes/no with a one-line note.

### 1. Visual standard
- [ ] Is the site still visually elite — dark, minimal, high-status?
- [ ] Does the cyan accent remain *sparing* (cursor, hover, active status only)?
- [ ] Does anything feel dated, generic, or "startup"?

### 2. Copy alignment
- [ ] Does the copy still match Greg's current work and positioning?
- [ ] Is the bio still restrained — operator, not influencer?
- [ ] Any hype, buzzwords, or cringe to cut?

### 3. Automation examples
- [ ] Are the automation themes/examples current?
- [ ] Do the `/automation` lines still reflect how the operation actually runs?

### 4. AI Twin (Ask Greg)
- [ ] Are the curated responses still accurate and in-voice?
- [ ] Are the suggested questions the *right* questions today?
- [ ] Any stale answers to rewrite or retire?
- [ ] If a live model is connected: is the system prompt still tight and safe?

### 5. Systems, metrics, principles
- [ ] Any new systems, workflows, or capabilities to surface?
- [ ] Are the `/status` metrics believable and current (or live)?
- [ ] Do the six operating principles still hold? Add / sharpen / remove?

### 6. Performance
- [ ] Are load times still excellent? (Run Lighthouse — target 95+ across the board.)
- [ ] JS payload still minimal? Any dependency bloat crept in?
- [ ] `npm audit` clean? Dependencies current?

### 7. The intangible
- [ ] Does the site still create curiosity?
- [ ] Would a top-tier founder/operator land here and think *"this person is elite"*?
- [ ] What is the single weakest element right now — and the fix?

---

## Changelog

Newest first. Format: `YYYY-MM-DD — summary`.

- 2026-06-09 — Initial build. Boot/command interface, interactive terminal, /about /automation /capital /principles /status /contact, curated Ask Greg twin, simulated-but-wireable status dashboard. Astro static-first, Cloudflare Pages ready.

---

## Improvement backlog

Ranked. Pull from the top when there is appetite. Move shipped items to the changelog.

| # | Item | Notes |
|---|------|-------|
| 1 | Wire `/status` to a real data source | Pages Function reading n8n/Zapier/DB; `status.source` already supported |
| 2 | Connect Ask Greg to a live model | Tight system prompt + curated fallback; key as env var |
| 3 | Add a private `/ventures` or `/portfolio` view | Gated or discreet; only if it adds signal, not noise |
| 4 | Subtle sound / haptic on command entry | Optional, off by default; must stay tasteful |
| 5 | OG image generation | Branded, dark, on-brand card for link previews |
| 6 | Command palette (Cmd-K) overlay | Power-user navigation in addition to typed commands |
| 7 | Analytics that respect privacy | Only if measurement is genuinely needed (e.g. Cloudflare Web Analytics) |

---

## How to run a review

1. Open the auto-created **"60-Day Site Review"** issue (or create one from this checklist).
2. Walk the checklist above; note findings inline.
3. File anything actionable into the backlog table.
4. Ship the highest-leverage fix.
5. Append a changelog entry. Close the issue.
