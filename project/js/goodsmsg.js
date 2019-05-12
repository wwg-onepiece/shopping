
onload = function(){

    // 导航
    $("header").find("ul").find("li").children(".te").mouseover(function(){
        $("header").find(".box").stop().hide()
    })
$("header").find("ul").on("mouseover","li",function(){
    $("header").find(".box").stop().show()
    $(this).find(".box2").stop().show()
})

// 二级标题
$("header").find("ul").find(".nav2").mouseover(function(){
    $("header").find(".nav2").css({
    color:"",
    textDecoration:"none"
    })//连缀的是.nav2中有的
    $(this).css({
    color:"#7f5b42",
    textDecoration:"underline"
    })
})
// 三级标题
$("header").find("ul").find(".box3").children("a").mouseenter(function(){
    $("header").find(".box3").children("a").css({
    color:"",
    background:"none"
    })
    $(this).css({
    color:"#fff",
    background:"#b2ab9e"
    })
})

$(document).mouseout(function(){
    $("header").find(".nav2").css({
    color:"",
    textDecoration:"none"
    })
    $("header").find(".box3").children("a").css({
    color:"",
    background:"none"
    })
    $("header").find(".box2").stop().hide().parent().siblings(".box").stop().hide()
})

// 登录与否
class Index{
    constructor(){
    this.login = $("header .login");
    this.alogin = $("header .alogin");
    this.who = $(".alogin .who");
    this.out = $(".out");
    this.getData();
    this.addEvent();
    }
    getData(){
    this.data = localStorage.getItem("data");
    if(this.data == null){
        this.data = [];
    }else{
        this.data =JSON.parse(this.data)
    }
    this.judge();
    }
    judge(){
    for(var i=0;i<this.data.length;i++){
        if(this.data[i].onoff == 1){
        this.login.css({display:"none"});
        this.alogin.css({display:"block"});
        this.who.html(`${this.data[i].user}`);
        this.successUser = this.data[i].user;
        return;
        }
    }
    this.login.css({display:"block"});
    this.alogin.css({display:"none"});
    this.who.html("");
    }
    addEvent(){
    var that = this;
    this.out.click(function(){
        if(that.successUser){
        for(var i=0;i<that.data.length;i++){
            if(that.data[i].user === that.successUser){
            that.data[i].onoff = 0;
            localStorage.setItem("data",JSON.stringify(that.data));
            that.judge();
            }
        }
        }
    })
    }
}
new Index();

$(".m_8").find("button").click(function(){
    console.log(1)
  $(this).toggleClass("redframe")
})

// 放大镜
function Magnifier(){
        this.span = document.querySelector(".s_box span");
        this.sBox = document.querySelector(".s_box");
        this.bBox = document.querySelector(".b_box");
        this.Img = this.bBox.children[0]; 
        this.box2 = document.querySelector(".box2");

        this.init();
    }
    Magnifier.prototype.show = function(){
        this.span.style.display = "block";
        this.bBox.style.display = "block";
    }

    Magnifier.prototype.move = function(pos){
        var l = pos.x - this.span.offsetWidth/2;
        var t = pos.y - this.span.offsetHeight/2;
        (l<0) && (l=0);
        (t<0) && (t=0);
        (l > this.sBox.offsetWidth - this.span.offsetWidth) &&
        (l = this.sBox.offsetWidth - this.span.offsetWidth);
        (t > this.sBox.offsetHeight - this.span.offsetHeight) &&
        (t = this.sBox.offsetHeight - this.span.offsetHeight);

        this.span.style.left = l + "px";
        this.span.style.top = t + "px";
        console.log(l)
        this.Img.style.left = -l/(this.sBox.offsetWidth - this.span.offsetWidth)*(this.Img.offsetWidth-this.bBox.offsetWidth) + "px";
        this.Img.style.top = -t/(this.sBox.offsetHeight - this.span.offsetHeight)*(this.Img.offsetHeight-this.bBox.offsetHeight) + "px";
    }
    
    Magnifier.prototype.hide = function(){
        this.span.style.display = "none";
        this.bBox.style.display = "none";
    }

    Magnifier.prototype.init = function(){
    // 绑定事件：鼠标进入：出现，移动，离开：消失
    var that = this;
        this.sBox.onmouseover = function(){
            that.show();
            this.onmousemove = function(eve){
                var e = eve || window;
                that.move({
                    x:e.pageX - this.offsetLeft-30,
                    y:e.pageY - this.offsetTop-200,
                });
            }
        }
        this.sBox.onmouseout = function(){
            that.hide();
        }
    }

    new Magnifier;

// 选项卡
    function Tab(){
        this.li = document.querySelectorAll(".box3 li");
        this.p = document.querySelectorAll(".box3 .msg");
        this.index = 0;
        this.init();
    }
    Tab.prototype.init = function(){
        var that =this;
        for(var i=0;i<this.li.length;i++){
            this.li[i].xuhao = i;
            this.li[i].onclick = function(){
                that.changeIndex(this);
            }
        }
    }
    Tab.prototype.changeIndex = function(ele){
        this.index = ele.xuhao;
        this.hideAll();
    }
    Tab.prototype.hideAll = function(){
        for(var i=0;i<this.li.length;i++){
            this.li[i].className = "";
            this.p[i].style.display = "none";
        }
        this.show();
    }
    Tab.prototype.show = function(){
        this.li[this.index].className = "active";
        this.p[this.index].style.display = "block";
    }
    new Tab();

}





