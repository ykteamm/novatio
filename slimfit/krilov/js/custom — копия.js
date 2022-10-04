(function($) {
    "use strict";

    var win = $(window);

    //jQuery to collapse the navbar on scroll
    win.on('scroll', function() {
        var nav = $(".navbar");
        var navTop =  $(".navbar-fixed-top");
        if (nav.offset().top > 20) {
            navTop.addClass("top-nav-collapse");
            navTop.css({"background-color" : "#333"});
        } else {
            navTop.removeClass("top-nav-collapse");
        }
});

    //carousel slider (testimonial)
    var quote = $('#quote-carousel');
    quote.carousel({
        pause: true, interval: 4000,
    });

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    var pageScroll = $('a.page-scroll');
    pageScroll.on('click', function(event) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });




    // tool TIP

    var counter=1;
    var no=1;

    setTimeout(show1,3000);
    function show1(){
        $(".line"+no).css("visibility","visible");
        if(counter==3)
        {
            $(this).stop();
            if(no==2 && counter==3)
            {
                counter=0;
                setTimeout(show2,100);
            }
            else{
                setTimeout(hide1,100);
            }
            no++;
            counter=0;
        }
        else
        {
            setTimeout(hide1,100);
        }
    }

function hide1(){
    $(".line" + no).css("visibility","hidden");
    setTimeout(show1,100);
    counter++;
}

function show2(){
    $("#info_circle").css("visibility","visible");

    if(counter==3){
        counter=0;
        $(this).stop();
        setTimeout(show3,100);
    }
    else{
        setTimeout(hide2,100);
    }
}

function hide2(){
    $("#info_circle").css("visibility","hidden");
    setTimeout(show2,100);
    counter++;
}

function show3(){
    $("#info").css("visibility","visible");

    if(counter==3){
        counter=0;
        $(this).stop();
    }
    else{
        setTimeout(hide3,100);
    }
}

function hide3(){
    $("#info").css("visibility","hidden");
    setTimeout(show3,100);
    counter++;
}




// Product show case
var productCount = 2; // for product 2

$(".next").click(function(){
    if(productCount == 1)
    {
        $(".product1").fadeOut(500);
        $(".product2").fadeIn(500);
        $(".h1").animate({top:"-30%"});
        $(".h2").animate({top:"50%"});
        productCount = 2;
    }
    else if(productCount == 2)
    {
        $(".product2").fadeOut(500);
        $(".product3").fadeIn(500);
        $(".h2").animate({top:"-30%"});
        $(".h3").animate({top:"50%"});
        productCount = 3;
    }
});

$(".pre").click(function(){
    if(productCount == 2)
    {
        $(".product2").fadeOut(500);
        $(".product1").fadeIn(500);
        $(".h1").animate({top:"50%"});
        $(".h2").animate({top:"130%"});
        productCount = 1;
    }
    else if(productCount == 3)
    {
        $(".product3").fadeOut(500);
        $(".product2").fadeIn(500);
        $(".h2").animate({top:"50%"});
        $(".h3").animate({top:"130%"});
        productCount = 2;
    }
});
$(".product2 .c1").click(function(){
    $(".product2 .c2").css("box-shadow","none");
    $(".product2 .c3").css("box-shadow","none");
    $(".product2 .c1").css("box-shadow","0 0 0 2px #0D1F2D, 0 0 0 3.5px #CB3843");
    $(".h2").animate({opacity:0},function(){
            $(".h2").attr("src","H2.png");
    });
    $(".h2").animate({opacity:1});
});

$(".product2 .c2").click(function(){
    $(".product2 .c1").css("box-shadow","none");
    $(".product2 .c3").css("box-shadow","none");
    $(".product2 .c2").css("box-shadow","0 0 0 2px #0D1F2D, 0 0 0 3.5px #CB3843");
    $(".h2").animate({opacity:0},function(){
            $(".h2").attr("src","H2_2.png");
    });
    $(".h2").animate({opacity:1});
});
$(".product2 .c3").click(function(){
    $(".product2 .c1").css("box-shadow","none");
    $(".product2 .c2").css("box-shadow","none");
    $(".product2 .c3").css("box-shadow","0 0 0 2px #0D1F2D, 0 0 0 3.5px #CB3843");
    $(".h2").animate({opacity:0},function(){
            $(".h2").attr("src","H2_3.png");
    });
    $(".h2").animate({opacity:1});
});


// call service

var flag = 0;
$("#order-close").click(function(){
    flag = 0
    $("#float-form").fadeOut(500);
    flag = 0;

});

$("#float-btn").click(function(){
  if(flag == 0){
    $("#float-form").fadeIn(500);
    $("#float-form").css({visibility:'visible'},200);
    flag = 1;
  } else {
    $("#float-form").fadeOut(500);
    flag = 0;
  }

});

    // Script  - Send Call Service
    $('#contact_form').submit(function(){
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
      }).done(function(){
        alert("Спасибо за заявку! Мы Вам перезвоним");
      });
      return false;
    });

})(jQuery);
