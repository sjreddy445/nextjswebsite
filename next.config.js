
const path = require('path')
// module.exports = {
//   reactStrictMode: true,
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
//   i18n: {
//     locales: ["en"],
//     defaultLocale: "en",
//   }
// }

// module.exports = {
//   webpack: (config, { isServer }) => {
//     // if (isServer) {
//     require('./scripts/generate-sitemap');
//     // }

//     return config;
//   }
// };

// module.exports = {
//   exportPathMap: async function (
//     defaultPathMap,
//     { dev, dir, outDir, distDir, buildId }
//   ) {
//     return {
//       '/': { page: '/' },
//       '/about': { page: '/about' },
//       '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
//       '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
//       '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
//     }
//   },
// }


module.exports = {
  images: {
    minimumCacheTTL: 60,
    loader: 'imgix',
    path: 'api.getedge.ai'
  },
  trailingSlash: true,
}

