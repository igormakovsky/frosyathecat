$(function () {

    $('.appear:in-viewport').addClass('animated fadeIn');

    $(window).scroll(function () {
        $('.appear:in-viewport').addClass('animated fadeIn');
    });

});