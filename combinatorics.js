function cartesianProduct(arrays) {
    var result = [];
    if(arrays.length == 0) {
        return [[]];
    }
    var current_array = arrays[0];
    subproduct = cartesianProduct(arrays.slice(1,arrays.length));
    for(var i = 0; i < current_array.length; i++) {
        for(var j = 0; j < subproduct.length; j++ ) {
            var new_array = subproduct[j].slice(0,subproduct.length);
            new_array.unshift(current_array[i]);
            result.push(new_array)
        }
    }
    return result;
}

