
//顶部导航
new header().init().wbewm().sjewm();
//侧边栏
new rightbar().init().inita().inita1().divshow().heart().weixin().kefu().topbtn();




//顶部导航
function header(){
    this.body=$(".list_a3");
    this.dy=$(".dy");
    this.a4=$(".list_a4");
    this.wb=$(".wb_ewm");
    this.a5=$(".list_a5");
    this.sj=$(".sj_ewm");
    this.init=function(){
        this.body.mouseenter(function(){
            this.dy.css("display" ,"block");
        }.bind(this)).mouseleave(function(){
            this.dy.css("display" ,"none");
        }.bind(this))
        return this;
    }
    this.wbewm=function(){
        this.a4.mouseenter(function(){
            this.wb.css("display" ,"block");
        }.bind(this)).mouseleave(function(){
            this.wb.css("display" ,"none");
        }.bind(this))
        return this;
    }
    this.sjewm=function(){
        this.a5.mouseenter(function(){
            this.sj.css("display" ,"block");
        }.bind(this)).mouseleave(function(){
            this.sj.css("display" ,"none");
        }.bind(this))
        return this;
    }
}


//导航
new Navlist().init();
function Navlist(){
    this.nav=$(".nav_list");
    this.init=function(){
        this.nav.on("mouseenter","li",function(){
            $(this).find("a").css({"color":"#08eff2","font-size":"18px"});
        }).on("mouseleave","li",function(){
            $(this).find("a").css({"color":"","font-size":"16px"});
        })
    }
}

//banner放大镜
new blist().init().mouse().show().move();
function blist(){
    this.body=$(".banner_ul");
    this.bleft=$(".banner_l");
    this.bright=$(".banner_r");
    this.list=$(".banner_ul");
    this.big=$(".banner_big");
    this.largeimg=$(".banner_large");
    var that = this;
    that.img=$(".banner_big");
    this.fdj=$(".fdj");
    this.large=$(".banner_large");
    that.largeimg=$(".banner_large");
    this.box=$(".bdiv");
    this.init=function(){
        this.bright.click(function(){
            this.body.stop().animate({"left":-70},500);
        }.bind(this)).mouseenter(function(){
            $(this).stop().animate({"opacity":1},500);
        }).mouseleave(function(){
            $(this).stop().animate({"opacity":0.5},500);
        })

        this.bleft.click(function(){
            this.body.stop().animate({"left":0},500);
        }.bind(this)).mouseenter(function(){
            $(this).stop().animate({"opacity":1},500);
        }).mouseleave(function(){
            $(this).stop().animate({"opacity":0.5},500);
        })
        return this;
    }
    this.mouse=function(){
        this.list.on("mouseenter","li",function(){
            $(this).css("border","1px solid #000").siblings().css("border","1px solid #fff");
            that.img.find("img").eq($(this).index()).css("display","block").siblings().css("display","none");
            that.largeimg.find("img").eq($(this).index()).css("display","block").siblings().css("display","none");
        })
        return this;
    }
    this.show=function(){
        this.box.mouseenter(function(){
            this.fdj.css("display","block");
            this.large.css("display","block");
        }.bind(this)).mouseleave(function(){
            this.fdj.css("display","none");
            this.large.css("display","none");
        }.bind(this))
        return this;
    }
    this.move=function(){
        this.box.mousemove(function(e){
            var x = e.pageX -  this.fdj.width()/2 - this.big.offset().left;
            var y = e.pageY -  this.fdj.height()/2 - this.big.offset().top;
            var maxL = this.big.width()-this.fdj.width();
            var maxT = this.big.height()-this.fdj.height();
            var x = x < 0 ? 0 : ( x > maxL ? maxL : x);
            var y = y < 0 ? 0 : ( y > maxT ? maxT : y);

            var x1 = x*(this.largeimg.find("img").eq(0).width() - this.large.width())/(this.big.width()-this.fdj.width());
            var y1 = y*(this.largeimg.find("img").eq(0).height() - this.large.height())/(this.big.height()-this.fdj.height());
            this.largeimg.find("img").css({"left":-x1,"top":-y1});
            this.fdj.css({"left":x,"top":y})
        }.bind(this))
    }
}



// new blist().init().mouse().show().move();
// function blist(){
//     this.body=$(".banner_ul");
//     this.bleft=$(".banner_l");
//     this.bright=$(".banner_r");
//     this.list=$(".banner_ul li");
//     this.big=$(".banner_big");
//     var that = this;
//     that.img=$(".banner_big img");
//     this.fdj=$(".fdj");
//     this.large=$(".banner_large");
//     that.largeimg=$(".banner_large img");
//     this.limg=$(".largeimg");
//     this.init=function(){
//         this.bright.click(function(){
//             this.body.stop().animate({"left":-70},500);
//         }.bind(this)).mouseenter(function(){
//             $(this).stop().animate({"opacity":1},500);
//         }).mouseleave(function(){
//             $(this).stop().animate({"opacity":0.5},500);
//         })

