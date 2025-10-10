// top 이미지 버튼 색깔 바꾸기
$(function () {
  const wTop = $('#service-shortcut').offset().top;

  $(window).scroll(function () {
    let st = $(window).scrollTop();

    if (st > wTop - 1000) {
      $('.top > a > img').attr("src", "img/common/icon/topBtn2.png")
    } else {
      $('.top > a > img').attr("src", "img/common/icon/topBtn1.png")
    }
  })
})

$(function () {
//   var swiper = new Swiper(".main-mySwiper1", {
//     pagination: {
//       el: ".swiper-pagination",
//       type: "fraction",
//       formatFractionCurrent: function (number) {
//         return number = '0' + number;
//       },
//       formatFractionTotal: function (number) {
//         return number = '0' + number;
//       },
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     autoplay: {
//       delay: 8000,
//       disableOnInteraction: false
//     },
//     loop: true,
//   });

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
    spaceBetween: 12,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    loop: true,
  });
})

//gsap
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  //브랜드소개 섹션
  const ani1 = gsap.timeline();

  ani1.from('#brand-info .brand-info_wrap .text-box', {
    x: -100, autoAlpha: 0, duration: 1.4, ease: "power4.out",
  })
    .from('#brand-info .brand-info_wrap .img-box_wrap .img-box:nth-child(1)', {
      y: -200, autoAlpha: 0, duration: 2, ease: "power4.out",
    }, 0.4)
    .from('#brand-info .brand-info_wrap .img-box_wrap .img-box:nth-child(2)', {
      y: 200, autoAlpha: 0, duration: 2, ease: "power4.out",
    }, 0.8)

  ScrollTrigger.create({
    animation: ani1,
    trigger: '#brand-info',
    start: "top 80%",
  })

  // 매장찾기&앱다운로드 바로가기 섹션
  const ani2 = gsap.timeline();

  ani2.from("#service-shortcut .service-shortcut_wrap .service-shortcut_itme", {
    autoAlpha: 0, duration: 1.2
  })

  ScrollTrigger.create({
    animation: ani2,
    trigger: "#service-shortcut",
    start: "top 80%",
  })

  // 인스타그램 섹션
  const ani3 = gsap.timeline();

  ani3.to('#instagram-post .instagram-post_wrap .text-box h3 ', {
    scale: 1.1, duration: 0.2
  })
    .to('#instagram-post .instagram-post_wrap .text-box h3', {
      scale: 0.9, duration: 0.2
    })
    .to('#instagram-post .instagram-post_wrap .text-box h3', {
      scale: 1
    })

  ScrollTrigger.create({
    animation: ani3,
    trigger: '#instagram-post',
    start: "top 70%",
    // markers: true,
  })
});
