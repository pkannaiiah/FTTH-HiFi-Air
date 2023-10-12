var swiper = new Swiper(".global_hero_banner", {
  spaceBetween: 30,
  autoplay: {
    delay: 500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});