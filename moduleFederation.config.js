const { dependencies } = require('./package.json');

module.exports = {
  name: 'contacts',
  filename: 'remoteEntry.js',
  exposes: {
    './Contacts': './src/component/Contact',
  },
  remotes: {},
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      import: 'react',
      shareScope: 'default',
      requiredVersion: dependencies.react,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};