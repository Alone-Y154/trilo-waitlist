# Waitlist Source Attribution

This project sends a single `source` string to `POST /api/waitlist`.

Because the backend currently stores only one source field, the frontend uses a compact format:

```text
channel:placement
```

Examples:

- `instagram:hero`
- `facebook:final_cta`
- `linkedin:hero`
- `direct:final_cta`

## Priority Order

The frontend resolves `source` using this order:

1. `utm_source` from the current URL
2. previously captured attribution in `sessionStorage`
3. external `document.referrer`
4. fallback to `direct`

Placement is always appended from the form location:

- `hero`
- `final_cta`

## Why This Is The Best Fit Right Now

- `utm_source` is the most reliable attribution input for social campaigns
- `document.referrer` is useful as a fallback, but social in-app browsers can strip it
- `sessionStorage` preserves attribution during the current visit without persisting it long-term
- the final value stays short and within the backend's 100-character limit

## Current Channel Detection

### UTM aliases

These values are normalized:

- `instagram`, `ig` -> `instagram`
- `facebook`, `fb`, `meta` -> `facebook`
- `linkedin`, `li`, `lnkd` -> `linkedin`
- `twitter`, `x` -> `x`

### Referrer domains

These hosts are recognized:

- Instagram: `instagram.com`, `l.instagram.com`
- Facebook: `facebook.com`, `m.facebook.com`, `l.facebook.com`, `lm.facebook.com`
- LinkedIn: `linkedin.com`, `www.linkedin.com`, `lnkd.in`
- X: `x.com`, `twitter.com`, `t.co`
- YouTube: `youtube.com`, `www.youtube.com`, `youtu.be`
- Google: `google.com`, `www.google.com`

Internal referrers from the same origin are ignored.

## Recommended Campaign URLs

Use explicit UTMs in social links:

```text
https://yourdomain.com/?utm_source=instagram&utm_medium=social&utm_campaign=waitlist
https://yourdomain.com/?utm_source=facebook&utm_medium=social&utm_campaign=waitlist
https://yourdomain.com/?utm_source=linkedin&utm_medium=social&utm_campaign=waitlist
```

With the current implementation, these become:

- `instagram:hero`
- `facebook:final_cta`
- `linkedin:hero`

depending on which form the user submits.

## Implementation Files

- Source resolver: [lib/waitlist-source.ts](/e:/trilo-waitlist/lib/waitlist-source.ts)
- Form submit integration: [components/WaitlistForm.tsx](/e:/trilo-waitlist/components/WaitlistForm.tsx)

## If You Want More Detail Later

If backend attribution needs to be richer than a single string, add dedicated columns such as:

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `referrer_host`
- `form_location`

That is the better long-term schema for reporting. The current `channel:placement` format is the cleanest option for the existing single `source` column.
