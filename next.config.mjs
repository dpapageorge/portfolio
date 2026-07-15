/** @type {import('next').NextConfig} */

// Static export for GitHub Pages. Served from the root on the custom domain
// dannypapageorge.com, so the base path is empty. For a project subpath instead,
// set NEXT_PUBLIC_BASE_PATH (e.g. "/portfolio").
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
  // Don't fail the CI build on lint warnings (e.g. no-img-element).
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
