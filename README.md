#Quantum.js
Javascript simulator for particles in a box.

#Getting Started
Currently, functionality is non-existent. Run
./run-tests.py to execute unit-tests. Eventually, you should run
some sort of standard setup script.

# How the simulator is supposed to work.
Still in implementation phase.

The simulator works by choosing an orthogonal basis of states, and
then computing the individual kinetic and potential energy contributions,
weighted by the coefficient of that state to the total Hamiltonian time step.

The basis that will be chosen is intented to be position based, however,
I'll have to figure out how to choose an appropriate basis function to
ensure each state has finite kinetic energy, and are all orthogonal to each
other.

# Wait... where's my Schroedinger evolution function?
Okay, let's talk about the idea here again.

In quantum mechanics, we have a wave function, and we need to evolve it over
time.

The schroedinger equation says:

\partial{Psi}{dt} = ih H\Psi

Where H is the Hamiltonian. The classic Schroedinger equation that we 
typically think of

\frac{hbar^2}{2 m}\partial2{Psi(x,t)}{dx^2} + V(x,t)\Psi(x,t) = ih \partial{Psi}{dt}

Works on the basis of all L^2 functions of position and time. Again, it's extremely
important to talk about what basis you're representing \Psi in. The actual kinetic
energy of a basis state that is "mostly" restricted to a given region will change
depending on the exact.

One problem with this approach is that our basis functions won't be actually complete.
If we assign a finite basis, then projecting an arbitrary wave function onto it will
"leak" some of it. Worse the actual amlitude of that leakage may not remain small over
time. This is one of the *major* nice aspects of the energy basis, we're guaranteed that
the total amplitude of ignored terms is bounded over time.
