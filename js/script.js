$(function() {
  // $('.header__lines-container').click(function() {
  //   $('.header__bottom').toggle();
  // });


  function inputHidePlaceholder() {
    let d;
    $('input').focus(function() {
      d = $(this).attr("placeholder");
      $(this).attr("placeholder", "");
      $(this).focusout(function() {
        $(this).attr("placeholder", d);
      });
    });
  };

  inputHidePlaceholder();

  function CurrentYear() {
    let d = new Date();
    let e = 'Workspace © ' + d.getFullYear() + '. Created by Yuriy';
    $('.footer__creator').html(e);
  }

  CurrentYear();

  $('.burger').on('click touchend', function(e) {
    e.stopPropagation();
    e.preventDefault();
    $(this).toggleClass('burger burger-disable');
    $('.header__menu_disable').toggle(200);

  });

  $('.logo').on('click touchend', function(e) {
    // e.stopPropagation();
    e.preventDefault();
    // $(this).toggleClass('burger burger-disable');
    $('section').hide();
    $('.start-foto').show();
    $('.news-lent').show();
    $('.choice-block').show();
    $('html, body').animate({
      scrollTop: 0
    }, 200);
  });

  $('.footer__vendors > div').on('touchend', function(e) {
    // e.stopPropagation();
    e.preventDefault();

    // console.log('gesg')
    $(this).css('transform', 'rotate(0deg)');
  });

  $('.footer__vendors > div').on('touchstart', function(e) {
    // e.stopPropagation();
    e.preventDefault();

    // console.log('gesg')
    $(this).css('transform', 'rotate(10deg)');
  });


  $('.header__menu .menu__item:nth-child(1), .header__menu_disable .menu__item:nth-child(1)').on('click touchend', function(e) {
    // e.stopPropagation();
    e.preventDefault();
    // $(this).toggleClass('burger burger-disable');
    $('section').hide();
    $('html, body').scrollTop(0);
    $('.arrivals').show();
  });

  $('.header__menu .menu__item:nth-child(2), .header__menu_disable .menu__item:nth-child(2)').on('click touchend', function(e) {
    // e.stopPropagation();
    e.preventDefault();
    // $(this).toggleClass('burger burger-disable');
    $('section').hide();
    $('html, body').scrollTop(0);
    $('.desks').show();
  });

  $('.header__menu .menu__item:nth-child(3), .header__menu_disable .menu__item:nth-child(3)').on('click touchend', function(e) {
    // e.stopPropagation();
    e.preventDefault();
    // $(this).toggleClass('burger burger-disable');
    $('section').hide();
    $('html, body').scrollTop(0);
    $('.chairs').show();
  });

  $('.header__search').on('click touchend', function(e) {
    e.stopPropagation();
    e.preventDefault();
    let a = parseInt($(".header").css('height'));
    $('html, body').animate({
      scrollTop: $(".searching-block").offset().top - a
    }, 200);
  });

  $('.news-lent__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // infinite: false,
    centerMode: true,

    // variableWidth: true
    prevArrow: '.news-lent__arrow',
    nextArrow: '.arrow_right',
    dots: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          centerPadding: 40,
        }
      },

      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      },

    ]

  });



});
