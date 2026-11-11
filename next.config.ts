import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves static files only
  output: "export",
  images: { unoptimized: true },
  // /projects/policydesk/ is served as a folder with index.html, which GitHub Pages handles everywhere
  trailingSlash: true,
};

export default nextConfig;
