const CACHE_NAME = 'zinger-cache-v2';
const ASSETS = [
    './',
    './index.html',
    './script.js',
    './premium_fast_food_menu_hero_image_for_zinger_gourmet_restaurant_brand..png',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBaIIiE8tVUO_dYVtQMBUGb92tppSs4AmrKTa3NT_NU1esh1T0zc0_R8h8j5vcrGv6PVqg-JfZe8KLdHRKBB7ZeoHto5d435a0IG4QoIXhdVyoFMB_HhAv7XGZgj1orR1zFOw5_SmtnEdwDP5aO7S8NTsYFosxeoGe65ub4j5dAsS9xHZxDbG_zfAjR-bz6Q8kaY900OxJqJENWhHFlF_7fNmhGXwfU0jI9wNR8R_vJ5VNFKWkniogR7ddrR0IPYFgV6h_w72ghANA'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS).catch(err => console.log('Asset caching error:', err));
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request).then((networkResponse) => {
                return networkResponse;
            }).catch(() => {
                return new Response('', { status: 504, statusText: 'Offline' });
            });
        })
    );
});
