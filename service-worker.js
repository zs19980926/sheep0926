const CACHE_NAME = 'japan-trip-v1';
const urlsToCache = [
  './',
  './index.html'
];

// 安裝時，把首頁存起來
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// 沒網路時，讀取存起來的畫面
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});