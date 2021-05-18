const withPWA = require('next-pwa');

module.exports = withPWA({
    pwa: {
        dest: 'public',
        dynamicStartUrl: false
    },
    images: {
        domains: ['storage.googleapis.com'],
    }
});