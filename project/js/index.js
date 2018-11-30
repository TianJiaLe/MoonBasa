$("#list").find(".list_a3").mouseenter(function(){
	$(".dy").css("display" ,"block");
}).mouseleave(function(){
	$(".dy").css("display" ,"none");
})
$("#list").find(".list_a4").mouseenter(function(){
	$(".wb_ewm").css("display" ,"block");
}).mouseleave(function(){
	$(".wb_ewm").css("display" ,"none");
})
$("#list").find(".list_a5").mouseenter(function(){
	$(".sj_ewm").css("display" ,"block");
}).mouseleave(function(){
	$(".sj_ewm").css("display" ,"none");
})
$("#nav_list").on("mouseenter","li",function(){
	$(this).find("img").css("display","none");
}).on("mouseleave","li",function(){
	$(this).find("img").css("display","block");
})

//轮播
show();
function show(){
	var timer = null,
	index = 0,
	$ulist = $("#main").find("a"),
	$olist = $("#sball").find("span");
	autoPlay();
	timer = setInterval( autoPlay , 3000);
	function autoPlay(){
		index++;
		if( index == $ulist.size() ){
			index = 0;
		}
		$ulist.eq(index).css("display","block").siblings().css("display","none");
		$olist.eq(index-1).css("background","#fff").siblings().css("background","#000");
		$("#mainwrap").css("background","url(img/"+(index+1)+".jpg) no-repeat center top");
	}
	$("#sball").on("mouseenter","span",function(){
		clearInterval( timer );
		index = $(this).index();
		autoPlay();
	}).on("mouseleave","span",function(){
		timer = setInterval( autoPlay , 3000);
	})
}