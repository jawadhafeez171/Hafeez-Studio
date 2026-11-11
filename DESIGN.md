# Hafeez Studio design system

Minimal and typographic. Well-set words, real client screens and honest prices do the persuading. Applies to the studio site (`/`). The tutoring site (`/tutoring`, served at tuition.hafeezstudio.com) is a separate business with its own plain white world, scoped under `.tutor` in `src/app/tutoring/tutor.css`; see [Hafeez Tutor](#hafeez-tutor-tuitionhafeezstudiocom) below.

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
- **Client work** (`.work-row`): six phone frames with real screenshots, three per row with each phone capped at 280px wide (`.work-shot`). On phones it becomes a horizontal snap row. The row must stay `position: relative` so screen-reader-only labels don't widen the page.
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

**One plain white page, one green button.** It says what is offered, to whom, where and for how much, in one short column. Nothing is decorated.

- **The One Green Rule.** Deep green marks the book button, the list markers and step numbers, the WhatsApp glyph in the top line and the focus ring. Text is ink or soft ink, never green.
- **The Bare Page Rule.** No images, cards, shadows or colour gradients. Sections are separated by a hairline and whitespace only.
- **The Top Band.** The header and hero sit on one very pale yellow band (`--band` #FDF9EC, changed from pale green at the user's request on 2026-11-11; ink 15.72:1, soft ink 6.87:1 on it) that ends in a hairline. Its top-right corner carries a faint graph-paper grid (24px cells, green at 9%, faded out by a radial mask toward the text), chosen by the user on 2026-11-11 as the page's one subject cue: maths graph paper. The hero band slides up under the transparent header (-72px), so a single grid covers both without a seam. The grid stays in this corner only; it is never repeated elsewhere. The phone browser bar matches the band (`themeColor` #FDF9EC).

### Colour (tokens on `.tutor`)

| Token | Value | On white | Use |
|---|---|---|---|
| `--paper` | #FFFFFF | – | The whole ground, the dialog, and the browser chrome (`themeColor` #FFFFFF, `color-scheme: light`) |
| `--ink` | #16211C | 16.56:1 | Headings, wordmark, body, price |
| `--ink-soft` | #4D5A53 | 7.23:1 | Lede, top-line link, quiet link, areas, closing text, footer |
| `--text-muted` (dialog placeholders) | #6B7770 | 4.67:1 | Lighter than body text so placeholders never read as entered values |
| `--rule` | #DDE3DF | – | Every hairline (section tops, footer) |
| `--green` | #1F6B48 | 6.45:1 as a mark; white on it 6.45:1 | Book button fill, list dots, step numbers, WhatsApp glyph, focus ring |
| `--green-hover` | #17563A | white on it 8.65:1 | Book button hover |

Selected text is green at 18% (`rgba(31, 107, 72, 0.18)`).

### Type

- **One face throughout:** Atkinson Hyperlegible Next (`next/font/google`, normal and italic, `--font-atkinson`, fallback Segoe UI / system-ui), chosen for unambiguous figures and l/I/1. Prices and the phone number use tabular lining numerals (`.num`).
- **Weights:** 700 for the headline, section headings, wordmark, button, price figure and step numbers; 400 for everything else.

| Role | Size | Line-height / tracking | Notes |
|---|---|---|---|
| Headline | `clamp(2.2rem, 6.4vw, 3.4rem)` | 1.08 / -0.02em | Balanced |
| Section heading | `clamp(1.4rem, 3vw, 1.75rem)` | 1.2 / -0.01em | |
| Lede and price | `clamp(1.1rem, 2vw, 1.25rem)` | 1.55 | Lede in `--ink-soft`, max 40ch |
| Body | 18px | 1.6 | Areas paragraph at 1.7 |
| Wordmark | 1.1rem | – | |
| Button | 1.05rem | – | |
| Small | 0.9–1rem | – | Top link 0.95rem, quiet link 1rem, footer 0.9rem |

### Layout

- A single column, max 720px, centred, with 20px side padding at every width.
- **Top line:** 72px tall, wordmark left, WhatsApp link right.
- **Hero:** padded `clamp(40px, 9vh, 96px)` above and `clamp(48px, 8vw, 72px)` below.
- **Sections:** each opened by a 1px `--rule` hairline and padded `clamp(36px, 6vw, 56px)`; the footer is opened by the same hairline.
- **Actions:** button and quiet link in a wrapping row (gap 8px / 20px); at 480px and below they stack and the button runs full width.

### Elevation and shape

Flat: no shadows anywhere. The only shapes are the fully rounded button (999px), the 8px round list dots and a 6px radius on the focus outline.

### Components

- **Book button:** the one primary action, used in the hero and in the closing section. A green pill with white text and the WhatsApp glyph, 54px tall, 26px side padding, bold; it opens WhatsApp in a new tab.
- **Quiet link:** "or leave your number", underlined soft-ink text (44px tap height) that opens the shared contact dialog; it turns ink on hover. It is never styled as a second button.
- **Price pill:** "₹600 an hour · First class free" in a fully rounded pill (`--pill` #DCEBE2, text `--green-hover` #17563A at 7.01:1, bold, 8px 16px padding) directly above the book button, so the price and free trial are seen first.
- **Area pages** (`tuition.hafeezstudio.com/<area>`, content in `src/app/tutoring/areas.ts`, template `src/app/tutoring/[area]/page.tsx`): the same band, pill, header and footer as the main page, plus a breadcrumb above the headline, a "Home tuition across <area>" section with hand-written local text and the localities as an inline dot list, area-specific FAQ, and green bold "Home tutor in <area>" links to neighbouring area pages. Each page writes its own introduction, local note and questions; only confirmed facts and well-known public roads and landmarks are used, and no quotes until real ones exist. The WhatsApp button pre-fills the area name. Area names on the main page link to their pages.
- **Floating buttons** (`FloatingButtons.tsx`, every tuition page): bottom-right, a 58px green WhatsApp circle (white icon, soft offset shadow; area pages pre-fill the area) with a 50px white call circle above it (green phone icon, `tel:+919902800693`) and a 46px white back-to-top circle at the top that appears after ~80% of a screen of scrolling and returns focus to the wordmark. On phones the WhatsApp and call circles step aside while a full-width booking button is on screen.
- **FAQ** ("Questions parents ask"): native `<details>` rows divided by hairlines, a bold question with a green CSS-drawn plus that turns into a minus when open, the answer in soft ink. Answers use only confirmed facts; the same list feeds the page's FAQPage structured data.
- **Header:** on the band colour with a bottom hairline; bold wordmark, section links (What's included, How it starts, Areas, FAQ) in soft ink, and the WhatsApp link. Sticky from 640px up (sections land 88px below the top); on phones it scrolls away and the links take a second row.
- **Top line:** bold wordmark "Hafeez Tutor" on the left; on the right a soft-ink link with a green WhatsApp glyph and the number, which becomes the word "WhatsApp" at 420px and below.
- **Bulleted list** ("What's included"): rows padded 10px with a 28px indent and an 8px green dot.
- **Numbered list** ("How it starts"): the same rows with a bold green tabular numeral in a 36px indent, because the order matters.
- **Areas covered:** grouped as a definition list, **Central**, **North**, **South** then **West**, each a bold label over one comma-separated sentence in soft ink (line-height 1.7), not chips. A closing line invites nearby areas to ask on WhatsApp.
- **Contact dialog:** the shared `ContactModal` is themed by mapping its tokens onto the page: `--modal-bg`, `--bg-main` and `--bg-card` white, `--bg-surface` #F4F7F5, text ink / soft ink, muted #6B7770 for placeholders, borders `--rule` / #B9C4BE / #8D9A93 on hover, accent and CTA green with hover #17563A and white CTA text, accent tints green at 8% / 22% and a 40% accent border, both font tokens Atkinson. Its title is set at 700 like the page headings, the phone placeholder reads "10-digit mobile number" (no sample digits), and its primary button is green with white text. Field errors are pinned to #B42323 (6.55:1) on white.
- **Focus:** a 3px green outline at 3px offset with a 6px radius.

### Motion

None beyond the book button's background colour change on hover (0.2s ease). Nothing animates on load or on scroll.

### Share image and favicon

- The link preview (`opengraph-image.tsx`, 1200×630) matches the page: white ground, the wordmark (36px bold) and the headline (62px bold) in ink, "₹600 an hour · First class free" in green, and the boards line in soft ink, set in Atkinson Hyperlegible Next from the TTFs in `src/app/tutoring/_og`.
- Favicon: a white "H" (Atkinson Hyperlegible Next Bold, outlined) on the page's green #1F6B48 tile (14px radius on 64). Files: `public/tutoring-favicon.svg` and `public/tutoring-apple-touch-icon.png` (180, square; iOS rounds it), wired in the tutoring layout's metadata.
