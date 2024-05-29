// Simple example, you'll likely need more comprehensive caching logic
self.addEventListener("install", (event) => {
  //   event.waitUntil(
  //     caches.open("qrcode-cache").then((cache) => {
  //       return cache.addAll([
  //         "/",
  //         "/index.html",
  //         "/style.css",
  //         "/script.js",
  //         "/manifest.json",
  //         // ... add other assets
  //       ]);
  //     })
  //   );
});

self.addEventListener("fetch", (event) => {
  function setDbg(x) {
    const dbg = document.getElementById("dbg");
    dbg.innerHTML = x;
  }
  const url = new URL(event.request.url);

  if (url.pathname === "/share") {
    const sharedData = {
      link: url.searchParams.get("link"),
    };

    // Handle the sharedData here (e.g., generate QR code for sharedLink)
    setDbg(sharedData.link);

    event.respondWith(new Response("Shared data received!", { status: 200 }));
  }
});
