# Hafeez Studio design system

Minimal and typographic. Well-set words, real client screens and honest prices do the persuading. Applies to the studio site (`/`). The tutoring page (`/tutoring`) is a separate business and keeps its own Sage & Mint theme under `.theme-tutor` in `src/app/globals.css`.

## Principles

- Type carries the page. There are no coloured hero fields, card grids, pills, badges or eyebrow labels above headings.
- Hairlines separate content. Use borders and whitespace instead of boxes. The only card is the AI worked example.
- One accent, used sparingly: ink blue for links, focus rings, plan step labels and the highlighted plan's top rule.
- One primary action per view: a solid ink "Book a discovery call", with WhatsApp offered as a quieter text link beside it.

## Colour (tokens in `:root` / `[data-theme='dark']`)

| Role | Light | Dark |
|---|---|---|
| `--bg-main` page | #F8F8F6 | #111113 |
| `--bg-surface` tinted band (AI section) | #EFEFEB | #18181B |
| `--bg-card` | #FFFFFF | #1B1B1F |
| `--text-primary` | #141416 | #F3F3EF |
| `--text-secondary` | #46464C | #C2C2BD |
| `--text-muted` (AA on page) | #67676D | #96968F |
| `--accent` ink blue | #2E3BC9 | #AAB1FF |
| `--cta-bg` / `--cta-text` | #141416 / #FFF (hover → accent) | #F3F3EF / #111113 |
| `--border-subtle` / `--border-strong` | ink at 12% / 26% | paper at 12% / 24% |
| `--whatsapp` (icon only) | #1F8F4E | #25A35A |

The closing band (`.closing`) is ink (#141416) and inverts the text tokens locally.

## Type

- **Display / headings:** Source Serif 4 (variable, optical sizing on), weight 400–500. The second clause of a headline is set in italic in `--text-secondary` (`<em>`).
  - Hero `clamp(2.6rem, 6.4vw, 5.75rem)`, max 21ch, line-height 1.04, tracking -0.022em
  - Section title `clamp(2.1rem, 4.2vw, 3.4rem)`, line-height 1.08
  - Item headings 1.375rem, weight 500
- **Text and UI:** Hanken Grotesk. Body 17px/1.6, lede up to 19px, labels 14px semibold in `--text-muted`.
- Prices, times and days use tabular lining numerals (`.num`, `.plan-price`, `.ai-time`, `.process-days`).

## Spacing and shape

- Section padding `--section-y: clamp(72px, 11vw, 136px)`, with a gap below the heading of `--head-gap: clamp(32px, 5vw, 56px)`.
- Container max 1200px, with 20px gutters on phones and 40px from 768px up.
- Buttons are fully rounded pills, at least 48px tall. Inputs use an 8px radius and 16px text (stops iOS zooming in). Phone frames use a 26px radius.

## Components

- **Hero** (`.hero-grid`): from 1100px it puts the copy on the left and two overlapping live client phones on the right (`.hero-proof`, tilted ±3–4°). Below 1100px the phones are hidden, because the client row follows right after.
- **Section heads** (`.section-head`): from 1024px the title sits on the left and the lede on the right, sharing a bottom edge. On narrower screens they stack.
- **Nav active state**: the link for the section in view is underlined (`aria-current="location"`).

- **Nav** (`.site-nav`): transparent until scrolled, then paper with blur and a hairline. Serif wordmark "Hafeez *Studio*" with a "Web & AI" tag. Below 900px, a menu button opens a sheet whose links are set in the serif.
- **Client work** (`.work-row`): four phone frames with real screenshots. On phones it becomes a horizontal snap row. The row must stay `position: relative` so screen-reader-only labels don't widen the page.
- **Pricing** (`.plans`): three columns divided by hairlines. The popular plan gets a 3px accent top rule and a "Most chosen" note. Feature lists collapse to 5 items on phones.
- **Process** (`.process`): rows of days | title | description.
- **FAQ**: native `<details>`, with a serif question and a plus icon that rotates into an ×.
- **Contact dialog**: centred on desktop and a bottom sheet on phones. Field errors in red sit under each input.

## Motion

One authored moment: the two hero headline lines rise into place on load (1.1s, staggered 120ms, expo ease-out). Otherwise there are only hover lifts on client phones and button arrows. Everything respects `prefers-reduced-motion`.
