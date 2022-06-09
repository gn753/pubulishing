$(function(){
  $('.trigger').click(function(){
    $(this).toggleClass('active')
    $('.menu-btn').toggleClass('active')
    $('section,.menu a').click(function(){
      $('.menu-btn').removeClass('active')
      $('.trigger').removeClass('active')
  })
})
  $('.event-text').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay:true,
    autoplaySpeed: 2000,
  });
})