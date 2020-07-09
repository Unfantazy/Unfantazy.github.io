$(function () {


  $('.slider__main').slick({
    // slidesToShow: 1,
    // slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.thumbs',
    arrows: true,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.svg" alt=""></button>',
  });
  $('.thumbs').slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    asNavFor: '.slider__main',
    focusOnSelect: true,
    arrows: false,
    variableWidth: true,
    responsive: [{
        breakpoint: 960,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });


  $('.header__menu-btn').on('click', function () {
    $('.header__menu > ul').slideToggle();
  });

});