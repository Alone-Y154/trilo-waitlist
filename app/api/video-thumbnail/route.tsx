import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
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
          background:
            "linear-gradient(135deg, #030305 0%, #0a0a12 40%, #030305 100%)",
          position: "relative",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-50px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,232,162,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "-50px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,159,67,0.07) 0%, transparent 70%)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "80px",
            height: "80px",
            borderRadius: "20px",
            border: "2px solid rgba(0,232,162,0.3)",
            background: "rgba(0,232,162,0.08)",
            marginBottom: "24px",
            boxShadow: "0 0 50px rgba(0,232,162,0.2)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://trilo.dev/trilo-logo.png"
            width={56}
            height={56}
            alt=""
            style={{ borderRadius: "12px" }}
          />
        </div>

        {/* Play button */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            background: "rgba(0,232,162,0.12)",
            border: "2px solid rgba(0,232,162,0.3)",
            marginBottom: "28px",
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="#00e8a2"
            style={{ marginLeft: "3px" }}
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "40px",
            fontWeight: 700,
            color: "#e8e8f0",
            letterSpacing: "-1px",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: "8px",
          }}
        >
          From Idea to Execution
        </div>

        <div
          style={{
            fontSize: "20px",
            color: "#6e6e88",
            textAlign: "center",
          }}
        >
          See how Trilo transforms your workflow
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "28px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#e8e8f0",
              letterSpacing: "-0.3px",
            }}
          >
            trilo.dev
          </div>
          <div
            style={{
              width: "3px",
              height: "3px",
              borderRadius: "50%",
              background: "#00e8a2",
            }}
          />
          <div
            style={{
              fontSize: "14px",
              color: "#00e8a2",
            }}
          >
            Under 2 minutes
          </div>
        </div>
      </div>
    ),
    { width: 1280, height: 720 },
  );
}
