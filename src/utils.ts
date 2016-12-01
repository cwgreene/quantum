class ArrayUtils {
    static alteredIndex (array, index, replacement) {
        return array.slice(0, index).concat([replacement]).concat(array.slice(index+1, array.length));
    }

    static addedIndex (array, index, increment) {
        return this.alteredIndex(array, index, array[index] + increment);
    }

    static equals (array1, array2) {
        return JSON.stringify(array1) === JSON.stringify(array2)
    }
}

export default {
    ArrayUtils: ArrayUtils
};
