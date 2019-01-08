importScripts("/precache-manifest.1ff5887804bdb38697847b9d1750a5a3.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.suppressWarnings()
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

workbox.routing.registerRoute(
  new RegExp('/api/static-assets/'),
  workbox.strategies.cacheFirst({
    cacheName: 'watch-soc_images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 150,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
      })
    ]
  })
)

workbox.routing.registerRoute(
  new RegExp('https://watchcollectionbucket.s3.amazonaws.com/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: 'watch-soc_S3_Bucket',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 150,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
      })
    ]
  })
)

workbox.routing.registerRoute(
  new RegExp('/img/icons/'),
  workbox.strategies.cacheFirst({
    cacheName: 'watch-soc_images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 150,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
      })
    ]
  })
)

