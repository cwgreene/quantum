var utils = require('../src/utils.js');
var ArrayUtils = utils.ArrayUtils;
var assert = require('assert');

assert(ArrayUtils.equals(["1"],["1"]))
assert(!ArrayUtils.equals(["1", "2"],["1"]))
assert(ArrayUtils.equals(["1", "2"],["1","2"]))
assert(!ArrayUtils.equals(["1", "2"],["1","4"]))
assert(ArrayUtils.equals(["1", ["1","2"]],["1",["1","2"]]))
assert(ArrayUtils.equals([1,["a","b","c"],3],
    ArrayUtils.alteredIndex([1,2,3], 1, ["a", "b","c"])))
assert(ArrayUtils.equals(ArrayUtils.addedIndex([1,2,3], 1, 1),
    [1,3,3]))
