// Unit Tests
// depends: amplitude.js
var assert = require('assert')
I.multiply(I).equals(-1);
I.multiply(I).multiply(I).equals(I.multiply(-1));
I.multiply(I).multiply(I).multiply(I).multiply(I).equals(1);
