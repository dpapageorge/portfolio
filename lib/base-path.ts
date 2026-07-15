/**
 * Base path for the site. Empty because it is served from the root of the
 * custom domain dannypapageorge.com. For a GitHub Pages project subpath
 * instead, build with NEXT_PUBLIC_BASE_PATH="/portfolio".
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prefix a local ("/"-rooted) asset path with the base path. Absolute URLs
 * (https://, //) are returned unchanged. Needed for plain <img>/<a> tags, which
 * Next.js does not auto-prefix the way it does for next/link and next/image.
 */
export function asset(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  return `${BASE_PATH}${path}`;
}
