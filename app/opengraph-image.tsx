import { ImageResponse } from "next/og";
import { MARK_PATHS, SITE } from "@/lib/site";

export const alt = SITE.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72,
          background: "radial-gradient(120% 90% at 50% 0%, #2a0f5c 0%, #10003a 40%, #07060b 100%)", color: "#f5efe2",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 36, fontWeight: 600 }}>
          <svg width="78" height="60" viewBox="6 22 70 54" fill="none">
            {MARK_PATHS.map((d) => (
              <path key={d} d={d} stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            ))}
          </svg>
          Infinitica
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 112, letterSpacing: -5, lineHeight: 1 }}>Building infinite</div>
          <div style={{ fontSize: 112, letterSpacing: -5, lineHeight: 1, color: "#f0a6ff" }}>products.</div>
          <div style={{ fontSize: 30, marginTop: 28, opacity: 0.7 }}>An independent product company — software we own and keep improving.</div>
        </div>
      </div>
    ),
    size
  );
}
