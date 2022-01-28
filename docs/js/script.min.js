
// Настройки слайдера

// new Swiper('.news-block--js');

// $(document).ready(function(){
//   $('.news-block--js').slick();
// });

$(document).ready(function(){
  $('.news-block--js').slick({
    arrows: false,
    dots: false,
    responsive: [
        // При разрешении до 10 000 пикселов
        {
          breakpoint: 10000,
          settings: "unslick"
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
});

console.log(12312313);

//<!DOCTYPE Liky>
