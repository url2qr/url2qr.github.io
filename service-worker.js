// Simple example, you'll likely need more comprehensive caching logic
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("qrcode-cache").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/style.css",
        "/script.js",
        "/manifest.json",
        // ... add other assets
      ]);
    })
  );
});
