# Site analytics

Notes on what this site tracks, how to turn it on, and how to get useful signal
out of it during a job search. Not published; excluded from the Jekyll build.

## The stack

Three independent tools, each behind its own key in `_config.yml`. Nothing runs
until its key is set, and any of them can be disabled by commenting the key out.

| Tool | Key | What it gives you | Cookies |
| --- | --- | --- | --- |
| GoatCounter | `goatcounter` | Pageviews, referrers, campaign tags, country | No |
| Microsoft Clarity | `clarity` | Session replay, heatmaps, device tags | Yes |
| Google Analytics 4 | `gtag` | Sessions, engagement time, events, geo, funnels | Yes |

Sign-up links are in the `_config.yml` comments. Each needs an account and a
site ID pasted into the config.

## What you get

**GoatCounter** — the cookieless baseline. Cleanest view of referrers and
campaign tags, which is the signal that matters most (see tagging, below).

**Clarity** — the visual layer:

- Session replay: cursor movement, clicks, scrolling, played back as video
- Click and scroll heatmaps per page
- Rage clicks, dead clicks, excessive scrolling, quick-backs
- Custom device tags set in `_includes/clarity.html`: timezone, languages,
  CPU cores, device memory, viewport, screen and pixel ratio, connection type,
  and GPU model string

The site has no forms or inputs anywhere, so replay captures pointer and scroll
behaviour only. There is no text entry on the site for it to record.

**GA4** — the numbers layer: sessions, engagement time, scroll and outbound
click events, city-level geography, and returning-visitor identification.

## What is still out of reach

No client-side tool gets a name, email, or employer from a cold visitor. IP
enrichment services (Clearbit, RB2B) resolve corporate networks to a company
name at best, and residential ISPs to nothing.

Also worth knowing:

- GitHub Pages exposes no server logs. Client-side JavaScript is the only
  source, so ad-blocker users never appear at all. Clarity and GA4 are on more
  blocklists than GoatCounter. Treat every number as a floor.
- The only reliable way to know a *specific person* visited is a uniquely
  tagged link you sent them. That is identity by construction, not detection.

## Tagging links (the highest-value part)

Clicks from PDFs, email, and native apps arrive with no referrer, so tag the URL
instead. Every place you publish the link, give it its own tag:

| Where the link lives | URL to use |
| --- | --- |
| LinkedIn profile | `https://kornosky.site/?utm_source=linkedin` |
| GitHub profile | `https://kornosky.site/?utm_source=github` |
| itch.io profile | `https://kornosky.site/?utm_source=itch` |
| Résumé PDF | `https://kornosky.site/?utm_source=resume` |
| A specific application | `https://kornosky.site/?utm_source=resume&utm_campaign=affirm-mle2` |

These register as campaigns in all three tools. A visit tagged `affirm-mle2` two
days after applying means someone on that team opened the site, which is real
signal about whether an application is live. Log the tag you used in
`job_search_tracker.xlsx` next to each application so the dashboard reads
clearly later.

## Notes

Clarity and GA4 both set cookies, which is what triggers consent requirements in
the EU and UK. Traffic here is expected to be US-based, and the site has no
forms, no login, and no commercial activity.

Fingerprinting libraries (FingerprintJS and similar) are deliberately not
included. They exist to defeat incognito mode and cache clearing, which is
useful for fraud detection and paywalls, and buys nothing on a portfolio that
Clarity's device tags do not already cover.
