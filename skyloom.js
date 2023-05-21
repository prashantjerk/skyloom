var swiperSlider = new Swiper(".swiper-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
