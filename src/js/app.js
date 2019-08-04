import $ from 'jquery';
import 'owl.carousel';

$(document).ready(function() {

  // slider for intro block
  $('.slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    items: 1,
    autoplay: true,
    navText: [$('.slider-prev'), $('.slider-next')],
    autoplayTimeout: 4000,
    smartSpeed: 1000
  });

  // pre-slider for theaters block
  $('.pre-slider-theaters').owlCarousel({
    loop: true,
    margin: 40,
    nav: true,
    dots: false,
    center:true,
    navText: [$('.pre-slider-theaters-prev'), $('.pre-slider-theaters-next')],
    smartSpeed: 1000,
    responsive:{
      0:{
        items: 2
      },
      600:{
        items: 3
      },
      1000:{
        items: 4
      }
    },
  });

  // slider for theaters block
  $('.slider-theaters').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    items: 3,
    navText: [$('.slider-theaters-prev'), $('.slider-theaters-next')],
    smartSpeed: 1000,
    responsive:{
      0:{
        items: 1
      },
      600:{
        items: 2
      },
      1000:{
        items: 3
      }
    }
  });

  // pre-slider for places block
  $('.pre-slider-places').owlCarousel({
    loop: true,
    margin: 40,
    nav: true,
    dots: false,
    center:true,
    navText: [$('.pre-slider-places-prev'), $('.pre-slider-places-next')],
    smartSpeed: 1000,
    responsive:{
      0:{
        items: 2
      },
      600:{
        items: 3
      },
      1000:{
        items: 4
      }
    },
  });

  // slider for places block
  $('.slider-places').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    items: 3,
    navText: [$('.slider-places-prev'), $('.slider-places-next')],
    smartSpeed: 1000,
    responsive:{
      0:{
        items: 1
      },
      600:{
        items: 2
      },
      1000:{
        items: 3
      }
    }
  });

});
