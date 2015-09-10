/**
 * Created by GUERIN Olivier, on 09/09/2015.
 * Twitter: @MisterRaton
 */

function isPowerOf2(value) {
    if (value > 0) {
        var r = (value).toString(2);
        return (!~r.indexOf(1, 1));
    }
    return false;
}

function isPowerOfTwo(value) {
    return isPowerOfN(value, 2);
}

//Math.round is very important here
//otherwise isPowerOfN(13, 3) would return true
function isPowerOfN(value, N) {
    return value === Math.pow(N, Math.round(Math.log(value) / Math.log(N)));
}
