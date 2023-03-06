import { SwiperOptions } from 'swiper';

export const SALES_SWIPER_SETTINGS: SwiperOptions = {
  slidesPerView: 1,
  centeredSlides: true,
  pagination: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: false,
  },
  loop: true,
  speed: 800,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1024: {
      pagination: false,
    },
  },
};
