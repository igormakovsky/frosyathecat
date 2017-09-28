$(function () {

    $('#a:in-viewport').addClass('animated fadeInDown');

    $(window).scroll(function () {
        $('#a:in-viewport(-300)').css('transform', 'translateX(10em)');
    });

    $(document).on('click', '#a',
        function () {
            $(this).toggleClass("b");
        });
});