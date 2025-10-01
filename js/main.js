$(function () {

  //SWIPER 배너 슬라이드
  var swiper = new Swiper(".main-mySwiper1", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      formatFractionCurrent: function (number) {
        return number = '0' + number;
      },
      formatFractionTotal: function (number) {
        return number = '0' + number;
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 8000,
      disableOnInteraction: false
    },
    loop: true,
  });

  //SWIPER 추천제품 이벤트 슬라이드
  var swiper = new Swiper(".main-mySwiper2", {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    loop: true,
    effect: "fade",
  });

  //SWIPER 추천제품 제품 슬라이드
  var swiper = new Swiper(".main-mySwiper3", {
    slidesPerView: 3,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    loop: true,
  });
})

