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
    $(".slick-barnd").slick({
        dots: false,
        infinite: true,
        speed: 300,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 6,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
    $(document).on('click', '.allow-focus', function (e) {
        e.stopPropagation();
      });
    $(document).on('mouseenter', '[data-toggle="pill"]', function () {
        $(this).tab('show');
      });
      $('.bota_customers_home .nav-tabs a').on('click',function(e) {
        var bg = $(this).attr('data-bg');
        $('.bota_customers_bg').css('background-image','url('+bg+')');
      });
      $(window).on('load', function () {
		AOS.refresh();
	})
	AOS.init({
		startEvent: 'load',
		easing: 'ease-out-back',
		duration: 1500,
		once: true
	});
});