function initCarrossel() {
  const carrossel = document.querySelector('.carrossel');
  if (!carrossel) {
    console.log("Carrossel não encontrado, tentando novamente em 100ms...");
    setTimeout(initCarrossel, 100);
    return;
  }

  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const cards = document.querySelectorAll('.projeto-card');
  
  if (cards.length === 0) {
    console.error("Nenhum card de projeto encontrado!");
    return;
  }

  let currentIndex = 0;
  const cardWidth = cards[0].offsetWidth + 30;

  function updateCarrossel() {
    carrossel.scrollTo({
      left: currentIndex * cardWidth,
      behavior: 'smooth'
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarrossel();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateCarrossel();
      }
    });
  }

  console.log("Carrossel inicializado com sucesso!");
}

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initCarrossel);

// Observa mudanças no DOM para caso de carregamento assíncrono
new MutationObserver((mutations) => {
  if (document.querySelector('.carrossel') && !document.querySelector('.carrossel').hasAttribute('data-initialized')) {
    initCarrossel();
    document.querySelector('.carrossel').setAttribute('data-initialized', 'true');
  }
}).observe(document.body, {
  childList: true,
  subtree: true
});