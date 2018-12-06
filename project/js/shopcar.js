window.onload=function(){
    var arr =JSON.parse(localStorage.shoplist) ;
    var str="";
    for (var i = 0; i < arr.length; i++) {
        var shopinfo=arr[i];
        str+='<div class="shop-item clearfix">'+
                '<p class="fl"><input type="checkbox" class="ck"/></p>'+
                '<img class="fl" src="../img/'+ shopinfo.id +'" alt="" />'+
                '<p class="fl">'+ shopinfo.name +'</p>'+
                '<span class="fl">'+ shopinfo.money +'元</span>'+
                '<p class="fl count" '+
                    'data-id="'+ shopinfo.id +'" '+
                    'data-price="'+ shopinfo.nprice +'" data-count="'+ shopinfo.count +'"'+
                    'data-name="'+ shopinfo.name +'" data-src="'+ shopinfo.id +'"'+
                    '>'+
                    '<span class="updateCount" data-number="1">+</span>'+
                    '<span class="shop-count">'+ shopinfo.count +'</span>'+
                    '<span class="updateCount" data-number="-1">-</span>'+
                '</p>'+
                '<em class="fl sumPrice">'+ (shopinfo.count * shopinfo.money) +'元</em>'+
                '<i class="fl delBtn">删除</i>'+
            '</div>'
    }
    $(".shoplist").html(str);

    $(".delBtn").click(function(){
        if (!confirm("确认要删除吗")) {
            return;
        }
        //获取当前删除元素的编号
        var mid = $(this).parent().find(".count").data("id");
        console.log(mid);
        for (var  i = 0; i < arr.length; i++) {
            if (mid==arr[i].id) {
                //删除数组中的某个对象
                arr.splice(i,1);
                //重新将数组存入cookie中
                localStorage.setItem("shoplist",JSON.stringify(arr));
                //更新界面
                $(this).parent().remove();
                break;
            }
        }
    })

    $(".updateCount").click(function(){
        //确定要操作的商品的编号
        var mid = $(this).parent().data("id");

        //获取当前数量
        var count=$(this).parent().find(".shop-count").html();
        //获取当前的操作符
        var sign = $(this).html();
        //如果数量为一不能实现减法操作
        if (count==1&&sign=="-") {
            return;
        }
        for (var i = 0; i < arr.length; i++) {
            if (mid==arr[i].id) {
                arr[i].count+=$(this).data("number");
                localStorage.setItem("shoplist",JSON.stringify(arr));
                //更新界面
                $(this).parent().find(".shop-count").html(arr[i].count);
                $(this).parent().parent().find(".sumPrice").html(arr[i].count*arr[i].money+"元");

                break;
            }
        }
    })
    $(".ck").click(function(){
        jiesuan();
        
    })
    $("#selectAll").click(function(){
        // this 全选的复选框
        var userids=this.checked;
        //获取name=box的复选框 遍历输出复选框
         $(".ck").each(function(){
            this.checked=userids;
        })
        jiesuan();
    })
    function jiesuan(){
        var count=0;
        var money=0;
        //结算的是被选中的
        $(".ck:checked").each(function(){
            count+=parseInt($(this).parent().parent().find(".shop-count").html());
            money+=parseInt($(this).parent().parent().find(".sumPrice").html());
            
            
             console.log(count,money)
        })
        $(".count2").html(count);
        $(".money2").html(money);
    }
}