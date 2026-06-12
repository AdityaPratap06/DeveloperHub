import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "DevToolkit — Free Online Developer Tools";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #09090b 0%, #18181b 50%, #27272a 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "#fafafa",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
            }}
          >
            🔧
          </div>
          <span style={{ fontSize: "48px", fontWeight: 700, color: "#fafafa" }}>
            DevToolkit
          </span>
        </div>
        <p style={{ fontSize: "28px", color: "#a1a1aa", margin: 0 }}>
          20+ Free Developer Tools — Fast, Private, Browser-Based
        </p>
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "32px",
          }}
        >
          {["JSON", "JWT", "Base64", "UUID", "Regex"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 20px",
                borderRadius: "999px",
                background: "rgba(250,250,250,0.1)",
                color: "#d4d4d8",
                fontSize: "18px",
                border: "1px solid rgba(250,250,250,0.15)",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
