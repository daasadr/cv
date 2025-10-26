const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n/request.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  devIndicators: false,
  allowedDevOrigins: [
    '*.macaly.dev',
    '*.macaly.app',
    '*.macaly-app.com',
    '*.macaly-user-data.dev',
  ],

  // Performance optimizations
  compress: true,
  poweredByHeader: false,

  // Bundle optimization
  experimental: {
    scrollRestoration: true,
  },

  // Webpack optimizations
  webpack: (config, { dev }) => {
    // Enable tree shaking
    config.optimization = {
      ...config.optimization,
      // usedExports: true,
      sideEffects: false,
    };

    // Optimize Three.js bundle
    if (!dev) {
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
          three: {
            name: 'three',
            test: /[\\/]node_modules[\\/]three[\\/]/,
            chunks: 'all',
            priority: 20,
          },
          vendor: {
            name: 'vendor',
            test: /[\\/]node_modules[\\/](?!three[\\/])/,
            chunks: 'all',
            priority: 10,
          },
        },
      };
    }

    // Optimize imports
    config.resolve.alias = {
      ...config.resolve.alias,
      'three/examples/jsm': 'three/examples/jsm',
    };

    return config;
  },

  // Headers for better caching and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