//         this.bleft.click(function(){
//             this.body.stop().animate({"left":0},500);
//         }.bind(this)).mouseenter(function(){
//             $(this).stop().animate({"opacity":1},500);
//         }).mouseleave(function(){
//             $(this).stop().animate({"opacity":0.5},500);
//         })
//         return this;
//     }
//     this.mouse=function(){
//         this.list.mouseenter(function(){
//             $(this).css("border","1px solid #000").siblings().css("border","1px solid #fff");
//             that.img.eq($(this).index()).css("display","block").siblings().css("display","none");
//             that.largeimg.eq($(this).index()).css("display","block").siblings().css("display","none");
//         })
//         return this;
//     }
//     this.show=function(){
//         this.big.mouseenter(function(){
//             this.fdj.css("display","block");
//             this.large.css("display","block");
//         }.bind(this)).mouseleave(function(){
//             this.fdj.css("display","none");
//             this.large.css("display","none");
//         }.bind(this))
//         return this;
//     }
//     this.move=function(){
//         this.big.mousemove(function(e){
//             var x = e.pageX -  this.fdj.width()/2 - this.big.offset().left;
//             var y = e.pageY -  this.fdj.height()/2 - this.big.offset().top;
//             var maxL = this.big.width()-this.fdj.width();
//             var maxT = this.big.height()-this.fdj.height();
//             var x = x < 0 ? 0 : ( x > maxL ? maxL : x);
//             var y = y < 0 ? 0 : ( y > maxT ? maxT : y);

//             var x1 = x*(this.limg.eq(0).width() - this.large.width())/(this.big.width()-this.fdj.width());
//             var y1 = y*(this.limg.eq(0).height() - this.large.height())/(this.big.height()-this.fdj.height());
//             this.limg.css({"left":-x1,"top":-y1});
//             this.fdj.css({"left":x,"top":y})
//         }.bind(this))
//     }
// }
//轮播图
new movelist().init();
function movelist(){
    this.body=$(".banner_d2_b_ul");
    this.li=$(".banner_d2_b_ul li");
    this.down=$(".banner_btn1");
    this.add=$(".banner_btn2");
    this.index=0;
    this.init=function(){
        this.down.click(function(){
            this.index--;
            if (this.index>=0) {
                this.body.stop().animate({"top":-this.index*this.li.eq(0).height()*3});
            }else{
                this.index++;
            }
        }.bind(this)).mouseenter(function(){
            $(this).stop().animate({"opacity":1});
        }).mouseleave(function(){
            $(this).stop().animate({"opacity":0.5});
        })

        this.add.click(function(){
            this.index++;
            if (this.index<=( this.body.height()-this.li.eq(0).height()*3 )/(this.li.eq(0).height()*3) ) {
                this.body.stop().animate({"top":-this.index*this.li.eq(0).height()*3});
            }else{
                this.index--;
            }
        }.bind(this)).mouseenter(function(){
            $(this).stop().animate({"opacity":1});
        }).mouseleave(function(){
            $(this).stop().animate({"opacity":0.5});
        })
    }
}

