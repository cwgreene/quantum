// Unit Tests
var amplitude = require("../src/amplitude.js").default;
var I = amplitude.I;
var U = amplitude.U;
var Amplitude = amplitude.Amplitude;
var assert = require('assert')

// Add
assert(I.multiply(2).equals(I.add(I)))
assert(I.add(1).equals(new Amplitude(1,1)))

// Multiply
assert(I.multiply(I).equals(-1));
assert(I.multiply(I).multiply(I).equals(I.multiply(-1)));
assert(I.multiply(I).multiply(I).multiply(I).equals(1));

// Trig
assert((new Amplitude(1,1)).angle() == Math.PI/4)
assert((new Amplitude(-1,1)).angle() == Math.PI/2 + Math.PI/4)
assert((new Amplitude(-1,-1)).angle() == Math.PI + Math.PI/4)
assert((new Amplitude(1,-1)).angle()*(360/(2*Math.PI)) == 315)

// Conj
var orig = new Amplitude(1,2);
var conj = orig.conj()
assert(conj.real == orig.real)
assert(conj.imag == -orig.imag)

// Inverse
assert(orig.inverse().multiply(orig).almostEquals(U))

// Exponenentiation
assert(I.exponentiate(2).almostEquals(-1))
assert(I.exponentiate(I).almostEquals(Math.exp(-Math.PI/2)))
