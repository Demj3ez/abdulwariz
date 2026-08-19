import { ImageResponse } from "next/og";
import fs from "node:fs/promises";
import path from "node:path";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";
export const ogImageAlt =
  "Abdulwariz Yusuff — Business Operations, Business Development, Digital Marketing, AI Automation";

export async function buildProfileOgImage() {
  const imageData = await fs.readFile(
    path.join(process.cwd(), "public/images/profile/headshot.jpg")
  );
  const photoSrc = `data:image/jpeg;base64,${imageData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#111827",
          padding: "90px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoSrc}
          alt="Abdulwariz Yusuff"
          width={340}
          height={340}
          style={{
            borderRadius: "9999px",
            objectFit: "cover",
            border: "6px solid #34d399",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "64px",
          }}
        >
          <div
            style={{
              fontSize: 60,
              fontWeight: 700,
              color: "#f4f6f5",
              letterSpacing: -1,
            }}
          >
            Abdulwariz Yusuff
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 28,
              fontSize: 26,
              color: "#34d399",
              letterSpacing: 1,
            }}
          >
            <div style={{ display: "flex" }}>
              BUSINESS OPERATIONS · BUSINESS DEVELOPMENT
            </div>
            <div style={{ display: "flex", marginTop: 10 }}>
              DIGITAL MARKETING · AI AUTOMATION
            </div>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 34,
              fontSize: 24,
              color: "#9aa4b2",
            }}
          >
            abdulwariz.vercel.app
          </div>
        </div>
      </div>
    ),
    { ...ogImageSize }
  );
}
