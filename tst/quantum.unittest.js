var assert = require('assert');
var quantum = require('../src/quantum');
var amplitude = require('../src/amplitude');
var Amplitude = amplitude.Amplitude;
var System = quantum.System;
var Hamiltonian = quantum.Hamiltonian;
var secondDerivative = quantum.secondDerivative;
/* One Dimensional System */
var box = {
    "max_resolution" : 10,
    "min_x" : -3,
    "max_x" : 3   
}

var box_small = {
    "max_resolution" : 5,
    "min_x" : -3,
    "max_x" : 3
}

assert(new System(2, box, {}).states.length==100)
assert(new System(3, box, {}).states.length==1000)
assert(new System(3, box_small, {}).states.length==125)

var system = new System(2, box, {});
var hamiltonian = new Hamiltonian(system);

var dx = .00001;

assert(secondDerivative(Math.cos(0), Math.cos(-dx),  Math.cos(dx), dx).almostEquals(-1));
assert(secondDerivative(new Amplitude(Math.cos(0), 0),
        new Amplitude(Math.cos(-dx), 0),
        new Amplitude(Math.cos(dx), 0), dx).almostEquals(-1));

// Initial testing, need to flesh out more. Namely, these will fail
// once wavefunction normalizes things properly.
var wavefunction = new quantum.StateFunction([[[0,0], 1], [[0,1], 1], [[1,0], 1], [[1,1], 1]])
assert(wavefunction.get([0,0]) == 1)
assert(wavefunction.get([0,1]) == 1)
assert(wavefunction.get([1,0]) == 1)
assert(wavefunction.get([1,1]) == 1)
