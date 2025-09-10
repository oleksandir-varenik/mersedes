$(function () {
    $('.slider').slick({
        dots: false,
        slidesToShow: 4,
        variableWidth: true,
        prevArrow: '<img src="imeges/Arrow 1.svg" alt="" class="aroow-1">',
        nextArrow: '<img src="imeges/Arrow 2.svg" alt="" class="aroow-2">',
        responsive: [{
            breakpoint: 700,
            settings: {
                variableWidth: false,
                slidesToShow: 1,
            }
        }]

              
    });
});


