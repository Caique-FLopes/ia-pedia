

// Obtenha os elementos do DOM
const carousel = document.querySelector('.carousel');
const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');

// Defina a largura do container de acordo com a quantidade de itens
carouselContainer.style.width = `${carouselItems.length * 100}%`;

// Variável de controle
let currentIndex = 0;

// Função para mover o carrossel para um determinado item
function moveToItem(index) {
  currentIndex = index;
  carouselContainer.style.transform = `translateX(-${currentIndex * 100 / carouselItems.length}%)`;
}

// Função para mover o carrossel para o próximo item
function moveToNextItem() {
  while (currentIndex < carouselItems.length - 1) {
    currentIndex++;
    carouselContainer.style.transform = `translateX(-${currentIndex * 100 / carouselItems.length}%)`;
    console.log("guei")
  }
}

// Função para mover o carrossel para o item anterior
function moveToPrevItem() {
  if (currentIndex > 0) {
    currentIndex--;
    carouselContainer.style.transform = `translateX(-${currentIndex * 100 / carouselItems.length}%)`;
  }
}

// Event listeners para os botões de navegação (próximo e anterior)
document.getElementById('nextButton').addEventListener('click', moveToNextItem);
document.getElementById('prevButton').addEventListener('click', moveToPrevItem);
