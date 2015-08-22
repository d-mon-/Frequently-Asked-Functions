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
    if((/^#/i).test(v)){
        v=v.slice(1);
    }
    var colorInt = parseInt(v,16);
    //colorInt>=000000/16 && colorInt <= ffffff/16
    if(colorInt>=0&&colorInt<=16777215){
        var rgb = ((colorInt+16777216).toString(2)).slice(1).match(/.{1,8}/g);
        return {r:parseInt(rgb[0],2),g:parseInt(rgb[1],2),b:parseInt(rgb[2],2)};
    }
    return false;
}

/**
 *
 * convert hexadecimal colors (FFFFFFFF) into rgb
 * @param {String} v
 * @returns {{a:Number, r: Number, g: Number, b: Number}|Boolean}
 */
function hex2RGBA (v){
    if((/^#/i).test(v)){
        v=v.slice(1);
    }
    var colorInt = parseInt(v,16);
    if(colorInt>=0&&colorInt<=4294967295){
        var rgb = ((colorInt+4294967296).toString(2)).slice(1).match(/.{1,8}/g);
        return {a:parseInt(rgb[0],2),r:parseInt(rgb[1],2),g:parseInt(rgb[2],2),b:parseInt(rgb[3],2)};
    }
    return false;
}
hex2RGB("00ff00");
hex2RGBA("00ffff00");