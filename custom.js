$(function () {
// 일정이하 스크롤 시 헤더 배경 화이트 
$(window).scroll(function () {
  if ($(window).scrollTop() > 200) {
    $('#header').addClass('active')
  } else {
    $('#header').removeClass('active')
  }
})
// 모바일 반응형 네비게이션
$('.gnb a').click(function () {
  $(this).addClass('active')
  $(this).siblings().removeClass('active')
})
// Trigger 햄버거버튼
$('.trigger').click(function () {
  $('.gnb, body, .overlay').toggleClass('active')
  $(this).toggleClass('active')
})
// Overlay 
$('.overlay, .gnb a').click(function () {
  $('.gnb, .trigger, body, .overlay').removeClass('active')
})
})