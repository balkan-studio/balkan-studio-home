!function(){"use strict";const t=["client/client.0077fced.js","client/client.3ef594dc.js","client/index.8410d32a.js"].concat(["service-worker-index.html","collaborators.svg","css/typography.css","favicon.png","fonts/balkan/ttf/Balkan.ttf","fonts/balkan/woff/Balkan.woff","fonts/balkan/woff2/Balkan.woff2","fonts/symbols/ttf/Symbols.ttf","fonts/symbols/woff/Symbols.woff","fonts/symbols/woff2/Symbols.woff2","global.css","js/anime.min.js","logo-192.png","logo-512.png","manifest.json","Vector.svg"]),e=new Set(t);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1587910153751").then(e=>e.addAll(t)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",t=>{t.waitUntil(caches.keys().then(async t=>{for(const e of t)"cache1587910153751"!==e&&await caches.delete(e);self.clients.claim()}))}),self.addEventListener("fetch",t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&e.has(s.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline1587910153751").then(async e=>{try{const s=await fetch(t.request);return e.put(t.request,s.clone()),s}catch(s){const n=await e.match(t.request);if(n)return n;throw s}}))))})}();
