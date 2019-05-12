onload = function(){//script引入放在头部，加这个，放在body后面则不需要

;(function(){
    Banner({
      items:$("section").find(".imgbox").children('a'),
      left:$("#banner").find('.left'),
      right:$("#banner").find('.right'),
      list:$("#banner").children('ul').children('li'),
      timeout:5000
    });
  })();

  // 导航
    $("header").find("ul").find("li").children(".te").mouseover(function(){
      $("header").find(".box").stop().hide()
    })
$("header").find("ul").on("mouseover","li",function(){
  $("header").find(".box").stop().show()
  $(this).find(".box2").stop().show()
  
})

// 进入li时清除三级菜单
$("header").find("li").mouseenter(function(){
  $("header").find(".box3").css({
    display:"none"
  })
})
// 二级标题
$("header").find("ul").find(".nav2").mouseover(function(){
  $("header").find(".nav2").css({
    color:"",
    textDecoration:"none"
  })//连缀的是.nav2中有的

$("header").find(".box3").css({
    display:"none"
  })

  
  $(this).css({
    color:"#7f5b42",
    textDecoration:"underline"
  }).siblings(".box3").css({
    display:"inline-block"
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


}
