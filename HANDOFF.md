# The Phoenix Standard — Project Handoff

**Path:** `/home/user/workspace/phoenix-standard-visual/`
**Status:** Built, QA'd at desktop (1440px) + mobile (390px), committed to local git. NOT published — main agent to deploy.

## Key files
| File | Purpose |
|---|---|
| `index.html` | Single-page semantic HTML. All content + citations live here. |
| `styles.css` | Full design system (granite tokens, pyramid, sections, responsive). |
| `main.js` | Quiet IntersectionObserver scroll reveals; respects `prefers-reduced-motion`. |
| `qa-*.png` | QA screenshots (gitignored). Safe to ignore/delete. |

No build system. Open `index.html` directly or deploy the folder as static files.

## Page structure (in order)
1. **Hero** — "The Phoenix Standard" / "The Standard Is the Standard" + subtitle. Discreet AVC monogram top-right.
2. **North Star** — "Before Phoenix adds talent, Phoenix must protect identity." + creed + Ishbia culture-fit citation.
3. **The Monument** — the centerpiece pyramid (4 tiers, base→peak) with a North Star glyph above the tip and the engraved Parcells/Landry base inscription.
4. **Leadership Voice** — Ishbia, Gregory, Ott, Bartelstein, each with a sourced pull-quote.
5. **One Culture** — Suns / Mercury / Valley Suns cards.
6. **Acquisition Covenant** — 10 numbered questions (Q10 "granite question" highlighted) + Green/Red flag columns.
7. **Closing Standard** — closing creed + "That is the Phoenix basketball standard."
8. **Colophon/footer** — full AVC wordmark + complete sourced citation list.

## Design decisions
- **Aesthetic:** dark granite/black base (`#0b0b0c`–`#25252a`), gold/bronze linework (`#c8922b`) as the primary accent, Suns orange (`#e25822`) and purple (`#5a3e8f`) used very sparingly (peak tier, three-team card top-rule, ambient hero glows). Fixed film-grain + vignette overlays for a carved, reverent feel.
- **Type:** Cormorant Garamond (display/engraved monument tone) + Satoshi (body, via Fontshare). Executive, timeless, distinctive — no overused web fonts.
- **Pyramid:** built with CSS flex tiers of decreasing width (100% → 84% → 66% → 46%) so it reads as a tapering monument on desktop; collapses to clean full-width stacked bricks on mobile. The Parcells/Landry guardrail is an engraved inscription block directly beneath the base.
- **AVC branding:** inline SVG monogram (angular "A" + "C" mark) — top-right of hero (understated) and full wordmark in footer. No external logo file existed; this is original and minimal.
- **Motion:** quiet only — fade/translate reveals on scroll, a slow North Star twinkle, a scroll hint. All disabled under reduced-motion.
- **Citations:** every quote/claim is a clickable inline link to its source (ESPN/AP, Suns on SI, Phoenix Suns, Valley Suns, Cronkite, NBA.com, NBA G League, Sports Mockery, UWM); footer repeats the full sourced list.

## How to update content
- All copy and citation links are inline in `index.html` — edit text directly; sources are `<a href>` tags.
- **Pyramid tiers:** edit the `.tier--*` blocks in `index.html`; each label/term is a `<span class="brick">`. Tier widths are set in `styles.css` under `/* widths increase toward base */`.
- **Add a leadership voice:** copy an `<article class="voice">` block; the grid auto-reflows.
- **Colors:** all in `:root` CSS variables at the top of `styles.css` (`--gold`, `--orange`, `--purple`, granite scale).

## QA notes
- No console errors. Zero horizontal overflow at 390px.
- Desktop hero, pyramid, voices, covenant, and mobile views all verified visually and look premium/intentional.
- On mobile the pyramid intentionally becomes a stacked full-width list (tapering shape doesn't survive narrow widths legibly) — this is the chosen responsive behavior, not a bug.
- Fonts load via CDN (Google Fonts + Fontshare); requires network at runtime, with system serif/sans fallbacks defined.
