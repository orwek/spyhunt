// Service worker for Spyhunt
// Written by Kendall Purser
// February 2024

const cache_name = "spyhunt";
const urls_to_cache = [
      "/",
      "/index.html",
      "/manifest.json",
      "/spyhunt_192.png",
      "/spyhunt_512.png",
      "/spyhunt_192_apple.png"
  ];

// Install Script
self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(cache_name).then(cache => {
      cache.addAll(urls_to_cache);
    })
  );
});

// Activation Script
self.addEventListener('activate', function(event) {
  var cacheAllowlist = ["spyhunt"];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheAllowlist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Network First
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});
