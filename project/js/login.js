$("#npwd").click(function(){
	$(this).css("color","#000").find("span").css("display","block");
	$("#dl").css("color","#ccc").find("span").css("display","none");
	$("#plogin").css("display","none");
	$("#plogin2").css("display","block").find("span").css({"background":getColor(),"color":getColor()}).html(yzm());
	$(".fpwd").css("bottom","168px");
	$(".register").css("bottom","168px");
	$("#btn").css("bottom","114px");
})
$("#dl").click(function(){
	$(this).css("color","#000").find("span").css("display","block");
	$("#npwd").css("color","#ccc").find("span").css("display","none");
	$("#plogin").css("display","block");
	$("#plogin2").css("display","none");
	$("#plogin_3").css("display","block").find("span").css({"background":getColor(),"color":getColor()}).html(yzm());
})
$("#ewm").mouseenter(function(){
	$(this).css("background","url(../img/ewm.jpg)");
}).mouseleave(function(){
	$(this).css("background","url(../img/ewm2.jpg)");
})
$("#change1").click(function(){
	$("#plogin_3").find("span").css({"background":getColor(),"color":getColor()}).html(yzm());
})
$("#change2").click(function(){
	$("#plogin2").find("span").css({"background":getColor(),"color":getColor()}).html(yzm());
})
var flagTel = null;
$("#uname").blur(function(){
	var reguname = /^[a-z_]\w{5,11}$/i;
	var reguname2 = /^1[538]\d{9}$/;
	var userTel = $("#uname").val();
	console.log($("#uname").val());
	if (userTel=="") {
		$(".lab").css("display","block");
		return;
	}
	if (reguname.test(userTel)||reguname2.test(userTel)) {
		flagTel = true;
		$(".lab").css("display","none");
		$("#plogin_1_img2").css("display","block");
		$(".fpwd").css("bottom","168px");
		$(".register").css("bottom","168px");
		$("#btn").css("bottom","114px");
		$("#plogin_3").css("display","block").find("span").css({"background":getColor(),"color":getColor()}).html(yzm());
	}else{
		$(".lab").css("display","block").find("i").html("手机号/邮箱/会员卡号错误，请重新输入");
		$("#plogin_1_img2").css("display","none");
		flagTel = false;
	}
})
var flagpwd = null;
$("#upwd").blur(function(){
	if ($("#upwd").val()!="") {
		flagpwd = true;
		$(".lab_1").css("display","none");
		$("#plogin_2_img2").css("display","block");
	}else{
		$(".lab_1").css("display","block");
		$("#plogin_2_img2").css("display","none");
		flagpwd = false;
	}
})
var flagYzm = null;
$("#Yzm").blur(function(){
	var Yzm = $("#plogin_3").find("span").html();
	var userYzm = $("#Yzm").val();
	console.log(userYzm,Yzm)
	if (userYzm==Yzm) {
		flagYzm = true;
		$(".lab_2").css("display","none");
	}else{
		$(".lab_2").css("display","block");
		flagYzm = false;
	}
})
$("#btn").click(function(){
	if (flagYzm&&flagpwd&&flagTel) {
		var ajax = new XMLHttpRequest();
		ajax.open("get","../php/login_register.php?"+`status=login&uname=${$("#uname").val()}&upwd=${$("#upwd").val()}`);
		console.log($("#uname").val(),$("#upwd").val())
		ajax.send();
		ajax.onreadystatechange = function(){
			if (ajax.status==200&&ajax.readyState==4) {
				var res = ajax.responseText;
				if (res==1) {
					alert("登录成功");
				}else if (res==2) {
					alert("密码错误");
				}else if (res==0) {
					alert("用户名不存在");
				}
			}
		}
	}
})