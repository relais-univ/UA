const CACHE_VERSION = 'ua-social-v1.0.0';

const APP_SHELL = [
    './',
    './index.html',
    './admin.html',
    './manifest.json',
    './logo-192.png',
    './logo-512.png',
    './logo-ua.png',
    'https://cdn.tailwindcss.com',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
    'https://cdn.jsdelivr.net/npm/browser-image-compression@2.0.2/dist/browser-image-compression.min.js',
    'https://www.gstatic.com/firebasejs/11.0.0/firebase-app-compat.js',
    'https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore-compat.js',
    'https://www.gstatic.com/firebasejs/11.0.0/firebase-auth-compat.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_VERSION).then((cache) => {
            return Promise.allSettled(
                APP_SHELL.map(url => cache.add(url).catch(err => console.warn('⚠️', url, err)))
            );
        }).then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map(key => key !== CACHE_VERSION ? caches.delete(key) : null)
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    if (url.hostname.includes('firebase') || 
        url.hostname.includes('googleapis') ||
        url.hostname.includes('firestore') ||
        url.hostname.includes('pipedapi') ||
        url.hostname.includes('archive.org')) {
        return;
    }

    if (request.method !== 'GET') return;

    event.respondWith(
        caches.match(request).then((cachedResponse) => {
            if (cachedResponse) {
                fetch(request).then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200) {
                        caches.open(CACHE_VERSION).then(cache => cache.put(request, networkResponse.clone()));
                    }
                }).catch(() => {});
                return cachedResponse;
            }
            return fetch(request).then((networkResponse) => {
                if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
                    const responseClone = networkResponse.clone();
                    caches.open(CACHE_VERSION).then(cache => cache.put(request, clone));
                }
                return networkResponse;
            }).catch(() => {
                if (request.mode === 'navigate') return caches.match('./index.html');
            });
        })
    );
});
