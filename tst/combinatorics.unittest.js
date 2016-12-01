var combinatorics = require('../src/combinatorics.js').default;
var cartesianProduct = combinatorics.cartesianProduct;
var assert = require("assert")

// I'm going to be a bad person and do string comparison here.
assert.equal(JSON.stringify(cartesianProduct([["a","b"], ["c","d"]])),
    JSON.stringify([["a","c"],
                   ["a","d"],
                   ["b","c"],
                   ["b","d"]]))
assert.equal(cartesianProduct([["a","b","c"], ["d","a","g"], ["e","f","g"]]).length, 27)
