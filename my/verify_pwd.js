                                                                              //检测密码强度
    pwd_in.keyup(function(){
        var bg = $('.bg');
        var val = pwd_in.val();
        var reg_check1 =/^[A-Za-z]+$/;        //全字母
        var reg_check2 =/(?=.*[A-Z])/;        //存在大写字母
        var reg_check3 =/^\d+$/;              //全数字
        var reg_check4 =/(?=.*[a-zA-Z])(?=.*\d)(?=.*[#@!~%^&*/])[a-zA-Z\d#@!~%^&*/]{8,16}/;  //字符、数字、大写、小写组合
        var reg_check5 =/(?=.*[0-9])/;        //存在数字
        var reg_check6 =/(?=.*?[a-z])(?=.*?[0-9])[a-z\d]{7,}$/i;
        var reg_check7 =/(?=.*[a-z])/;        //存在小写字母
        var p1 = reg_check3.test(val);
        var p2 = reg_check1.test(val);
        var p3 = reg_check2.test(val);
        var p4 = reg_check4.test(val);
        var p5 = reg_check5.test(val);
        var p6 = val.length>9;
        var p7 = val.length>5;
        var p8 = val.length<6;
        var p9 = reg_check6.test(val);
        var p10 = reg_check7.test(val);
		//控制前端的bg图片的定位改变显示数据 
        if(p7){$('.show-pwd').css({'display':'block'})}                    
        if(p8){$('.show-pwd').css({'display':'none'})}
        if(p6){bg.css({'backgroundPositionY':"-13px"})}
        if(p5&&p10){bg.css({'backgroundPositionY':"-13px"})}
        if(p4){bg.css({'backgroundPositionY':"-26px"})}
        if(p1){bg.css({'backgroundPositionY':"0"})}
        if(p2){bg.css({'backgroundPositionY':"0"})}
        if(p1&&p6){bg.css({'backgroundPositionY':"0"})}
        if(p9&&p3&&p10){bg.css({'backgroundPositionY':"-26px"})
			}