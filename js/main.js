$(document).ready(function(){

   $('.blog_page_sl').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay:true,
        centerMode: true,
        centerPadding: '150px',
        dots: false,
        arrows:false,
        responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 2,
            centerMode: true,
            centerPadding: '40px',
            autoplay:true,
            slidesToScroll: 1,
            arrows:false,
            dots:false,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            centerMode: true,
            centerPadding: '20px',
            slidesToScroll: 1,
            arrows:false,
            dots: false,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '20px',
            arrows:false,
            dots: false,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '20px',
            arrows:false,
            dots: false,
          }
        },
          {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '20px',
            arrows:false,
            dots: false,
          }
        },

          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '20px',
              arrows:false,
              dots: false,
            }
          }
      ]
  });


const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mt-mobile');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');
    
});  

$(window).scroll(function() {
        if ($(this).scrollTop() > 1){
        $('.header-fixed').addClass("sticky");
        }
        else{
        $('.header-fixed').removeClass("sticky");
        }
    });


});