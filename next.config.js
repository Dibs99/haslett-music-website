const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  eslint: {
    // ESLint managed on the workspace level
    ignoreDuringBuilds: true,
  },
  images: {
    disableStaticImages: true,
  },
};

module.exports = withPlugins([optimizedImages], nextConfig);
