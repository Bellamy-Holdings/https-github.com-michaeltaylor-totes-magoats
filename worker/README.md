# Referral Factory Proxy — Cloudflare Worker

This Cloudflare Worker acts as a secure proxy between the static site and the Referral Factory sticky-bar token API. It accepts `{ first_name, email }` from the browser, adds the campaign secret **server-side** from a Cloudflare encrypted environment variable, and forwards the request to Referral Factory. The secret never reaches the browser.

## How it works

```
Browser  →  { first_name, email }  →  Worker  →  { first_name, email, secret }  →  Referral Factory
                                        ↑
                              secret lives here only
                          (encrypted Cloudflare env var)
```

## Deploy

1. **Install Wrangler** (if not already installed):
   ```bash
   npm install -g wrangler
   ```

2. **Authenticate with Cloudflare**:
   ```bash
   npx wrangler login
   ```

3. **Deploy the Worker**:
   ```bash
   cd worker
   npx wrangler deploy
   ```

4. **Set the secret** (you will be prompted to paste it — it is stored encrypted in Cloudflare, never in this repo):
   ```bash
   npx wrangler secret put REFERRAL_FACTORY_SECRET
   # paste: <your Referral Factory campaign secret>
   ```

After deploying, Wrangler will print your Worker URL, e.g.:
```
https://referral-factory-proxy.<your-subdomain>.workers.dev
```

## Update index.html

After deployment, open `index.html` and replace the placeholder Worker URL with your actual deployed Worker URL:

```
<!-- 🔒 Replace the URL below with your deployed Cloudflare Worker URL -->
<!-- Run: cd worker && npx wrangler deploy && npx wrangler secret put REFERRAL_FACTORY_SECRET -->
fetch("https://referral-factory-proxy.YOUR_SUBDOMAIN.workers.dev", { ... })
```

Change it to:
```
fetch("https://referral-factory-proxy.<your-subdomain>.workers.dev", { ... })
```

The `secret` field has been removed from the `index.html` fetch body — the Worker adds it automatically.
