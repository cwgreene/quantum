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
    console.log(system.states[state])
}
