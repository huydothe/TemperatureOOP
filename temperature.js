let Temperature=function(C){
    this.C=C;
    this.getC=function (){
        return C;
    }
    this.getF=function (){
        return ((9*C)/5)+32;
    }
    this.getK=function (){
        return C+273.15;
    }
}
let result=new Temperature(25);
let C=result.getC();
let F=result.getF();
let K=result.getK();
alert('25 độ C bằng '+ F +' độ F, và bằng ' + K +' độ K');