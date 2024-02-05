var swiper = new Swiper(".mainSwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".mainSwiper__button-next",
    prevEl: ".mainSwiper__button-prev",
  },
});

var swiperStocks = new Swiper(".stocksSwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".stocksSwiper__swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".stocksSwiper__button-next",
    prevEl: ".stocksSwiper__button-prev",
  },
});

var mql = window.matchMedia("(max-width: 1200px)");
var mql2 = window.matchMedia("(max-width: 1050px)");
var mql3 = window.matchMedia("(max-width: 740px)");
var mql4 = window.matchMedia("(max-width: 540px)");
mql.addListener(function(e) {
    if (e.matches) {
        var slides = document.querySelectorAll('.slide__inner');
        slides.forEach(function(slide) {
            slide.style.backgroundRepeat = 'no-repeat';
            slide.style.backgroundPosition = '-200px center';
            slide.style.borderRadius = '45px 45px 0 0';
        });
    } else {
        // Сбросить стили здесь
    }
});

mql2.addListener(function(e) {
  if (e.matches) {
      var slide = document.querySelector('.slide__inner');
      slide.style.backgroundPosition = '-350px center';
  } else {
      // Сбросить стили здесь
  }
});

mql3.addListener(function(e) {
  if (e.matches) {
      var slide = document.querySelector('.slide__inner');
      slide.style.backgroundPosition = '-500px center';
  } else {
      // Сбросить стили здесь
  }
});

mql4.addListener(function(e) {
  if (e.matches) {
      var slide = document.querySelector('.slide__inner');
      slide.style.backgroundPosition = '-750px center';
  } else {
      // Сбросить стили здесь
  }
});

$("#burger_menu2").click(function() {
  $(this).toggleClass('open');
  $("nav").toggleClass("open");
});


// $(".dropdown__link").click(function() {
  
//   $(".dropdown__content").css('display', 'flex');
// });

$(".dropdown__link").click(function(event) {
  event.stopPropagation(); // Предотвращает закрытие выпадающего списка при клике на ссылку
  $(".dropdown__content").slideToggle("fast");
 });
 
 $(document).click(function() {
  $(".dropdown__content").slideUp("fast"); // Закрывает выпадающий список при клике вне его области
 });