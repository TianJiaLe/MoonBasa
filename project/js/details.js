
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
    this.list=$(".banner_ul li");
    this.big=$(".banner_big");
    var that = this;
    that.img=$(".banner_big img");
    this.fdj=$(".fdj");
    this.large=$(".banner_large");
    that.largeimg=$(".banner_large img");
    this.limg=$(".largeimg");
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
        this.list.mouseenter(function(){
            $(this).css("border","1px solid #000").siblings().css("border","1px solid #fff");
            that.img.eq($(this).index()).css("display","block").siblings().css("display","none");
            that.largeimg.eq($(this).index()).css("display","block").siblings().css("display","none");
        })
        return this;
    }
    this.show=function(){
        this.big.mouseenter(function(){
            this.fdj.css("display","block");
            this.large.css("display","block");
        }.bind(this)).mouseleave(function(){
            this.fdj.css("display","none");
            this.large.css("display","none");
        }.bind(this))
        return this;
    }
    this.move=function(){
        this.big.mousemove(function(e){
            var x = e.pageX -  this.fdj.width()/2 - this.big.offset().left;
            var y = e.pageY -  this.fdj.height()/2 - this.big.offset().top;
            var maxL = this.big.width()-this.fdj.width();
            var maxT = this.big.height()-this.fdj.height();
            var x = x < 0 ? 0 : ( x > maxL ? maxL : x);
            var y = y < 0 ? 0 : ( y > maxT ? maxT : y);

            var x1 = x*(this.limg.eq(0).width() - this.large.width())/(this.big.width()-this.fdj.width());
            var y1 = y*(this.limg.eq(0).height() - this.large.height())/(this.big.height()-this.fdj.height());
            this.limg.css({"left":-x1,"top":-y1});
            this.fdj.css({"left":x,"top":y})
        }.bind(this))
    }
}

//轮播图
new movelist().init();
function movelist(){
    this.body=$(".banner_d2_b_ul");
    this.down=$(".banner_btn1");
    this.add=$(".banner_btn2");
    this.index=0;
    this.init=function(){
        this.down.click(function(){
            this.index--;
            if (this.index<=0) {
                this.body.stop().animate({"top":-this.index*546});
            }
            console.log(this.index*546);
        }.bind(this))

        this.add.click(function(){
            this.index++;
            if (this.index<=(this.body.height()-546)/546) {
                this.body.stop().animate({"top":-this.index*546});
            }
        }.bind(this))
    }
}



























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