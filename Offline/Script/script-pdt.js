// Código JavaScript para alternar entre as categorias ativas
const categoryElements = document.querySelectorAll('.category');
const productElements = document.querySelectorAll('.product');
const logoWrapperElements = document.querySelectorAll('.logo-wrapper');

// Função para exibir a categoria "natural-one" e seus produtos ao carregar a página
function showNaturalOneCategory() {
  const naturalOneCategory = document.getElementById('natural-one');
  if (naturalOneCategory) {
    naturalOneCategory.classList.add('active');
    
    productElements.forEach(product => {
      product.style.display = 'none';

      if (product.classList.contains('natural-one')) {
        product.style.display = 'block';
      }
    });
    
    logoWrapperElements.forEach(logoWrapper => {
      logoWrapper.classList.remove('active');

      if (logoWrapper.classList.contains('logo-wrapper-natural-one')) {
        logoWrapper.classList.add('active');
      } else {
        logoWrapper.classList.remove('gray');
      }
    });
  }
}

// Adicione um evento de carregamento da página para chamar a função
window.addEventListener('load', showNaturalOneCategory);

categoryElements.forEach(category => {
  category.addEventListener('click', () => {
    categoryElements.forEach(cat => cat.classList.remove('active'));
    category.classList.add('active');

    const categoryId = category.id;
    productElements.forEach(product => {
      product.style.display = 'none';

      if (product.classList.contains(categoryId)) {
        product.style.display = 'block';
      }
    });

    logoWrapperElements.forEach(logoWrapper => {
      logoWrapper.classList.remove('active');

      if (logoWrapper.classList.contains(`logo-wrapper-${categoryId}`)) {
        logoWrapper.classList.add('active');
      } else {
        logoWrapper.classList.remove('gray');
      }
    });
  });
});

