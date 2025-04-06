self.addEventListener("install", event => {
    event.waitUntil(
      caches.open("pause-play-cache").then(cache => {
        return cache.addAll([
          "/",
          "/index.html",
          "/style.css",
          "/app.js",
          "/assets/images/mascot.png"
        ]);
      })
    );
  });
  
  self.addEventListener("fetch", event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });

self.addEventListener('install', event => {
  console.log('✅ Service Worker instalado');
  self.skipWaiting(); // Para activar el SW inmediatamente
});

self.addEventListener('activate', event => {
  console.log('✅ Service Worker activado');
});

//notificaciones programadas
  self.addEventListener('notificationclick', event => {
  event.notification.close();

  // Manejar las acciones de la notificación
  if (event.action === 'open_app') {
      event.waitUntil(
          clients.openWindow('/')
      );
  }

  if (event.action === 'close') {
      console.log('Notificación cerrada');
  }
});

