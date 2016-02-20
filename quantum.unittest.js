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
