// Unit Tests
// depends: amplitude.js
var assert = require('assert')
assert(I.multiply(I).equals(-1));
assert(I.multiply(I).multiply(I).equals(I.multiply(-1)));
assert(I.multiply(I).multiply(I).multiply(I).equals(1));
