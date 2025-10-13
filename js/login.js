$(function () {
  $('.login .right-wrap .form-field').eq(1).find('img').on('click', function () {

    $('.login .right-wrap .form-field').toggleClass("active")
    if ($('.login .right-wrap .form-field').hasClass("active")) {
      $('.login .right-wrap .form-field').eq(1).find('img').attr('src', `img/login/password-show.png`);
      $('.login .right-wrap .form-field').eq(1).find('input').attr('type', `text`);
    } else {
      $('.login .right-wrap .form-field').eq(1).find('img').attr('src', `img/login/password-hide.png`);
      $('.login .right-wrap .form-field').eq(1).find('input').attr('type', `password`);
    }
  })
})