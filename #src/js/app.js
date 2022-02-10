//slide social
$('.clients__social').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:
        `<button type='button' class='slick-prev pull-left slick-arrow'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
    nextArrow:
        `<button type='button' class='slick-next pull-right slick-arrow'><ion-icon name="chevron-forward-outline"></ion-icon></button>`,
    responsive: [
        {
            breakpoint: 768,
            settings: "unslick"
               
        },
        {
            breakpoint: 1373,
            settings: {
                slidesToShow: 4,
                arrows: false,
                dots: false
               

            }
        }
     
    ]
});
//slide rewwiew
$('.review__list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        // review mobile
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                dots: false,
                arrows: true,
                prevArrow:
                    `<button type='button' class='slick-prev pull-left slick-arrow-mobile'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
                nextArrow:
                    `<button type='button' class='slick-next pull-right slick-arrow-mobile'><ion-icon name="chevron-forward-outline"></ion-icon></button>`,

            }
        }
    ]
});
//slide about us
$('.aboutus__img__slide').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
});

//slide pricing__order__mobile
// slider
$slick_slider = $('.pricing__list');
settings_slider = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 8000,
    prevArrow:
        `<button type='button' class='slick-prev pull-left slick-arrow-mobile'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
    nextArrow:
        `<button type='button' class='slick-next pull-right slick-arrow-mobile'><ion-icon name="chevron-forward-outline"></ion-icon></button>`,
    
}
slick_on_mobile( $slick_slider, settings_slider);

// slick on mobile
  function slick_on_mobile(slider, settings){
    $(window).on('load resize', function() {
      if ($(window).width() > 768) {
        if (slider.hasClass('slick-initialized')) {
          slider.slick('unslick');
        }
        return
      }
      if (!slider.hasClass('slick-initialized')) {
        return slider.slick(settings);
      }
    });
  };
//end

// show menu
function showMenu() {
    document.querySelector('.menu-mobile').classList.toggle('show');
}
// cuộn trang

    document.querySelector(".btn-up").onclick = function() {
        window.scrollTo(0, 0);
    };


