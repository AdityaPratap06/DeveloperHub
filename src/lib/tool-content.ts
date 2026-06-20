export interface ToolFaq {
  question: string;
  answer: string;
}

export interface ToolSeoContent {
  metaDescription: string;
  overview: string[];
  features: string[];
  howToSteps: string[];
  useCases: string[];
  faq: ToolFaq[];
  relatedToolIds: string[];
}

export const TOOL_SEO_CONTENT: Record<string, ToolSeoContent> = {
  "json-formatter": {
    metaDescription:
      "Free online JSON formatter and beautifier. Format, minify, and prettify JSON instantly in your browser. Syntax highlighting, copy & download — no signup required.",
    overview: [
      "JSON formatter — Our free tool enables developers to quickly format, beautify and minify JSON data. From debugging API responses, formatting config files to preparing data for documentation and more, this tool is quick an easy way of handling JSON.",
      "Unlike desktop apps or CLI tools, DevToolsKit runs entirely in your browser. Your JSON data never leaves your device — making it safe for sensitive API keys, user data, and production configs.",
      "Paste raw JSON, click Format to beautify with proper indentation, or Minify to compress for production. Copy the output or download as a .json file with one click.",
    ],
    features: [
      "Beautify JSON with 2-space indentation",
      "Minify JSON to a single line",
      "Highlighting for JSON keys, strings, numbers and booleans",
      "Copy formatted output to clipboard",
      "Download JSON as a file",
      "100 % browser-based — your data is encrypted.",
    ],
    howToSteps: [
      "Paste or type your JSON into the input field.",
      "Click \"Format\" to beautify or \"Minify\" to compress.",
      "Review the highlighted output below.",
      "Copy or download the result.",
    ],
    useCases: [
      "Debugging REST API responses",
      "Formatting package.json or tsconfig files",
      "Preparing JSON for documentation or blog posts",
      "Compressing JSON payloads for production",
    ],
    faq: [
      {
        question: "Is this JSON formatter free to use?",
        answer: "Yes, DevToolsKit JSON Formatter is completely free with no limits, no signup, and no watermarks.",
      },
      {
        question: "Does my JSON data get sent to a server?",
        answer: "No. All formatting happens locally in your browser. Your data never leaves your device.",
      },
      {
        question: "Can I format invalid JSON?",
        answer: "Invalid JSON will show an error message. Use our JSON Validator tool to find and fix syntax issues first.",
      },
      {
        question: "What's the difference between format and minify?",
        answer: "Format adds indentation and line breaks for readability. Minify removes all whitespace to reduce file size.",
      },
    ],
    relatedToolIds: ["json-validator", "jwt-decoder", "base64-encoder"],
  },
  "json-validator": {
    metaDescription:
      "Validate JSON online for free. Check JSON syntax, find errors with line numbers, and fix invalid JSON fast. Private browser-based JSON validator — no upload required.",
    overview: [
      "Quickly validate JSON syntax with our free online JSON Validator. Get instant feedback on whether your JSON is valid, along with detailed error messages and line numbers when something is wrong.",
      "Essential for developers working with APIs, config files, and data pipelines. Paste your JSON and validation runs automatically — no button clicks needed.",
      "All validation is performed client-side in your browser, keeping your data completely private and secure.",
    ],
    features: [
      "Real-time JSON syntax validation",
      "Detailed error messages with line and column numbers",
      "Detects arrays vs objects and item counts",
      "Instant feedback as you type",
      "No data sent to any server",
    ],
    howToSteps: [
      "Paste your JSON into the input area.",
      "Validation runs automatically.",
      "Green badge means valid; red badge shows the exact error.",
      "Fix errors using the line/column info provided.",
    ],
    useCases: [
      "Validating API request/response bodies",
      "Checking config files before deployment",
      "Debugging JSON from log files",
      "Verifying exported database records",
    ],
    faq: [
      {
        question: "How does the JSON validator detect errors?",
        answer: "It uses the browser's native JSON parser. Any syntax error triggers a detailed message with approximate line and column position.",
      },
      {
        question: "Can I validate large JSON files?",
        answer: "Yes, but very large files (10MB+) may slow your browser since processing is client-side.",
      },
      {
        question: "Does it validate JSON schema?",
        answer: "This tool validates JSON syntax only. For schema validation, use a dedicated JSON Schema validator.",
      },
    ],
    relatedToolIds: ["json-formatter", "jwt-decoder", "base64-encoder"],
  },
  "jwt-decoder": {
    metaDescription:
      "Decode JWT tokens online for free. View JWT header, payload, and expiration instantly. Secure client-side JWT decoder — tokens never leave your browser.",
    overview: [
      "Decode JSON Web Tokens (JWT) instantly with our free JWT Decoder. View the header, payload, and expiration time without sending your token to any server.",
      "Perfect for debugging authentication flows, inspecting OAuth tokens, and verifying token claims during development. See exactly what's inside a JWT before it expires.",
      "Important: This tool decodes tokens only — it does NOT verify signatures. Never use decoded data from untrusted tokens for authorization decisions in production.",
    ],
    features: [
      "Decode JWT header and payload",
      "Display token expiration with valid/expired status",
      "Syntax-highlighted JSON output",
      "Copy header or payload separately",
      "100% client-side decoding",
    ],
    howToSteps: [
      "Paste your JWT token (eyJ... format) into the input.",
      "Header and payload decode automatically.",
      "Check expiration status and claims.",
      "Copy decoded JSON as needed.",
    ],
    useCases: [
      "Debugging OAuth 2.0 / OpenID Connect flows",
      "Inspecting access token claims",
      "Checking token expiration during development",
      "Learning how JWT structure works",
    ],
    faq: [
      {
        question: "Is it safe to paste JWT tokens here?",
        answer: "Tokens are processed only in your browser and never sent to a server. However, avoid pasting production tokens with sensitive data on shared computers.",
      },
      {
        question: "Does this verify JWT signatures?",
        answer: "No. This decoder only reads the header and payload. Signature verification requires the secret key and must be done server-side.",
      },
      {
        question: "What JWT algorithms are supported?",
        answer: "All standard JWT formats (HS256, RS256, etc.) can be decoded. The algorithm is shown in the header section.",
      },
    ],
    relatedToolIds: ["base64-encoder", "hash-generator", "json-formatter"],
  },
  "base64-encoder": {
    metaDescription:
      "Free Base64 encoder and decoder online. Encode text to Base64 or decode Base64 strings instantly. Fast, private, browser-based — no file upload needed.",
    overview: [
      "Encode and decode Base64 strings instantly with our free online Base64 tool. Convert text to Base64 for APIs, data URIs, and authentication headers, or decode Base64 back to readable text.",
      "Base64 encoding is used everywhere in web development — from embedding images in CSS to encoding credentials in HTTP Basic Auth. This tool handles UTF-8 text correctly, including emoji and international characters.",
      "Everything runs in your browser. No data is uploaded or stored.",
    ],
    features: [
      "Encode text to Base64",
      "Decode Base64 to plain text",
      "Full UTF-8 support including emoji",
      "One-click copy",
      "Instant conversion as you type",
    ],
    howToSteps: [
      "Choose Encode or Decode tab.",
      "Paste your text or Base64 string.",
      "Output updates automatically.",
      "Click Copy to use the result.",
    ],
    useCases: [
      "Encoding API credentials for Basic Auth headers",
      "Creating data URIs for inline images",
      "Decoding Base64-encoded API responses",
      "Debugging encoded configuration values",
    ],
    faq: [
      {
        question: "What is Base64 encoding used for?",
        answer: "Base64 converts binary data to ASCII text. It's commonly used in email, data URIs, API authentication, and storing binary data in JSON.",
      },
      {
        question: "Can I encode files with this tool?",
        answer: "This tool encodes text input. For file encoding, read the file content as text first or use a dedicated file-to-Base64 tool.",
      },
      {
        question: "Is Base64 encryption?",
        answer: "No. Base64 is encoding, not encryption. Anyone can decode Base64 strings easily.",
      },
    ],
    relatedToolIds: ["url-encoder", "hash-generator", "jwt-decoder"],
  },
  "url-encoder": {
    metaDescription:
      "Free URL encoder and decoder online. Encode special characters for URLs or decode percent-encoded strings. Fast browser-based URL encoding tool.",
    overview: [
      "Encode and decode URL components with our free URL Encoder. Convert special characters to percent-encoding (%20, %2F, etc.) or decode encoded URLs back to readable text.",
      "Essential for building query strings, encoding form parameters, and debugging URL-related issues in web applications.",
      "Uses standard encodeURIComponent and decodeURIComponent — the same functions used in JavaScript web development.",
    ],
    features: [
      "URL encode special characters",
      "Decode percent-encoded URLs",
      "Instant conversion",
      "Copy output with one click",
      "Client-side processing only",
    ],
    howToSteps: [
      "Select Encode or Decode.",
      "Paste your URL or encoded string.",
      "Copy the result.",
    ],
    useCases: [
      "Building query string parameters",
      "Encoding URLs for API requests",
      "Debugging redirect URLs",
      "Preparing URLs for HTML href attributes",
    ],
    faq: [
      {
        question: "What's the difference between encodeURI and encodeURIComponent?",
        answer: "encodeURIComponent encodes more characters (including /, ?, &). This tool uses encodeURIComponent for maximum safety in query parameters.",
      },
      {
        question: "Why are spaces encoded as %20?",
        answer: "URLs cannot contain literal spaces. %20 is the percent-encoded representation of a space character.",
      },
    ],
    relatedToolIds: ["base64-encoder", "json-formatter", "hash-generator"],
  },
  "uuid-generator": {
    metaDescription:
      "Generate UUID v4 online for free. Create single or bulk UUIDs instantly. Copy all UUIDs with one click. Cryptographically random, browser-based UUID generator.",
    overview: [
      "Generate UUID v4 (Universally Unique Identifier) values instantly. Create one UUID or generate up to 100 at once for testing, database seeding, and application development.",
      "UUIDs are 128-bit identifiers used as primary keys, session IDs, and unique references across distributed systems. Our generator uses crypto-secure random values.",
    ],
    features: [
      "Generate UUID v4 (random)",
      "Bulk generation up to 100 UUIDs",
      "Copy all UUIDs at once",
      "Cryptographically secure randomness",
      "No server requests",
    ],
    howToSteps: [
      "Set the number of UUIDs to generate.",
      "Click Generate.",
      "Copy individual or all UUIDs.",
    ],
    useCases: [
      "Database primary key generation for testing",
      "Creating unique session identifiers",
      "Mock data for API development",
      "Generating correlation IDs for logging",
    ],
    faq: [
      {
        question: "What UUID version does this generate?",
        answer: "UUID v4 — randomly generated using cryptographically secure random numbers.",
      },
      {
        question: "Are generated UUIDs guaranteed unique?",
        answer: "UUID v4 has 122 random bits, making collisions astronomically unlikely for practical purposes.",
      },
      {
        question: "Can I generate UUID v1 or v7?",
        answer: "Currently only UUID v4 is supported. v4 is the most common choice for application development.",
      },
    ],
    relatedToolIds: ["password-generator", "hash-generator", "qr-code-generator"],
  },
  "unix-timestamp": {
    metaDescription:
      "Convert Unix timestamp to date and date to Unix timestamp online. Free epoch converter with live current time. Supports seconds and milliseconds.",
    overview: [
      "Convert between Unix timestamps (epoch time) and human-readable dates instantly. See the current Unix timestamp updating live, and convert in both directions.",
      "Unix timestamps represent seconds (or milliseconds) since January 1, 1970 UTC. They're used in APIs, databases, logs, and JWT expiration claims.",
    ],
    features: [
      "Live current Unix timestamp",
      "Timestamp to human-readable date",
      "Date to Unix timestamp",
      "Copy current timestamp",
      "Supports datetime-local input",
    ],
    howToSteps: [
      "View the live current timestamp at the top.",
      "Enter a timestamp to convert to date, or pick a date to get a timestamp.",
      "Copy results as needed.",
    ],
    useCases: [
      "Debugging API timestamps in responses",
      "Converting log file epoch values",
      "Checking JWT token expiration times",
      "Database timestamp troubleshooting",
    ],
    faq: [
      {
        question: "What is a Unix timestamp?",
        answer: "A Unix timestamp is the number of seconds since January 1, 1970 00:00:00 UTC (the Unix epoch).",
      },
      {
        question: "Does this support milliseconds?",
        answer: "Timestamps with 13 digits are treated as milliseconds. Standard 10-digit values are seconds.",
      },
    ],
    relatedToolIds: ["jwt-decoder", "cron-generator", "json-formatter"],
  },
  "regex-tester": {
    metaDescription:
      "Test regular expressions online for free. Regex tester with match highlighting, capture groups, and flags (g, i, m, s). Debug regex patterns in your browser.",
    overview: [
      "Test and debug regular expressions in real time. Enter your pattern, set flags, and see matches highlighted instantly with detailed match information including index positions.",
      "Regular expressions are essential for validation, parsing, and text processing. This tool helps you iterate on patterns quickly without writing test scripts.",
    ],
    features: [
      "Real-time regex matching",
      "Match highlighting in test string",
      "Support for g, i, m, s flags",
      "Match count and index details",
      "Error messages for invalid patterns",
    ],
    howToSteps: [
      "Enter your regex pattern.",
      "Select flags (global, case insensitive, etc.).",
      "Type or paste a test string.",
      "Review highlighted matches and match details.",
    ],
    useCases: [
      "Validating email, phone, or URL patterns",
      "Extracting data from log files",
      "Testing regex before adding to code",
      "Learning regular expression syntax",
    ],
    faq: [
      {
        question: "What regex flavor does this use?",
        answer: "JavaScript regular expressions (ECMAScript), the same engine used in browsers and Node.js.",
      },
      {
        question: "What do the flags mean?",
        answer: "g = global (all matches), i = case insensitive, m = multiline (^/$ match line boundaries), s = dotall (. matches newlines).",
      },
    ],
    relatedToolIds: ["text-diff", "case-converter", "json-formatter"],
  },
  "password-generator": {
    metaDescription:
      "Generate strong passwords online for free. Customizable length, uppercase, lowercase, numbers, and symbols. Password strength indicator included.",
    overview: [
      "Create secure, random passwords with our free Password Generator. Customize length and character sets, then copy a strong password instantly.",
      "Uses crypto.getRandomValues() for cryptographically secure randomness — the same API recommended for security-sensitive applications.",
    ],
    features: [
      "Adjustable length (4–64 characters)",
      "Toggle uppercase, lowercase, numbers, symbols",
      "Real-time password strength indicator",
      "One-click copy",
      "Cryptographically secure generation",
    ],
    howToSteps: [
      "Set your desired password length.",
      "Choose character types to include.",
      "Click Generate.",
      "Copy the password and store it securely.",
    ],
    useCases: [
      "Creating account passwords",
      "Generating API keys and secrets for development",
      "Creating temporary access credentials",
      "Testing password validation rules",
    ],
    faq: [
      {
        question: "How secure are generated passwords?",
        answer: "Passwords use crypto.getRandomValues(), the browser's cryptographically secure random number generator.",
      },
      {
        question: "Are generated passwords stored anywhere?",
        answer: "No. Passwords exist only in your browser memory and are never sent to any server.",
      },
      {
        question: "What makes a strong password?",
        answer: "Long length (16+), mixed character types, and randomness. Our strength indicator helps guide your choices.",
      },
    ],
    relatedToolIds: ["hash-generator", "uuid-generator", "base64-encoder"],
  },
  "hash-generator": {
    metaDescription:
      "Generate MD5, SHA1, SHA256, and SHA512 hashes online for free. Hash text instantly in your browser. Fast checksum and hash generator for developers.",
    overview: [
      "Generate cryptographic hashes from any text input. Supports MD5, SHA-1, SHA-256, and SHA-512 algorithms — all computed instantly in your browser.",
      "Hash functions are used for checksums, data integrity verification, and (with proper salting) password storage. See all hash formats simultaneously as you type.",
    ],
    features: [
      "MD5, SHA1, SHA256, SHA512 support",
      "Real-time hash generation",
      "Copy individual hashes",
      "Client-side computation only",
    ],
    howToSteps: [
      "Enter text in the input field.",
      "All hash formats generate automatically.",
      "Copy the hash you need.",
    ],
    useCases: [
      "Verifying file checksums",
      "Generating cache keys",
      "Testing hash functions in development",
      "Creating unique identifiers from strings",
    ],
    faq: [
      {
        question: "Is MD5 still safe to use?",
        answer: "MD5 is fine for checksums and non-security use cases. For passwords or signatures, use SHA-256 or SHA-512.",
      },
      {
        question: "Can I hash files?",
        answer: "This tool hashes text input. Paste file content as text to hash it.",
      },
    ],
    relatedToolIds: ["password-generator", "base64-encoder", "jwt-decoder"],
  },
  "sql-formatter": {
    metaDescription:
      "Free online SQL formatter and beautifier. Format and minify SQL queries instantly. Clean up messy SQL for readability or production use.",
    overview: [
      "Beautify and minify SQL queries with our free SQL Formatter. Transform messy, single-line SQL into readable formatted queries or compress formatted SQL for storage.",
      "Supports standard SQL syntax including SELECT, JOIN, WHERE, GROUP BY, and more. Perfect for cleaning up queries from logs, ORMs, or copy-pasted code.",
    ],
    features: ["Beautify SQL with proper indentation", "Minify SQL to single line", "Copy and download output", "Client-side formatting"],
    howToSteps: ["Paste your SQL query.", "Click Beautify or Minify.", "Copy or download the result."],
    useCases: ["Formatting ORM-generated queries", "Cleaning SQL from log files", "Preparing SQL for documentation", "Code review readability"],
    faq: [
      {
        question: "What SQL dialects are supported?",
        answer: "Standard SQL syntax. Some dialect-specific features (PostgreSQL, MySQL) may format differently.",
      },
    ],
    relatedToolIds: ["javascript-formatter", "html-formatter", "css-formatter"],
  },
  "html-formatter": {
    metaDescription:
      "Free HTML formatter and beautifier online. Format, prettify, and minify HTML markup instantly. Clean up messy HTML in your browser.",
    overview: [
      "Format and minify HTML markup instantly. Beautify messy HTML from CMS exports, email templates, or scraped content into readable, indented code.",
      "Minify HTML to reduce file size by removing unnecessary whitespace — useful for production email templates and static pages.",
    ],
    features: ["Beautify HTML with indentation", "Minify HTML", "Copy and download", "Browser-based processing"],
    howToSteps: ["Paste HTML markup.", "Click Beautify or Minify.", "Copy the formatted output."],
    useCases: ["Cleaning CMS-exported HTML", "Formatting email templates", "Preparing HTML for code review", "Minifying static HTML pages"],
    faq: [
      {
        question: "Does it validate HTML?",
        answer: "It formats HTML structure but does not validate against HTML5 specifications.",
      },
    ],
    relatedToolIds: ["css-formatter", "javascript-formatter", "sql-formatter"],
  },
  "css-formatter": {
    metaDescription:
      "Free CSS formatter and beautifier online. Format and minify CSS stylesheets instantly. Prettify messy CSS for readability or production.",
    overview: [
      "Beautify and minify CSS stylesheets in seconds. Transform minified production CSS into readable code or compress formatted CSS for deployment.",
      "Essential for frontend developers cleaning up styles from browser dev tools, CSS-in-JS output, or third-party libraries.",
    ],
    features: ["Beautify CSS with proper indentation", "Minify CSS", "Copy and download output", "Private client-side processing"],
    howToSteps: ["Paste CSS code.", "Click Beautify or Minify.", "Copy or download."],
    useCases: ["Formatting CSS from browser DevTools", "Cleaning CSS-in-JS output", "Minifying styles for production", "Code review preparation"],
    faq: [
      {
        question: "Does it support SCSS or LESS?",
        answer: "This tool formats standard CSS. SCSS/LESS should be compiled before formatting.",
      },
    ],
    relatedToolIds: ["html-formatter", "javascript-formatter", "color-converter"],
  },
  "javascript-formatter": {
    metaDescription:
      "Free JavaScript formatter and beautifier online. Format, prettify, and minify JS code instantly. Clean up messy JavaScript in your browser.",
    overview: [
      "Beautify and minify JavaScript code instantly. Format messy minified JS into readable code or compress formatted scripts for production deployment.",
      "Uses js-beautify for reliable formatting that developers trust. Handles functions, objects, arrays, and modern ES6+ syntax.",
    ],
    features: ["Beautify JS with 2-space indent", "Basic minification", "Copy and download", "Client-side only"],
    howToSteps: ["Paste JavaScript code.", "Click Beautify or Minify.", "Copy the output."],
    useCases: ["Reading minified third-party libraries", "Formatting code snippets for docs", "Basic JS compression", "Code review preparation"],
    faq: [
      {
        question: "Does it support TypeScript?",
        answer: "It formats JavaScript syntax. TypeScript-specific syntax may not format correctly — compile to JS first.",
      },
    ],
    relatedToolIds: ["html-formatter", "css-formatter", "json-formatter"],
  },
  "cron-generator": {
    metaDescription:
      "Free cron expression generator online. Build cron schedules with human-readable explanations. Create crontab expressions easily for Linux and schedulers.",
    overview: [
      "Build cron expressions visually and get instant human-readable explanations. Perfect for setting up scheduled jobs on Linux, Kubernetes CronJobs, GitHub Actions, and cloud schedulers.",
      "Select presets for common schedules or customize each field (minute, hour, day, month, weekday) manually.",
    ],
    features: ["Visual cron builder", "Human-readable explanation", "Common schedule presets", "Copy expression", "Real-time preview"],
    howToSteps: ["Choose a preset or set each field.", "Review the generated expression.", "Read the human explanation.", "Copy the cron expression."],
    useCases: ["Setting up Linux crontab jobs", "Configuring Kubernetes CronJobs", "Scheduling GitHub Actions", "Cloud function schedulers (AWS, GCP)"],
    faq: [
      {
        question: "What cron format does this use?",
        answer: "Standard 5-field cron format: minute hour day-of-month month day-of-week.",
      },
      {
        question: "What does * mean in cron?",
        answer: "An asterisk means 'every' — e.g., * in the minute field means every minute.",
      },
    ],
    relatedToolIds: ["unix-timestamp", "uuid-generator", "regex-tester"],
  },
  "color-converter": {
    metaDescription:
      "Convert colors between HEX, RGB, and HSL online for free. Interactive color picker with live preview. Essential tool for web designers and developers.",
    overview: [
      "Convert colors between HEX, RGB, and HSL formats with live preview. Edit any format and see all others update instantly — essential for web design and CSS development.",
      "See a live color swatch as you adjust values. Copy any format with one click for use in CSS, design tools, or documentation.",
    ],
    features: ["HEX to RGB conversion", "RGB to HEX conversion", "HSL output", "Live color preview", "Copy any format"],
    howToSteps: ["Enter a HEX code or adjust RGB values.", "See all formats update live.", "Copy the format you need."],
    useCases: ["Converting design tool colors to CSS", "Matching brand colors across formats", "Accessibility contrast checking prep", "CSS variable setup"],
    faq: [
      {
        question: "What's the difference between RGB and HSL?",
        answer: "RGB defines colors by red, green, blue intensity. HSL uses hue, saturation, lightness — often more intuitive for adjustments.",
      },
    ],
    relatedToolIds: ["css-formatter", "html-formatter", "qr-code-generator"],
  },
  "lorem-ipsum": {
    metaDescription:
      "Free Lorem Ipsum generator online. Generate placeholder text by paragraphs or word count. Perfect dummy text for web design mockups and prototypes.",
    overview: [
      "Generate Lorem Ipsum placeholder text for designs, mockups, and prototypes. Choose paragraph count or specific word count, then copy instantly.",
      "Standard dummy text used by designers and developers worldwide to fill layouts before real content is ready.",
    ],
    features: ["Generate by paragraph count", "Generate by word count", "Copy output", "Instant generation"],
    howToSteps: ["Choose paragraphs or words tab.", "Set the count.", "Click Generate.", "Copy the text."],
    useCases: ["Web design mockups", "Filling CMS templates during development", "Testing text overflow in UI", "Documentation placeholders"],
    faq: [
      {
        question: "What is Lorem Ipsum?",
        answer: "Lorem Ipsum is standard placeholder text derived from Latin, used in design and publishing since the 1500s.",
      },
    ],
    relatedToolIds: ["case-converter", "text-diff", "qr-code-generator"],
  },
  "text-diff": {
    metaDescription:
      "Compare two texts online for free. Text diff checker with highlighted additions and deletions. Find differences between documents instantly.",
    overview: [
      "Compare two text blocks and instantly see differences highlighted. Additions shown in green, deletions in red — perfect for comparing code, configs, or documents.",
      "Word-level diffing shows exactly what changed without needing to install diff tools or use the command line.",
    ],
    features: ["Side-by-side text input", "Word-level diff highlighting", "Green for additions, red for deletions", "Real-time comparison"],
    howToSteps: ["Paste original text on the left.", "Paste modified text on the right.", "Review highlighted differences."],
    useCases: ["Comparing config file versions", "Reviewing document edits", "Debugging code changes", "Checking API response differences"],
    faq: [
      {
        question: "Does it support line-by-line diff?",
        answer: "Currently word-level diff is used, which works well for most text and code comparisons.",
      },
    ],
    relatedToolIds: ["regex-tester", "case-converter", "json-formatter"],
  },
  "case-converter": {
    metaDescription:
      "Convert text case online for free. Transform text to camelCase, PascalCase, snake_case, kebab-case, UPPERCASE, and lowercase instantly.",
    overview: [
      "Convert text between common programming case formats instantly. Get camelCase, PascalCase, snake_case, kebab-case, UPPERCASE, and lowercase — all from a single input.",
      "Essential for developers naming variables, API fields, database columns, CSS classes, and file names consistently.",
    ],
    features: ["camelCase conversion", "PascalCase conversion", "snake_case conversion", "kebab-case conversion", "UPPERCASE and lowercase", "Copy each format"],
    howToSteps: ["Enter your text.", "All case formats generate automatically.", "Copy the format you need."],
    useCases: ["Naming JavaScript variables and functions", "Converting API field names", "Creating CSS class names", "Database column naming"],
    faq: [
      {
        question: "What's the difference between camelCase and PascalCase?",
        answer: "camelCase starts lowercase (myVariable). PascalCase starts uppercase (MyVariable). Both capitalize subsequent words.",
      },
    ],
    relatedToolIds: ["regex-tester", "text-diff", "json-formatter"],
  },
  "qr-code-generator": {
    metaDescription:
      "Free QR code generator online. Create QR codes from text or URLs and download as PNG. No signup, no watermark — instant QR code maker.",
    overview: [
      "Generate QR codes from any text or URL and download as PNG images. Adjust size from 128px to 512px for different use cases.",
      "QR codes are used for marketing, contactless menus, WiFi sharing, payment links, and app downloads. Create them instantly without desktop software.",
    ],
    features: ["Generate QR from text or URL", "Adjustable size (128–512px)", "Download as PNG", "Live preview", "No watermark"],
    howToSteps: ["Enter text or URL.", "Adjust size if needed.", "Preview the QR code.", "Download PNG."],
    useCases: ["Marketing materials and flyers", "Restaurant menus", "WiFi network sharing", "Event check-in links", "Product packaging"],
    faq: [
      {
        question: "What can I encode in a QR code?",
        answer: "Any text — URLs, plain text, WiFi credentials (WIFI: format), email addresses, phone numbers, and more.",
      },
      {
        question: "Is there a scan limit?",
        answer: "No. Generated QR codes are standard PNG images with no tracking or scan limits.",
      },
    ],
    relatedToolIds: ["url-encoder", "uuid-generator", "lorem-ipsum"],
  },
};

