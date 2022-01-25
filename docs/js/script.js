
// Настройки слайдера

$(document).ready(function(){
  $('.news-block--js').slick({
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    responsive: [
        // При разрешении до 10 000 пикселов
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: false
          }
        },
        // При разрешении до 1039 пикселов
        {
          breakpoint: 1039,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            variableWidth: false
          }
        },
        // При разрешении до 767 пикселов
        {
          breakpoint: 10000,
          settings: "unslick"
          
        },
    ]
  });
});

// let clientWidth = document.body.clientWidth;

// $('.news-block--js').slick({
//     arrows: false,
//     dots: false,
//     infinite: true,
//     slidesToScroll: 1,
//     slidesToShow: 1
//   });

// function resizeTaleSlider(clientWidth) {
//     if (clientWidth < 1040) {
//       $('.news-block--js').slick({
//         arrows: false,
//         dots: false,
//         infinite: true,
//         slidesToScroll: 2,
//       });
//     } else {
//       $('.news-block--js').slick("unslick");
//     }
//   }

//   resizeTaleSlider(clientWidth);

//   $(window).resize(function() {
//     let clientWidth = document.body.clientWidth;
//     resizeTaleSlider(clientWidth);
//   });

console.log(13123131)

//<!DOCTYPE Liky>
