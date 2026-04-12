const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    // Only allow POST
    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405, headers: CORS_HEADERS });
    }

    // Parse body
    let first_name, email;
    try {
      ({ first_name, email } = await request.json());
    } catch {
      return new Response("Invalid JSON", { status: 400, headers: CORS_HEADERS });
    }

    if (!first_name || !email) {
      return new Response("Missing fields: first_name and email are required", {
        status: 400,
        headers: CORS_HEADERS,
      });
    }

    // Forward to Referral Factory with secret from env
    let resp;
    try {
      resp = await fetch("https://app.referral-factory.com/api/public/sticky-bar/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ first_name, email, secret: env.REFERRAL_FACTORY_SECRET }),
      });
    } catch (err) {
      return new Response("Upstream request failed", { status: 502, headers: CORS_HEADERS });
    }

    if (!resp.ok) {
      return new Response("Upstream error", { status: 502, headers: CORS_HEADERS });
    }

    const data = await resp.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json", ...CORS_HEADERS },
    });
  },
};
