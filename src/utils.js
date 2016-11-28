var ArrayUtils = {}
ArrayUtils.alteredIndex = function(array, index, replacement) {
    return array.slice(0, index).concat([replacement]).concat(array.slice(index+1, array.length));
}

ArrayUtils.addedIndex = function(array, index, increment) {
    return ArrayUtils.alteredIndex(array, index, array[index] + increment);
}

ArrayUtils.equals = function(array1, array2) {
    return JSON.stringify(array1) === JSON.stringify(array2)
}

module.exports = {
    ArrayUtils: ArrayUtils
};
