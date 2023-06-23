const cracoModuleFederation = require('craco-mf');

module.exports = {
    plugins: [{
        plugin: cracoModuleFederation,
        options: { useNamedChunkIds:true } // THIS LINE IS OPTIONAL
      },
    ]
}