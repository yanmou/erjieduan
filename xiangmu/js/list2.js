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
	
	
	
	$("#nav1>ul>li").mouseover(function(){
		$(this).css("background-color","rgba(146,160,160,0.2)")
		$(this).mouseout(function(){
			$(this).css("background-color","#fc5600")
		})
	});	
	
	$(".listall").mouseover(function(){
		$("#navcate").css("display","block");
		
	})
	$("#navcate").mouseover(function(){
		$("#navcate").css("display","block");
		$(this).mouseout(function(){
			$("#navcate").css("display","none")
			
		})
	})
		$(".navc").find('a').css("color","#FC5600");
	$(".navc").find('a').mouseover(function(){
		$(this).css("color","red");
		$(this).mouseout(function(){
			$(this).css("color","#FC5600")
		})
	})
	$(".backtop").click(function(){
		$("body,html").animate({'scrollTop':0},500);
		
	})
	$(window).scroll(function(){
		var scro = $("body,html").scrollTop();
		
		if(scro<800){
			$(".backtop").css("display","none");
		}else{
			$(".backtop").css("display","block");
			
		}
	})
	//封装好的 上面函数
	
	
	
	
	
	$.ajax({
		type:"get",
		url:"data.json",
		success :function(json){
			
			var html = "";
			
			for(var i =0;i<json.length;i++){
				html +=` 
						<li>
							<a href ="page.html?pid=${json[i].id}">
								<img src = "img/${json[i].src}"/>
								<p>${json[i].price}</p>
								<p class="grayz">${json[i].name}</p>
								<p class="tejia">特价</p>
							</a>
						</li>`
				
				
			}
			$(".shoplist").html(html);
		}
	})
	
	$(".select li:not(:has(ul) )").css("list-style","none");
	
	$(".select li:has(ul)").click(function(e){
		e.stopPropagation();
		if($(this).children("ul").is(":hidden")){
			$(this).css("list-style-image","url(img/-.gif)");
		}else{
			$(this).css("list-style-image","url(img/1.gif)")
		}
		$(this).children("ul").stop().toggle(1000);
	})