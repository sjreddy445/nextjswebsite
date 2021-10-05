
const path = require('path')
module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  }
}

module.exports = {
  webpack: (config, { isServer }) => {
    // if (isServer) {
      require('./scripts/generate-sitemap');
    // }

    return config;
  }
};
module.exports = {
  images: {
    minimumCacheTTL: 60,
    loader: 'imgix',
    path: 'api.getedge.ai',
  }
}