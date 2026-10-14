# thirtysixthparallel.com

Website for Thirty-Sixth Parallel LLC. Plain HTML and CSS, no build step, intended for GitHub Pages (the same setup as annemetz.com). No code, images, analytics, or form endpoints are shared with annemetz.com.

## Status

Approved for a trimmed launch on October 14, 2026. GitHub Pages serves `main` at thirtysixthparallel.com (DNS at Cloudflare). Left out until ready: referral descriptions, support groups, therapist directory, state provider list, privacy policy and terms (from the attorney), the consultation request form (after attorney review), and the Rio Grande Gorge photo (source unconfirmed; recover it from git history).

## Design

Colors and fonts are set as variables at the top of `css/site.css` (slate ink, clay accent, Lora headings, Source Sans 3 body). The layout follows annemetz.com; the colors, fonts, wordmark, and code are separate.

## Placeholders

Every item waiting on Anne or the attorney is marked `PLACEHOLDER`, either as visible text (yellow box) or in an HTML comment. Search for it before launch:

    grep -rn PLACEHOLDER .

Legal placeholders are marked `PLACEHOLDER: LEGAL`.

## Rules

- No form that collects health information until the attorney reviews the forms and the privacy notice and Anne approves.
- Do not state that any service is available until the company is licensed.
- Do not add credentials, license numbers, testimonials, or outcomes Anne has not confirmed.
- No client data in this repo.

See `NOTES.md` for content waiting to move from annemetz.com.
