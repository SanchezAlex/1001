import $ from 'jquery';
import 'owl.carousel';
import 'bootstrap';
import isTouchDevice from './lib/detectTouch';

$(document).ready(function() {

  isTouchDevice();

  // slider for intro block
  const optionsIntroSlider = {
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    items: 1,
    autoplay: true,
    navText: [$('.slider-prev'), $('.slider-next')],
    autoplayTimeout: 4000,
    smartSpeed: 1000
  };

  $('.slider').owlCarousel(optionsIntroSlider);

  // calendar slider
  const optionsCalendarSlider = {
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    items: 3,
    autoplay: false,
    navText: [$('.calendar-prev'), $('.calendar-next')],
    smartSpeed: 500,
  };

  $('.posters__calendar').owlCarousel(optionsCalendarSlider);

  // pre-slider for theaters block
  const optionsPreTheaters = {
    margin: 40,
    nav: true,
    dots: false,
    navText: [$('.pre-slider-theaters-prev'), $('.pre-slider-theaters-next')],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
        margin: 20
      },
      560: {
        items: 2
      },
      1000: {
        items: 3
      }
    },
  };

  $('.pre-slider-theaters').owlCarousel(optionsPreTheaters);

  // slider for theaters block
  const optionsTheatersSlider = {
    nav: true,
    dots: true,
    navText: [$('.slider-theaters-prev'), $('.slider-theaters-next')],
    smartSpeed: 1000,
    responsive: {
      0: {
        dotsEach: 1,
        items: 1
      },
      560: {
        dotsEach: 1,
        items: 2
      },
      1000: {
        dotsEach: 1,
        items: 3
      }
    }
  };

  $('.slider-theaters').owlCarousel(optionsTheatersSlider);

  // pre-slider for places block
  const optionsPrePlaces = {
    margin: 40,
    nav: true,
    dots: false,
    navText: [$('.pre-slider-places-prev'), $('.pre-slider-places-next')],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
        margin: 20
      },
      560: {
        items: 2
      },
      1000: {
        items: 3
      }
    },
  };

  $('.pre-slider-places').owlCarousel(optionsPrePlaces);

  // slider for places block
  const optionsPlacesSlider = {
    nav: true,
    dots: true,
    navText: [$('.slider-places-prev'), $('.slider-places-next')],
    smartSpeed: 1000,
    responsive: {
      0: {
        dotsEach: 1,
        items: 1
      },
      560: {
        dotsEach: 1,
        items: 2
      },
      1000: {
        dotsEach: 1,
        items: 3
      }
    }
  };

  $('.slider-places').owlCarousel(optionsPlacesSlider);

  // pre-slider for kids places block
  const optionsPreKids = {
    margin: 40,
    nav: true,
    dots: false,
    navText: [$('.pre-slider-kids-prev'), $('.pre-slider-kids-next')],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
        margin: 20
      },
      560: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  };

  $('.pre-slider-kids').owlCarousel(optionsPreKids);

  // slider for kids places block
  const optionsKidsSlider = {
    nav: true,
    navText: [$('.slider-kids-prev'), $('.slider-kids-next')],
    smartSpeed: 1000,
    responsive: {
      0: {
        dotsEach: 1,
        items: 1
      },
      560: {
        dotsEach: 1,
        items: 2
      },
      1000: {
        dotsEach: 1,
        items: 3
      }
    }
  };

  $('.slider-kids').owlCarousel(optionsKidsSlider);

  // search button
  $('#search').on('click',(function(e) {
    $('.form-group').addClass('sb-search-open');
    e.stopPropagation();
  }));
  $(document).on('click', function(e) {
    // if ($(e.target).is('#search') === false && $('.form-control').val().length === 0) {
    //   $('.form-group').removeClass('sb-search-open');
    // $('.form-control').addClass('error');
    // }
  });
  $('.search-form-close').on('click', function(e) {
    $('#search').removeClass('sb-search-open');
    e.stopPropagation();
  });
  $('.form-control-submit').click(function(e) {
    $('.form-control').each(function() {
      if ($('.form-control').val().length === 0) {
        e.preventDefault();
        // $(this).addClass('error');
      }
    });
  });

  $('.nav-item-more').on('click', function() {
    $('.nav-item-more .more-items').toggleClass('active');
  });

});
