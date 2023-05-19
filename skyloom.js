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
      slideShadows: true,
    },
    slideActiveClass: 'swiper-slide-active',
    slideNextClass: 'swiper-slide-next'
  });
  