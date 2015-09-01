/*
 name:check
 version:1.0
 time:2015/8/25
 edit:Cola
 */
$(document).ready(function(){
    $('.btn-submit').click(function(){
        submit()
    })
});
function submit(){              //check form
    var reg_pd = /^[A-Za-z0-9_-]+$/;
    var mark = $('.title');
    if($('input[name="username"]').val() !=''&&$('input[name="password"]').val().match(reg_pd)){
        sendDemand();
    }else {
        if($('input[name="username"]').val() == ""){
            mark.html("<p>用户名不能为空</p>");
        }else if(!$('input[name="password"]').val().match(reg_pd)){
            mark.html("<p>请输入正确的密码格式</p>");
        }
        mark.css({'background-color': '#fff',    //change css
                  'border': 'red solid 2px'
        });
        $('.title p').css({'color':'red'});
    }

}
function sendDemand(){
    var username       = $('input[name="username"]').val();
    var password   = $('input[name="password"]').val();
    $.ajax({
        type:'POST',
        url:"URL",
        data:'username='+username+'&password='+password,
        dataType:'json',
        success:function(data, textStatus){
            console.log('data:'+data+'textStatus:'+textStatus)
        },
        error:function(){
            var mark = $('.title');
            mark.html("<p>你输入的用户名或者密码不正确!</p>");         //change css
            mark.css({
                'background-color': '#fff',
                'border': 'red solid 2px'
            });
            $('.title p').css({'color':'red'});
        }
    });
}