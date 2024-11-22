// Função para rolar à esquerda
function scrollLeft(galleryId) {
  const gallery = document.getElementById(galleryId);
  gallery.scrollLeft -= 300; // Altere o valor para ajustar a distância do scroll
}

// Função para rolar à direita
function scrollRight(galleryId) {
  const gallery = document.getElementById(galleryId);
  gallery.scrollLeft += 300; // Altere o valor para ajustar a distância do scroll
}