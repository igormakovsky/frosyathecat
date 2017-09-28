// Smooth scrolling to an element on a page
// Used on igorekmakovsky.ru

$(function () {

$('a[href^="#"]').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

});

