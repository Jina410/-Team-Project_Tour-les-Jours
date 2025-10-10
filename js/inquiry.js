$(function(){

  //q-wrap을 누르면 a-wrap가 열리는 이벤트
  $(".a-wrap").hide();

  $("#faq .q-wrap").click(function(){
    const parent = $(this).closest(".faq-item") //누른 q-wrap에 부모가 되는 .faq-item선택

    if(parent.hasClass("active")){
      parent.removeClass("active").find(".a-wrap").slideUp(300);
    }else{
      $(".faq-item").removeClass("active").find(".a-wrap").slideUp(300);

      parent.addClass("active").find(".a-wrap").slideDown(300);
    }
  })
})