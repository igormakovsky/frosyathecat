$(function () {

    $('#a:in-viewport').addClass('animated fadeInDown');

    $(window).scroll(function () {
        $('.a:in-viewport()').css({
            'transform' : 'translate(-1rem, 1rem)',
            'opacity' : '1'
        });
    });
    
    animationClick('#a', '#a', 'bounce')

    $(document).on('click', '#a',
        function () {
            $(this).toggleClass("b");
        });
});