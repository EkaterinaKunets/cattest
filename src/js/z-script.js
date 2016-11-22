window.$ = window.jQuery =  require('jquery');
window.slick =              require('./vendor/bower/slick');

jQuery(document).ready(function($){

  /* Hamburger */
  $('.nav__hamburger').click(function(e){
    e.preventDefault();
    $('.nav__list').toggle();
    $('.nav__hamburger').toggleClass('hamburger-active');
  });

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

  /* галерея Gratitude */
  $('.gratitude__gallery').slick({
    infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerPadding: '0',
    variableWidth: true
  });


  /* галерея "с нами уже работают" */
  if ($(window).width() <= 480) {
    $('.clients__gallery').slick({
      infinite: true,
      arrows: true,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0'
    });
  } else if ($(window).width() <= 768) {
    $('.clients__gallery').slick({
      infinite: true,
      arrows: true,
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0'
    });
  } else {
    $('.clients__gallery').slick({
      infinite: true,
      arrows: true,
      dots: false,
      slidesToShow: 7,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0'
    });
  }


  /* кнопка "наверх" */
  $('.side-fixed-menu__link--up').click(function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop: 0},1000);
      return false;
  });

  /* галерея Reviews */
  $('.reviews__gallery').slick({
    infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '0',
    variableWidth: true
  });


});


