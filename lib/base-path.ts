/**
 * Base path for GitHub Pages project-site hosting: dpapageorge.github.io/portfolio.
 * For a user site (username.github.io) or a custom domain, build with
 * NEXT_PUBLIC_BASE_PATH="" so assets resolve from the root.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "/newportfolio";

/**
 * Prefix a local ("/"-rooted) asset path with the base path. Absolute URLs
 * (https://, //) are returned unchanged. Needed for plain <img>/<a> tags, which
 * Next.js does not auto-prefix the way it does for next/link and next/image.
 */
export function asset(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  return `${BASE_PATH}${path}`;
}
