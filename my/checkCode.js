 $('#senMobileCode').click(function(){
        var phone_obj = $('input[name="reg-phone"]');
        var send_obj = $('#mobileButton');
        var val = phone_obj.val();
        if(val) {
            if (reg_phone.test(val)) {
                send_obj.attr('disabled', "disabled");
                send_obj.css({'color':'#cccccc','cursor':'not-allowed'});
                                                                                   //60秒后重新启动发送按钮
                start_sms_button(send_obj);
                $.ajax({
                    url: 'url:sendSms',
                    data: {'mobile': val},
                    dataType: 'json',
                    type: 'post',
                    success: function (data) {
                        code_val = data.msg;
                        code_val = 123;
                        c_blur(reg_mobileCode,mobileCode_error,"输入正确短信验证码",code_val);
                    },
                    error:function (){     //测试用的假数据
                        console.log("Data: " + data + "\nStatus: " + status);
                        code_val = 1234;
                        console.log(code_val);
                        c_blur(reg_mobileCode,mobileCode_error,"输入正确短信验证码",code_val);
                    }
                });
            }
        }
    });
function start_sms_button(obj){                                                //60秒后重新点取验证码
    var count = 1 ;
    var sum = 30;
    var i = setInterval(function(){
        if(count == sum){
            obj.attr('disabled',false);
            obj.html('重新获取');
            clearInterval(i);
            obj.css({'color':'#845134','cursor':'pointer'});
        }else{
            obj.html('重新获取'+'('+parseInt(sum - count)+')');
        }
        count++;
    },1000);
}
