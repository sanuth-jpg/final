const CACHE_NAME = 'test';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/IMAGES/icon512_maskable.png',
    '/IMAGES/icon512_rounded.png',
    '/IMAGES/favicon.ico',
    '/IMAGES/favicon.png'
];

// Install event
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch event
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});

// Activate event
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (!cacheWhitelist.includes(cache)) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});