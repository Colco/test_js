/*
name：nav-follow,back-to-top
version:1.0
time:2015/8/25
edit:Cola
 */
$(document).ready(function(){                        //鼠标跟随效果
    var line = $('#data-nav-line');
    var left = line.css("left");                     //记录原来的位置
    con = 200;
    $(".nav").hover(function(){                      //监听div,移除这个div后回到原来的地方
        navFollow();
    },function(){
        line.animate({left:left},con);
    });
    $(function(){
                                                     //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
        $(function () {
            $(window).scroll(function(){
                if ($(window).scrollTop()>200){
                    $(".back-top").fadeIn(1000);
                }
                else
                {
                    $(".back-top").fadeOut(1000);
                }
            });
                                                     //当点击跳转链接后，回到页面顶部位置
            $(".back-top").click(function(){
                $('body,html').stop().animate({scrollTop:0},1000);
            });
        });
    });

});
function navFollow(){
    $(".navbar").find('li').mouseenter(function(){    //每个li添加鼠标划过事件
        con = 200;                                    //动画执行速度
        var index = $(this).index();                  //按照索引来进行判断
        var line = $('#data-nav-line');
        if(index == 0){
            line.stop().animate({left:'50px'},con);
        }else if(index == 1){
            line.stop().animate({left:'300px'},con);
        }else if(index == 2){
            line.stop().animate({left:'565px'},con);
        }else if(index == 3){
            line.stop().animate({left:'830px'},con)
        }
    });
}