export function getToolSeoContent(toolId: string): ToolSeoContent | undefined {
  return TOOL_SEO_CONTENT[toolId];
}

export const HOMEPAGE_FAQ: ToolFaq[] = [
  {
    question: "Are DevToolsKit developer tools actually FREE?",
    answer:
      "Yes, you can use all 20+ tools on DevToolsKit for free, with unlimited usage without signup and any hidden fees. Our Vision is that all developer utilities should be available for everyone!",
  },
  {
    question: "Can I trust using these tools with my data?",
    answer:
      "Absolutely. All the tools run entirely in your browser using JavaScript. None of your input data is sent to our servers or to third parties. This makes DevToolsKit safe for sensitive data like API keys, JWT tokens, and passwords.",
  },
  {
    question: "Do I need to create an account?",
    answer: "No account is needed. Simply choose any tool page, and you can start using it. Your preference for a theme and an ordinary list of recently used tools are stored in the local storage of your browser.",
  },
  {
    question: "What tools are available on DevToolsKit?",
    answer:
      "DevToolsKit offers 20 developer tools including JSON Formatter, JSON Validator, JWT Decoder, Base64 Encoder, URL Encoder, UUID Generator, Unix Timestamp Converter, Regex Tester, Password Generator, Hash Generator, SQL/HTML/CSS/JS Formatters, Cron Generator, Color Converter, Lorem Ipsum Generator, Text Diff Checker, Case Converter, and QR Code Generator.",
  },
  {
    question: "Can I use DevToolsKit on mobile?",
    answer:
      "DevToolsKit is responsive, and works on phones, tablets, and desktops — YES. Every tool is designed for touch and small screens.",
  },
  {
    question: "How is DevToolsKit different from other developer tool websites?",
    answer:
      "DevToolsKit cares about privacy (everything is done on the client-side,), no server round-trips, and simplicity (no ads disrupting your workflow till you decide). All tools loads fast, and all works offline as soon as the page gets cached.",
  },
];

