/** @type {import('next').NextConfig} */

// Static export for GitHub Pages. Project-site base path defaults to /portfolio;
// override with NEXT_PUBLIC_BASE_PATH (e.g. "" for a user site or custom domain).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/portfolio";

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
