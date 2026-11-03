import { ImageResponse } from "next/og";
import { MARK_PATHS } from "@/lib/site";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#10003a" }}>
        <svg width="140" height="108" viewBox="6 22 70 54" fill="none">
          {MARK_PATHS.map((d) => (
            <path key={d} d={d} stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          ))}
        </svg>
      </div>
    ),
    size
  );
}
