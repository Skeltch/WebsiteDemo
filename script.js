$("button").click(function() {
    $('html,body').animate({
        scrollTop: $(".caption").offset().top},
        'slow');
});