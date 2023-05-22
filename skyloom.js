// var swiperSlider = new Swiper(".swiper-slider", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   loop: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 0,
//     stretch: 0,
//     depth: 100,
//     modifier: 2,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });


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
  on: {
    slideChange: function () {
      // Get the current active slide index
      var activeIndex = this.activeIndex;

      // Reset opacity for all slides
      this.slides.css("opacity", "0.25");

      // Set opacity for center slide
      this.slides.eq(activeIndex).css("opacity", "1");

      // Set opacity for adjacent slides
      this.slides.eq(activeIndex - 1).css("opacity", "0.5");
      this.slides.eq(activeIndex + 1).css("opacity", "0.5");
    },
  },
});
