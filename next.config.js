const withPWA = require('next-pwa');

module.exports = withPWA({
    future: {webpack5: true},
    pwa: {
        dest: 'public',
        skipWaiting: false,
        runtimeCaching: [
            {
                urlPattern: /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
                handler: 'CacheFirst',
                options: {
                  cacheName: 'static-image-assets',
                  expiration: {
                    maxEntries: 128,
                    maxAgeSeconds: 24 * 60 * 60 * 30 // 30 days
                  }
                }
            },
            {
                urlPattern: /\.(?:mp3|mp4|m4a)$/i,
                handler: 'CacheFirst',
                options: {
                  cacheName: 'static-media-assets',
                  expiration: {
                    maxEntries: 32,
                    maxAgeSeconds: 24 * 60 * 60 * 30 // 30 days
                  }
                }
            },
        ]
    },
    images: {
        domains: ['storage.googleapis.com'],
    }
});