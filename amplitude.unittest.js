// Unit Tests
// depends: amplitude.js
var assert = require('assert')
assert(I.multiply(I).equals(-1));
assert(I.multiply(I).multiply(I).equals(I.multiply(-1)));
assert(I.multiply(I).multiply(I).multiply(I).equals(1));

// Trig
assert((new Amplitude(1,1)).angle() == Math.PI/4)
assert((new Amplitude(-1,1)).angle() == Math.PI/2 + Math.PI/4)
assert((new Amplitude(-1,-1)).angle() == Math.PI + Math.PI/4)
assert((new Amplitude(1,-1)).angle()*(360/(2*Math.PI)) == 315)
