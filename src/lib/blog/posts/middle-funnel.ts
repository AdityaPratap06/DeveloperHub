import type { BlogPost } from "../types";

export const howToFormatJson: BlogPost = {
  slug: "how-to-format-json",
  title: "How to Format JSON — Step-by-Step Guide",
  description:
    "Learn how to format, beautify, and prettify JSON with examples. Fix messy API responses and minify JSON for production using free online tools.",
  publishedAt: "2026-03-20",
  funnel: "middle",
  keywords: ["how to format json", "format json online", "beautify json", "prettify json", "json formatter guide"],
  relatedToolIds: ["json-formatter", "json-validator"],
  relatedPostSlugs: ["what-is-json", "best-json-formatter-online"],
  readTimeMinutes: 5,
  intro:
    "Formatting JSON makes unreadable API responses, log dumps, and config files easy to understand and debug. This guide shows you exactly how to format JSON — whether you use an online tool, command line, or code.",
  blocks: [
    { type: "heading", level: 2, text: "Why Format JSON?" },
    {
      type: "paragraph",
      content:
        "Raw JSON from APIs often arrives minified — all on one line with no spacing. While valid, it's nearly impossible to read. Formatting adds indentation and line breaks so you can quickly spot structure, find values, and debug issues.",
    },
    { type: "heading", level: 2, text: "Before and After: JSON Formatting" },
    {
      type: "paragraph",
      content: "Minified JSON (hard to read):",
    },
    {
      type: "code",
      language: "json",
      code: '{"users":[{"id":1,"name":"Alice","role":"admin"},{"id":2,"name":"Bob","role":"user"}],"total":2}',
    },
    {
      type: "paragraph",
      content: "Formatted JSON (easy to read):",
    },
    {
      type: "code",
      language: "json",
      code: `{
  "users": [
    {
      "id": 1,
      "name": "Alice",
      "role": "admin"
    },
    {
      "id": 2,
      "name": "Bob",
      "role": "user"
    }
  ],
  "total": 2
}`,
    },
    { type: "heading", level: 2, text: "How to Format JSON Online (Fastest Method)" },
    {
      type: "list",
      ordered: true,
      items: [
        "Copy your raw JSON from API response, log file, or config",
        "Open the DevToolsKit JSON Formatter",
        "Paste JSON into the input field",
        "Click \"Format\" to beautify with 2-space indentation",
        "Copy the formatted output or download as a .json file",
      ],
    },
    {
      type: "tool-cta",
      toolId: "json-formatter",
      label: "Format JSON Now — Free",
      description: "Beautify, minify, syntax highlight, copy and download — no signup required.",
    },
    { type: "heading", level: 2, text: "How to Minify JSON" },
    {
      type: "paragraph",
      content:
        "Minifying removes all whitespace to reduce file size. Use minified JSON in production API responses and config files where readability doesn't matter. Click \"Minify\" in our JSON Formatter to compress formatted JSON to a single line.",
    },
    { type: "heading", level: 2, text: "Validate Before Formatting" },
    {
      type: "paragraph",
      content:
        "If formatting fails, your JSON likely has syntax errors. Validate first to find the exact problem — trailing commas, single quotes, or unquoted keys are common culprits.",
    },
    {
      type: "tool-cta",
      toolId: "json-validator",
      label: "Validate JSON First",
      description: "Find syntax errors with line numbers before formatting.",
    },
    { type: "heading", level: 2, text: "Format JSON in Code" },
    {
      type: "paragraph",
      content: "JavaScript/Node.js:",
    },
    {
      type: "code",
      language: "javascript",
      code: `const formatted = JSON.stringify(JSON.parse(rawJson), null, 2);
console.log(formatted);`,
    },
    {
      type: "paragraph",
      content: "Python:",
    },
    {
      type: "code",
      language: "python",
      code: `import json
formatted = json.dumps(json.loads(raw_json), indent=2)
print(formatted)`,
    },
  ],
  faq: [
    {
      question: "What indentation should I use for JSON?",
      answer: "2 spaces is the most common standard. Some teams use 4 spaces or tabs. JSON.stringify in JavaScript uses spaces by default with the third argument.",
    },
    {
      question: "Can I format invalid JSON?",
      answer: "No. The JSON must be syntactically valid first. Use a validator to fix errors, then format.",
    },
  ],
};

