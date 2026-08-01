# Site analytics

Notes on what this site tracks, how to turn it on, and how to get useful signal
out of it during a job search. Not published; excluded from the Jekyll build.

## Turning it on

1. Sign up at <https://www.goatcounter.com> (free for personal sites) and pick a
   site code, e.g. `kornosky`.
2. Uncomment `goatcounter:` in `_config.yml` and set it to that code.
3. Push. The dashboard is at `https://YOURCODE.goatcounter.com`.

Nothing is tracked until that key is set. To switch to Google Analytics 4
instead, set `gtag:` in `_config.yml`; the theme already supports it. GA4
collects more but needs a cookie-consent banner in the EU/UK and is blocked by
most ad blockers, which disproportionately hits a technical audience.

## What you can and cannot see

Available per visit:

- Page viewed, date and time
- Referrer (which site or which application link sent them)
- Campaign tags from the URL (see below)
- Country, browser, OS, screen size

Not available, by design or by platform:

- Names, emails, employers, or LinkedIn profiles of visitors
- IP addresses. GoatCounter hashes IP + user agent with a rotating salt purely
  to count unique visits, and never stores the address.
- Server logs. GitHub Pages does not expose them, so client-side JavaScript is
  the only source of data, and anyone running an ad blocker will not appear at
  all. Treat the numbers as a floor, not a census.

## Tagging links (the part that actually matters)

Referrer alone will not tell you much, because clicks from PDFs, email, and
native apps usually arrive with no referrer at all. Tag the URL instead. Every
place you publish the site link, give it its own tag:

| Where the link lives | URL to use |
| --- | --- |
| LinkedIn profile | `https://kornosky.site/?utm_source=linkedin` |
| GitHub profile | `https://kornosky.site/?utm_source=github` |
| itch.io profile | `https://kornosky.site/?utm_source=itch` |
| Résumé PDF | `https://kornosky.site/?utm_source=resume` |
| A specific application | `https://kornosky.site/?utm_source=resume&utm_campaign=affirm-mle2` |

These show up under Campaigns in GoatCounter, and work the same in GA4 or
Plausible if you ever switch.

Per-application tags are the highest-value trick here: a visit tagged
`affirm-mle2` two days after applying means someone on that team opened your
site, which is a real signal about whether an application is live. Keep the
campaign tag short and lowercase, since it is visible in the address bar.

Worth logging the tag you used in `job_search_tracker.xlsx` alongside each
application so the dashboard is readable later.

## Deliberately not set up

Visitor-deanonymization services (RB2B, Clearbit Reveal, Warmly and similar)
claim to attach a name and LinkedIn profile to individual visitors. They are not
wired up here, for practical reasons as much as legal ones: they work by
matching IPs against data-broker profiles, so residential ISPs resolve to
nothing and the best case is "someone at Company X" from a corporate IP. That is
the same thing a campaign tag tells you, without processing third-party personal
data on a personal site.
