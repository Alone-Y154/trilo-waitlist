import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Trilo — From Idea to Architecture in Minutes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #030305 0%, #0a0a12 40%, #030305 100%)",
          position: "relative",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            top: "-200px",
            left: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,232,162,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            right: "-50px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,159,67,0.06) 0%, transparent 70%)",
          }}
        />

        {/* Logo icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100px",
            height: "100px",
            borderRadius: "24px",
            border: "2px solid rgba(0,232,162,0.25)",
            background: "rgba(0,232,162,0.06)",
            marginBottom: "32px",
            boxShadow: "0 0 60px rgba(0,232,162,0.15)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://trilo.dev/trilo-logo.png"
            width={72}
            height={72}
            alt=""
            style={{ borderRadius: "16px" }}
          />
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              fontSize: "56px",
              fontWeight: 800,
              color: "#e8e8f0",
              letterSpacing: "-2px",
              lineHeight: 1.1,
              textAlign: "center",
            }}
          >
            From idea to architecture
          </div>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 800,
              lineHeight: 1.1,
              textAlign: "center",
              background: "linear-gradient(135deg, #00e8a2, #00c9ff)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            in minutes
          </div>
        </div>

        {/* Subtext */}
        <div
          style={{
            fontSize: "22px",
            color: "#6e6e88",
            marginTop: "24px",
            textAlign: "center",
            maxWidth: "700px",
            lineHeight: 1.5,
          }}
        >
          AI-powered blueprint • Tech stack • Architecture • Timeline • Cost
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "36px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#e8e8f0",
              letterSpacing: "-0.5px",
            }}
          >
            trilo.dev
          </div>
          <div
            style={{
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              background: "#00e8a2",
            }}
          />
          <div
            style={{
              fontSize: "16px",
              color: "#00e8a2",
              fontWeight: 500,
            }}
          >
            Join the waitlist
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
