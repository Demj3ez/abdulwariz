import {
  buildProfileOgImage,
  ogImageAlt,
  ogImageContentType,
  ogImageSize,
} from "@/lib/og-image";

export const runtime = "nodejs";
export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = ogImageAlt;

export default async function OpengraphImage() {
  return buildProfileOgImage();
}