//获取信息
new picture().number().init(). getCount();
function picture(){
    this.body=location.href;
    this.mid=this.body.split("=")[1];
    this.Btn=$(".b_box2_div3_span2");
    this.add=$(".add");
    this.car=$(".rightbar_div");
    var that = this;
    this.rnum=$(".rightbar_num");
    that.num=0;
    this.number=function(){
        this.add.click(function(){
			//获取当前数量
            var count=$(this).parent().find(".bbox2d2_div_b").html();
            
			//获取当前的操作符
			var sign = $(this).html();
			//如果数量为一不能实现减法操作
			if (count==1&&sign=="-") {
				return;
			}else if(sign=="+"){
                that.num++;
                $(this).parent().find(".bbox2d2_div_b").html(parseInt(that.num));
            }else if(sign=="-"){
                that.num--
                $(this).parent().find(".bbox2d2_div_b").html(parseInt(that.num));
            }
        })
        return this;
    }
    this.init=function(){
        $.ajax({
            type:"get",
            url:"../json/shop.json",
            async:true,
            success:function(msg){
                var str="";
                var stu="";
                var stb="";
                var std="";
                var stc="";
                var stt="";
                for (var i = 0; i < msg.length; i++) {
                    if (this.mid==msg[i].src) {

                        str=`<img src="../img/${msg[i].b1}" alt="" style="z-index:6">
                        <img src="../img/${msg[i].b2}" alt="" style="z-index:5">
                        <img src="../img/${msg[i].b3}" alt="" style="z-index:4">
                        <img src="../img/${msg[i].b4}" alt="" style="z-index:3">
                        <img src="../img/${msg[i].b5}" alt="" style="z-index:2">
                        <img src="../img/${msg[i].b6}" alt="" style="z-index:1">`;


                        stu=`<li class="banner_ul_l1"><img src="../img/${msg[i].s1}" alt=""></li>
                        <li><img src="../img/${msg[i].s2}" alt=""></li>
                        <li><img src="../img/${msg[i].s3}" alt=""></li>
                        <li><img src="../img/${msg[i].s4}" alt=""></li>
                        <li><img src="../img/${msg[i].s5}" alt=""></li>
                        <li><img src="../img/${msg[i].s6}" alt=""></li>`;


                        stb=`<img class="largeimg" src="../img/${msg[i].l1}" alt="" style="z-index:6">
                        <img class="largeimg"  src="../img/${msg[i].l2}" alt="" style="z-index:5">
                        <img class="largeimg"  src="../img/${msg[i].l3}" alt="" style="z-index:4">
                        <img class="largeimg"  src="../img/${msg[i].l4}" alt="" style="z-index:3">
                        <img class="largeimg"  src="../img/${msg[i].l5}" alt="" style="z-index:2">
                        <img class="largeimg"  src="../img/${msg[i].l6}" alt="" style="z-index:1">`;

                        std=`￥<i class="br_div_span2_i">${msg[i].price1}</i>`;
                        stc=`<i class="br_span_i">￥</i>
                        <b class="br_b">${msg[i].nprice}</b>`;

                        stt=`<img class="bbox2d_ul_li_img" src="../img/${msg[i].ss}" alt="">
                        <a class="bbox2d_ul_li_a" href="#">${msg[i].p3}</a>`;
                        this.car.click(function(){
                            location.href="shopcar.html";
                        })
                        var a = i;
                        var arr =[];
                        this.Btn.click(function(){
                            $.fnInit(this.Btn,this.car).fnMove(msg[a].ss);
                            var flag = true;
                            var json = {};
                            var crr=[];
                            var brr=[];
                            var num =$(".bbox2d2_div_b").html();
                            json = {
                                "id" : msg[a].src,
                                "name": msg[a].p1,
                                "money" : msg[a].nprice,
                                "count" : num,
                            }

                            
                            // var brr = JSON.parse(localStorage.shoplist);
                           
                            
                            // var obj = JSON.parse(brr.shoplist);
                            // console.log(obj[0].id);
                            if(brr.length==0){
                                crr.push(json);
                                var brr = JSON.parse(localStorage.getItem("shoplist",JSON.stringify(crr)) );
                                
                            }
                            if(brr){
                                arr=brr;
                                for (var i = 0; i < arr.length; i++) {
                                    if(json.id==arr[i].id){
                                        arr[i].count=parseInt(num)+JSON.parse(arr[i].count);
                                        flag = false;
                                        console.log(arr[i].count);
                                        break;
                                        
                                    }

                                }
                            }
                            if (flag) {
                                arr.push(json);
                            }
                            localStorage.setItem("shoplist",JSON.stringify(arr));
                        }.bind(this))
                       
                        

                    }
                }
                $(".banner_big").html(str);
                $(".banner_ul").html(stu);
                $(".banner_large").html(stb);
                $(".br_div_span2").html(std);
                $(".br_span").html(stc);
                $(".bbox2d_ul_li").html(stt);
            }.bind(this)
            
        })
        return this;
    }
    this.getCount=function(){
        // console.log(localStorage.length);
        if(localStorage.length!=0){
            var brr=JSON.parse(localStorage.shoplist);
            var count = 0;
            if (brr.length!=0) {
                for (var i = 0; i < brr.length; i++) {
                    count+=brr[i].count;
                }
            }
            this.rnum.html(count);
        }
    }
}

//添加购物车

