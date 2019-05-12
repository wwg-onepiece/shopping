function createDate(){
    var d = new Date();
    
    var year = d.getFullYear()
    var month = d.getMonth()
    var date = d.getDate()
    var day = d.getDay()

    var h = d.getHours()
    var m = d.getMinutes()
    var s = d.getSeconds()

    switch(day){
        case 0:day = "星期日";break;
        case 1:day = "星期一";break;
        case 2:day = "星期二";break;
        case 3:day = "星期三";break;
        case 4:day = "星期四";break;
        case 5:day = "星期五";break;
        case 6:day = "星期六";break;
    }

    var str = year+"年"+createZero(month+1)+"月"+createZero(date)+" "+day+" "+createZero(h)+":"+createZero(m)+":"+createZero(s);

    return str;
}

function createZero(n){
    if(n<10){
        return "0"+n;
    }else{
        return n;
    }
}

function dateDiff(date1,date2){
    date2 = date2 ? new Date(date2) : new Date();
    date1 = new Date(date1);
    var t = Math.abs(date1 - date2);

    var day = parseInt(t/1000/60/60/24);
    var hours = parseInt((t - day*24*60*60*1000)/1000/60/60);
    var minutes = parseInt((t - day*24*60*60*1000 - hours*60*60*1000)/1000/60)
    var seconds = parseInt((t - day*24*60*60*1000 - hours*60*60*1000 - minutes*60*1000)/1000)
    
    return {
        day:day,
        hours:hours,
        minutes:minutes,
        seconds:seconds
    }
}

//随机数
function random(max,min){
    return Math.round(Math.random()*(max-min)+min)
}
// 随机色
function randomColor(){
    return `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`;
}

// 获取非行内样式
function getStyle(ele,attr){
    if(ele.currentStyle){
        return ele.currentStyle[attr];
    }else{
        return getComputedStyle(ele,false)[attr];
    }
}


// 阻止事件冒泡
function stopBubble(e){
    if(e.stopPropagation){
        e.stopPropagation()
    }else{
        e.cancelBubble = true;
    }
}

// 阻止默认行为
function stopDefault(e){
    if(e.preventDefault){
        e.preventDefault()
    }else{
        e.returnValue = false;
    }
}

// 绑定事件
function addEvent(ele,type,callback){
    if(ele.addEventListener){
        ele.addEventListener(type,callback,false)
    }else if(ele.attachEvent){
        ele.attachEvent("on"+type,callback)
    }else{
        ele["on"+type] = callback;
    }
}

// 删除事件
function removeEvent(ele,type,callback){
    if(ele.removeEventListener){
        ele.removeEventListener(type,callback,false)
    }else if(ele.detachEvent){
        ele.detachEvent("on"+type,callback)
    }else{
        ele["on"+type] = null;
    }
}


 // 抖动
 function Shake(range){
    def = true;
    clearInterval(timer);
    
     timer = setInterval(function(){
       var  rag = def? range:-range;
      obox.style.transform = 'translate('+rag+'px)';
      
      range -=1;
      def =!def;
      if(range<=0){
         clearInterval(timer);
      }
     },30);   
}


// 拖拽
function Drag(ele){
    ele.onmousedown = function(eve){
        var e1 = eve || window.event;
        var x = e1.offsetX;
        var y = e1.offsetY;
        document.onmousemove = function(eve){
            var e2 = eve || window.event;
            var l = e2.pageX - x;
            var t = e2.pageY - y;
            // // 边界限定
            // if(l < 0){
            //     l = 0;
            // }
            // if(t < 0){
            //     t = 0;
            // }
            // if(l > document.documentElement.clientWidth - obox.offsetWidth){
            //     l = document.documentElement.clientWidth - obox.offsetWidth;
            // }
            // if(t > document.documentElement.clientHeight - obox.offsetHeight){
            //     t = document.documentElement.clientHeight - obox.offsetHeight
            // }
            ele.style.left = l +"px";
            ele.style.top = t +"px";
        }
        document.onmouseup = function(){
            document.onmousedown = document.onmousemove = null;
        }
        return false;
    }
}