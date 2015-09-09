/**
 * Created by GUERIN Olivier, on 06/09/2015.
 * Twitter: @MisterRaton
 */
function typeOf(value){
    if(typeof value === 'object' && value!==null){
        if(value.constructor.name!==undefined){
            return value.constructor.name;
        }else{
            return (value.constructor.toString()).match(/\s+([\w\$]+)\s*(?=\()/)[1];
        }
    }
    if(typeof value ==="number" && isNaN(value)){
        return "NaN";
    }
    return Object.prototype.toString.call(value).slice(8,-1);
}