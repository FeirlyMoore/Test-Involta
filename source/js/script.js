// Функция, отслеживающая изменение размера окна
window.addEventListener('resize', function(event) {
  // Получаем размер окна
  let InnerWidth = window.innerWidth;

  // Запускаем функцию при размере окна меньшем, чем 1040 пикселов
  if (InnerWidth < 1040) {
    sliderInitialization(); 
    // Запускаем функцию при размере окна большем, чем 1040 пикселов
  } else if (InnerWidth > 1040) {
    // HiddenNewsComponent(); 
  }

}, true);

// Получаем размер окна
let InnerWidth = window.innerWidth; 

// Запускаем функцию при загрузке страницы
document.addEventListener("DOMContentLoaded", sliderInitialization); 
// Запускаем функцию при загрузке страницы
// document.addEventListener("DOMContentLoaded", HiddenNewsComponent); 

// Инициализация слайдера
function sliderInitialization() { 
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

function HiddenNewsComponent() {
  let NewsCount = document.querySelectorAll('.news');
  let NewsLength = NewsCount.length;

  // Проверяем наличие длины у массива элементов, и наличие элементов соответственно
  if (NewsLength !== undefined || NewsLength !== NaN || NewsLength !== 0) { 
    // Пропускаем массив элементов через цикл 
    for (let i = 0; i <= NewsLength - 1; i++) {
      // Проверяем наличие класса у элемента, если его нет - то он будет добавлен в альтернативной ветви
      if (NewsCount[i].classList.contains(`news-block__item-${i + 1}`)){ 
        // Все элементы массива после девятого скрываем, при условии - что ширина окна больше 1040 и меньше 1200
        if (i >= 9 && InnerWidth >= 1040 && InnerWidth < 1200) {
          // Скрываем элементы
          console.log(i);
          NewsCount[i].classList.add(`hidden`);
        } else {
          // Обличаем элементы
          NewsCount[i].classList.remove(`hidden`);
        }
        // Добавляем класс блоку
      } else NewsCount[i].classList.add(`news-block__item-${i + 1}`);
    }
  }
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
