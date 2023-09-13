(function () {
  const callback = () => {
    const breakpoint = window.matchMedia('(max-width:992px)');
    let swiper;

    const initSwiper = () => {
      swiper = new Swiper('.reviews__slider', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        loop: true,

        pagination: {
          el: '.reviews__pagination',
        },

        navigation: {
          nextEl: '.reviews__button--next',
          prevEl: '.reviews__button--prev',
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
