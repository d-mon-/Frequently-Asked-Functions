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
    var f = Object.prototype.toString;
    var x = [1,-1,1.1,0,-Infinity,Infinity,NaN,null,undefined,"1","test",{},[1],function(){ return null},function(){ return 1;},"",[]];
    var y = [isInt,isFloat,isFloat2];
    y.forEach(function(elem,index,array){
        console.log("--------"+elem.name+"-------");
        x.forEach(function(xelem,xindex,xarray){
            console.log(f.call(xarray[xindex])+":"+xarray[xindex]+"==>"+elem(xelem));
        });

    });
}
tester();