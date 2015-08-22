/**
 * Created by GUERIN Olivier, on 22/08/2015.
 * Twitter: @MisterRaton
 */


function isInt(v){
    return typeof v ==='number' && v%1===0;
}
function isFloat(v){
    return typeof v ==='number' && !isNaN(v%1);
}
function isFloat2(v){
    return typeof v ==='number' && !isNaN(v) && isFinite(v);
}

function tester(){
    var x = [1,-1,1.1,0,-Infinity,Infinity,NaN,null,undefined,"test",{},[1],function(){ return null},function(){ return 1;},"",[]];
    x.forEach(function(x,i,a){
        console.log("val:"+a[i]+"==>"+isInt(x))
    })
    console.log("---------------");
    x.forEach(function(x,i,a){
        console.log("val:"+a[i]+"==>"+isFloat(x))
    })
    console.log("---------------");
    x.forEach(function(x,i,a){
        console.log("val:"+a[i]+"==>"+isFloat2(x))
    })
}
tester();