import type { BlogPost } from "../types";

export const whatIsJwt: BlogPost = {
  slug: "what-is-jwt",
  title: "What Is JWT? JSON Web Token Explained",
  description:
    "Learn what JWT tokens are, how they work, JWT structure (header, payload, signature), and why developers use them for authentication.",
  publishedAt: "2026-03-16",
  funnel: "top",
  keywords: ["what is jwt", "json web token", "jwt explained", "jwt authentication", "jwt token structure"],
  relatedToolIds: ["jwt-decoder", "base64-encoder"],
  relatedPostSlugs: ["how-to-validate-jwt-tokens", "free-jwt-decoder"],
  readTimeMinutes: 7,
  intro:
    "JWT (JSON Web Token) is the standard way modern applications handle authentication and authorization. Every time you log into a web app and stay signed in, JWT is likely working behind the scenes. This guide explains JWT in simple terms — what it contains, how it works, and when to use it.",
  blocks: [
    { type: "heading", level: 2, text: "What Does JWT Stand For?" },
    {
      type: "paragraph",
      content:
        "JWT stands for JSON Web Token. It's an open standard (RFC 7519) for securely transmitting information between parties as a compact, URL-safe string. The information is JSON-encoded and digitally signed so receivers can verify it hasn't been tampered with.",
    },
    { type: "heading", level: 2, text: "Why JWT Is Used" },
    {
      type: "list",
      items: [
        "Stateless authentication — servers don't need to store session data",
        "Self-contained — the token carries all necessary user information",
        "Cross-domain — works across different services and microservices",
        "Compact — small enough to send in HTTP headers and URLs",
        "Standardized — supported by every major platform and language",
      ],
    },
    { type: "heading", level: 2, text: "JWT Structure" },
    {
      type: "paragraph",
      content:
        "A JWT consists of three parts separated by dots (.), each Base64URL-encoded:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Header — contains the token type (JWT) and signing algorithm (e.g. HS256, RS256)",
        "Payload — contains claims (user data like ID, email, roles, expiration time)",
        "Signature — verifies the token wasn't modified, created using the header, payload, and secret key",
      ],
    },
    {
      type: "code",
      language: "text",
      code: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWII6MTIzNDU2Nzg5MCwibmFtZSI6IkpvaG4In0.signature",
    },
    { type: "heading", level: 2, text: "Common JWT Claims" },
    {
      type: "list",
      items: [
        "iss (Issuer) — who created the token",
        "sub (Subject) — who the token is about (usually user ID)",
        "aud (Audience) — who the token is intended for",
        "exp (Expiration) — when the token expires (Unix timestamp)",
        "iat (Issued At) — when the token was created",
        "Custom claims — app-specific data like roles, permissions, email",
      ],
    },
    { type: "heading", level: 2, text: "How JWT Authentication Works" },
    {
      type: "list",
      ordered: true,
      items: [
        "User logs in with credentials",
        "Server validates credentials and creates a signed JWT",
        "Client stores the JWT (cookie, localStorage, or memory)",
        "Client sends JWT with every subsequent request (Authorization header)",
        "Server verifies the signature and reads claims — no database lookup needed",
      ],
    },
    {
      type: "callout",
      variant: "info",
      content:
        "Decoding a JWT shows you the contents but does NOT verify the signature. Never trust decoded JWT data for authorization without server-side signature verification.",
    },
    { type: "heading", level: 2, text: "Decode JWT Tokens Online" },
    {
      type: "paragraph",
      content:
        "During development, you often need to inspect JWT contents — check expiration, debug claims, or verify token structure. Our free JWT Decoder lets you paste any token and instantly view the header, payload, and expiration status.",
    },
    {
      type: "tool-cta",
      toolId: "jwt-decoder",
      label: "Decode JWT Token Free",
      description: "View JWT header, payload, and expiration — 100% client-side, tokens never leave your browser.",
    },
  ],
  faq: [
    {
      question: "Is JWT the same as OAuth?",
      answer:
        "No. OAuth is an authorization framework. JWT is a token format. OAuth often uses JWTs as access tokens, but they're different concepts.",
    },
    {
      question: "Where should I store JWT tokens?",
      answer:
        "HttpOnly cookies are most secure for web apps (prevents XSS access). localStorage is convenient but vulnerable to XSS attacks. Never store JWTs in regular cookies without HttpOnly flag.",
    },
    {
      question: "Can JWT tokens be revoked?",
      answer:
        "JWTs are stateless, so revoking them requires additional infrastructure like token blacklists, short expiration times, or refresh token rotation.",
    },
  ],
};

