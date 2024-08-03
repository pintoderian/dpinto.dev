import { SITE_URL } from "@/lib/constants";
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title");

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundImage: `url(${SITE_URL}/og-bg.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div
          style={{
            marginLeft: 100,
            maxWidth: "650px",
            display: "flex",
            fontSize: 60,
            letterSpacing: "-0.05em",
            fontStyle: "normal",
            color: "white",
            lineHeight: "70px",
            whiteSpace: "pre-wrap"
          }}
        >
          {postTitle}
        </div>
      </div>
    ),
    {
      width: 1280,
      height: 720
    }
  );
}
