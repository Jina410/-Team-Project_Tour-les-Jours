// $(function() {
//   var $menuItems = $('.main-menus .menus .has-sub');

//   $menuItems.click(function(e) {
//     e.preventDefault();
//     var $this = $(this);

//     // 빵 메뉴는 클릭해도 토글 안함
//     if ($this.hasClass('bread')) return;

//     // 다른 메뉴 active 제거 (빵 메뉴 제외)
//     $menuItems.not($this).not('.bread').removeClass('active');

//     // 클릭한 메뉴 active 토글
//     $this.toggleClass('active');
//   });
// });



$(function (){
  const items = $(".menu-item");
  const showMoreBtn = $(".show-more-btn");
  const visibleCount = 12; // 처음 보여줄 개수

  // 처음엔 일부만 보이게
  items.each(function(index){
    if (index >= visibleCount) {
      $(this).hide();
    }
  });

  // 버튼 클릭 시 나머지 보이기
  showMoreBtn.on("click", function(){
    items.show();
    showMoreBtn.hide();
  })
})