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


var swiper = new Swiper(".gallerySwiper", {
  slidesPerView: "auto",
 
  spaceBetween: 30,
  pagination: {
    el: ".stocksSwiper__swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".stocksSwiper__button-next",
    prevEl: ".stocksSwiper__button-prev",
  },
});

// var mql = window.matchMedia("(max-width: 1200px)");
// var mql2 = window.matchMedia("(max-width: 1050px)");
// var mql3 = window.matchMedia("(max-width: 740px)");
// var mql4 = window.matchMedia("(max-width: 540px)");
// mql.addListener(function(e) {
//     if (e.matches) {
//         var slides = document.querySelectorAll('.slide__inner');
//         slides.forEach(function(slide) {
//             slide.style.backgroundRepeat = 'no-repeat';
//             slide.style.backgroundPosition = '-200px center';
//             slide.style.borderRadius = '45px 45px 0 0';
//         });
//     } else {
//         // Сбросить стили здесь
//     }
// });

// mql2.addListener(function(e) {
//   if (e.matches) {
//       var slide = document.querySelector('.slide__inner');
//       slide.style.backgroundPosition = '-350px center';
//   } else {
//       // Сбросить стили здесь
//   }
// });

// mql3.addListener(function(e) {
//   if (e.matches) {
//       var slide = document.querySelector('.slide__inner');
//       slide.style.backgroundPosition = '-500px center';
//   } else {
//       // Сбросить стили здесь
//   }
// });

// mql4.addListener(function(e) {
//   if (e.matches) {
//       var slide = document.querySelector('.slide__inner');
//       slide.style.backgroundPosition = '-750px center';
//   } else {
//       // Сбросить стили здесь
//   }
// });

$("#burger_menu2").click(function() {
  $(this).toggleClass('open');
  $("nav").toggleClass("open");
});




$(".dropdown__link").click(function(event) {
  event.stopPropagation(); // Предотвращает закрытие выпадающего списка при клике на ссылку
  $(".dropdown__content").slideToggle("fast");
 });
 
 $(document).click(function() {
  $(".dropdown__content").slideUp("fast"); // Закрывает выпадающий список при клике вне его области
 });





// document.querySelector('.consultation__form').addEventListener('submit', function(event) {
//     event.preventDefault();
    
// });

 window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('#tel'), function(input) {
  var keyCode;
  function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5)  this.value = ""
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false)

});

});











function changeCategory(category) {
  $('.slide').each(function() {
    if ($(this).hasClass(category)) {
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });
}


changeCategory('category1');


$('.slide').click(function() {
  var $currentAnswer = $(this).find('.slide__item-servicesPrice');
  var $currentQuestion = $(this).parent();


  $('.slide__item-servicesHeader svg').removeClass('rotate');

  if ($currentAnswer.is(':visible')) {
    $currentAnswer.slideUp();
  } else {
    $('.slide__item-servicesPrice').slideUp();
    $currentAnswer.slideDown();

    $(this).find('svg').addClass('rotate');
  }
});



$('.direction__about-slider-category button').click(function() {
  var category = $(this).data('category');

  $('.direction__about-slider-category button').removeClass('active__category-button');
  $(this).addClass('active__category-button');

});

$('#radio__doctor').click(function() {
    $('#doctorSelector').show();

});

$('#radio__clinic').click(function() {
  $('#doctorSelector').hide();

});




// $('#prices__menu-item-1').click(function() {
//   $('#price-list-1').show();
// }).not(this).each(function() {
//   $('#price-list-1').hide(); 
// });


// $('#prices__menu-item-2').click(function() {
//   $('#price-list-2').show();
// }).not(this).each(function() {
//   $('#price-list-2').hide(); 
// });


// $('#prices__menu-item-3').click(function() {
//   $('#price-list-3').show();
// }).not(this).each(function() {
//   $('#price-list-3').hide(); 
// });

// $('#prices__menu-item-2').click(function() {
//   $('#price-list-4').show();
// }).not(this).each(function() {
//   $('#price-list-4').hide(); 
// });


// Общие классы для пункта меню и прайс-листа
const menuItemsSelector = '.prices__menu-item';
const priceListsSelector = '.prices__block-price__list';

// Переменная для хранения текущего активного пункта меню
// Переменная для хранения текущего активного пункта меню
let activeMenuItem = null;

// Обработчик клика по пунктам меню
$(document).on('click', menuItemsSelector, function() {
  // Скрываем все прайс-листы
  $(priceListsSelector).hide();

  // Получаем   номер прайс-листа из ID пункта меню
  let listNumber = $(this).attr('id').split('-').pop();

  // Показываем соответствующий прайс-лист
  $('#price-list-' + listNumber).show();

  // Если было ранее активное меню, удаляем у него класс 'rotate' и 'box-shadow'
  if (activeMenuItem) {
    activeMenuItem.find('svg').removeClass('rotate');
    activeMenuItem.css('box-shadow', 'none');
  }

  // Добавляем класс 'rotate' к SVG элементу текущего активного пункта меню
  $(this).find('svg').addClass('rotate');
  $(this).css('box-shadow', '0px  0px  37px  8px rgba(0,0,0,0.1),0px  10px  15px -3px rgba(0,0,0,0.1)');

  // Обновляем активный пункт меню
  activeMenuItem = $(this);
});





