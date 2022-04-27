$(document).ready(function() {
    $(".slick_slideshow").slick({
        dots: true,
        infinite: true,
        speed: 300,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    $(document).on('mouseenter', '[data-toggle="pill"]', function () {
        $(this).tab('show');
      });
      $('.bota_customers_home .nav-tabs a').on('click',function(e) {
        var bg = $(this).attr('data-bg');
        $('.bota_customers_bg').css('background-image','url('+bg+')');
      })
});