export interface HttpStatusCode {
  code: number;
  name: string;
  description: string;
  category: string;
}

export const HTTP_STATUS_CODES: HttpStatusCode[] = [
  { code: 100, name: "Continue", description: "Client should continue the request.", category: "Informational" },
  { code: 101, name: "Switching Protocols", description: "Server is switching protocols per Upgrade header.", category: "Informational" },
  { code: 200, name: "OK", description: "Request succeeded.", category: "Success" },
  { code: 201, name: "Created", description: "Resource created successfully.", category: "Success" },
  { code: 204, name: "No Content", description: "Success with no response body.", category: "Success" },
  { code: 301, name: "Moved Permanently", description: "Resource permanently moved to new URL.", category: "Redirection" },
  { code: 302, name: "Found", description: "Temporary redirect.", category: "Redirection" },
  { code: 304, name: "Not Modified", description: "Cached version is still valid.", category: "Redirection" },
  { code: 307, name: "Temporary Redirect", description: "Temporary redirect preserving method.", category: "Redirection" },
  { code: 308, name: "Permanent Redirect", description: "Permanent redirect preserving method.", category: "Redirection" },
  { code: 400, name: "Bad Request", description: "Malformed or invalid request.", category: "Client Error" },
  { code: 401, name: "Unauthorized", description: "Authentication required.", category: "Client Error" },
  { code: 403, name: "Forbidden", description: "Authenticated but not authorized.", category: "Client Error" },
  { code: 404, name: "Not Found", description: "Resource not found.", category: "Client Error" },
  { code: 405, name: "Method Not Allowed", description: "HTTP method not supported for this resource.", category: "Client Error" },
  { code: 408, name: "Request Timeout", description: "Server timed out waiting for request.", category: "Client Error" },
  { code: 409, name: "Conflict", description: "Request conflicts with current resource state.", category: "Client Error" },
  { code: 413, name: "Payload Too Large", description: "Request body exceeds server limit.", category: "Client Error" },
  { code: 415, name: "Unsupported Media Type", description: "Content-Type not supported.", category: "Client Error" },
  { code: 422, name: "Unprocessable Entity", description: "Validation failed on request body.", category: "Client Error" },
  { code: 429, name: "Too Many Requests", description: "Rate limit exceeded.", category: "Client Error" },
  { code: 500, name: "Internal Server Error", description: "Unexpected server error.", category: "Server Error" },
  { code: 502, name: "Bad Gateway", description: "Invalid response from upstream server.", category: "Server Error" },
  { code: 503, name: "Service Unavailable", description: "Server temporarily unavailable.", category: "Server Error" },
  { code: 504, name: "Gateway Timeout", description: "Upstream server timed out.", category: "Server Error" },
];

export function searchHttpCodes(query: string): HttpStatusCode[] {
  const q = query.trim().toLowerCase();
  if (!q) return HTTP_STATUS_CODES;
  return HTTP_STATUS_CODES.filter(
    (c) =>
      String(c.code).includes(q) ||
      c.name.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q)
  );
}
