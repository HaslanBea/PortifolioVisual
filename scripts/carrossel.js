let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide a');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  const slide = document.querySelector('.carousel-slide');
  if (!slide) return;

  if (index >= slides.length) currentIndex = 0;
  else if (index < 0) currentIndex = slides.length - 1;
  else currentIndex = index;

  slide.style.transform = `translateX(-${currentIndex * 100}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

document.querySelector('.next').addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
    const index = parseInt(e.target.dataset.index);
    showSlide(index);
  });
});

setInterval(() => {
  showSlide(currentIndex + 1);
}, 5000); // Muda a cada 5 segundos

showSlide(currentIndex);
