const { dependencies } = require('./package.json');

module.exports = {
  name: 'contacts',
  exposes: {
    './Contacts': './src/component/Contact',
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