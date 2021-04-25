const withPWA = require('next-pwa');

//module.exports = {{tste:'s'}, {}}
/*images: {
    domains: ['storage.googleapis.com'],
  },
};*/

module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
  images: {
    domains: ['storage.googleapis.com'],
  },
});
