import Swiper from 'swiper/bundle';
const swiperSlider = (() => {
  const accountantInit = new Swiper('.js-benefit-slider', {
    spaceBetween: 20,
    slidesPerView: 1,
    speed: 800,
    centeredSlides: false,
    loop: true,
    freemod: true,

    navigation: {
      nextEl: '.benefit-button-next',
      prevEl: '.benefit-button-prev',
    },
    breakpoints: {
      540: {
        spaceBetween: 20,
        slidesPerView: 2,
      },
      768: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
      1200: {
        spaceBetween: 31,
        slidesPerView: 4,
      },
      1360: {
        spaceBetween: 31,
        slidesPerView: 6,
      },
    },
  });

//   const benefitSwiper = new Swiper('.js-benefit-slider-two', {
//     spaceBetween: 20,
//     slidesPerView: 1,
//     speed: 800,
//     centeredSlides: false,
//     loop: true,
//     freemod: true,

//     navigation: {
//       nextEl: '.benefit-button-next',
//       prevEl: '.benefit-button-prev',
//     },
//   });

  const init = () => {};

  return {
    init,
  };
})();

export default swiperSlider;
