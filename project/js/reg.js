function reg(opt){
    class Reg{
        constructor(){
         
        }
        // init(opt){
        //     this.tel = opt.tel || '';
        //     this.Verification = opt.Verification || '';
        //     this.pass = opt.pass || '';
        //     this.pass1 = opt.pass1 || '';
        //     this.ma = opt.ma ;
        // }
        Tel(opt){
            var re = /^1[34578]\d{9}$/;
            this.tel = opt.tel || '';
            if(re.test(this.tel)){
                return true;
            }else{
                return false;                
            }
        }
        Ver(opt){
        //    console.log(this.Verification,this.ma)
            this.Verification = opt.Verification || '';
            this.ma = opt.ma ;
            if(this.Verification === this.ma){
                return true;
            }else{
                return false;                
            }
        }
        Pass(opt){
            var re =  /^[a-zA-Z0-9]{6,18}$/;
            this.pass = opt.pass || '';
            if(re.test(this.pass)){
                return true;
            }else{
                return false;                
            }
        }
        Pass1(opt){
            this.pass = opt.pass || '';
            this.pass1 = opt.pass1 || '';
            if(this.pass === this.pass1){
                return true;
            }else{
                return false;                
            }
        }
    }
   return new Reg(opt);
}