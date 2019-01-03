importScripts("/precache-manifest.5731530b35e126f6d1329434a0a3a24a.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.suppressWarnings()
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

self.addEventListener('fetch', function (event) {
  const destination = event.request.destination
  switch (destination) {
    case 'image': {
      event.respondWith(
        caches.open('watchsoc').then(function (cache) {
          return cache.match(event.request).then(function (response) {
            return response || fetch(event.request)
            //   .then(function (response) {
            //     cache.put(event.request, response.clone())
            //     return response
            //   })
          })
        })
      )
    }
  }
})

