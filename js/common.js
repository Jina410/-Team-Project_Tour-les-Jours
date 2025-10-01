// ! header .main-menu 풀네비다운
$(function () {
  $(".menu-bg, .sub-menu").hide();

  $(".main-menu").on("mouseenter", function () {
    $(".menu-bg, .sub-menu").stop().slideDown(200);
  })

  $("nav").on("mouseleave", function () {
    $(".menu-bg, .sub-menu").stop().slideUp(200);
  })
})