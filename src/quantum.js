var amplitude = require('./amplitude');
var utils = require('./utils');
var combinatorics = require('./combinatorics');

// Var Constants
hbar = 1

var System = function (num_particles, box, potential) {
    var preProduct = []
    for(var particle = 0; particle < num_particles; particle++) {
        var possiblePositions = [];
        for(var particle_x = 0; particle_x < box.max_resolution; particle_x += 1) {
            possiblePositions.push(particle_x);
        }
        preProduct.push(possiblePositions)
    }
    this.states = combinatorics.cartesianProduct(preProduct);
    this.resolution = box.max_resolution;
    this.potential = potential
    this.geometry = box;
}

// A wave function is a state function that gives you
// amplitudes of other states (which we'll typically
// take as time invariant states (that is, eigenstates of
// the Hamiltonian). I recognize that we're looking at this
// oddly, but let's see where this goes. We're thinking of a
// wave function less like an object in hilbert space, but rather,
// this thing that gives you the amplitude of another state.
//
// In this perspective, we're thinking of wavefunctions not as superposition
// of states, but as objects that tell you the outcome of measurements (which
// are the actual states, because we know what it means to say the particle is
// in State X, but not necessarily what it means to be in a*State X + b*State Y).
// I suspect that looking at things this way might make explaining Heisenburg's
// Uncertainty Principle harder.
var StateFunction = function(states) {
    this.amplitudes = [];
    for (var i = 0; i < states.length; i++) {
        var state_amp = states[i];
        var state = state_amp[0];
        var amp = state_amp[1];
        this.amplitudes[this.computeIndex(state)] = amp;
    }
    // TODO: Normalize all wave amplitudes.
}

// This is slow, and probably wrong.
// However, it does give some suggestion as to what our
// "States" look like.
// TODO: Ensure that if two states are the same, they always
// have the same index. Until then, our states will need to
// be ordered arrays.
StateFunction.prototype.computeIndex = function(state) {
    return JSON.stringify(state);
}

StateFunction.prototype.get = function(state) {
    var index = this.computeIndex(state);

    if(index === undefined) {
        return 0;
    }

    return this.amplitudes[index];
}

StateFunction.prototype.set = function(state, amplitude) {
    var index = this.computeIndex(state);

    if(index === undefined) {
        return;
    }

    this.amplitudes[index] = amplitude;
}

var WaveFunction = StateFunction;

var secondDerivative = function(fx, fx_minus_h, fx_plus_h, dx)  {
    if (typeof(fx) === "number") {
        fx = new amplitude.Amplitude(fx, 0);
    }
    if (typeof(fx_minus_h) === "number") {
        fx_minus_h = new amplitude.Amplitude(fx_minus_h, 0);
    }
    if (typeof(fx_plus_h) === "number") {
        fx_plus_h = new amplitude.Amplitude(fx_plus_h, 0);
    }
    // [ f(x+h) - 2f(x) + f(x-h) ]/ dx^2
    return fx_minus_h.add(fx.multiply(-2)).add(fx_plus_h).multiply(1/(dx*dx))
}

var Hamiltonian = function (system) {
    // `StateFunction.apply(this, [system.states]); // I have no idea what this is supposed to do.
    this.system = system; // Grab potential and resolution.
}

// This function is intended to evaluate the value of the Hamiltonian
// at the current point in time, given, the wavefunction's current configuration.
Hamiltonian.prototype.update = function(wavefunction) {
    for(var state_id = 0; state_id < wavefunction.states.length; state_id++) {
        var state = wavefunction.interior_states[state_id];
        for(var particle_id = 0; particle_id < wavefunction.particles.length; particle_id++) {
            var particle = wavefunction.particles[particle_id];

            var this_state_amplitude = wavefunction.get(state);

            // Adjacent states for kinectic energy; 'prev' and 'next' are slight misnomers.
            // They refer to the state in the which have the current particle moved -dx and +dx
            // respectively. If these states are not in set of states, they are assumed to be boundary states
            // and thus will have amplitude of zero.
            // TODO: This seems to only make sense when our system is in one dimension. :(
            var prev_state = utils.ArrayUtils.addedIndex(state, particle_id, -1);
            var previous_state_amplitude = wavefunction.get(prev_state);
            var next_state = utils.ArrayUtils.addedIndex(state, particle_id, 1);
            var next_state_amplitude = wavefunction.states.get(next_state);

            // TODO: Correct solution for this.states.resolution. Currently, I'm cheating.
            // Compute Energy Amplitude Terms
            var kineticAmplitude = (-hbar/(particle.mass*2)) * 
                secondDerivative(this_state_amplitude, previous_state_amplitude, next_state_amplitude, 1/this.system.resolution);
            var potentialAmplitude = center_state_amplitude.multiply(this.system.potential(state)); // V(x)*Psi(x)

            // H = K + V
            this.set(state, kineticAmplitude.add(potentialAmplitude));
        }
    }
}

// Time Step evolution of the system
// Should probably be a method on System.
function schroedingerStep(wavefunction, system) {
    nextWaveFunction = new WaveFunction(state);
    hamiltonian.update(wavefunction);
    // Go over all interior states (boundary states never change, they're always zero)
    for(var i = 0; i < wavefunction.states.length; i++) {
        var state = states[i];
        var amplitude = wavefunction.getAmplitude(state);    
    var nextAmplitude = amplitude.add(I.multiply(-1/hbar).multiply(hamiltonian.get(state)));
        nextWaveFunction.set(state, nextAmplitude);
    }

    return nextWaveFunction
}

module.exports = {
    // The core objects here are the System
    // and the Hamiltonian.
    System: System,
    Hamiltonian: Hamiltonian,
    secondDerivative: secondDerivative, // Probably shouldn't be exported directly.
    StateFunction: StateFunction, // Is this really just an observable?
    schroedingerStep: schroedingerStep // Make this a method on System
};
