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


$d = $('<div></div>');
$d.addClass('notice');
// // 接口
// class Login{
//   constructor(){
//     this.url = "http://www.icodeilife.cn/ctrl/login.php";
//     this.btn = $(".btn");
//     this.user = $(".user");
//     this.pass = $(".pass");
//     this.div = $(".wrap");
//     this.tip = $(".tip");

//     this.init()
//   }
//   init(){
//     var that =this;
//     this.btn.click(function(){
//       that.tip.css({
//         display:"inline-block",
//         color:"rgb(196, 14, 14)",
//         marginLeft:"10px",
//         font:"12px/2 ''",
//         padding:"0 10px"
//       })
//       that.load()
//     })
//   }
//   load(){
//     var that = this;
//     $.ajax({
//       url:this.url,
//       data:{
//         user:this.user.val(),
//         pass:this.pass.val()
//       },
//       success:function(res){
//         console.log(res);
//         switch(res){
//           case "0":
//               that.tip.html("用户名或密码错误");break;
//           case "1":
//               that.tip.html("请重新登录");break;
//           default:
//               $d.html("登录成功，3s后将自动跳转...");
//               $('.wrap').css({display:'block'}).append($d).children('.notice').stop().animate({
//                   height:100
//               });
//               JSON.parse(res);
//               setTimeout(() => {
//                 $('.notice').stop().animate({
//                     height:0
//                 }).remove();
//                 $('.wrap').css('display','none');
//                 location.href = "index.html";
//             }, 3000);break;
//         }
//       }
//     })
//   }
// }
// new Login();

class Login{
  constructor(){
    this.btn = $(".btn");
    this.user = $(".user");
    this.pass = $(".pass");
    this.div = $(".wrap");
    this.tip = $(".tip");

    this.init()
    this.getData();
  }
  init(){
    var that = this;
    this.btn.click(function(){
      that.verification();
    })
  }
  getData(){
    this.data = localStorage.getItem("data");
    if(this.data == null){
      this.data = [];
    }else{
      this.data = JSON.parse(this.data)
    }
  }
  verification(){
    for(var i=0;i<this.data.length;i++){
      if(this.data[i].user == this.user.val() && this.data[i].pass == this.pass.val()){
        $d.html("登录成功，3s后将自动跳转...");
        $('.wrap').css({display:'block'}).append($d).children('.notice').stop().animate({
            height:100
        });
        setTimeout(() => {
          $('.notice').stop().animate({
              height:0
          }).remove();
          $('.wrap').css('display','none');
          location.href = "index.html";
        }, 3000);
        this.data[i].onoff = 1;
        
        localStorage.setItem("data",JSON.stringify(this.data))
        return;
      }
    }
    this.tip.html("用户名或密码不正确");
  }
}

new Login();

}
