// Description: Service worker for the PWA.
const CACHE_NAME = `dev-coffee-site-v1`;

// Use the install event to pre-cache all initial resources.
self.addEventListener('install', event => {
 event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    cache.addAll([
      "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/monedasde20", 
  "monedasde20/C_20pesosPazCambioMilenio_144.png",
  "monedasde20/C_20pesosPazNobel_144.png",
  "monedasde20/C_20pesosEjercito_144.png",
  "monedasde20/C_20pesosBelisario_144.png",
  "monedasde20/C_20pesosVeracruz_144.png",
  "monedasde20/C_20pesosZacatecas_142.png",
  "monedasde20/Fuerza_Aerea_20_revTransp_peq.png",
  "monedasde20/Morelos_20_anvTransp_peq.png",
  "monedasde20/20_Const1917_rev_pagMon20.png",
  "monedasde20/C_mon_20_pesos_PlanDNIIIE.png",
  "monedasde20/C_mon20pesos_PlanMarina.png"
    ]);
  })());
});

self.addEventListener('fetch', event => {
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);

    // Get the resource from the cache.
    const cachedResponse = await cache.match(event.request);
    if (cachedResponse) {
      return cachedResponse;
    } else {
        try {
          // If the resource was not in the cache, try the network.
          const fetchResponse = await fetch(event.request);

          // Save the resource in the cache and return it.
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        } catch (e) {
          // The network failed.
        }
    }
  })());
});