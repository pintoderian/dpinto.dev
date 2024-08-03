/* eslint-disable @next/next/no-sync-scripts */
"use client";

import { ANALYTICS_ID, IS_SANDBOX } from "@/lib/constants";

export default function Analytics() {
  if (!ANALYTICS_ID || IS_SANDBOX) {
    return null;
  }

  return (
    <>
      <link rel="preload" href="https://cloud.umami.is/script.js" as="script" />
      <script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id={ANALYTICS_ID}
      ></script>
    </>
  );
}
