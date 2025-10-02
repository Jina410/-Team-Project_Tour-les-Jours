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


$(function(){
  $(window).scroll(function(){
    let st = $(window).scrollTop();
    let winH = $(window).height();

    if( st > winH - 300){
      $(".top").addClass("on");
    } else{
      $(".top").removeClass("on");
    }

    let footerTop = $('footer').offset().top;
    let btnH = $(".top").outerHeight();
    let btnBottom = st + winH - btnH - 20;

    if(btnBottom >= footerTop){
      $('.top > a > img').attr("src", "img/common/icon/topBtn2.png")
    } else {
      $('.top > a > img').attr("src", "img/common/icon/topBtn1.png")
    }
  })
})