$(document).ready(function(){
  
  $("#thover").click(function(){
        $(this).fadeOut();
    $("#tpopup").fadeOut();
    });
  
  
  $("#tclose").click(function(){
        $("#thover").fadeOut();
    $("#tpopup").fadeOut();
    });
  
});


(function ($) {
    "use strict";


    var win = $(window);

    //jQuery to collapse the navbar on scroll
    win.on('scroll', function () {
        var nav = $(".navbar");
        var navTop = $(".navbar-fixed-top");
        if (nav.offset().top > 20) {
            navTop.addClass("top-nav-collapse");
            navTop.css({ "background-color": "#333" });
        } else {
            navTop.removeClass("top-nav-collapse");
        }
    });

    //Carousel slider (testimonial)
    var quote = $('#quote-carousel');
    quote.carousel({
        pause: true, interval: 4000,
    });

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    var pageScroll = $('a.page-scroll');
    pageScroll.on('click', function (event) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // call service
    var flag = 0;
    $("#order-close").click(function () {
        flag = 0
        $("#float-form").fadeOut(500);
        flag = 0;

    });

    $("#float-btn").click(function () {
        if (flag == 0) {
            $("#float-form").fadeIn(500);
            $("#float-form").css({ visibility: 'visible' }, 200);
            flag = 1;
        } else {
            $("#float-form").fadeOut(500);
            flag = 0;
        }

    });
    // Script  - Send Call Service
    $('#contact_form').submit(function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            alert("Спасибо за заявку! Мы Вам перезвоним");
        });
        return false;
    });

})(jQuery);
