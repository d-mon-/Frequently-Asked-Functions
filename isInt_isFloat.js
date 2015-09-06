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
