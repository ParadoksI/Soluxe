$(document).ready(function(){
    $('.gallery__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        infinite: true,
        dots: true,
        arrows: true,
        
        responsive: [
            {
                breakpoint: 768, // Для экранов <768px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    autoplaySpeed: 5000,
                    infinite: true,
                    dots: true,
                    arrows: true,
                    centerMode: true, 
                    centerPadding: "40px",
                }
            }
        ]
    });

   
});