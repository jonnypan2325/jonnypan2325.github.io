# surf-counter (Cloudflare Worker)

Backend for the surfboard counter on the home page. The static site stays on
GitHub Pages; this Worker holds the shared count and sends a throttled push.

## One-time setup

1. Install deps: `npm install` (inside this `worker/` folder).
2. Create the KV namespace and paste its id into `wrangler.toml`:
   ```
   npx wrangler kv namespace create COUNTER
   ```
3. Set secrets:
   ```
   npx wrangler secret put TURNSTILE_SECRET
   npx wrangler secret put PUSHOVER_TOKEN
   npx wrangler secret put PUSHOVER_USER
   ```
   To use ntfy instead of Pushover, set `NTFY_URL` and skip the Pushover secrets.

## Local development

1. Copy `.dev.vars.example` to `.dev.vars` and fill in values. The example uses
   Cloudflare's Turnstile test secret, which always passes.
2. Run `npm run dev`. It serves at `http://localhost:8787`.
3. In the site's `src/data/site.ts`, set `counterApiUrl` to the local URL and
   `turnstileSiteKey` to the Turnstile test site key `1x00000000000000000000AA`.

## Deploy

```
npm run deploy
```

Then put the live Worker URL into `src/data/site.ts` as `counterApiUrl`, add the
real Turnstile site key as `turnstileSiteKey`, and redeploy the site.

## API

- `GET /count` returns `{ "count": number }`.
- `POST /increment` with JSON body `{ "token": "<turnstile-token>" }` returns
  `{ "count": number }`. Responds 429 if the caller's IP is inside its 15 minute
  window, or 403 if the Turnstile token fails.
