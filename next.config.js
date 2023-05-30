const path = require('path');

module.exports = {
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/files', // Update the path as needed
            outputPath: 'static/files', // Update the path as needed
            name: '[name].[ext]',
          },
        },
      ],
    });

    return config;
  },
};
