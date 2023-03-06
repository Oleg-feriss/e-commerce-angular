import { SwiperOptions } from 'swiper';

export const PRODUCT_IMAGES_SWIPER_SETTINGS: SwiperOptions = {
  slidesPerView: 1,
  scrollbar: { draggable: true },
  centeredSlides: true,
  grabCursor: true,
  pagination: true,
  breakpoints: {
    1024: {
      pagination: false,
    },
  },
};
