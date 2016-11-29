"use strict";
var ArrayUtils = (function () {
    function ArrayUtils() {
    }
    ArrayUtils.prototype.alteredIndex = function (array, index, replacement) {
        return array.slice(0, index).concat([replacement]).concat(array.slice(index + 1, array.length));
    };
    ArrayUtils.prototype.addedIndex = function (array, index, increment) {
        return this.alteredIndex(array, index, array[index] + increment);
    };
    ArrayUtils.prototype.equals = function (array1, array2) {
        return JSON.stringify(array1) === JSON.stringify(array2);
    };
    return ArrayUtils;
}());
module.exports = {
    ArrayUtils: ArrayUtils
};
