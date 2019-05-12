function Banner(options){
    class Ban{
        constructor(options){
            this.items = options.items;
            this.left = options.left;
            this.right = options.right;
            this.list = options.list;
            this.timeout = options.timeout;
            this.index = 0;
            this.last = this.items.length-1;
            this.init();
        }
        init(){
            var that = this;
            this.l = this.leftMove.bind(this);
            this.r = this.rightMove.bind(this);
            this.items.css('left',this.items.eq(0).width()).eq(0).css('left',0);
            this.left.click(this.l);
            this.right.click(this.r);
            this.list.click(function(){
                that.out = that.index;
               that.index = $(this).index();
               if(that.index>that.last){
                that.display(-1);
               }else if(that.index<that.last){
                that.display(1);
               }
            });
            this.items.parent().parent().hover(()=>{
                clearInterval(this.timer);
               },()=>{
                this.autoPlay();
               })
            this.autoPlay();
        }
        leftMove(){
            this.changeIndex(1);
            this.display(1);
        }
        rightMove(){
            this.changeIndex(0);
            this.display(-1);
            }
        changeIndex(type){
            this.last = this.index;
            if(type){
                if(this.index == 0 ){
                    this.index = this.items.length-1;
                }else{

                    this.index--;
                }
            }else{
                if(this.index == this.items.length-1 ){
                    this.index = 0;
                }else{

                    this.index++;
                }
            }
        }
        display(type){
            this.list.eq(this.index).addClass('active').siblings().removeClass('active');
            this.items.eq(this.index).css('left',-this.items.eq(0).width()*type).stop().animate({
                left:0
            },500);
            this.items.eq(this.last).css('left',0).stop().animate({
                left:this.items.eq(0).width()*type
            },500)
        }
        autoPlay(){
            clearInterval(this.timer);
            this.timer = setInterval(()=>{
                this.rightMove();
            },this.timeout);
        }
    }
    new Ban(options);
}



// ; (function () {
//     Banner({
//       items: $(".banner").find(".pic").children('li'),
//       left: $(".banner").find('.left'),
//       right: $(".banner").find('.right'),
//       list: $(".banner").children('.list').children('li'),
//       timeout: 3000
//     });
//   })();
