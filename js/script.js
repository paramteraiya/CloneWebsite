$(document).ready(function() {
    var headerTimeLine,bannerTimeLine,footerTimeLine;
    animateHTML();
    $('.bannerMain>div').eq(0).show();
    $('.h1Animate').textillate({
         in: { effect: 'rotateInUpLeft' } ,
         out: { effect: 'rotateOutUpLeft'},
        initialDelay: 500
    });
    $('.block').click(function(){
        $('.banner,.pera,#spanBanner').fadeOut(5000);
        var index = $(this).index();
        // bannerTimeLine.reverse();
        $('.h1Animate').textillate('out',function(){
            animateHTML();
            $('.banner,.pera,#spanBanner').fadeIn(1000);
            $('.h1Animate').textillate('in');
            $('.block').eq(index).css('opacity','1').siblings().css('opacity','0.2');
            $('.bannerMain>div').eq(index).show().siblings().hide();
        })
    });
    $(document).on('click','#search', function(){
        if($(':text').attr("class")=='searchInput'){
            $(':text').addClass('searchAnimation').removeClass('searchInput');
            // $(".upperContent").find('input').focus();
        }else if($(':text').attr("class")=='searchAnimation'){
            $(':text').addClass('searchInput').removeClass('searchAnimation');
        }
    });
    $(document).on('focus','.mail', function(){
        $(".RightFooter").css('box-shadow','2px 2px 2px 0 rgb(255 255 255 / 40%)');
    });
    $(document).on('click','.menuIcon', function(){
        $('.menuIcon').toggleClass('open');
        if($(this).hasClass('open')){
            gsap.fromTo('.h2Animate',{
                duration:0,opacity:0,delay:1.3,y:'10%',ease:'none',stagger:0.05
            },{
                duration:0.1,opacity:1,delay:0.1,y:'0',ease:'bounce',stagger:0.1
            });
            gsap.fromTo('.socAnimate',{
                duration:0,opacity:0,delay:1.3,x:'-100%',ease:'none',stagger:0.05
            },{
                duration:0.2,opacity:1,delay:0.1,x:'0%',ease:'none',stagger:0.1
            });
            $('.page-1').fadeOut('slow');
            $('.page-2').fadeIn('slow');
        }else{
            setTimeout(function(){
                $('.page-2').fadeOut('slow');
                $('.page-1').fadeIn('slow');
            },1000);
        }
    });
    function animateHTML(){
        headerTimeLine = gsap.timeline()
        headerTimeLine.from('#logo',{
            duration:0.7,opacity:0,ease:'none'
        });
        headerTimeLine.from('.upperContent',{
            duration:0.3,opacity:0,y:'120%',ease:'none',stagger:0.05
        });
        headerTimeLine.from('.temp',{
            duration:0.4,opacity:0,y:'120%',x:'-100%',ease:'none',stagger:0.2
        });
        headerTimeLine.from('.bottomContent',{
            duration:1,opacity:0,y:'100%',ease:'none',stagger:0.02
        });
        headerTimeLine.from('.pera1',{
            duration:0.7,opacity:0,y:'100%',ease:'circ'
        });
        //banner
        bannerTimeLine = gsap.timeline();
        bannerTimeLine.from('.heading',{
            duration:0.7,opacity:0,y:'-100%',ease:'sine',stagger:0.02
        });
        bannerTimeLine.from('.pera',{
            duration:0.7,opacity:0,y:'100%',ease:'circ'
        });
        bannerTimeLine.from('#banner',{
            opacity:0,duration:0.8,scale:0, ease:'Power2.easeInOut'
        });
        bannerTimeLine.from('#bannerBtn',{
            opacity:0,skewX:-20,duration:0.6, ease:'Power2.easeInOut'
        });
        //footer
        footerTimeLine = gsap.timeline();
        footerTimeLine.from('.leftFooter',{
            opacity:0,duration:0.4,y:'-20%',ease:'sine'
        });
        footerTimeLine.from(".RightFooter",{
            duration:0.4,opacity:0,y:'-30%',ease:'none'
        });
    };
});