/**
 * Created by GUERIN Olivier, on 21/08/2015.
 * Twitter: @MisterRaton
 */
/**
 * isInteger and value between [0,255]
 * @param {Number} v
 * @returns {boolean}
 */
function isValidColorInteger(v){
    return typeof v === 'number' && v%1 === 0 && v >= 0 && v <= 255;
}

/**
 * convert r,g,b value into hexadecimal color
 * @param {Number} r
 * @param {Number} g
 * @param {Number} b
 * @returns {*}
 */
function rgb2hex (r,g,b){
    if(isValidColorInteger(r)&&isValidColorInteger(g)&&isValidColorInteger(b)){
        //  return ("00000"+((r<<16)+(g<<8)+b).toString(16)).slice(-6); //also work
        return(16777216+(r<<16)+(g<<8)+b).toString(16).slice(1);
    }else{
        return false;
    }
}
/**
 * convert r,g,b,a value into hexadecimal color
 * @param {Number} r
 * @param {Number} g
 * @param {Number} b
 * @param {Number} a
 * @returns {*}
 */
function rgba2hex (r,g,b,a){
    if(isValidColorInteger(a)&&isValidColorInteger(r)&&isValidColorInteger(g)&&isValidColorInteger(b)){
        //(a<<24)>>>0 return an unsigned integer
        //  return ("0000000"+(((a<<24)>>>0)+(r<<16)+(g<<8)+b).toString(16)).slice(-8); //also work
        return(4294967296+((a<<24)>>>0)+(r<<16)+(g<<8)+b).toString(16).slice(1);
    }else{
        return false;
    }
}
rgb2hex(0,255,255);
rgba2hex(255,255,255,0);