export const howToValidateJwt: BlogPost = {
  slug: "how-to-validate-jwt-tokens",
  title: "How to Validate JWT Tokens — Developer Guide",
  description:
    "Learn how to decode, inspect, and validate JWT tokens. Check expiration, verify claims, and debug authentication issues with free tools.",
  publishedAt: "2026-03-21",
  funnel: "middle",
  keywords: ["how to validate jwt", "jwt validation", "decode jwt token", "check jwt expiration", "jwt debug"],
  relatedToolIds: ["jwt-decoder", "unix-timestamp"],
  relatedPostSlugs: ["what-is-jwt", "free-jwt-decoder"],
  readTimeMinutes: 6,
  intro:
    "JWT validation is essential for secure authentication. Whether you're debugging a login flow or inspecting token claims, this guide walks you through decoding, checking expiration, and understanding what validation actually means.",
  blocks: [
    { type: "heading", level: 2, text: "Decode vs Validate — Know the Difference" },
    {
      type: "list",
      items: [
        "Decoding — reading the header and payload (Base64 decode). Anyone can do this.",
        "Validating — verifying the signature + checking claims (exp, iss, aud). Requires the secret/public key.",
      ],
    },
    {
      type: "callout",
      variant: "info",
      content:
        "Our JWT Decoder decodes tokens for development and debugging. It does NOT verify signatures. Always validate server-side in production.",
    },
    { type: "heading", level: 2, text: "Step 1: Decode the JWT" },
    {
      type: "list",
      ordered: true,
      items: [
        "Copy the JWT from Authorization header, cookie, or API response",
        "Paste into the JWT Decoder tool",
        "Review the header — check algorithm (alg) and token type",
        "Review the payload — inspect claims like sub, email, roles, exp",
      ],
    },
    {
      type: "tool-cta",
      toolId: "jwt-decoder",
      label: "Decode JWT Token Free",
      description: "Instantly view header, payload, and expiration status.",
    },
    { type: "heading", level: 2, text: "Step 2: Check Expiration" },
    {
      type: "paragraph",
      content:
        "The exp claim is a Unix timestamp indicating when the token expires. Our decoder shows expiration in human-readable format with valid/expired status. If expired, the client needs to refresh the token or re-authenticate.",
    },
    {
      type: "tool-cta",
      toolId: "unix-timestamp",
      label: "Convert JWT exp Timestamp",
      description: "Convert Unix timestamps to readable dates.",
    },
    { type: "heading", level: 2, text: "Step 3: Verify Claims" },
    {
      type: "list",
      items: [
        "Check iss (issuer) matches your authentication server",
        "Check aud (audience) matches your application",
        "Verify sub (subject) is the expected user ID",
        "Inspect custom claims (roles, permissions) for authorization",
        "Ensure token hasn't expired (exp > current time)",
      ],
    },
    { type: "heading", level: 2, text: "Step 4: Verify Signature (Server-Side)" },
    {
      type: "paragraph",
      content:
        "Signature verification must happen on your server using the secret key (HS256) or public key (RS256). In Node.js, use jsonwebtoken library: jwt.verify(token, secret). Never expose your secret key to the client.",
    },
    {
      type: "code",
      language: "javascript",
      code: `const jwt = require('jsonwebtoken');
try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  console.log('Valid token:', decoded);
} catch (err) {
  console.log('Invalid token:', err.message);
}`,
    },
  ],
  faq: [
    {
      question: "Can I validate JWT without the secret key?",
      answer: "You can decode and inspect claims without the key, but signature verification requires the secret (HS256) or public key (RS256).",
    },
    {
      question: "What if my JWT is expired?",
      answer: "Use a refresh token to get a new access token, or redirect the user to log in again. Never extend expiration client-side.",
    },
  ],
};

export const howToGeneratePasswords: BlogPost = {
  slug: "how-to-generate-secure-passwords",
  title: "How to Generate Secure Passwords — Best Practices",
  description:
    "Learn how to create strong, secure passwords. Best practices for length, character types, and using a password generator for maximum security.",
  publishedAt: "2026-03-22",
  funnel: "middle",
  keywords: ["how to generate secure password", "strong password generator", "password best practices", "secure password tips"],
  relatedToolIds: ["password-generator", "hash-generator"],
  readTimeMinutes: 5,
  intro:
    "Weak passwords are the #1 cause of account breaches. This guide covers password security best practices and shows you how to generate cryptographically secure passwords that resist brute-force and dictionary attacks.",
  blocks: [
    { type: "heading", level: 2, text: "What Makes a Password Secure?" },
    {
      type: "list",
      items: [
        "Length — 16+ characters (length beats complexity)",
        "Randomness — generated randomly, not based on personal info",
        "Mixed characters — uppercase, lowercase, numbers, symbols",
        "Uniqueness — different password for every account",
        "Unpredictability — not in any dictionary or common list",
      ],
    },
    { type: "heading", level: 2, text: "How to Generate a Secure Password" },
    {
      type: "list",
      ordered: true,
      items: [
        "Open the DevToolsKit Password Generator",
        "Set length to at least 16 characters",
        "Enable all character types (uppercase, lowercase, numbers, symbols)",
        "Click Generate — uses crypto.getRandomValues() for secure randomness",
        "Check the strength indicator — aim for \"Strong\"",
        "Copy and store in a password manager immediately",
      ],
    },
    {
      type: "tool-cta",
      toolId: "password-generator",
      label: "Generate Secure Password Free",
      description: "Cryptographically secure passwords with customizable length and character sets.",
    },
    { type: "heading", level: 2, text: "Password Length vs Complexity" },
    {
      type: "paragraph",
      content:
        "A 20-character password using only lowercase letters is stronger than an 8-character password with mixed types. NIST guidelines recommend minimum 8 characters but encourage 15+ for sensitive accounts. Our generator supports up to 64 characters.",
    },
    { type: "heading", level: 2, text: "Passwords to Never Use" },
    {
      type: "list",
      items: [
        "password123, admin, qwerty — top breached passwords",
        "Personal info — birthdays, names, pet names",
        "Keyboard patterns — 12345678, asdfghjk",
        "Reused passwords — same password across multiple sites",
        "Short passwords — under 12 characters",
      ],
    },
    { type: "heading", level: 2, text: "Store Passwords Safely" },
    {
      type: "paragraph",
      content:
        "Use a password manager (Bitwarden, 1Password, KeePass) to store generated passwords. Never write them in plain text files, sticky notes, or spreadsheets. Password managers encrypt your vault with one master password.",
    },
  ],
  faq: [
    {
      question: "How long should a password be?",
      answer: "Minimum 12 characters for regular accounts, 16+ for sensitive accounts (banking, email, admin). Longer is always better.",
    },
    {
      question: "Are generated passwords truly random?",
      answer: "Our generator uses crypto.getRandomValues(), the browser's cryptographically secure random number generator — the same API recommended for security applications.",
    },
    {
      question: "Should I change passwords regularly?",
      answer: "NIST no longer recommends forced periodic changes. Change passwords when there's a breach, or if you suspect compromise. Focus on unique, strong passwords instead.",
    },
  ],
};
