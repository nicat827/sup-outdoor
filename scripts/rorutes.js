window.addEventListener("DOMContentLoaded", () => {
    // routes.html
  // Слайдер

  new Swiper('.scrolling__slider', {
    direction: 'horizontal',
    observer: true,
    observeParents: true,
    // slidesPerView: 2,
    spaceBetween: 20,
    autoHeight: true,
    speed: 800,
    // loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });

  new Swiper('.included__slider', {
    direction: 'horizontal',
    observer: true,
    observeParents: true,
    // slidesPerView: 2,
    spaceBetween: 20,
    // autoHeight: true,
    speed: 800,
    // loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });
})