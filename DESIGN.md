# Hafeez Studio design system

Minimal and typographic. Well-set words, real client screens and honest prices do the persuading. Applies to the studio site (`/`). The tutoring site (`/tutoring`, served at tuition.hafeezstudio.com) is a separate business with its own board world, scoped under `.tutor` in `src/app/tutoring/tutor.css`; see [Hafeez Tutor](#hafeez-tutor-tuitionhafeezstudiocom) below.

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

## Favicon

A Source Serif 4 "H" (weight 600, opsz 20, outlined so no font loads) in paper #F8F8F6 with a periwinkle #AAB1FF full stop, on an ink #141416 tile. It echoes the full stops that end the headlines. Files: `public/favicon.svg`, `favicon.ico` (16/32/48) and `apple-touch-icon.png` (180, square; iOS rounds it). The tutoring site has its own mark; see the Hafeez Tutor section.

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

Built with Motion (`motion/react`, the successor to Framer Motion). `MotionProvider` sets `reducedMotion="user"`, so movement drops out for visitors who ask for less motion while fades stay. Content is always visible in the server HTML, so nothing depends on JavaScript to appear.

- **Signature: the 10pm enquiry** (`EnquiryTimeline.tsx`). When the card scrolls into view, each step shows a typing indicator, then arrives with a fade, rise and focus-in from a blur. An ink-blue rail fills as the story plays out. It only arms itself if the card starts below the fold.
- **Hero:** headline lines rise in with CSS on load (so they don't wait for JavaScript). The two client phones spring into place, then lean toward the cursor in 3D on mouse devices (`HeroProof.tsx`).
- **Continuity:** a shared nav underline (`layoutId`) slides to the section in view. The phone menu and the contact dialog animate in and out (`AnimatePresence`), with exits faster than entrances.
- **Feedback:** client phones spring up and lean on hover (`WorkShot.tsx`). Buttons nudge their arrow and press in slightly.

No section gets a generic fade-in on scroll.

## Hafeez Tutor (tuition.hafeezstudio.com)

A separate business with its own world. Everything below applies only inside `.tutor` (`src/app/tutoring/tutor.css`, wrapped by `src/app/tutoring/layout.tsx`); none of the studio rules above apply here, and none of these apply to the studio.

### Principle

**The page is the classroom board.** One board-green field, chalk-white type, and a real problem worked out line by line. Sections are the phases of a written solution: Given, To find, Solution, Answer.

- **The Two-Tone Rule.** Board and chalk carry the whole page. Secondary text is a softer chalk, never a second hue.
- **The Rationed Chalk Rule.** Chalk yellow marks exactly two things: the primary action (the WhatsApp book button) and the line on the board currently being explained. It is not used for links, headings, rules or decoration. (Text selection and the shared dialog's accent also resolve to yellow through the token mapping.)
- **The Bare Board Rule.** No cards, shadows, gradients, photos or textures. Separation comes from hairline chalk rules and whitespace.

### Colour (tokens on `.tutor`)

| Token | Value | On board #1E3A2F | Use |
|---|---|---|---|
| `--board` | #1E3A2F | – | The whole ground: page, sticky bar, dialog, browser chrome (`themeColor`, `color-scheme: dark`, scrollbar track) |
| `--board-raised` | #24463A | – | Only the shared dialog's surfaces (`--bg-surface`, `--bg-card`) |
| `--chalk` | #EEEFE6 | 10.65:1 | Primary text, focus ring, selected tab underline |
| `--chalk-soft` | #B7C6BB | 6.94:1 | Secondary text: lede, labels, phase words, question, footer, quiet link |
| `--chalk-dim` | #8FA597 | 4.70:1 | Board lines already explained; scrollbar thumb |
| `--chalk-rule` | #EEEFE6 at 20% | – | Every hairline |
| `--yellow` | #EBD56C | 8.38:1 | Book button fill (board text on it, 8.38:1) and the current board line |
| `--yellow-hover` | #F3E28F | 9.45:1 | Book button hover |
| dialog error | #FFB4A8 | 7.26:1 (7.3:1) | Field errors and invalid input borders in the shared dialog; the error box uses it at 50% border / 8% fill |

`--chalk-dim` is for the board's past lines only; it falls to 3.97:1 on `--board-raised`, so it stays out of the dialog.

### Type

- **One face throughout:** Atkinson Hyperlegible Next (`next/font/google`, normal and italic, `--font-atkinson`, fallback Segoe UI / system-ui). Chosen for unambiguous figures and l/I/1 in worked maths; its slashed zero is kept as drawn (no feature setting turns it off). Mathematical variables are set in italic (`<var>`). Prices and counts use tabular lining numerals (`.num`).
- **Weights:** 700 for headings, wordmark, buttons and prices; 500 for board lines; 400 italic in `--chalk-soft` for the phase word that opens each section heading ("*Given:*") and for "*Tutor*" in the wordmark.

| Role | Size | Line-height / tracking | Notes |
|---|---|---|---|
| Headline | `clamp(2.5rem, 8.6vw, 4.4rem)`; ≥1024 `clamp(2.6rem, 3.1vw, 3.3rem)` | 1.02 / -0.022em | 700, max 13ch, balanced |
| Answer close | `clamp(2.2rem, 6.2vw, 4.6rem)` | 1.04 / -0.02em | 700, max 16ch |
| Section heading | `clamp(1.75rem, 3.8vw, 2.9rem)`; ≥1024 `clamp(1.9rem, 2.3vw, 2.3rem)` | 1.1 / -0.015em | 700, max 24ch; held a clear step below the headline on wide screens |
| Board lines | `clamp(1.35rem, 3.4vw, 2.1rem)`; ≥1024 `clamp(1.6rem, 2vw, 2.1rem)` | 1.45 | 500; a term never breaks inside itself (`.t-nb`) |
| Lede | `clamp(1.06rem, 1.7vw, 1.3rem)` | 1.55 | `--chalk-soft`, max 42ch |
| Price line | `clamp(1.15rem, 2vw, 1.45rem)`, figure at 1.35em bold | 1.45 | max 36ch |
| Fact values / outcome titles / steps | `clamp(1.15rem, 1.9vw, 1.4rem)` / `clamp(1.15rem, 1.8vw, 1.35rem)` / `clamp(1.1rem, 1.8vw, 1.3rem)` | 1.3–1.45 | |
| Board explanation | `clamp(1.06rem, 1.6vw, 1.22rem)` | 1.5 | max 46ch; reserves 3em so the board doesn't jump |
| Body | 17px | 1.6 | |
| Labels and small text | 0.9–1rem | – | `--chalk-soft` |

### Layout

- Container max 1120px, with 20px gutters on phones and 40px from 768px up.
- **Hero:** on phones the copy comes first and the lesson sits right under it behind a top hairline. From 1024px the hero becomes two columns, copy 0.8fr and lesson 1.2fr (the board is the focal object), gap `clamp(40px, 5vw, 72px)`, with the lesson set off by a vertical hairline on its left.
- **Phases:** Given, To find, Solution and Answer are full-width sections, each opened by a hairline and padded `clamp(48px, 7vw, 88px)`; the Answer close has `clamp(72px, 10vw, 128px)` below it.
- **Ruled lists:** Given is a definition list and To find a list, both set as hairline-ruled rows (a rule above each row and one closing the set). From 768px they become two columns: label 180px / value for Given, title up to 340px / text for To find. Solution is three numbered rows (soft tabular numeral in a 2.2em column), max 760px, because order matters.
- **Actions:** on phones the book button is full width (max 420px) with the quiet link under it; from 640px they sit in a row; in the hero from 1024px the quiet link drops back under the button.

### Elevation and shape

Flat: no shadows anywhere. Shapes are limited to fully rounded pills for buttons (999px) and a 6px radius on the focus outline; everything else is unboxed type on the board.

### Components

- **Worked board** (`WorkedBoard.tsx`, the signature): subject tabs ("Physics, Class 9", "Maths, Class 10") as plain text, the selected one bold with a 2px chalk underline, with the full tablist keyboard pattern. The question in soft chalk, then the solution lines. A line not yet written is a faint wiped-chalk trace (chalk at 9% opacity) so the space never reads as empty; lines already explained drop to `--chalk-dim`; the current line is yellow; once the problem is done the final answer is double-underlined, as in an exam answer. Under the lines sit the explanation for the current step, a chalk outline pill ("Next step" / "Write it out again", 1.5px chalk at 50%, faint chalk fill on hover) and a soft "3 / 5" count. Screen readers hear explanations only after the visitor acts.
- **Book button:** the one primary action. A yellow pill with board-colour text and the WhatsApp glyph, 56px tall (48px in the sticky bar), bold; it opens WhatsApp with a prefilled message.
- **Quiet alternative:** "or leave your number", underlined soft-chalk text that opens the shared contact dialog. It is never styled as a second button.
- **Top line:** bold wordmark "Hafeez *Tutor*" on the left; on the right a soft-chalk WhatsApp link with the number, which becomes the word "WhatsApp" at 420px and below.
- **Phone booking bar** (`StickyBook.tsx`, below 900px): a board-coloured bar with a hairline above, "₹600 an hour" and the small book button. It slides up once the hero's button has scrolled off and steps aside while the Answer section's own button is on screen.
- **Contact dialog:** the shared `ContactModal` is themed by mapping its tokens onto the board (`--modal-bg` board, surfaces `--board-raised`, text chalk / soft chalk, borders chalk at 20% / 36% / 60%, accent and CTA yellow with board text, both font tokens Atkinson). Errors use #FFB4A8.
- **Focus and selection:** a 3px chalk outline at 3px offset; selected text is board on yellow.

### Motion

The board writing itself is the page's one authored moment; nothing else animates on scroll.

- The first time the board is 45% in view it writes the problem a line at a time, one line every 1.9s. Each line is drawn on left to right with a clip-path wipe (0.9s, `cubic-bezier(0.16, 1, 0.3, 1)`), and lines change colour over 0.5s as they move from current to explained. Choosing a tab writes that problem afresh; "Next step" stops the autoplay and advances by hand.
- Small feedback only: the book button presses to 98%; the sticky bar slides in over 0.35s on the same curve.
- The server HTML shows every line, so the worked problem reads without JavaScript. With reduced motion the board shows the whole solution at once, and the write-on, the colour transitions and the bar slide are all off.

### Share image and favicon

- The link preview (`opengraph-image.tsx`, 1200×630) is a piece of the board: the wordmark, the headline in chalk, one worked line (s = ut + ½at²) in yellow and the offer in soft chalk, set in Atkinson Hyperlegible Next from the TTFs in `src/app/tutoring/_og`.
- The tutoring site has its own favicon, separate from the studio's: a chalk #EEEFE6 "H" (Atkinson Hyperlegible Next Bold, outlined) over a chalk-yellow #EBD56C double underline (the board's marked answer) on a board-green #1E3A2F tile. Files: `public/tutoring-favicon.svg` and `public/tutoring-apple-touch-icon.png` (180, square), wired in the tutoring layout's metadata.
