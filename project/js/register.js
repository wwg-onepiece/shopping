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

// 接口
// // 注册
$d = $('<div></div>');
$d.addClass('notice');

// class Register{
//   constructor(){
//     this.url = "http://www.icodeilife.cn/ctrl/register.php";
//     this.btn = $(".ibtn");
//     this.user = $(".user");
//     this.pass = $(".pass");
//     this.div = $(".wrap");
//     this.tip = $(".tip");
//     console.log(this.div);
//     this.init()
//   }
//   init(){
//     let that =this;
//     this.btn.click(function(){
//       that.tip.css({
//         display:"inline-block",
//         color:"red",
//         marginLeft:"10px",
//         font:"12px/2 ''",
//         padding:"0 10px",
//         background:"#ffffe6"
//       })
//       that.load(0)
//     })
//   }
//   load(){
//     let that = this;
//     $.ajax({
//       url:this.url,
//       data:{
//         tel:this.user.val(),
//         pass:this.pass.val()
//       },
//       success:function(res){
//         switch(res){
//           case "0":that.tip.html("用户名已存在");break;
//           case "1":$d.html('"注册成功，3s后将自动跳转..."');
//           $('.wrap').css({display:'block'}).append($d).children('.notice').stop().animate({
//               height:100
//           });
//           setTimeout(() => {
//             $('.notice').stop().animate({
//                 height:0
//             }).remove();
//             $('.wrap').css('display','none');
//             location.href = "login.html";
//         }, 3000);break;
//         case "2":that.tip.html("请填写完整");break;
//         }
//       }
//     })
//   }
// }
// new Register();

// 随机数验证码
$(".num").val(random(1000,9999));
$(".cbtn").click(function(){
  $(".num").val(`${random(1000,9999)}`)
})

// 正则验证
// let reg = reg();
// reg.init({
//   tel:
//   ver:
//   pass:
//   pass2:
// })
// reg.Tel()
// reg.Ver()
// reg.Pass()
// reg.pass1()

class Form{
  constructor(){
    this.obj = reg();
    this.init();
  }
  init(){
    // console.log(this.obj);
    var that = this;
    $('.user').blur(function(){
     var a = that.obj.Tel({tel:$(".user").val()})
     var b = that.obj.Tel({tel:$(".user").val(),})
      if( a==false){
        $(".tip").html("请填写13/4/5/6/7开头的11位手机号")
      }else{
        $(".tip").html("")
      }
      

      
      // console.log(that.obj.Tel({
      //   tel:$(".user").val()
      // }));
    })
  }

}
new Form;

// class yanzheng{
//   constructor(){
//     this.btn = $(".ibtn");
//     this.user = $(".user");
//     this.vcode = $(".v_code");
//     this.pass = $(".pass");
//     this.conpass = $("con_pass");
//     this.tip = $(".tip");
//     this.vtxt = $(".vtxt");
//     this.ctxt = $(".ctxt");
//     this.Tel();
//     this.Ver();
//     this.Pass();
//   }
//   Tel(){
//     reg.Tel
//   }
//   Ver(){
//   }
//   Pass(){
//   }
// }
// new yanzheng();

// localstorage
class Register{
  constructor(){
    this.btn = $(".ibtn");
    this.user = $(".user");
    this.vcode = $(".v_code");
    this.pass = $(".pass");
    this.conpass = $("con_pass");
    this.div = $(".wrap");
    this.tip = $(".tip");
    
    this.init()
    this.getData();
  }
  init(){
    var that = this;
    this.btn.click(function(){
      that.tip.css({
        display:"inline-block",
        color:"red",
        marginLeft:"10px",
        font:"12px/2 ''",
        padding:"0 10px",
        background:"#ffffe6"
      })
      that.setData()
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
  setData(){
    if(this.data.length == 0){
      this.data.push({
        user:this.user.val(),
        pass:this.pass.val(),
        onoff:0
      })
      $d.html("注册成功，3s后自动跳转...");
      this.div.css({display:'block'}).append($d).children('.notice').stop().animate({
          height:100
      });
      setTimeout(() => {
        $('.notice').stop().animate({
            height:0
        }).remove();
        $('.wrap').css('display','none');
        location.href = "login.html";
    }, 3000);
    localStorage.setItem("data",JSON.stringify(this.data))
    }else{
      for(var i=0;i<this.data.length;i++){
        if(this.data[i].user == this.user.val()){
          this.tip.html("用户名已存在");
          return;
          }
        }
        this.data.push({
          user:this.user.val(),
          pass:this.pass.val(),
          onoff:0
        })
        $d.html("注册成功，3s后自动跳转...");
        this.div.css({display:'block'}).append($d).children('.notice').stop().animate({
            height:100
        });
        setTimeout(() => {
          $('.notice').stop().animate({
              height:0
          }).remove();
          $('.wrap').css('display','none');
          location.href = "login.html";
      }, 3000);
      localStorage.setItem("data",JSON.stringify(this.data))
      }
  }
}

new Register();



}
