// depends: amplitude.js, combinatorics.js

var particles = 2;
var box = {
	"max_resolution" : 10,
	"min_x" : -3,
	"max_x" : 3
}

// Var Constants
hbar = 1

function init () {
	var states = {}
	states.states = [];
	states.indices = [];
	var preProduct = []
	for(var particle = 0; particle < particles; particle++) {
		var possiblePositions = [];
		for(var particle_x = 0; particle_x < box.max_resolution; particle_x += 1) {
			possiblePositions.push(particle_x);
		}
		preProduct.push(possiblePositions)
	}
	console.log(preProduct);
	return cartesianProduct(preProduct);
}

var states = init();

//
var StateFunction = function(states) {
	this.amplitudes = []
}

var StateFunction.prototype.get = function(state) {
	for(var i = 0)
}

var StateFunction.prototype.set = function(state, amplitude) {
	return amplitude;
}

var WaveFunction = StateFunction;

var secondDerivative = function(fx, fx_minus_h, fx_plus_h, dx)  {
	// f(x + h) - 2
	return fx_minus_h.add(fx.multiply(-2)).add(fx_plus_h).multiply(1/(dx*dx))
}

var Hamiltonian = function(wavefunction, potential) {
	StateFunction.apply(this, [wavefunction.states]);

	for(var state_id = 0; state_id < wavefunction.states.length; state_id++) {
		var state = wavefunction.interior_states[state_id];
		for(var particle_id = 0; particle_id < wavefunction.particles.length; particle_id++) {
			var particle = wavefunction.particles[particle_id];

			var this_state_amplitude = wavefunction.get(state);

			// Adjacent states for kinectic energy; 'prev' and 'next' are slight misnomers.
			// They refer to the state in the which have the current particle moved -dx and +dx
			// respectively. If these states are not in set of states, they are assumed to be boundary states
			// and thus will have amplitude of zero.
			var prev_state = state.slice(0, particle).concat([state[particle]-1])
			var previous_state_amplitude = wavefunction.get(prev_state);
			var next_state = state.slice(0, particle).concat([state[particle]+1])
			var next_state_amplitude = wavefunction.states.get(next_state);

			// TODO: Nice solution for this.states.resolution
			// Compute Energy Amplitude Terms
			var kineticAmplitude = (-hbar/(particle.mass*2)) * 
				secondDerivative(this_state_amplitude, previous_state_amplitude, next_state_amplitude, 1/this.states.resolution);
			var potentialAmplitude = center_state_amplitude.multiply(potential(state)); // V(x)*Psi(x)

			// H = K + V
			this.set(state, kineticAmplitude.add(potentialAmplitude));
		}
	}
}

function schroedingerStep(wavefunction, potential) {
	nextWaveFunction = new WaveFunction(state);
	var hamiltonian = new Hamiltonian(wavefunction, potential);
	// Go over all interior states (boundary states never change, they're always zero)
	for(var i = 0; i < wavefunction.states.length; i++) {
		var state = states[i];
		var amplitude = wavefunction.getAmplitude(state);
		var nextAmplitude = amplitude.add(I.multiply(-1/hbar).multiply(hamiltonian.get(state)));
		nextWaveFunction.set(state, nextAmplitude);
	}

	return nextWaveFunction
}

// [(0,0), (0,1), (1,0)]