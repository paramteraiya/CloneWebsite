$(document).ready(function() {
$(".h1Animate").each(function() {
    var a = $(this);
    var b = $(this).text().split(" ");
    a.empty();
    $.each(b, function(e, c) {
        var f = c.split("");
        var d = "";
        $.each(f, function(h, g) {
            d += '<span class="l">' + g + "</span>"
        });
        a.append("<span class='w'>" + d + "</span><span class='s'> </span>")
        })
});
var $currentSlide = $(".banner-section:eq(0)");
var InitialAnimation = new TimelineMax();
InitialAnimation.fromTo("#logo", 0.4, {
    opacity: 0
}, {
    opacity: 1
}, 0).staggerFromTo(".upperContent>i", 0.4, {
    opacity: 0,
    y: 30
}, {
    opacity: 1,
    y: 0
}, 0.08).staggerFromTo(".upperContent>a", 0.4, {
    opacity: 0,
    y: 30
}, {
    opacity: 1,
    y: 0
}, 0.08).staggerFromTo(".upperContent>div", 0.4, {
    opacity: 0,
    y: 30
}, {
    opacity: 1,
    y: 0
}, 0.08).fromTo("ul>li", 0.4, {
    opacity: 0,
    y: 30
}, {
    opacity: 1,
    y: 0
}).fromTo($currentSlide.find(".heading"), 0.4, {
    opacity: 0,
    y: -30
}, {
    opacity: 1,
    y: 0
}, "+=0.001").staggerFromTo($currentSlide.find(".h1Animate .l"), 0.4, {
    opacity: 0,
    y: 30,
    rotation: 20
}, {
    opacity: 1,
    y: 0,
    rotation: 0
}, 0.02, "+=0.01").fromTo($currentSlide.find(".overview"), 0.05, {
    opacity: 0
}, {
    opacity: 1
}, "-=0.2").staggerFromTo($currentSlide.find(".overview p"), 0.4, {
    opacity: 0,
    y: 30
}, {
    opacity: 1,
    y: 0
}, 0.08, "-=0.2").fromTo($currentSlide.find("#banner"), 0.4, {
    opacity: 0,
    scale: 0.4
}, {
    opacity: 1,
    scale: 1,
    ease: Elastic.easOut
}, "-=0.02").fromTo($currentSlide.find("#bannerBtn"), 0.4, {
    opacity: 0,
    skewX: 20
}, {
    opacity: 1,
    skewX: 0,
    ease: Elastic.easOut
}, "-=0.02").staggerFromTo(".leftFooter1 > div", 0.4, {
    opacity: 0,
    y: -30
}, {
    opacity: 1,
    y: 0
}, 0.2);
InitialAnimation.progress(0).pause();
$(window).on('load', function() {
    InitialAnimation.play();
});
//tabbing animation
var c = false;
    function d(n) {
        var l = parseInt(n);
        var j = $(".banner-section.current").index();
        if (c == false && l != j) {
            var h = $('.banner-section').eq(j);
            var k = $('.banner-section').eq(l);
            $('.block').eq(l).addClass("current").siblings().removeClass("current");
            var p = new TimelineMax();
            p.fromTo(h.find(".rev"), 0.3, {
                opacity: 1
            }, {
                opacity: 0
            }, 0).staggerFromTo(h.find(".h1Animate .l"), 0.3, {
                opacity: 1,
                y: 0,
                rotation: 0
            }, {
                opacity: 0,
                y: random(-50, 50),
                rotation: random(-180, 180)
            }, 0.02, "+=0.01",onComplete=function(){
                k.addClass("current").siblings().removeClass("current");
            }).fromTo(k.find(".heading"), 0.4, {
                opacity: 0,
                y: -30
            }, {
                opacity: 1,
                y: 0
            }, "+=0.001").staggerFromTo(k.find(".h1Animate .l"), 0.4, {
                opacity: 0,
                y: random(-50, 50),
                rotation: random(-180, 180)
            }, {
                opacity: 1,
                y: 0,
                rotation: 0
            }, 0.02, "+=0.01").fromTo(k.find(".pera"), 0.05, {
                opacity: 0
            }, {
                opacity: 1
            }, "-=0.2").staggerFromTo(k.find("#bannerBtn"), 0.4, {
                opacity: 0,
                y: 30
            }, {
                opacity: 1,
                y: 0
            }, 0.08, "-=0.2").fromTo(k.find("#banner"), 0.4, {
                opacity: 0,
                scale: Math.random()
            }, {
                opacity: 1,
                scale: 1,
                ease: Elastic.easOut
            }, "-=0.02").fromTo(k.find(".mail"), 0.4, {
                opacity: 0,
                skewX: random(-20, 20)
            }, {
                opacity: 1,
                skewX: 0,
                ease: Elastic.easOut
            }, "-=0.02");
            var o = p.duration();
            c = true;
            setTimeout(function() {
                c = false
            }, (o * 1000))
        }
    }
    $(".block").on("click", function() {
        var index = $(this).index();
        $('.block').eq(index).css('opacity','1').siblings().css('opacity','0.2');
        d(index);
    });
    function random(b, a) {
        return Math.floor(Math.random() * (1 + a - b) + b)
    }
//Search icon Click
$(document).on('click','#search', function(){
    if($(':text').attr("class")=='searchInput'){
        $(':text').addClass('searchAnimation').removeClass('searchInput');
    }else if($(':text').attr("class")=='searchAnimation'){
        $(':text').addClass('searchInput').removeClass('searchAnimation');
    }
});
//RightFooter click Box-shadow
$(document).on('click','.RightFooter', function(){
    $(".RightFooter").css('box-shadow','2px 2px 2px 0 rgb(255 255 255 / 40%)');
});
// Menu Bar
var a = new TimelineMax({onReverseComplete:function(){
    $(".page-2").addClass("display-none");
}});
    a.fromTo(".page-2", 0.35, {
        opacity: "0",
        visibility: "hidden"
    }, {
        opacity: "1",
        visibility: "visible"
    }, 0).fromTo(".menuMain", 0.2, {



        
        opacity: 0
    }, {
        opacity: 1
    }, "-=0.05").staggerFromTo(".page-2 li h2", 0.4, {
        opacity: 0,
        y: 30
    }, {
        opacity: 1,
        y: 0
    }, 0.05).staggerFromTo(".page-2 .social i", 0.2, {
        opacity: 0,
        scale: 1.2
    }, {
        opacity: 1,
        scale: 1
    }, 0.05, "+=0.2");
    a.progress(0).pause();
    $(".menuIcon1").on("click", function() {
        $(".menuIcon,.menuIcon1").addClass("open");
        $(".page-2").removeClass("display-none");
        $(".page-1").addClass("display-none");
        // $(".page-1").fadeOut('slow');
        a.play()
    });
    $(".menuIcon").on("click", function() {
        a.reverse(0);
        $(".page-1").removeClass("display-none");
        // $(".page-1").fadeIn('slow');
        $(".menuIcon,.menuIcon1").removeClass("open")
    });
});