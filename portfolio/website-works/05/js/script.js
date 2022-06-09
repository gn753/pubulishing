$(function () {
  $('.trigger').click(function () {
    $(this).toggleClass('active');
  });
  $('.footer__info-check-btn').click(function () {
    $('.footer__addr').fadeToggle();
  });
  // todo : 추후 로직을 제대로 짜서 스크립트 정리 
  $('.lnb .search-icon').click(function () {
    $('.header__pc-area').hide()
    $('.search-bar').show();
  });
  $('.search-bar .xx-icon').click(function () {
    $('.search-bar').hide();
    $('.header__pc-area').show()
  });
  // 모바일 햄버거 버튼 클릭 시 메뉴 출력
  $('.header__mb-area .trigger').click(function () {
    $('.aside').toggleClass('active');
    $('.overlay').toggleClass('active')
  });
  $('.overlay, .trigger.active').click(function(){
    $('.aside, .overlay,.trigger').removeClass('active');
  })
  // 모바일 각 탭 리스트 슬라이드 토글
  $('.aside__categori__main-btn').click(function (){
    $(this).next().slideToggle(300)
  })
  $('.aside__tab a').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('.aside__tab a').removeClass('current')
    $('.tab-content').removeClass('current')

    $(this).addClass('current')
    $("#"+tab_id).addClass('current');
  })
  

  // pc ver 서치바 모바일로 전환 시 자동으로 닫히도록 구현
  $(window).resize(function () {
  if (window.matchMedia("(min-width: 1299px)").matches) {
    /* 뷰포트 너비가 400 픽셀 이상 */
    $('.lnb .search-icon').click(function () {
      $('.header__pc-area').hide()
      $('.search-bar').show();
    });
    $('.header__pc-area').show()
  } else {
    $('.header__pc-area').hide()
    $('.search-bar').hide();
  }
  })
  });
