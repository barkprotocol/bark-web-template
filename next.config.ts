/** @type {import('next').NextConfig} */
const nextConfig = {
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
    // Add rule for handling JSON files
    config.module.rules.push({
      test: /\.json$/,
      type: "json",
    });

    // Simplify build output to show only errors (suppress warnings)
    config.stats = "errors-only";

    // Suppress specific non-blocking warnings
    config.ignoreWarnings = [
      /Failed to parse source map/,
      /Module not found/,
      /Some dependencies are not being included/,
    ];

    // Prevent issues with Node.js modules in browser environments
    config.resolve.fallback = {
      fs: false, // Prevent `fs` module resolution errors
      module: false, // Prevent generic module resolution errors
    };

    return config;
  },

  // Suppress TypeScript build errors (use cautiously)
  typescript: {
    ignoreBuildErrors: true,
  },

  // Suppress ESLint errors during builds
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
