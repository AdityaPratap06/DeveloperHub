import type { BlogPost } from "../types";

export const whatIsJson: BlogPost = {
  slug: "what-is-json",
  title: "What Is JSON? Complete Beginner Guide",
  description:
    "Learn what JSON is, why developers use it, JSON data types, common errors, and how to validate and format JSON — with free online tools.",
  publishedAt: "2026-03-15",
  funnel: "top",
  keywords: ["what is json", "json explained", "json beginner guide", "json format", "javascript object notation"],
  relatedToolIds: ["json-formatter", "json-validator"],
  relatedPostSlugs: ["how-to-format-json", "best-json-formatter-online"],
  readTimeMinutes: 8,
  intro:
    "JSON is one of the most important data formats in modern software development. If you've ever worked with APIs, configuration files, or web applications, you've almost certainly encountered JSON. This guide explains JSON in plain language — what it stands for, why it's everywhere, and how to work with it confidently.",
  blocks: [
    {
      type: "heading",
      level: 2,
      text: "What Does JSON Stand For?",
    },
    {
      type: "paragraph",
      content:
        "JSON stands for JavaScript Object Notation. Despite the name, JSON is not JavaScript code — it's a lightweight text format for storing and exchanging data. It was derived from JavaScript object syntax but is used by virtually every programming language including Python, Java, C#, Go, PHP, and Ruby.",
    },
    {
      type: "heading",
      level: 2,
      text: "Why JSON Is Popular",
    },
    {
      type: "paragraph",
      content:
        "JSON became the standard data format for web APIs and configuration files for several strong reasons:",
    },
    {
      type: "list",
      items: [
        "Human readable — developers can read and understand JSON without special tools",
        "Lightweight — minimal syntax overhead compared to XML, resulting in smaller payloads",
        "Language independent — parsed natively or via libraries in every major language",
        "Easy to parse — strict syntax rules make automated parsing reliable",
        "Native JavaScript support — works seamlessly in browsers and Node.js",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "JSON Structure",
    },
    {
      type: "paragraph",
      content:
        "JSON is built from two primary structures: objects (key-value pairs wrapped in curly braces) and arrays (ordered lists wrapped in square brackets). Keys must always be double-quoted strings.",
    },
    {
      type: "code",
      language: "json",
      code: `{
  "name": "John",
  "age": 25,
  "email": "john@example.com",
  "active": true
}`,
    },
    {
      type: "paragraph",
      content: "Arrays hold ordered lists of values:",
    },
    {
      type: "code",
      language: "json",
      code: `{
  "users": ["Alice", "Bob", "Charlie"],
  "scores": [95, 87, 92]
}`,
    },
    {
      type: "paragraph",
      content: "Objects can be nested to represent complex data hierarchies:",
    },
    {
      type: "code",
      language: "json",
      code: `{
  "user": {
    "name": "John",
    "address": {
      "city": "New York",
      "country": "USA"
    }
  }
}`,
    },
    {
      type: "heading",
      level: 2,
      text: "JSON Data Types",
    },
    {
      type: "paragraph",
      content: "JSON supports exactly six data types. Understanding each one is essential for writing valid JSON:",
    },
    {
      type: "list",
      items: [
        "String — text in double quotes, e.g. \"hello\"",
        "Number — integers or decimals, e.g. 42 or 3.14",
        "Boolean — true or false (lowercase, no quotes)",
        "Array — ordered list in square brackets, e.g. [1, 2, 3]",
        "Object — collection of key-value pairs in curly braces",
        "Null — represents empty or absent value, written as null",
      ],
    },
    {
      type: "callout",
      variant: "tip",
      content:
        "JSON does NOT support comments, undefined values, functions, or trailing commas. These are the most common sources of syntax errors.",
    },
    {
      type: "heading",
      level: 2,
      text: "Common JSON Errors",
    },
    {
      type: "paragraph",
      content:
        "Even experienced developers make JSON syntax mistakes. Here are the errors you'll encounter most often:",
    },
    {
      type: "list",
      items: [
        "Trailing commas — a comma after the last item in an object or array",
        "Single quotes — JSON requires double quotes for strings, not single quotes",
        "Unquoted keys — object keys must be wrapped in double quotes",
        "Comments — // and /* */ comments are not valid in JSON",
        "Undefined values — use null instead of undefined",
        "Missing commas — forgetting commas between object properties or array items",
      ],
    },
    {
      type: "code",
      language: "json",
      code: `// ❌ Invalid JSON
{
  'name': 'John',     // single quotes
  age: 25,            // unquoted key
  active: true,       // trailing comma below
}`,
    },
    {
      type: "heading",
      level: 2,
      text: "How To Validate JSON",
    },
    {
      type: "paragraph",
      content:
        "Before using JSON in production, always validate it. Invalid JSON will cause API requests to fail, break configuration loading, and crash parsers. Validation checks that your syntax follows JSON rules — matching brackets, proper quotes, and valid data types.",
    },
    {
      type: "paragraph",
      content:
        "Our free JSON Validator runs entirely in your browser. Paste your JSON and get instant feedback with error messages and line numbers pointing to exactly where the problem is.",
    },
    {
      type: "tool-cta",
      toolId: "json-validator",
      label: "Validate Your JSON Now",
      description: "Free online JSON validator with detailed error messages and line numbers.",
    },
    {
      type: "heading",
      level: 2,
      text: "How To Format JSON",
    },
    {
      type: "paragraph",
      content:
        "Raw JSON from APIs often arrives as a single compressed line — hard to read and debug. Formatting (also called beautifying or prettifying) adds indentation and line breaks to make JSON human-readable.",
    },
    {
      type: "paragraph",
      content:
        "Use our JSON Formatter to instantly beautify messy JSON with syntax highlighting, or minify formatted JSON to reduce file size for production.",
    },
    {
      type: "tool-cta",
      toolId: "json-formatter",
      label: "Format JSON Online Free",
      description: "Beautify, minify, and syntax-highlight JSON instantly in your browser.",
    },
  ],
  faq: [
    {
      question: "Is JSON the same as a JavaScript object?",
      answer:
        "Similar but not identical. JSON is a text format with strict rules (double quotes, no trailing commas, no functions). JavaScript objects are more flexible and can contain methods, undefined values, and comments.",
    },
    {
      question: "Can JSON contain comments?",
      answer:
        "No. Standard JSON does not support comments. Some tools use JSONC (JSON with Comments) as an extension, but it's not valid standard JSON.",
    },
    {
      question: "What is the difference between JSON and XML?",
      answer:
        "JSON is lighter, easier to read, and faster to parse. XML uses tags and supports attributes and namespaces. JSON won as the default API format because of its simplicity and JavaScript compatibility.",
    },
    {
      question: "How do I fix invalid JSON?",
      answer:
        "Use a JSON validator to find the exact error location. Common fixes: replace single quotes with double quotes, remove trailing commas, quote all object keys, and replace undefined with null.",
    },
  ],
};
