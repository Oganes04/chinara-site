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
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
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


var gallerySwiper = new Swiper(".gallerySwiper", {
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






var menuSwiper = new Swiper(".menuSwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".mainSwiper__button-next",
    prevEl: ".mainSwiper__button-prev",
  },
});





var categorySlides = {
  'category1':  0,
  'category2':  1,
  'category3':  2
};

function changeCategory(category) {

  var slideIndex = categorySlides[category] ||  0; 
 
  menuSwiper.slideTo(slideIndex);
}





$("#burger_menu2").click(function() {
  $(this).toggleClass('open');
  $("nav").toggleClass("open");
});







 $(".dropdown__link-selector").click(function(event) {
  event.stopPropagation(); // Предотвращает закрытие выпадающего списка при клике на ссылку
  $(".dropdown__content-selector").slideToggle("fast");
  $('.dropdown__link-selector  img').toggleClass("rotate_row");
 });
 
 $(document).click(function() {
  $(".dropdown__content-selector").slideUp("fast"); // Закрывает выпадающий список при клике вне его области
 
 });

 $(".dropdown__link").click(function(event) {
  event.stopPropagation(); // Предотвращает закрытие выпадающего списка при клике на ссылку
  $(".dropdown__content").slideToggle("fast");
  $('.dropdown__link  img').toggleClass("rotate_row");
 });
 
 $(document).click(function() {
  $(".dropdown__content").slideUp("fast"); // Закрывает выпадающий список при клике вне его области
 
 });

 $('.dropdown__content-selector p').click(function() {
  // Get the text of the clicked p element
  var selectedText = $(this).text();
  
  // Set the text of the dropdown__link-selector to the text of the clicked p element
  $('.selected__direction').text(selectedText);
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






// Общие классы для пункта меню и прайс-листа
const menuItemsSelector = '.prices__menu-item';
const priceListsSelector = '.prices__block-price__list';


let activeMenuItem = null;

$(document).ready(function() {
  // Получаем первый пункт меню
  const firstMenuItem = $(menuItemsSelector).first();

  // Получаем  номер прайс-листа из ID первого пункта меню
  const listNumber = firstMenuItem.attr('id').split('-').pop();

  // Показываем соответствующий прайс-лист
  $('#price-list-' + listNumber).show();

  // Добавляем класс 'rotate' к SVG элементу первого пункта меню
  firstMenuItem.find('svg').addClass('rotate');
  firstMenuItem.css('box-shadow', '0px   0px   37px   8px rgba(0,0,0,0.1),0px   10px   15px -3px rgba(0,0,0,0.1)');

  // Обновляем активный пункт меню
  activeMenuItem = firstMenuItem;
});

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





$(document).ready(function() {
  // Выбор слоя параллакса
  var $parallaxLayer = $('.parallax__layer');

  // Прикрепление обработчика событий mousemove к слою параллакса
  $parallaxLayer.on('mousemove', function(e) {
    // Вычисление расстояния от центра слоя
    var centerX = $(this).width() /  2;
    var centerY = $(this).height() /  2;
    var offsetX = e.pageX - $(this).offset().left - centerX;
    var offsetY = e.pageY - $(this).offset().top - centerY;

    // Применение вращения на основе позиции мыши
    var rotationX = offsetY / centerY *  20; // Настройка множителя для желаемой интенсивности эффекта
    var rotationY = -offsetX / centerX *  10; // Настройка множителя для желаемой интенсивности эффекта

    // Добавляем небольшое горизонтальное смещение
    var translateX = offsetX /  30;
    var translateY = offsetY /  30;

    // Применяем вращение и смещение ко всем дочерним изображениям
    $(this).find('.parallaxElement').each(function() {
      $(this).css({
        'transform': 'rotate(' + rotationX + 'deg) rotateY(' + rotationY + 'deg) translate(' + translateX + 'px,' + translateY + 'px)'
      });
    });
  }).on('mouseleave', function() {
    // Возвращаем вращение к исходному состоянию при уходе мыши
    $(this).find('.parallaxElement').css({
      'transform': ''
    });
  });
});


$('.doctors__item').click(function() {
  window.location.replace('/doctor.html')

});

$('.public__item').click(function() {
  window.location.replace('/public.html')

});
