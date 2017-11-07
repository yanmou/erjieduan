	var verifyCode = new GVerify("yanzheng");
	document.getElementById("yzm").onblur=function(){
		var res = verifyCode.validate(document.getElementById("yzm").value);
		if(res){
			document.getElementById("duigou").style.display = "block";
			document.getElementById("erroyzm").style.display = "none";
			
		}else{
			document.getElementById("erroyzm").style.display = "block";
			document.getElementById("duigou").style.display = "none";
			
		}
		
	}
	
//	$("#uname").focus(function(){
//		$(this).css({"border":"1px solid #ff9900"});
//	})
//	
//	$("#uname").blur(function(){
//		$("#zhanghao").css("display","none")
//	})
	$("#uname").blur(function(){
		userflag = checkTel( $("#uname").val() );
//		$("#zhanghao").css("display","block")
		$(this).parent().find(".tishiyu").css("display","block");
		if(!userflag){
			$("#zhanghao b").css({"display":"block","color":"red"});
			$("#zhanghao img").css("display","none");
		}else{
			$("#zhanghao b").css({"display":"none","color":"red"});
			$("#zhanghao img").css("display","block");
		}
	})
	
	
	$("#pswd").blur(function(){
		$(this).parent().find(".tishiyu").css("display","block");
//		$("#mima").css("display","block")
		pwdflag = checkPwd( $("#pswd").val() );
		if(!pwdflag){
			$(this).parent().find("b").css({"display":"block","color":"red"});
			$(this).parent().find("img").css("display","none");
		}else{
			$(this).parent().find("b").css({"display":"none","color":"red"});
			$(this).parent().find("img").css("display","block");
		}
	})
	
	
	$("#pswd2").blur(function(){
		$(this).parent().find(".tishiyu").css("display","block");
		pwd2flag = qpwd($("#pswd").val(),$("#pswd2").val());
		if(pwd2flag==2){
			$(this).parent().find("b").css({"display":"none","color":"red"});
			$(this).parent().find("img").css("display","block");
	
		}else{
			if(pwd2flag==1){
				$(this).parent().find("img").css("display","none");
				$(this).parent().find("b").css({"display":"block","color":"red"});
				$(this).parent().find("b").html("重复密码不能为空");
			}else{
				$(this).parent().find("b").css({"display":"block","color":"red"});
				$(this).parent().find("img").css("display","none");
				$(this).parent().find("b").html("2次密码不一致");
				
			}

		}
	})
	
	
	
	$("#photo").blur(function(){
		$(this).parent().find(".tishiyu").css("display","block");
		photoflag = checkTel2($("#photo").val());
		if(!photoflag){
			$(this).parent().find("b").css({"display":"block","color":"red"});
			$(this).parent().find("img").css("display","none");
		
		}else{
			$(this).parent().find("b").css({"display":"none","color":"red"});
			$(this).parent().find("img").css("display","block");
		
		}
	})
	
	
	
	var arr=[];
	$("#login").click(function(){
		if(userflag&&pwdflag){
			var _json = {
				"ptel":$("#uname").val(),
				"pwd":$("#pswd").val()
			}
			arr.push(_json);
			setCookie("userInfo",JSON.stringify(arr));
//			$("#uname").val("");
//			$("#pswd").val("");
//			$("#pswd2").val("");
			
			location.href = "login.html";
			
		}
		
		
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function checkTel2(str){
	var reg = /^(13|15|18)\d{9}$/;
	if( reg.test(str)){
		return true;
	}else{
		return false;
	}
}
	
	
	
	
	
	function checkTel(str){
	var reg = /^(13|15|18)\d{9}$/;
	var red = /^\w{6,10}@(163|126|qq)\.com$/;
	if( reg.test(str) ||red.test(str) ){
		return true;
	}else{
		return false;
	}
}

function checkPwd(str){
	var regNum = /^\d+$/;
  	var regLetter = /^[a-z]+$/i;
  	var regOther = /^[!@#$%^&*()]+$/;
  	var _regNum = /\d+/;
  	var _regLetter = /[a-z]+/i;
  	var _regOther = /[!@#$%^&*()]+/;
	if(str.length > 5 && str.length < 21){
			return 1;
	}else{
		return false;
	}
}
function qpwd(str1,str2){
	if(str2==""){
		return 1;
	}else{
		if(str1 == str2){
			return 2;
		}else{
			return false;
		}
	} 
}
	
	