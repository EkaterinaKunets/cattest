// window.$ = window.jQuery =  require('jquery');
// window.slick =              require('./vendor/bower/slick');

jQuery(document).ready(function($){

  /* Hamburger */
  $('.nav__hamburger').click(function(e){
    e.preventDefault();
    $('.nav__list').toggle();
    $('.nav__hamburger').toggleClass('hamburger-active');
  });

  $('.stripe__search').click(function(e){
   e.preventDefault();
   $('.stripe__form').toggle();
  });

    $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 100) {
        $('.nav').addClass('nav-fixed');
    } else {
        $('.nav').removeClass('nav-fixed');
    }
});


    var promoTextMaxHeight = 0;
  var promoTextItem = $(".news__inner");
  $(promoTextItem).each(function(){
   if ( $(this).height() > promoTextMaxHeight) {
    promoTextMaxHeight = $(this).height();
   }
  });
  $(promoTextItem).height(promoTextMaxHeight);

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

      $('.faq__subtitle').click(function(e){
    e.preventDefault();
    if($(this).next('.faq__subtext').is(":visible")) {
      $(this).next('.faq__subtext').slideUp();
      $(this).addClass('subtitle-close');
    } else {
      $(this).closest('.faq__accordion').find('.faq__subtext').slideUp();
      $(this).closest('.faq__accordion').find('.faq__subtitle').addClass('subtitle-close');
      $(this).next('.faq__subtext').slideDown();
      $(this).removeClass('subtitle-close');
    }
  });

  $('.what-we-do__tabs-link a').on('click', function(e){
  e.preventDefault();

  $(this)
    .closest('.what-we-do__tabs-list')
    .find('.what-we-do__tabs-link.active')
    .removeClass('active');
  $(this)
   .closest('.what-we-do__tabs-link')
   .addClass('active');

  $(this)
   .closest('.what-we-do__tabs')
   .find('.what-we-do__tab-item.active')
   .removeClass('active');
  link_href = $(this).attr('href');
  $(link_href).addClass('active');
  });

      $(window).scroll(function () {
        if ($(this).scrollTop() > 102) {
            $('.totop').fadeIn();
        } else {
            $('.totop').fadeOut();
        }
    });

    $('.totop').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});


