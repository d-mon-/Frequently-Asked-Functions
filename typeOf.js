/**
 * Created by GUERIN Olivier, on 06/09/2015.
 * Twitter: @MisterRaton
 */
function typeOf(value) {
    if (typeof value === 'number' && isNaN(value)) return 'NaN';
    if (value === null) return 'Null';
    if (value === undefined) return 'Undefined';
    var _name = value.constructor.name;
    if (_name !== undefined) {
        return _name||'Anonymous';
    } else {
        var constructorString = value.constructor.toString();
        var index = constructorString.indexOf('(',9);
        return (index===9)?'Anonymous': constructorString.slice(9,index);
    }
};