export const whatIsBase64: BlogPost = {
  slug: "what-is-base64",
  title: "What Is Base64 Encoding? Complete Guide",
  description:
    "Learn what Base64 encoding is, why developers use it, how it works, and when to encode or decode Base64 strings — with a free online tool.",
  publishedAt: "2026-03-17",
  funnel: "top",
  keywords: ["what is base64", "base64 encoding explained", "base64 decode", "base64 example"],
  relatedToolIds: ["base64-encoder", "url-encoder"],
  readTimeMinutes: 6,
  intro:
    "Base64 is one of the most common encoding schemes in computing. You'll encounter it in API authentication, email attachments, data URIs, and JWT tokens. This guide explains what Base64 is, why it exists, and how to encode and decode it.",
  blocks: [
    { type: "heading", level: 2, text: "What Is Base64?" },
    {
      type: "paragraph",
      content:
        "Base64 is a binary-to-text encoding scheme that converts binary data into a string of ASCII characters. It uses 64 characters: A-Z, a-z, 0-9, plus + and / (with = used for padding). The result is safe to transmit through systems that only handle text.",
    },
    { type: "heading", level: 2, text: "Why Base64 Is Used" },
    {
      type: "list",
      items: [
        "Email attachments — SMTP only supports text, so binary files are Base64-encoded",
        "Data URIs — embed images directly in HTML/CSS as Base64 strings",
        "API authentication — HTTP Basic Auth encodes credentials in Base64",
        "JWT tokens — header and payload are Base64URL-encoded",
        "Storing binary in JSON — JSON can't hold raw binary, so Base64 represents it as text",
      ],
    },
    { type: "heading", level: 2, text: "How Base64 Encoding Works" },
    {
      type: "paragraph",
      content:
        "Base64 takes every 3 bytes (24 bits) of input and splits them into 4 groups of 6 bits. Each 6-bit group maps to one of 64 printable ASCII characters. If input length isn't divisible by 3, padding characters (=) are added.",
    },
    {
      type: "code",
      language: "text",
      code: `Text:    "Hello"
Base64:  "SGVsbG8="`,
    },
    {
      type: "callout",
      variant: "tip",
      content:
        "Base64 is encoding, NOT encryption. Anyone can decode Base64 strings instantly. Never use Base64 alone to protect sensitive data.",
    },
    { type: "heading", level: 2, text: "Base64 vs Base64URL" },
    {
      type: "paragraph",
      content:
        "Base64URL is a URL-safe variant used in JWTs and web contexts. It replaces + with - and / with _, and often omits padding. Standard Base64 uses + and / which can break URLs.",
    },
    { type: "heading", level: 2, text: "Encode and Decode Base64 Online" },
    {
      type: "paragraph",
      content:
        "Our free Base64 Encoder handles both encoding and decoding with full UTF-8 support — including emoji and international characters. Everything runs in your browser.",
    },
    {
      type: "tool-cta",
      toolId: "base64-encoder",
      label: "Base64 Encode & Decode Free",
      description: "Instantly encode text to Base64 or decode Base64 strings — private and browser-based.",
    },
  ],
  faq: [
    {
      question: "Is Base64 encryption?",
      answer: "No. Base64 is encoding — a reversible transformation to represent binary as text. Encryption requires a key and is designed to be hard to reverse without it.",
    },
    {
      question: "Why does Base64 increase data size?",
      answer: "Base64 encodes 3 bytes into 4 characters, increasing size by roughly 33%. This trade-off buys compatibility with text-only systems.",
    },
    {
      question: "What does the = at the end mean?",
      answer: "The = characters are padding. They indicate the original data length wasn't a multiple of 3 bytes.",
    },
  ],
};

