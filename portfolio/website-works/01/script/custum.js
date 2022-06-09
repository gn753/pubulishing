$(function () {
    // PCver 풀메뉴
    var menuA = $('#gheader > ul');
    menuA.on('mouseenter focus', function () {
        $('#gheader > ul > li .sub').hide();
        $('#gheader > ul > li .sub').slideDown(300);
    });
    menuA.mouseleave(function () {
        $('.sub').hide();
    });
    //bxslider script code
    // 탭메뉴 메인페이지
    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab'); //tab-1,2,3

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $('#' + tab_id).addClass('current');
    });

    // 탭메뉴 사업소개
    $('.tabbox ul li').click(function () {
        var tab_id = $(this).attr('data-tab'); //tab-1,2,3

        $('.tabbox ul li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $('#' + tab_id).addClass('current');
    });
    // Sub3 dropdown box
    $('.dropdown-select').click(function () {
        $('.dropdown-list').toggleClass('active')
    })
    $('.dropdown-select2').click(function () {
        $('.dropdown-list2').toggleClass('active')
    })
});