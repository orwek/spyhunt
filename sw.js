var app = "app";
var assets = [
      "/",
      "/index.html",
      "/manifest.json",
      "/spyhunt_192.png",
      "/spyhunt_512.png",
      "/spyhunt_192_apple.png",
      "sw.js"
   ];


self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(app).then(cache => {
      cache.addAll(assets)
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  );
});