$.extend({
    fnInit:function(startObj,endObj){
        //起始点
        this.startPoint={
            x:startObj.offset().left+startObj.width()/2,
            y:startObj.offset().top
        }
        //结束点
        this.endPoint={
            x:endObj.offset().left+endObj.width()/2,
            y:endObj.offset().top
        }
        //最高点
        this.topPoint={
            x:this.endPoint.x-100,
            y:this.endPoint.y-60
        }
        //确定抛物线系数
        this.a = ((this.startPoint.y - this.endPoint.y) * (this.startPoint.x - this.topPoint.x) - (this.startPoint.y - this.topPoint.y) * (this.startPoint.x - this.endPoint.x)) / ((this.startPoint.x * this.startPoint.x - this.endPoint.x * this.endPoint.x) * (this.startPoint.x - this.topPoint.x)-(this.startPoint.x * this.startPoint.x - this.topPoint.x * this.topPoint.x) * (this.startPoint.x - this.endPoint.x));  
                            
        this.b = ((this.endPoint.y - this.startPoint.y) - this.a * (this.endPoint.x * this.endPoint.x - this.startPoint.x * this.startPoint.x)) / (this.endPoint.x - this.startPoint.x);  
                            
        this.c = this.startPoint.y - this.a * this.startPoint.x * this.startPoint.x - this.b * this.startPoint.x;
        return this;

    },
    fnMove:function(src){
        var $img = $("<img>");
        $img.attr("src","../img/"+src);
        $("body").append($img);
        var x = this.startPoint.x;
        var y = this.startPoint.y;
        $img.css({
            width:30,
            height:30,
            position:"absolute",
            left : x,
            top : y
        })
        var timer = setInterval(function(){
            x=x+10,
            y=this.a*x*x+this.b*x+this.c
            if (x<this.endPoint.x) {
                $img.css({
                    left:x,
                    top:y
                })
            }else{
                clearInterval(timer);
                $img.remove();
            }
        }.bind(this),10)
    }
})


























//侧边栏
function rightbar(){
    this.body=$(".rightbar_span");
    this.span1=$(".rightbar_span_1");
    this.dla=$(".right_dl_a");
    this.dla1=$(".right_dl_a1");
    this.div=$(".rightbar_div");
    this.dshow=$(".rightbar_show");
    this.windowh=$(window).height();
    this.hear=$(".rightbar_heart");
    this.wx=$(".rightbar_wx");
    this.wxewm=$(".rightbar_wxewm");
    this.kf=$(".rightbar_kf");
    this.top=$(".rightbar_top");
    this.scrolltop=$("html,body");
    this.init=function(){
        this.body.mouseenter(function(){
            this.body.css("background","url(../img/right_user2.jpg)")
            this.span1.css("display","block")
        }.bind(this)).mouseleave(function(){
            this.body.css("background","url(../img/right_user.jpg)")
            this.span1.css("display","none")
        }.bind(this))
        return this;
    }
    this.inita=function(){
        this.dla.mouseenter(function(){
            $(this).css({"background":"#c10055","color":"#fff"})
        }).mouseleave(function(){
            $(this).css({"background":"","color":"#c10055"})
        })
        return this;
    }
    this.inita1=function(){
        this.dla1.mouseenter(function(){
            $(this).css({"background":"#c10055","color":"#fff"})
        }).mouseleave(function(){
            $(this).css({"background":"","color":"#c10055"})
        })
        return this;
    }
    this.divshow=function(){
        this.div.mouseenter(function(){
            this.div.css("background","url(../img/right_car2.jpg)")
            this.dshow.css({"display":"block","height":this.windowh})
        }.bind(this)).mouseleave(function(){
            this.div.css("background","url(../img/right_car.jpg)")
            this.dshow.css("display","none")
        }.bind(this))
        return this;
    }
    this.heart=function(){
        this.hear.mouseenter(function(){
            $(this).css("background","url(../img/right_heart2.jpg)")
        }).mouseleave(function(){
            $(this).css("background","url(../img/right_heart.jpg)")
        })
        return this;
    }
    this.weixin=function(){
        this.wx.mouseenter(function(){
            this.wx.css("background","url(../img/right_wx2.jpg)")
            this.wxewm.css("display","block")
        }.bind(this)).mouseleave(function(){
            this.wx.css("background","url(../img/right_wx.jpg)")
            this.wxewm.css("display","none")
        }.bind(this))
        return this;
    }
    this.kefu=function(){
        this.kf.mouseenter(function(){
            $(this).css("background","url(../img/right_kf2.jpg)")
        }).mouseleave(function(){
            $(this).css("background","url(../img/right_kf.jpg)")
        })
        return this;
    }
    this.topbtn=function(){
        this.top.mouseenter(function(){
            $(this).css("background","url(../img/right_top2.jpg)")
        }).mouseleave(function(){
            $(this).css("background","url(../img/right_top.jpg)")
        }).click(function(){
            this.scrolltop.animate({scrollTop:0},500)
        }.bind(this))
    }
}