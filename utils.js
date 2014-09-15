var ArrayUtils = {}
ArrayUtils.alteredIndex = function(array, index, replacement) {
    return array.splice(0, index).concat([replacement]).concat(index+1, array.length);
}

ArrayUtils.addedIndex = function(array, index, increment) {
    return ArrayUtils.alterdIndex(array, index, array[index] + increment);
}