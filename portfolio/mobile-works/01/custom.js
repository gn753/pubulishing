$(function () {
    $('.trigger').click(function(){
        $('.gnb, .trigger, .overlay').toggleClass('active')
    })
    $('.overlay, .gnb a').click(function () {
        $('.gnb, .trigger, body, .overlay').removeClass('active')
    })
    $('.best-items').slick({
        slidesToShow: 2.1,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow: false,
        nextArrow: false,
        infinite: false,
    });
    $('.review-items').slick({
        slidesToShow: 1.5,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow: false,
        nextArrow: false,
        infinite: false,
    });
    $('.panel-items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        prevArrow: false,
        nextArrow: false,
        centerPadding: '15px',
        dots: true,
        cssEase: 'linear',
    });
    $('.genre-btn ul > li').click(function () {
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
        $('.tab-content').removeClass('active')
        $('#' + $(this).attr('data-tab')).addClass('active')
        // tab1  ==  $(this).attr('data-alt')
    })
})