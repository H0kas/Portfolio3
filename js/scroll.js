function scrollNav() {
    $('.projects-nav a').click(function () {
        $(".active").removeClass("active");
        $(this).closest('li').addClass("active");
        var theClass = $(this).attr("class");
        $('.' + theClass).parent('li').addClass('active');
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 120
        }, 400);
        return false;
    });
    $('.scrollTop a').scrollTop();
}
scrollNav();
