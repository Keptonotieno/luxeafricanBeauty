self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// Optional: pass-through fetch to avoid interfering with network
self.addEventListener('fetch', () => {});

