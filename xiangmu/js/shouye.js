$("#zhuce1").click(function(){
		location.href = "zc.html"
		
		
	})
	$("#top1 div").eq(0).css("margin-left","7px");
	$("#top1 div").eq(1).css("margin-left","25px");
	$("#top1>a").eq(0).css("margin-left","65px");
	$("#top1>a").eq(1).css("margin-left","25px");
	$("#top1>a").eq(2).css("margin-left","580px");
	$("#top1>a").eq(4).css("margin-left","25px");
	$("#top1>a").eq(5).css("margin-left","25px");
	
	$("#nav1>ul>li").mouseover(function(){
		$(this).css("background-color","rgba(146,160,160,0.2)")
		$(this).mouseout(function(){
			$(this).css("background-color","#fc5600")
		})
	});
	$("#nav1>ul>li").css("float","left");
	
	$("#navcate ul").css("float","left");
	
	
	$(".nav-sp").css({"height":"2px","border-bottom":"1px solid #eaeaea",
						"margin":"0 36px","padding":"32px 0 12px"})
	
	$(".nav-sp2").css({"padding":"18px 0 0","margin":"234px 36px 0","border-top":"1px solid #eaeaea",});
	$(".navc").find('a').css("color","#FC5600");
	$(".navc").find('a').mouseover(function(){
		$(this).css("color","red");
		$(this).mouseout(function(){
			$(this).css("color","#FC5600")
		})
	})
	$(".listall").mouseover(function(){
		$("#navcate").css("display","block");
		
	})
	$("#navcate").mouseover(function(){
		$("#navcate").css("display","block");
		$(this).mouseout(function(){
			$("#navcate").css("display","none")
			
		})
	})
	
	$("#navcate ul").css({"margin-top":"10px","width":"192px"});
	
//	轮播图
	timer = setInterval(autoPlay,2000);
	var i = 0;
	$("#lbt ol li").eq(0).addClass("lbtol");
	function autoPlay(){
		i++;
		if(i==5){
			i=0;
		} 
		$(".ol-a li").eq(i).stop().css("background-color",'#fc5600').siblings().css('background','#e0e0e0');
		
		$("#lbt ul li").eq(i).fadeIn(1000).siblings().fadeOut(1000);
	}
	


	$(".ol-a li").mouseenter(function(){
		clearInterval(timer);
		$(this).css("background-color",'#fc5600').siblings().css('background','#e0e0e0');
		$("#lbt ul li").eq($(this).index()).fadeIn(1000).siblings().fadeOut();	

	}).mouseout(function(){
		timer = setInterval(autoPlay,2000);
	})
	$(".backtop").click(function(){
		$("body,html").animate({'scrollTop':0},500);
		
	})
	
	$("#jianshang").click(function(){
		$("body,html").animate({'scrollTop':0},500);
	})
	
	
	$(window).scroll(function(){
		var scro = $("body,html").scrollTop();
		
		for(var i =0;i<$(".loutix").size();i++){
			var m = Math.abs( $(".louti").eq(i).offset().top - scro );
			var n = $(".louti").eq(i).height()/2;
			if(m<n){
				$("#loutix li").eq(i).addClass('heilight').siblings().removeClass("heilight");
			}
			
		}
		if(scro<800){
			$(".floatnav").css("display","none");
			$(".backtop").css("display","none");
		}else{
			$(".floatnav").css("display","block");
			$(".backtop").css("display","block");
			
		}
	})
	
	$("#loutix li").click(function(){
		var $index = $(this).index();
			switch($index){
					case 0:$("body,html").animate({"scrollTop":800},1000)
								break;
					case 1:$("body,html").animate({"scrollTop":2200},1000)
								break;			
					case 2:$("body,html").animate({"scrollTop":4300},1000)
								break;			
					case 3:$("body,html").animate({"scrollTop":5800},1000)
								break;			
					case 4:$("body,html").animate({"scrollTop":7000},1000)
								break;			
					case 5:$("body,html").animate({"scrollTop":8200},1000)
								break;			
					case 6:$("body,html").animate({"scrollTop":9400},1000)
								break;			
					case 7:$("body,html").animate({"scrollTop":10600},1000)
								break;			
					
				}
		
//		$(this).css("color","#FC5600").siblings().css('color','#333');	
		$(this).addClass('heilight').siblings().removeClass('heilight');
	})
	
$(".area>ul>li").mouseenter(function(){
//	$(this).animate({"border":"1px solid red"},500)
//	$(this).css("border","1px solid red")
	$(this).find("span").eq(0).stop().animate({"width":"700px","height":"5px"},500)
	$(this).find("span").eq(1).stop().animate({"width":"700px","height":"5px","left":0},500)
	$(this).find("span").eq(2).stop().animate({"width":"5px","height":"363px"},500)
	$(this).find("span").eq(3).stop().animate({"width":"5px","height":"363px","top":0},500)
	
})
$(".area>ul>li").mouseleave(function(){
//	$(this).animate({"border":"1px solid red"},500)
//	$(this).css("border","1px solid red")
	$(this).find("span").eq(0).stop().animate({"width":0,"height":0},500)
	$(this).find("span").eq(1).stop().animate({"width":0,"height":0,"left":"280px"},500)
	$(this).find("span").eq(2).stop().animate({"width":0,"height":0},500)
	$(this).find("span").eq(3).stop().animate({"width":0,"height":0,"top":"362px"},500)
	
})