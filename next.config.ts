/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable Turbopack
  experimental: {
    turbopack: true,
  },

  // Custom image domains and remote patterns
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ucarecdn.com",
      },
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
      },
      {
        protocol: "https",
        hostname: "api.telegram.org",
      },
      {
        protocol: "https",
        hostname: "openai.com",
      },
    ],
  },

  // Custom Webpack configuration
  webpack: (config, { isServer }) => {
    // Remove this block if you switch entirely to Turbopack
    config.module.rules.push({
      test: /\.json$/,
      type: "json",
    });

    config.stats = "errors-only";

    config.ignoreWarnings = [
      /Failed to parse source map/,
      /Module not found/,
      /Some dependencies are not being included/,
    ];

    config.resolve.fallback = {
      fs: false,
      module: false,
    };

    return config;
  },

  // Suppress TypeScript build errors
  typescript: {
    ignoreBuildErrors: true,
  },

  // Suppress ESLint errors during builds
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
