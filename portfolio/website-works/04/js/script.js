$(function () {
  // PCver 풀메뉴
  var menuA = $('header .inner .gnb');
  menuA.on('mouseenter focus', function () {
    $('header .inner .sub').hide();
    $('header .inner .sub').slideDown(300);
  });
  menuA.mouseleave(function () {
    $('.sub').hide();
  });
  //   bxslider
  $('.bxslider').bxSlider({
    mode: 'horizontal',
    moveSlides: 1,
    slideMargin: 40,
    infiniteLoop: true,
    maxSlides: 1,
    speed: 400,
    auto: true,
    controls: false,
    responsive: true,
    autoDirection: 'prev'
  });
  // mobile full menu
  $('.mobile-gnb .gnb .main > a').click(function (){
    $('.mobile-gnb .main .sub').slideUp()
    $(this).next(' .mobile-gnb .gnb .main .sub').stop().slideToggle()
  })
  // mobile full menu 클릭 시 선택한 메뉴 이외에는 슬라이드 업
  $('.mobile-btn').click(function(){
    $('.mobile-gnb, .mobile-btn').toggleClass('active')
  })
});