/**
 * Created by GUERIN Olivier, on 06/09/2015.
 * Twitter: @MisterRaton
 */
function typeOf(value) {
    if (typeof value === "number" && isNaN(value)) return "NaN";
    if (value === null) return 'Null';
    if (value === undefined) return 'Undefined';
    if (value.constructor.name !== undefined) {
        return value.constructor.name;
    } else {
        var constructorString = value.constructor.toString();
        return constructorString.slice(9,constructorString.indexOf('('));
    }
};
