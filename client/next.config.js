const withImages = require('next-images');
const staticFolder = '/public/';

module.exports = withImages({
  publicRuntimeConfig: {
    staticFolder,
  },
  esModule: true,

});
