window.addEventListener('resize', function(event) { // Функция, отслеживающая изменение размера окна
  let InnerWidth = window.innerWidth; // Получаем размер окна

  if (InnerWidth < 1040) {
    sliderInitialization(); // Запускаем функцию при размере окна меньшем, чем 1040 пикселов
  }

}, true);

document.addEventListener("DOMContentLoaded", sliderInitialization); // Запускаем функцию при загрузке страницы

function sliderInitialization() { // Инициализация слайдера
  // Настройки слайдера
  $('.news-block--js').slick({
    arrows: false,
    dots: false,
    responsive: [
        // При разрешении до 10 000 пикселов
        {
          breakpoint: 10000,
          settings: "unslick" // Отключаем слайдер
        },
        // При разрешении до 1039 пикселов
        {
          breakpoint: 1039,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            variableWidth: true
          }
        },
        // При разрешении до 767 пикселов
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true
          }
        },
    ]
  });
}


let style = document.querySelector('style');
let NewsCount = document.querySelectorAll('.news');
// перекидываю... Ох, только сейчас понял, что SCSS скомпилируется раньше, чем инициализируется переменная. )))
// Ахахах, да, идея была неплохая, надо будет взять на вооружение.
style.innerHTML+= `
:root {
  --news-count: ${NewsCount.length};
}
`;

//<!DOCTYPE Liky>