export const CATEGORY_SEO: Record<
  string,
  { title: string; description: string; overview: string[] }
> = {
  data: {
    title: "Data & JSON Tools",
    description:
      "Free online JSON tools — format, validate, and beautify JSON data instantly in your browser. No signup, completely private.",
    overview: [
      "Work with JSON data faster using our free Data & JSON tools. Format messy API responses, validate syntax before deployment, and debug configuration files — all without leaving your browser.",
      "JSON is the lingua franca of modern APIs and configuration. These tools help you handle it efficiently while keeping your data completely private.",
    ],
  },
  encoding: {
    title: "Encoding & Decoding Tools",
    description:
      "Free Base64 and URL encoding tools online. Encode and decode text, URLs, and data instantly — private browser-based utilities.",
    overview: [
      "Encode and decode data with our Encoding tools. Convert text to Base64 for APIs and authentication, or URL-encode special characters for query strings and redirects.",
      "Essential utilities every web developer needs — fast, free, and completely client-side.",
    ],
  },
  security: {
    title: "Security Tools",
    description:
      "Free security tools for developers — JWT decoder, password generator, and hash generator. All processing happens in your browser.",
    overview: [
      "Debug authentication, generate secure passwords, and create cryptographic hashes with our Security tools. Built for developers who need fast utilities without compromising data privacy.",
    ],
  },
  text: {
    title: "Text Tools",
    description:
      "Free text tools online — regex tester, text diff checker, and case converter. Debug and transform text instantly in your browser.",
    overview: [
      "Test regular expressions, compare text diffs, and convert naming conventions with our Text tools. Perfect for everyday development tasks that don't need a full IDE.",
    ],
  },
  formatters: {
    title: "Code Formatters",
    description:
      "Free online code formatters — beautify and minify SQL, HTML, CSS, and JavaScript. Clean up messy code instantly in your browser.",
    overview: [
      "Format and minify code in SQL, HTML, CSS, and JavaScript. Clean up output from ORMs, CMS exports, and minified libraries for readability or production use.",
    ],
  },
  generators: {
    title: "Generator Tools",
    description:
      "Free online generators — UUID, Lorem Ipsum, and QR codes. Create unique IDs, placeholder text, and QR codes instantly.",
    overview: [
      "Generate UUIDs for database keys, Lorem Ipsum for design mockups, and QR codes for marketing — all free and instant.",
    ],
  },
  utilities: {
    title: "Developer Utilities",
    description:
      "Free developer utilities — Unix timestamp converter, cron generator, and color converter. Handy tools for everyday development.",
    overview: [
      "Convert Unix timestamps, build cron expressions, and transform color formats with our Utility tools. Small tools that save big amounts of time.",
    ],
  },
};
