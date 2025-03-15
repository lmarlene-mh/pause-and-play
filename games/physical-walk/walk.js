  // Botón de Inicio
  document.getElementById('back-btn').addEventListener('click', function () {
    window.location.href = '../../index.html'
  })


  
  // Botón de Juego Aleatorio
  const physicalGames = [
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
    '../mental-positive-associations/index.html',
    '../physical-balance/index.html',
    '../tactile-bubbles/index.html',
    '../tactile-puzzle/index.html',
    '../creative-poetry/index.html',
    '../creative-metaphors/index.html'
  ]
  
  document.getElementById('shuffle-btn').addEventListener('click', function () {
    const randomGame = physicalGames[Math.floor(Math.random() * physicalGames.length)]
    window.location.href = randomGame
  })
  