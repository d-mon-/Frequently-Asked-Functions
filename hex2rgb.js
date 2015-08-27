/**
 * Created by GUERIN Olivier, on 21/08/2015.
 * Twitter: @MisterRaton
 */

/**
 * convert hexadecimal colors (FFFFFF) into rgb *
 * @param {String} v
 * @returns {{r: Number, g: Number, b: Number}|Boolean}
 */
function hex2RGB (v){
    if(typeof v==='string' && v.length===6){
        var rgb = v.match(/[0-9a-f]{2}/gi);
        if(rgb.length===3){
            return {r:parseInt(rgb[0],16),g:parseInt(rgb[1],16),b:parseInt(rgb[2],16)};
        }
    }
    return false;
}
/**
 * convert hexadecimal colors (FFFFFFFF) into rgb
 * @param {String} v
 * @returns {{a:Number, r: Number, g: Number, b: Number}|Boolean}
 */
function hex2RGBA (v){
    if(typeof v==='string' && v.length===8){
        var rgb = v.match(/[0-9a-f]{2}/gi);
        if(rgb.length===4){
            return {a:parseInt(rgb[0],16),r:parseInt(rgb[1],16),g:parseInt(rgb[2],16),b:parseInt(rgb[3],16)};
        }
    }
    return false;
}

hex2RGB("00ff00");
hex2RGBA("00ffff00");
