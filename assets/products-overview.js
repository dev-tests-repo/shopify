(function () {
  const callback = () => {
    const breakpoint = window.matchMedia('(max-width:1200px)');
    let swiper;

    const initSwiper = () => {
      swiper = new Swiper('.products-overview__slider', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        loop: true,

        breakpoints: {
          992: {
            slidesPerView: 2,
          },
        },

        pagination: {
          el: '.products-overview__pagination',
        },
      });
    };

    const toggleSwiper = () => {
      breakpoint.matches ? initSwiper() : swiper?.destroy();
    };
    toggleSwiper();

    breakpoint.addEventListener('change', toggleSwiper);
  };

  window.addEventListener('DOMContentLoaded', callback);
  window.addEventListener('shopify:section:load', callback);
})();
