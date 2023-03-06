import { SwiperOptions } from 'swiper';

export const BESTSELLERS_SWIPER_SETTINGS: SwiperOptions = {
  slidesPerView: 1,
  scrollbar: { draggable: true },
  centeredSlides: true,
  pagination: true,
  speed: 800,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
};
