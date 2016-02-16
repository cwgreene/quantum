/* One Dimensional System */
var particles = 1;
var box = {
    "max_resolution" : 10,
    "min_x" : -3,
    "max_x" : 3   
}

var system = new System(2, box, {});
var hamiltonian = new Hamiltonian(system);

for(var state in system.states) {
}

var dx = .00001;

assert(secondDerivative(Math.cos(0), Math.cos(-dx),  Math.cos(dx), dx).almostEquals(-1));
assert(secondDerivative(new Amplitude(Math.cos(0), 0),
        new Amplitude(Math.cos(-dx), 0),
        new Amplitude(Math.cos(dx), 0), dx).almostEquals(-1));
