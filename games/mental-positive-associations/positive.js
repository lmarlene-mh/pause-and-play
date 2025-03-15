// Lista de frases positivas
const positivePhrases = [
    'Eres capaz de lograr cosas increíbles 🌟',
    'Hoy es un buen día para ser feliz 😊',
    'Confía en ti, ¡puedes hacerlo! 💪',
    'Cada paso cuenta hacia tus metas 🚶‍♂️',
    'Tienes el poder de cambiar tu día ✨',
    '¡Eres una persona única y especial! 💖',
    'Todo esfuerzo tiene su recompensa 🌈',
    'Respira hondo, todo saldrá bien 🌬️'
  ]
  
  // Referencias a los elementos
  const positiveDisplay = document.getElementById('positive-display')
  const newPhraseBtn = document.getElementById('new-phrase-btn')
  
  // Cambiar a una nueva frase
  function showNewPhrase() {
    const randomIndex = Math.floor(Math.random() * positivePhrases.length)
    positiveDisplay.textContent = positivePhrases[randomIndex]
  }
  
  // Evento del botón "Nueva frase"
  newPhraseBtn.addEventListener('click', showNewPhrase)
  
  // Botón de Inicio
  document.getElementById('back-btn').addEventListener('click', function () {
    window.location.href = '../../index.html'
  })
  

  
  // Botón de Juego Aleatorio
  const mentalGames = [
    '../breathing/index.html',
    '../sensory-5-4-3-2-1/index.html',
    '../mental-guess-color/index.html',
    '../physical-movement/index.html',
    '../tactile-maze/index.html',
    '../creative-acronyms/index.html',
    '../breathing-blow-candle/index.html',
    '../breathing-guided/index.html',
    '../sensory-ice-cube/index.html',
    '../sensory-imaginary-rain/index.html',
    '../mental-intervals/index.html',
    '../physical-balance/index.html',
    '../physical-walk/index.html',
    '../tactile-bubbles/index.html',
    '../tactile-puzzle/index.html',
    '../creative-poetry/index.html',
    '../creative-metaphors/index.html'
  ]
  
  document.getElementById('shuffle-btn').addEventListener('click', function () {
    const randomGame = mentalGames[Math.floor(Math.random() * mentalGames.length)]
    window.location.href = randomGame
  })
  