window.onload = function(){
		var str = location.href;
		var arr = str.split("?")[1];
		var pid = arr.split("=")[1];
		
		
		$.ajax({
			type:"get",
			url:"data.json",
			success:function(json){
				var html="";
				for(var i =0;i<json.length;i++){
					if(pid==json[i].id){
						html = `<img src="img/${json[i].src}"/>
								<p>${json[i].price}</p>
								<p>${json[i].name}</p>
								`;
						$(".shopinfo").html(html);		
					}
				}
			}
		})
		
	}
	
	
	
	
	
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
	
	
	
	
	
	
	$(".bottom li").mouseenter(function(){
		var index = $(this).index();
		$(".small img").eq(index).show().siblings().hide();
		$(".big img").eq(index).show().siblings().hide();
	})
	
	$(".small").mouseenter(function(){
		$(".big").show();
		$("#mask").show();
	}).mouseleave(function(){
			$(".big").hide();
			$("#mask").hide();
	})

	
	$(".small").mousemove(function(e){
		var e = e||event;
		var x = e.pageX - $("#mask").width()/2 - $(".small").offset().left;
		var y = e.pageY - $("#mask").height()/2 - $(".small").offset().top;
		var maxL = $(".small").width() - $("#mask").width();
		var maxT = $(".small").height() - $("#mask").height();
		x = Math.min(maxL,Math.max(0,x));
		y = Math.min( maxT,Math.max(0,y) );
		
		$("#mask").css({
			"left":x,
			"top":y
		})
		
		var bigImgx = x *$("#nn").width()/$("#mm").width();
		var bigImgy = y *$("#nn").height()/$("#mm").height();
		$(".big img").css({
			"left":-bigImgx,
			"top" :-bigImgy
		})

	})
	$("#jia").click(function(){
		var index = $("#input").val();
		index++;
		$("#input").val(index)
	})
	$("#jian").click(function(){
		var index = $("#input").val();
		index--;
		if(index<2){
			index = 1;
		}
		$("#input").val(index)
	})