
// Botón de Inicio
document.getElementById('back-btn').addEventListener('click', function () {
  window.location.href = 'index.html'
})

// Juegos disponibles
const games = [
  'games/breathing/index.html',
  'games/sensory-5-4-3-2-1/index.html',
  'games/mental-guess-color/index.html',
  'games/physical-movement/index.html',
  'games/tactile-maze/index.html',
  'games/creative-acronyms/index.html',
  'games/breathing-blow-candle/index.html',
  'games/breathing-guided/index.html',
  'games/sensory-ice-cube/index.html',
  'games/sensory-imaginary-rain/index.html',
  'games/mental-intervals/index.html',
  'games/mental-positive-associations/index.html',
  'games/physical-balance/index.html',
  'games/physical-walk/index.html',
  'games/tactile-bubbles/index.html',
  'games/tactile-puzzle/index.html',
  'games/creative-poetry/index.html',
  'games/creative-metaphors/index.html'
]

// Botón de Juego Aleatorio
document.getElementById('shuffle-btn').addEventListener('click', function () {
  const randomIndex = Math.floor(Math.random() * games.length)
  const randomGame = games[randomIndex]
  window.location.href = randomGame
})

// Solicitar permiso para notificaciones
if ('Notification' in window && Notification.permission !== 'denied') {
  Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
          console.log('✅ Notificaciones permitidas');

          // Programar notificaciones
          const now = new Date();
          const morningNotification = new Date(now);
          morningNotification.setHours(10, 0, 0); // 10:00 am

          const afternoonNotification = new Date(now);
          afternoonNotification.setHours(17, 25, 0); // 5:00 pm

          // Calcular el tiempo en milisegundos hasta las notificaciones
          const morningDelay = morningNotification - now;
          const afternoonDelay = afternoonNotification - now;

          // Opciones personalizadas para la notificación
          const notificationOptions = {
              body: '¿Te sientes bien? Tómate un tiempo para relajarte. 🎮',
              icon: 'assets/images/logo.png',
              badge: 'assets/images/badge.png',
              vibrate: [200, 100, 200], // Vibración personalizada
              actions: [
                  { action: 'open_app', title: 'Abrir App' },
                  { action: 'close', title: 'Cerrar' }
              ]
          };

          if (morningDelay > 0) {
              scheduleNotification("¡Hora de relajarte!", notificationOptions, morningDelay);
          }

          if (afternoonDelay > 0) {
              scheduleNotification("¡Momento de un descanso!", notificationOptions, afternoonDelay);
          }
      }
  });
}

let notification
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    notification = new Notification ("¡Regresa, por favor!", {
      body: "por favooooor"
    }) 
  }else{
    if (notification) notification.close()
  }
})