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

$("#menu_ware_ul").on("mouseenter","li",function(){
	$(this).find("div").eq(1).css("display","block");
}).on("mouseleave","li",function(){
	$(this).find("div").eq(1).css("display","none");
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
showtime();

function showtime(){
	$.ajax({
		type:"get",
		url:"json/shop.json",
		async:true,
		success : function(msg){
			getData(msg);
			for (var i = 0; i < $("#banner li").size(); i++) {
				if (i%4==3) {
					$("#banner li").eq(i).css("margin-right","0");
				}
			}
		}
	})
	function getData(msg){
		var str = '';
		for( var i = 0 ; i < msg.length ; i++  ){
				str += `<li class="banner_list">
						<a href="#">
							<img src="img/${msg[i].src}" alt="">
						</a>
						<p class="banner_p">${msg[i].p1}</p>
						<p class="banner_p2">${msg[i].p2}</p>
						<p class="banner_p3">${msg[i].price}</p>
						<div class="banner_btn"><a href="#" class="nBtn" >立即购买</a></div>
					</li>`;
		}
		$("#banner").html( str );
	}
}

pph();
function pph(){
	$.ajax({
		type:"get",
		url:"json/pph.json",
		async:true,
		success : function(msg){
			getData(msg);
			for (var i = 0; i < $("#pul li").size(); i++) {
				if (i%2==1) {
					$("#pul li").eq(i).css("margin-right","0");
				}
			}
		}
	})
	function getData(msg){
		var str = '';
		for( var i = 0 ; i < msg.length ; i++  ){
				str += `<li class="pul_list">
					<a href="#"><img src="img/${msg[i].src}" alt=""></a>
					<p class="pul_list_p1">${msg[i].p1}</p>
					<p class="pul_list_p2">${msg[i].p2}</p>
					<div class="pul_list_btn"><a class="pul_list_Btn" href="#">进入专场 ></a></div>
				</li>`;
		}
		$("#pul").html( str );
	}
}


pul2();
function pul2(){
	$.ajax({
		type:"get",
		url:"json/pul2.json",
		async:true,
		success : function(msg){
			getData(msg);
			for (var i = 0; i < $("#pul2 li").size(); i++) {
				if (i%4==3) {
					$("#pul2 li").eq(i).css("margin-right","0");
				}
			}
		}
	})
	function getData(msg){
		var str = '';
		for( var i = 0 ; i < msg.length ; i++  ){
				str += `<li class="pul2_list">
					<a href="#"><img src="img/${msg[i].src}" alt=""></a>
					<p class="pul2_p1">${msg[i].p1}</p>
					<p class="pul2_p2">${msg[i].p2}</p>
					<a class="pul2_a" href="#">进入专场></a>
				</li>`;
		}
		$("#pul2").html( str );
	}
}

Lbt();
function Lbt(){
	var index = 0;
	$(".fxcl_2_l").click(function(){
		index++;
		console.log($(".fxcl_2_box_ul li").size())
		if (index==7) {
			$(".fxcl_2_box_ul").css("left",0);
			index=1;

		}
		$(".fxcl_2_box_ul").stop().animate({"left":(-index*(400))},400);
	})
	$(".fxcl_2_r").click(function(){
		index--;
		console.log($(".fxcl_2_box_ul li").size())
		if (index==-1) {
			$(".fxcl_2_box_ul").css("left",-2400);
			index=5;

		}
		$(".fxcl_2_box_ul").stop().animate({"left":(-index*(400))},400);
	})
}

mzsx();
function mzsx(){
	var index = 0;
	var timer = null;
	timer = setInterval(autoplay,3000);
	function autoplay(){
		index++;
		if (index>5) {
			index=0;
		}
		$(".mzsx_box_ul").css({"left":-index*1200,"display":"block"});
	}
	function showplay(){
		index--;
		if (index<0) {
			index=5;
		}
		$(".mzsx_box_ul").css({"left":-index*1200,"display":"block"});
	}
	$(".mzsx_box_l").mouseenter(function(){
		clearInterval(timer);
		$(".mzsx_box_l").stop().animate({"opacity":1},500);
	}).mouseleave(function(){
		timer = setInterval(autoplay,3000);
		$(".mzsx_box_l").stop().animate({"opacity":0.2},500);
	}).click(function(){
		autoplay();
	})
	$(".mzsx_box_r").mouseenter(function(){
		clearInterval(timer);
		$(".mzsx_box_r").stop().animate({"opacity":1},500);
	}).mouseleave(function(){
		timer = setInterval(showplay,3000);
		$(".mzsx_box_r").stop().animate({"opacity":0.2},500);
	}).click(function(){
		showplay();
	})
}

like();
function like(){
	$.ajax({
		type:"get",
		url:"json/youlike.json",
		async:true,
		success : function(msg){
			getData(msg);
			for (var i = 0; i < $("#youlike_list li").size(); i++) {
				if (i%4==3) {
					$("#youlike_list li").eq(i).css("margin-right","0");
				}
			}
		}
	})
	function getData(msg){
		var str = '';
		for( var i = 0 ; i < msg.length ; i++  ){
				str += `<li class="youlike_list_li">
				<a href="#"><img src="img/${msg[i].src}" alt=""></a>
				<span class="youlike_p1"><a href="#">${msg[i].p1}</a></span>
				<p class="youlike_p2">${msg[i].nprice}<i class="youlike_i">${msg[i].bprice}</i></p>
			</li>`;
		}
		$("#youlike_list").html( str );
	}

	//猜你喜欢p1
	$("#youlike_list").on("mouseenter","li",function(){
		$(this).find(".youlike_p1").css({"white-space": "normal","margin":"9px 0 0 12px"});
	}).on("mouseleave","li",function(){
		$(this).find(".youlike_p1").css({"white-space": "nowrap","margin":"18px 0 0 12px"});
	})
}

new more().init();
function more(){
	this.body=$(".more_activity");
	this.str="";
	this.init=function(){
		$.ajax({
			type:"get",
			url:"json/more.json",
			async:true,
			success : function(msg){
				this.getData(msg);
				for (var i = 0; i < $(".more_activity li").size(); i++) {
					if (i%3==2) {
						$(".more_activity li").eq(i).css("margin","0 0 21px 0");
					}
				}
			}.bind(this)
		})
		return this;
	}
	this.getData=function(msg){
		for( var i = 0 ; i <msg.length; i++  ){
			console.log(msg.length);
				this.str += `<li class="more_activity_li">
					<a class="more_activity_li_img" href="#"><img src="img/${msg[i].src}" alt=""></a>
					<p class="more_activity_li_p"><a class="more_a" href="#">${msg[i].p1}</a></p>
				</li>`;
		}
		this.body.html( this.str );
	}
}





//侧边栏
rigthbar();
function rigthbar(){
	$(".rightbar_span").mouseenter(function(){
		$(this).css("background","url(img/right_user2.jpg)")
		$(".rightbar_span_1").css("display","block")
	}).mouseleave(function(){
		$(this).css("background","url(img/right_user.jpg)")
		$(".rightbar_span_1").css("display","none")
	})

	$(".right_dl_a").mouseenter(function(){
		$(this).css({"background":"#c10055","color":"#fff"})
	}).mouseleave(function(){
		$(this).css({"background":"","color":"#c10055"})
	})
	$(".right_dl_a1").mouseenter(function(){
		$(this).css({"background":"#c10055","color":"#fff"})
	}).mouseleave(function(){
		$(this).css({"background":"","color":"#c10055"})
	})

	$(".rightbar_div").mouseenter(function(){
		$(this).css("background","url(img/right_car2.jpg)")
		$(".rightbar_show").css({"display":"block","height":$(window).height()})
	}).mouseleave(function(){
		$(this).css("background","url(img/right_car.jpg)")
		$(".rightbar_show").css("display","none")
	})
	$(".rightbar_heart").mouseenter(function(){
		$(this).css("background","url(img/right_heart2.jpg)")
	}).mouseleave(function(){
		$(this).css("background","url(img/right_heart.jpg)")
	})
	$(".rightbar_wx").mouseenter(function(){
		$(this).css("background","url(img/right_wx2.jpg)")
		$(".rightbar_wxewm").css("display","block")
	}).mouseleave(function(){
		$(this).css("background","url(img/right_wx.jpg)")
		$(".rightbar_wxewm").css("display","none")
	})
	$(".rightbar_kf").mouseenter(function(){
		$(this).css("background","url(img/right_kf2.jpg)")
	}).mouseleave(function(){
		$(this).css("background","url(img/right_kf.jpg)")
	})
	$(".rightbar_top").mouseenter(function(){
		$(this).css("background","url(img/right_top2.jpg)")
	}).mouseleave(function(){
		$(this).css("background","url(img/right_top.jpg)")
	}).click(function(){
		$("html,body").animate({scrollTop:0},500)
	})
}