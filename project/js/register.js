$("#oDiv2_ipt").find("span").css({"background":getColor(),"color":getColor()}).html(yzm());
$("#change").click(function(){
	$("#oDiv2_ipt").find("span").css({"background":getColor(),"color":getColor()}).html(yzm());
})

var flagname=null;
$(".ipt").blur(function(){
	if ($(".ipt").val()=="") {
		$(".lab").css("visibility","visible");
	}else{
		var reguname2 = /^1[538]\d{9}$/;
		var regEmail = /^\w+@\w+(\.\w+)+$/;
		if (reguname2.test($(".ipt").val())||regEmail.test($(".ipt").val())) {
			flagname=true;
			$(".lab").css("visibility","hidden");
		}else{
			flagname=false;
			$("#oDiv_ipt").find(".lab").css("visibility","visible").end().find("i").html("你输入的手机号或邮箱不符合规范！");
		}
	}
})

var flagYzm=null;
$(".ipt_1").blur(function(){
	if ($(".ipt_1").val()=="") {
		$(".lab_1").css("visibility","visible");
	}else{
		if ($(".ipt_1").val()==$("#oDiv2_ipt span").html()) {
			flagYzm=true;
			$(".lab_1").css("visibility","hidden");
		}else{
			$("#oDiv2_ipt_1").find(".lab_1").css("visibility","visible").end().find("i").html("请输入正确的验证码");
			flagYzm=false;
		}
	}
	
})

var flagpwd=null;
$(".ipt_3").blur(function(){
	if ($(".ipt_3").val()=="") {
		$(".lab_3").css("visibility","visible");
	}else{
		var regpwd=/^([0-9]|[a-z]){8,20}$/i;
		if (regpwd.test($(".ipt_3").val())) {
			flagpwd=true;
			$(".lab_3").css("visibility","hidden");
		}else{
			flagpwd=false;
			$("#oDiv4_ipt").find(".lab_3").css("visibility","visible").end().find("i").html("密码请设为8-20位字母和数字！");
			
		}
		console.log(flagYzm);
	}
	
})


var flagqpwd=null;
$(".ipt_4").blur(function(){
	if ($(".ipt_4").val()=="") {
		$("#oDiv5_ipt").find(".lab_4").css("visibility","visible").end().find("i").html("请再次输入密码！！");
	}else{
		if ($(".ipt_4").val()==$(".ipt_3").val()) {
			flagqpwd=true;
			$(".lab_4").css("visibility","hidden");
		}else{
			flagqpwd=false;
			$("#oDiv5_ipt").find(".lab_4").css("visibility","visible").end().find("i").html("两次密码输入不一致！");
		}
	}
})



$("#Btn").click(function(){
	console.log(flagqpwd,flagpwd,flagYzm,flagname);
	if (flagqpwd&&flagpwd&&flagYzm&&flagname) {
		var ajax = new XMLHttpRequest();
		ajax.open("get","../php/login_register.php?"+`status=register&uname=${$(".ipt").val()}&upwd=${$(".ipt_3").val()}`);
		ajax.send();
		ajax.onreadystatechange = function(){
			if (ajax.status==200&&ajax.readyState==4) {
				var res = ajax.responseText;
				if (res==0) {
					alert("该用户已被注册");
				}else if (res==1) {
					alert("注册成功");
					location.href="../index.html";
				}else if (res==2) {
					alert("注册失败");
				}
			}
		};
	}
})

