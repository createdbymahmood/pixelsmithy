/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  sassOptions: {
    prependData: `@import "./src/lib/styles/_mantine.scss";`,
  },
}

export default nextConfig
