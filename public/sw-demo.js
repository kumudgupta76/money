const CACHE_NAME = 'money-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/calview',
  '/money'
  // '/index.html',
  // '/manifest.json',
  // '/battery.png',
  // '/icon.png',
  // Add other assets you want to cache
];

self.addEventListener("install", event => {
  self.skipWaiting(); // Force the waiting service worker to become the active service worker
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .catch(error => console.error('Failed to open cache:', error))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request).then(fetchResponse => {
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          });
        });
      }).catch(() => {
        return caches.match('/index.html');
      })
  );
});

self.addEventListener("activate", event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim(); // Ensure that the service worker takes control of the page immediately
});

self.addEventListener("push", event => {
  console.log("[Service Worker] Push Received.", event.data.json());
  const notificationTitle = 'Notification !!!';
  const notificationOptions = {
    body: 'This is just a test notification sent from local server',
    data: 'you can provide additional data here',
    icon: 'battery.png'
  };

  event.waitUntil(
    self.registration.showNotification(notificationTitle, notificationOptions)
  );
});