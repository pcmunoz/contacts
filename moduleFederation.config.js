const { dependencies } = require('./package.json');

module.exports = {
  name: 'contacts',
  exposes: {
    './Contacts': './src/index.ts',
  },
  filename: 'remoteEntry.js',
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};