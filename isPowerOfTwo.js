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
    return (value === nearestPowerOf2(value, 2));
}

function nearestPowerOf2(value) {
    return nearestPowerOfN(value, 2)
}

function nearestPowerOfN(value, N) {
    return Math.pow(N, Math.round(Math.log(value) / Math.log(N)));
}