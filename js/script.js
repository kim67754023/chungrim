$(document).ready(function(){
    $(".author").css("z-index","10").find("ul").show();
    $(".media,.notice").css("z-index","0").find("ul").hide();
    // 메뉴
    $(".main_menu li").find(".sub").hide();
    $(".bg").hide();
    $(".main_menu > li > a").mouseenter(function(){
        $(this).css({
            "backgroundColor":"#2d92e0",
            "color":"#fff"
        });
        $(this).next(".sub").stop().slideDown(400)
                .find('a').css('color','#eee');
        
        $(this).parent('li').has('.sub')
            .find('.bg').stop().slideDown(300)
                
    });
    //반응형 메뉴
    $(".main_btn").click(function(){
        $("nav>ul").stop().slideToggle(800);
    });
    $("nav>ul>li>a").on('click',function(e){
        e.preventDefault()});
    $("nav>ul>li>a").on('click',function(){
        $(this).hasClass('on').next(".sub").slideDown(500).siblings(".bg").hide();
        $(this).parent("li").siblings("a").removeClass('on').siblings(".bg").hide();
        });
    $(".main_menu > li").mouseleave(function(){
        $(".main_menu > li > a").css({
            backgroundColor: 'white',
            color: '#222'
        });
        $(".main_menu li").find(".sub").slideUp(1);
        $(".bg").slideUp(1)
    });

    $(".sub li a").hover(function(){
        $(this).css("color","white")
    },function(){
        $(this).css("color","#bee2fd")
    });
    //topmenu hover효과
    $(".topmenu li a").mouseenter(function(){
        $(this).children("img:first-child").css({'display':"block","z-index":"10"})
    });
    $(".topmenu li a").mouseleave(function(){
        $(this).children("img:first-child").css({'display':"none","z-index":"0"})
    });
    //슬라이드
    $('.slider').bxSlider({
        speed : 1000,
        slideMargin : 2,
        auto : true,
        // pause : 3000,
        autoHover : true,
        controls : true,
        pager : true 
    });
    //베스트셀러 슬라이드
    $('.best').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    //신간도서 슬라이드
    $('.new').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:4
            },
            1000:{
                items:6
            }
        }
    });
    $('.au').owlCarousel({
        loop:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('.me').owlCarousel({
        loop:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('.no').owlCarousel({
        loop:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    //청림 소식들 탭메뉴 효과
  

    $(".btn1").click(function(){
        $(this).next("ul").fadeIn(300).css("z-index","10")
            .parent('div').siblings('div').children('ul').fadeOut(300).css("z-index","");
        $(this).addClass("on")
            .parent('div').siblings('div').children('.btn1').removeClass('on');
        $(this).parent("div").css("z-index","10")
            .siblings("div").css("z-index","");

    });


  });