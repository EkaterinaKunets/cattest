// window.$ = window.jQuery =  require('jquery');
// window.slick =              require('./vendor/bower/slick');

jQuery(document).ready(function($){

  /* Hamburger */
  $('.nav__hamburger').click(function(e){
    e.preventDefault();
    $('.nav__list').toggle();
    $('.nav__hamburger').toggleClass('hamburger-active');
  });

  /*Бросить на .news__inner одинаковую высоту блока */

  $('.nav__subhamburger-1').click(function(e){
    e.preventDefault();
    $('.nav__sub-menu--1').toggle();
    $('.nav__subhamburger-1').toggleClass('subhamburger-active');
  });

    $('.nav__subhamburger-2').click(function(e){
    e.preventDefault();
    $('.nav__sub-menu--2').toggle();
    $('.nav__subhamburger-2').toggleClass('subhamburger-active');
  });

  /* галерея Promo Slider */
  $('.promo-slider').slick({
    infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 900,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 4000
  });

  /* галерея Promo Slider */
  $('.logo-slider--first').slick({
    infinite: true,
    arrows: false,
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 900,
    autoplay: true,
    autoplaySpeed: 6000,
     responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  });

    $('.logo-slider--second').slick({
    infinite: true,
    arrows: false,
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 900,
    autoplay: true,
    autoplaySpeed: 6000,
     responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  });
  // /* кнопка "наверх" */
  // $('.side-fixed-menu__link--up').click(function(e) {
  //     e.preventDefault();
  //     $('html, body').animate({scrollTop: 0},1000);
  //     return false;
  // });

  // /* галерея Reviews */
  // $('.reviews__gallery').slick({
  //   infinite: true,
  //   arrows: true,
  //   dots: false,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   centerPadding: '0',
  //   variableWidth: true
  // });


});


