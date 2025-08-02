const CACHE_NAME = 'quran-app-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/surah.html',
  '/style.css',
  '/manifest.json',
  '/data/quran.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});