export const whatIsSha256: BlogPost = {
  slug: "what-is-sha256",
  title: "What Is SHA256? Hashing Explained for Developers",
  description:
    "Learn what SHA256 hashing is, how it works, common use cases, and how to generate SHA256 hashes online — plus MD5, SHA1, and SHA512.",
  publishedAt: "2026-03-18",
  funnel: "top",
  keywords: ["what is sha256", "sha256 hash", "sha256 explained", "cryptographic hash", "sha256 vs md5"],
  relatedToolIds: ["hash-generator", "password-generator"],
  readTimeMinutes: 6,
  intro:
    "SHA256 is one of the most widely used cryptographic hash functions in the world. It powers blockchain, SSL certificates, password storage, and file integrity checks. This guide explains what SHA256 is, how hashing works, and when developers use it.",
  blocks: [
    { type: "heading", level: 2, text: "What Is SHA256?" },
    {
      type: "paragraph",
      content:
        "SHA256 (Secure Hash Algorithm 256-bit) is a cryptographic hash function that takes input of any size and produces a fixed 256-bit (64 hexadecimal character) output. It's part of the SHA-2 family designed by the NSA and published in 2001.",
    },
    { type: "heading", level: 2, text: "How Hash Functions Work" },
    {
      type: "list",
      items: [
        "Deterministic — same input always produces the same hash",
        "One-way — computationally infeasible to reverse a hash to get the original input",
        "Avalanche effect — tiny input change completely changes the output hash",
        "Fixed output size — SHA256 always produces 64 hex characters regardless of input size",
        "Collision resistant — extremely hard to find two inputs with the same hash",
      ],
    },
    {
      type: "code",
      language: "text",
      code: `Input:  "Hello, World!"
SHA256: a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57bbd5147a8f8a8a`,
    },
    { type: "heading", level: 2, text: "Common Uses of SHA256" },
    {
      type: "list",
      items: [
        "File integrity verification — compare hashes to detect corruption or tampering",
        "Password storage — hash passwords with salt (never store plain text)",
        "Blockchain — Bitcoin uses SHA256 for proof-of-work mining",
        "SSL/TLS certificates — verify certificate integrity",
        "Git commit hashes — SHA1 (being replaced by SHA256) identifies commits",
        "Digital signatures — part of signing and verification workflows",
      ],
    },
    { type: "heading", level: 2, text: "SHA256 vs MD5 vs SHA1" },
    {
      type: "list",
      items: [
        "MD5 — 128-bit output, fast but cryptographically broken (collisions found). OK for checksums, not security.",
        "SHA1 — 160-bit output, deprecated for security. Git still uses it for commit IDs.",
        "SHA256 — 256-bit output, currently secure. Recommended for most security use cases.",
        "SHA512 — 512-bit output, even stronger. Used when maximum security is needed.",
      ],
    },
    { type: "heading", level: 2, text: "Generate Hashes Online" },
    {
      type: "paragraph",
      content:
        "Our Hash Generator computes MD5, SHA1, SHA256, and SHA512 hashes instantly as you type. Perfect for verifying checksums, testing hash functions, or generating cache keys during development.",
    },
    {
      type: "tool-cta",
      toolId: "hash-generator",
      label: "Generate SHA256 Hash Free",
      description: "MD5, SHA1, SHA256, SHA512 — all computed instantly in your browser.",
    },
  ],
  faq: [
    {
      question: "Can SHA256 be reversed?",
      answer:
        "No. Hash functions are one-way. You cannot recover the original input from a SHA256 hash. Attack attacks try billions of inputs to find a match.",
    },
    {
      question: "Is SHA256 still secure in 2026?",
      answer:
        "Yes. SHA256 remains secure for hashing purposes. No practical collision attacks exist. SHA256 is widely recommended over MD5 and SHA1.",
    },
    {
      question: "Should I use SHA256 for password storage?",
      answer:
        "SHA256 alone is not enough. Use dedicated password hashing algorithms like bcrypt, scrypt, or Argon2 with unique salts per password.",
    },
  ],
};
