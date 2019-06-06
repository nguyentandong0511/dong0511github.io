"use strict";

var _$$slick;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(function () {
  $('.scroll-top').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 600);
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() <= 200) {
      $('.scroll-top').css('opacity', 0);
    } else {
      $('.scroll-top').css('opacity', 1);
    }
  });
});
$(".slide-slick").slick((_$$slick = {
  infinite: true,
  arrows: false,
  dots: true
}, _defineProperty(_$$slick, "arrows", false), _defineProperty(_$$slick, "slidesToShow", 4), _defineProperty(_$$slick, "slidesToScroll", 3), _defineProperty(_$$slick, "speed", 2000), _defineProperty(_$$slick, "responsive", [{
  breakpoint: 1000,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 2
  }
}, {
  breakpoint: 600,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1
  }
}]), _$$slick));