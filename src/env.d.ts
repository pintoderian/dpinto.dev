/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_AHREFS?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
